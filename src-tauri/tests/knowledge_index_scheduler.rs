use aqbot_lib::knowledge_index_scheduler::{
    normalize_index_concurrency, normalize_index_interval_ms, KnowledgeIndexScheduleOptions,
    KnowledgeIndexScheduler,
};
use std::sync::{
    atomic::{AtomicUsize, Ordering},
    Arc,
};
use std::time::{Duration, Instant};
use tokio::sync::{Barrier, Mutex};

#[test]
fn normalizes_index_schedule_options() {
    assert_eq!(normalize_index_concurrency(None), 1);
    assert_eq!(normalize_index_concurrency(Some(0)), 1);
    assert_eq!(normalize_index_concurrency(Some(5)), 5);
    assert_eq!(normalize_index_concurrency(Some(50)), 10);

    assert_eq!(normalize_index_interval_ms(None), 0);
    assert_eq!(normalize_index_interval_ms(Some(-100)), 0);
    assert_eq!(normalize_index_interval_ms(Some(2500)), 2500);
}

#[tokio::test(flavor = "multi_thread", worker_threads = 4)]
async fn same_base_honors_concurrency_limit() {
    let scheduler = Arc::new(KnowledgeIndexScheduler::default());
    let running = Arc::new(AtomicUsize::new(0));
    let max_running = Arc::new(AtomicUsize::new(0));
    let mut handles = Vec::new();

    for _ in 0..4 {
        let scheduler = scheduler.clone();
        let running = running.clone();
        let max_running = max_running.clone();
        handles.push(tokio::spawn(async move {
            scheduler
                .run(
                    "kb-1",
                    KnowledgeIndexScheduleOptions {
                        index_concurrency: Some(1),
                        index_interval_ms: Some(0),
                    },
                    || async {
                        let current = running.fetch_add(1, Ordering::SeqCst) + 1;
                        max_running.fetch_max(current, Ordering::SeqCst);
                        tokio::time::sleep(Duration::from_millis(20)).await;
                        running.fetch_sub(1, Ordering::SeqCst);
                    },
                )
                .await;
        }));
    }

    for handle in handles {
        handle.await.expect("scheduled task should finish");
    }

    assert_eq!(max_running.load(Ordering::SeqCst), 1);
}

#[tokio::test(flavor = "multi_thread", worker_threads = 2)]
async fn different_bases_do_not_block_each_other() {
    let scheduler = Arc::new(KnowledgeIndexScheduler::default());
    let barrier = Arc::new(Barrier::new(2));

    let first = {
        let scheduler = scheduler.clone();
        let barrier = barrier.clone();
        tokio::spawn(async move {
            scheduler
                .run(
                    "kb-a",
                    KnowledgeIndexScheduleOptions {
                        index_concurrency: Some(1),
                        index_interval_ms: Some(0),
                    },
                    || async {
                        barrier.wait().await;
                    },
                )
                .await;
        })
    };

    let second = {
        let scheduler = scheduler.clone();
        let barrier = barrier.clone();
        tokio::spawn(async move {
            scheduler
                .run(
                    "kb-b",
                    KnowledgeIndexScheduleOptions {
                        index_concurrency: Some(1),
                        index_interval_ms: Some(0),
                    },
                    || async {
                        barrier.wait().await;
                    },
                )
                .await;
        })
    };

    tokio::time::timeout(Duration::from_millis(200), async {
        first.await.expect("first task should finish");
        second.await.expect("second task should finish");
    })
    .await
    .expect("different knowledge bases should run concurrently");
}

#[tokio::test(flavor = "multi_thread", worker_threads = 4)]
async fn same_base_respects_start_interval() {
    let scheduler = Arc::new(KnowledgeIndexScheduler::default());
    let starts = Arc::new(Mutex::new(Vec::new()));
    let mut handles = Vec::new();

    for _ in 0..3 {
        let scheduler = scheduler.clone();
        let starts = starts.clone();
        handles.push(tokio::spawn(async move {
            scheduler
                .run(
                    "kb-1",
                    KnowledgeIndexScheduleOptions {
                        index_concurrency: Some(3),
                        index_interval_ms: Some(40),
                    },
                    || async {
                        starts.lock().await.push(Instant::now());
                    },
                )
                .await;
        }));
    }

    for handle in handles {
        handle.await.expect("scheduled task should finish");
    }

    let starts = starts.lock().await;
    assert_eq!(starts.len(), 3);
    assert!(starts[2].duration_since(starts[0]) >= Duration::from_millis(70));
}
