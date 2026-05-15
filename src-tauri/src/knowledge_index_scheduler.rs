use std::{
    collections::HashMap,
    future::Future,
    sync::{Arc, Mutex, MutexGuard},
    time::{Duration, Instant},
};
use tokio::sync::Notify;

const DEFAULT_INDEX_CONCURRENCY: usize = 1;
const MAX_INDEX_CONCURRENCY: usize = 10;

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct KnowledgeIndexScheduleOptions {
    pub index_concurrency: Option<i32>,
    pub index_interval_ms: Option<i32>,
}

pub fn normalize_index_concurrency(value: Option<i32>) -> usize {
    value.unwrap_or(DEFAULT_INDEX_CONCURRENCY as i32).clamp(
        DEFAULT_INDEX_CONCURRENCY as i32,
        MAX_INDEX_CONCURRENCY as i32,
    ) as usize
}

pub fn normalize_index_interval_ms(value: Option<i32>) -> u64 {
    value.unwrap_or(0).max(0) as u64
}

#[derive(Default)]
pub struct KnowledgeIndexScheduler {
    bases: Mutex<HashMap<String, Arc<BaseIndexState>>>,
}

impl KnowledgeIndexScheduler {
    pub async fn run<F, Fut, T>(
        &self,
        base_id: &str,
        options: KnowledgeIndexScheduleOptions,
        task: F,
    ) -> T
    where
        F: FnOnce() -> Fut,
        Fut: Future<Output = T>,
    {
        let state = self.state_for(base_id);
        let _permit = state.acquire(options).await;
        task().await
    }

    fn state_for(&self, base_id: &str) -> Arc<BaseIndexState> {
        let mut bases = lock_or_recover(&self.bases);
        bases
            .entry(base_id.to_string())
            .or_insert_with(|| Arc::new(BaseIndexState::default()))
            .clone()
    }
}

#[derive(Default)]
struct BaseIndexState {
    inner: Mutex<BaseIndexInner>,
    notify: Notify,
}

#[derive(Default)]
struct BaseIndexInner {
    running: usize,
    next_start_at: Option<Instant>,
}

impl BaseIndexState {
    async fn acquire(self: Arc<Self>, options: KnowledgeIndexScheduleOptions) -> IndexTaskPermit {
        let concurrency = normalize_index_concurrency(options.index_concurrency);
        let interval =
            Duration::from_millis(normalize_index_interval_ms(options.index_interval_ms));

        loop {
            let wait = {
                let mut inner = lock_or_recover(&self.inner);
                if inner.running < concurrency {
                    let now = Instant::now();
                    if let Some(next_start_at) = inner.next_start_at {
                        if next_start_at > now {
                            Some(next_start_at.duration_since(now))
                        } else {
                            inner.running += 1;
                            inner.next_start_at = Some(now + interval);
                            return IndexTaskPermit {
                                state: self.clone(),
                            };
                        }
                    } else {
                        inner.running += 1;
                        inner.next_start_at = Some(now + interval);
                        return IndexTaskPermit {
                            state: self.clone(),
                        };
                    }
                } else {
                    None
                }
            };

            if let Some(wait) = wait {
                tokio::time::sleep(wait).await;
            } else {
                self.notify.notified().await;
            }
        }
    }
}

struct IndexTaskPermit {
    state: Arc<BaseIndexState>,
}

impl Drop for IndexTaskPermit {
    fn drop(&mut self) {
        let mut inner = lock_or_recover(&self.state.inner);
        inner.running = inner.running.saturating_sub(1);
        drop(inner);
        self.state.notify.notify_waiters();
    }
}

fn lock_or_recover<T>(mutex: &Mutex<T>) -> MutexGuard<'_, T> {
    mutex
        .lock()
        .unwrap_or_else(|poisoned| poisoned.into_inner())
}
