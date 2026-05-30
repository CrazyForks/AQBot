# Features

AQBot is a local-first AI desktop workspace. This page is updated for v0.0.85 and covers the recent provider import, third-party data import, MCP, HTML rendering, backup and gateway work.

## Chat & Models

- **Multi-provider chat** — Connect OpenAI, Claude, Gemini, DeepSeek, Qwen and any OpenAI-compatible endpoint with custom Base URL, API Path, headers and proxy rules.
- **Provider onboarding** — Use aqbot:// provider links and CC Switch import to bring provider profiles into AQBot after user confirmation.
- **Model management** — Sync remote model lists, organize groups, test latency and configure capabilities, context length, sampling defaults, reasoning profiles and per-model extra_body fields.
- **Conversation workflows** — Stream replies with thinking blocks, compare message versions, branch conversations, show title-generation status, compress long chats and ask multiple models in parallel.

## AI Agent

- **Agent mode** — Let the model read and edit files, run commands and analyze code inside a controlled desktop workflow.
- **Permission control** — Choose standard review, auto-accept edits or full-access mode while keeping working-directory sandbox checks active.
- **Approval and cost UI** — Review tool calls in real time, remember allow decisions and track token/cost usage for each agent session.

## Content Rendering

- **Markdown and math** — Render Markdown, code highlighting, tables, task lists and LaTeX formulas in streaming conversations.
- **Code, diagrams and artifacts** — Use Monaco code blocks, Mermaid, D2 diagrams and an Artifact panel for code, Markdown notes, reports and previews.
- **HTML fragment rendering** — Preview generated HTML fragments safely, including the streaming fixes added in the recent releases.

## Search & Knowledge

- **Web search** — Use Tavily, Zhipu WebSearch, Bocha and other search providers with cited sources and generated search queries.
- **Local knowledge bases** — Index private documents with sqlite-vec, tune retrieval/rerank options and inspect retrieval feedback.
- **Context management** — Attach files, search results, knowledge snippets, memories and tool output to the conversation context.

## Tools & Extensions

- **MCP protocol** — Run Model Context Protocol servers over stdio, SSE or StreamableHTTP.
- **Built-in tools** — Use built-in MCP tools such as @aqbot/fetch and file search without installing a separate server.
- **Tool loop limit** — Configure the maximum MCP tool-call loop count and recover more cleanly from interrupted or stuck tool sessions.

## API Gateway

- **Local gateway** — Expose OpenAI Chat Completions, OpenAI Responses, Claude-native and Gemini-native endpoints from the desktop app.
- **Access and observability** — Manage gateway keys, SSL/TLS certificates, request logs and usage analytics locally.
- **Client templates** — Use ready-made templates for Claude Code, Codex CLI, OpenCode, Gemini CLI and custom clients.

## Data Import & Backup

- **Third-party imports** — Import ChatGPT official exports, Cherry Studio backups and Kelivo backups with preview counts, warnings and duplicate handling.
- **Provider and file migration** — Cherry Studio and Kelivo import can optionally migrate linked providers, API keys and file attachments.
- **Backups** — Back up and restore local data through local folders, WebDAV or S3-compatible storage.

## Desktop & Security

- **Local encryption** — Store app state under ~/.aqbot/ and user files under ~/Documents/aqbot/, with API keys protected by AES-256 and a local master key.
- **Desktop integration** — Use tray mode, always-on-top, global shortcuts, auto-start, proxy settings and automatic update checks.
- **11 interface languages** — Switch between Simplified Chinese, Traditional Chinese, English, Japanese, Korean, French, German, Spanish, Russian, Hindi and Arabic.
