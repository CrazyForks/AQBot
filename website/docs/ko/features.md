# 기능 목록

AQBot은 로컬 우선 AI 데스크톱 워크스페이스입니다. 이 페이지는 v0.0.85 기준으로 provider import, third-party data import, MCP, HTML rendering, backup, gateway 기능을 반영합니다.

## 채팅 및 모델

- **멀티 제공업체 채팅** — OpenAI, Claude, Gemini, DeepSeek, Qwen 및 OpenAI 호환 엔드포인트를 Base URL, API Path, headers, proxy rules와 함께 연결합니다.
- **제공업체 온보딩** — aqbot:// provider links 및 CC Switch import로 사용자 확인 후 provider profiles를 AQBot으로 가져옵니다.
- **모델 관리** — remote model sync, groups, latency test, capabilities, context length, sampling defaults, reasoning profiles, per-model extra_body를 설정합니다.
- **대화 워크플로** — streaming replies, thinking blocks, message versions, branches, title-generation status, compression, multi-model comparison을 지원합니다.

## AI Agent

- **Agent mode** — 모델이 controlled workflow에서 files edit, commands run, code analysis를 수행합니다.
- **권한 제어** — standard review, auto-accept edits, full-access mode를 선택하고 working-directory sandbox checks를 유지합니다.
- **승인 및 비용 UI** — tool calls를 실시간 검토하고 allow decisions를 기억하며 session token/cost를 추적합니다.

## 콘텐츠 렌더링

- **Markdown 및 수식** — Markdown, code highlighting, tables, task lists, LaTeX를 streaming conversation에서 렌더링합니다.
- **코드, 다이어그램, Artifact** — Monaco, Mermaid, D2, Artifact panel로 code, Markdown notes, reports, previews를 다룹니다.
- **HTML fragment rendering** — generated HTML fragments를 안전하게 preview하고 최근 streaming stability fixes를 반영합니다.

## 검색 및 지식

- **웹 검색** — Tavily, Zhipu WebSearch, Bocha 등과 cited sources, generated queries를 지원합니다.
- **로컬 지식베이스** — sqlite-vec로 private documents를 index하고 retrieval/rerank options 및 feedback을 확인합니다.
- **컨텍스트 관리** — files, search results, knowledge snippets, memories, tool output을 conversation context에 첨부합니다.

## 도구 및 확장

- **MCP protocol** — stdio, SSE, StreamableHTTP transport의 Model Context Protocol servers를 실행합니다.
- **Built-in tools** — @aqbot/fetch 및 file search 같은 built-in MCP tools를 별도 server 없이 사용합니다.
- **Tool loop limit** — MCP tool-call loop count를 설정하고 interrupted/stuck tool sessions에서 더 안정적으로 복구합니다.

## API 게이트웨이

- **Local gateway** — OpenAI Chat Completions, OpenAI Responses, Claude-native, Gemini-native endpoints를 desktop app에서 노출합니다.
- **Access and observability** — gateway keys, SSL/TLS certificates, request logs, usage analytics를 로컬에서 관리합니다.
- **Client templates** — Claude Code, Codex CLI, OpenCode, Gemini CLI, custom clients templates를 제공합니다.

## 데이터 가져오기 및 백업

- **Third-party imports** — ChatGPT official exports, Cherry Studio backups, Kelivo backups를 preview counts, warnings, duplicate handling과 함께 가져옵니다.
- **Provider and file migration** — Cherry Studio/Kelivo import에서 linked providers, API keys, file attachments를 선택적으로 migration합니다.
- **Backups** — local folders, WebDAV, S3-compatible storage로 backup/restore를 수행합니다.

## 데스크톱 및 보안

- **Local encryption** — app state는 ~/.aqbot/, user files는 ~/Documents/aqbot/에 저장되며 API keys는 AES-256 local master key로 보호됩니다.
- **Desktop integration** — tray, always-on-top, global shortcuts, auto-start, proxy settings, automatic update checks를 지원합니다.
- **11 interface languages** — Simplified/Traditional Chinese, English, Japanese, Korean, French, German, Spanish, Russian, Hindi, Arabic을 전환할 수 있습니다.
