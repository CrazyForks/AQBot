[简体中文](./README.md) | **繁體中文** | [English](./README-EN.md) | [日本語](./README-JA.md) | [한국어](./README-KO.md) | [Français](./README-FR.md) | [Deutsch](./README-DE.md) | [Español](./README-ES.md) | [Русский](./README-RU.md) | [हिन्दी](./README-HI.md) | [العربية](./README-AR.md)

[![AQBot](https://socialify.git.ci/AQBot-Desktop/AQBot/image?description=1&font=JetBrains+Mono&forks=1&issues=1&logo=https%3A%2F%2Fgithub.com%2FAQBot-Desktop%2FAQBot%2Fblob%2Fmain%2Fsrc%2Fassets%2Fimage%2Flogo.png%3Fraw%3Dtrue&name=1&owner=1&pattern=Floating+Cogs&pulls=1&stargazers=1&theme=Auto)](https://github.com/AQBot-Desktop/AQBot)


## 執行截圖

| 對話圖表渲染 | 服務商與模型 |
|:---:|:---:|
| ![](.github/images/s1-0412.png) | ![](.github/images/s2-0412.png) |

| 知識庫 | 記憶 |
|:---:|:---:|
| ![](.github/images/s3-0412.png) | ![](.github/images/s4-0412.png) |

| Agent-詢問 | API閘道一鍵接入 |
|:---:|:---:|
| ![](.github/images/s5-0412.png) | ![](.github/images/s6-0412.png) |

| 對話模型選擇 | 對話導航 |
|:---:|:---:|
| ![](.github/images/s7-0412.png) | ![](.github/images/s8-0412.png) |

| Agent-權限審批 | API閘道概覽 |
|:---:|:---:|
| ![](.github/images/s9-0412.png) | ![](.github/images/s10-0412.png) |

## 功能特性

AQBot 是本機優先的 AI 桌面工作台。本頁已依 v0.0.85 更新，涵蓋近期服務供應商匯入、第三方資料匯入、MCP、HTML 渲染、備份和閘道能力。

### 對話與模型

- **多服務供應商對話** — 連接 OpenAI、Claude、Gemini、DeepSeek、Qwen 以及任意 OpenAI 相容端點，支援自訂 Base URL、API Path、請求頭和代理規則。
- **服務供應商快速匯入** — 透過 aqbot:// 服務供應商連結和 CC Switch 設定匯入，在使用者確認後把服務供應商資料帶入 AQBot。
- **模型管理** — 同步遠端模型列表、管理分組、測試延遲，並設定能力標籤、上下文長度、採樣預設值、推理檔位和模型級 extra_body。
- **對話工作流** — 流式回覆、思考區塊、訊息多版本、對話分支、標題生成狀態、長對話壓縮和多模型並行回答。

### AI Agent

- **Agent 模式** — 讓模型在受控桌面工作流中讀取/編輯檔案、執行命令並分析程式碼。
- **權限控制** — 可選擇標準審核、自動接受編輯或完全存取模式，同時保留工作目錄沙箱檢查。
- **審批與成本面板** — 即時查看工具呼叫、記住允許決策，並追蹤每個 Agent 會話的 token 與成本。

### 內容渲染

- **Markdown 與數學公式** — 在流式對話中渲染 Markdown、程式碼高亮、表格、任務列表和 LaTeX 公式。
- **程式碼、圖表與 Artifact** — 內建 Monaco 程式碼區塊、Mermaid、D2 圖表和 Artifact 面板，用於程式碼、Markdown 筆記、報告和預覽。
- **HTML 片段渲染** — 安全預覽模型生成的 HTML 片段，並包含近期版本加入的流式渲染穩定性修復。

### 搜尋與知識

- **網路搜尋** — 接入 Tavily、智譜 WebSearch、Bocha 等搜尋服務，支援引用來源和搜尋查詢生成。
- **本機知識庫** — 用 sqlite-vec 索引私有文件，設定檢索/重排選項並查看檢索回饋。
- **上下文管理** — 把檔案、搜尋結果、知識片段、記憶和工具輸出附加到對話上下文。

### 工具與擴充

- **MCP 協定** — 執行 stdio、SSE 或 StreamableHTTP 傳輸的 Model Context Protocol 伺服器。
- **內建工具** — 直接使用 @aqbot/fetch、檔案搜尋等內建 MCP 工具，無需額外安裝獨立伺服器。
- **工具循環上限** — 可設定 MCP 工具呼叫最大循環次數，並更好地恢復中斷或卡住的工具會話。

### API 閘道

- **本機閘道** — 從桌面應用暴露 OpenAI Chat Completions、OpenAI Responses、Claude 原生和 Gemini 原生介面。
- **存取與觀測** — 本機管理閘道金鑰、SSL/TLS 憑證、請求日誌和用量統計。
- **客戶端範本** — 提供 Claude Code、Codex CLI、OpenCode、Gemini CLI 和自訂客戶端的設定範本。

### 資料匯入與備份

- **第三方匯入** — 匯入 ChatGPT 官方匯出、Cherry Studio 備份和 Kelivo 備份，帶預覽統計、警告和重複處理。
- **服務供應商與檔案遷移** — Cherry Studio/Kelivo 匯入可選擇遷移關聯服務供應商、API Key 和檔案附件。
- **備份** — 透過本機目錄、WebDAV 或 S3 相容儲存進行備份與還原。

### 桌面體驗與安全

- **本機加密** — 應用狀態位於 ~/.aqbot/，使用者檔案位於 ~/Documents/aqbot/，API Key 使用 AES-256 和本機主金鑰保護。
- **桌面整合** — 支援系統匣、視窗置頂、全域快捷鍵、開機自啟、代理設定和自動更新檢查。
- **11 種界面語言** — 可在簡體中文、繁體中文、英語、日語、韓語、法語、德語、西班牙語、俄語、印地語和阿拉伯語之間切換。

## 平台支援

| 平台 | 架構 |
|------|------|
| macOS | Apple Silicon (arm64), Intel (x86_64) |
| Windows 10/11 | x86_64, arm64 |
| Linux | x86_64 (AppImage/deb/rpm), arm64 (AppImage/deb/rpm) |

## 快速開始

前往 [Releases](https://github.com/AQBot-Desktop/AQBot/releases) 頁面下載適合您平台的安裝包。

## 常見問題

### macOS 提示「已損毀」或「無法驗證開發者」

由於應用程式未經 Apple 簽名，macOS 可能會彈出以下提示之一：

- 「AQBot」已損毀，無法開啟
- 無法開啟「AQBot」，因為無法驗證開發者

**解決步驟：**

**1. 允許「任何來源」的應用程式執行**

```bash
sudo spctl --master-disable
```

執行後前往「系統設定 → 隱私權與安全性 → 安全性」，確認已勾選「任何來源」。

**2. 移除應用程式的安全隔離屬性**

```bash
sudo xattr -dr com.apple.quarantine /Applications/AQBot.app
```

> 如果不確定路徑，可將應用程式圖示拖曳到 `sudo xattr -dr com.apple.quarantine ` 後面。

**3. macOS Ventura 及以上版本的額外步驟**

完成上述步驟後，首次開啟時仍可能被攔截。前往 **「系統設定 → 隱私權與安全性」**，在安全性區域點擊 **「仍要開啟」** 即可，後續無需重複操作。

## 社群支援
- [LinuxDO](https://linux.do)

## 授權條款

本專案採用 [AGPL-3.0](LICENSE) 授權條款。
