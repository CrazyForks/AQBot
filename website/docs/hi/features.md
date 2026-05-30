# विशेषताएँ

AQBot एक local-first AI desktop workspace है। यह पेज v0.0.85 के लिए provider import, third-party data import, MCP, HTML rendering, backup और gateway क्षमताओं के साथ अपडेट किया गया है।

## चैट और मॉडल

- **Multi-provider chat** — OpenAI, Claude, Gemini, DeepSeek, Qwen और OpenAI-compatible endpoints को Base URL, API Path, headers और proxy rules के साथ जोड़ें।
- **Provider onboarding** — aqbot:// provider links और CC Switch import से user confirmation के बाद provider profiles AQBot में लाएं।
- **Model management** — Remote model lists sync करें, groups व्यवस्थित करें, latency test करें और capabilities, context length, sampling defaults, reasoning profiles तथा per-model extra_body सेट करें।
- **Conversation workflows** — Streaming replies, thinking blocks, message versions, branches, title-generation status, long chat compression और multi-model comparison।

## AI Agent

- **Agent mode** — Model controlled desktop workflow में files edit, commands run और code analysis कर सकता है।
- **Permission control** — Standard review, auto-accept edits या full-access mode चुनें, working-directory sandbox checks active रहते हैं।
- **Approval और cost UI** — Tool calls real time में review करें, allow decisions याद रखें और हर session का token/cost track करें।

## सामग्री रेंडरिंग

- **Markdown और math** — Streaming conversations में Markdown, code highlighting, tables, task lists और LaTeX formulas render करें।
- **Code, diagrams और Artifact** — Monaco code blocks, Mermaid, D2 और Artifact panel से code, Markdown notes, reports और previews देखें।
- **HTML fragments** — Generated HTML fragments सुरक्षित preview करें, हाल के streaming stability fixes के साथ।

## खोज और ज्ञान

- **Web search** — Tavily, Zhipu WebSearch, Bocha आदि cited sources और generated search queries के साथ।
- **Local knowledge base** — sqlite-vec से private documents index करें, retrieval/rerank options tune करें और retrieval feedback देखें।
- **Context management** — Files, search results, knowledge snippets, memories और tool output को conversation context में जोड़ें।

## टूल और एक्सटेंशन

- **MCP protocol** — stdio, SSE या StreamableHTTP transport वाले Model Context Protocol servers चलाएं।
- **Built-in tools** — @aqbot/fetch और file search जैसे built-in MCP tools बिना अलग server के उपयोग करें।
- **Tool loop limit** — MCP tool-call loop count सेट करें और interrupted/stuck tool sessions से बेहतर recover करें।

## API gateway

- **Local gateway** — Desktop app से OpenAI Chat Completions, OpenAI Responses, Claude-native और Gemini-native endpoints expose करें।
- **Access और observability** — Gateway keys, SSL/TLS certificates, request logs और usage analytics local रूप से manage करें।
- **Client templates** — Claude Code, Codex CLI, OpenCode, Gemini CLI और custom clients के ready templates।

## Data import और backup

- **Third-party imports** — ChatGPT official exports, Cherry Studio backups और Kelivo backups preview counts, warnings और duplicate handling के साथ import करें।
- **Provider और file migration** — Cherry Studio/Kelivo import linked providers, API keys और file attachments optionally migrate कर सकता है।
- **Backups** — Local folders, WebDAV या S3-compatible storage से backup और restore करें।

## Desktop और security

- **Local encryption** — App state ~/.aqbot/ में, user files ~/Documents/aqbot/ में, API keys AES-256 और local master key से protected।
- **Desktop integration** — Tray, always-on-top, global shortcuts, auto-start, proxy settings और automatic update checks।
- **11 interface languages** — Simplified Chinese, Traditional Chinese, English, Japanese, Korean, French, German, Spanish, Russian, Hindi और Arabic में switch करें।
