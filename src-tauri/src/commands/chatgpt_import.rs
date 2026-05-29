use crate::AppState;
use aqbot_core::repo::chatgpt_import::{ChatGptImportResult, ChatGptImportSummary};
use std::path::PathBuf;
use tauri::State;

#[tauri::command]
pub async fn scan_chatgpt_import(
    state: State<'_, AppState>,
    path: String,
) -> Result<ChatGptImportSummary, String> {
    aqbot_core::repo::chatgpt_import::scan_chatgpt_import_from_path(
        &state.sea_db,
        &PathBuf::from(path),
    )
    .await
    .map_err(|e| e.to_string())
}

#[tauri::command]
pub async fn import_chatgpt_export(
    state: State<'_, AppState>,
    path: String,
) -> Result<ChatGptImportResult, String> {
    aqbot_core::repo::chatgpt_import::import_chatgpt_export_from_path(
        &state.sea_db,
        &PathBuf::from(path),
    )
    .await
    .map_err(|e| e.to_string())
}
