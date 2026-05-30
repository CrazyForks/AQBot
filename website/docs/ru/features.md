# Возможности

AQBot — локальный AI-десктоп workspace. Страница обновлена для v0.0.85 и отражает импорт провайдеров, импорт сторонних данных, MCP, HTML-рендеринг, резервные копии и шлюз.

## Чат и модели

- **Мультипровайдерный чат** — Подключайте OpenAI, Claude, Gemini, DeepSeek, Qwen и любые OpenAI-compatible endpoints с Base URL, API Path, headers и proxy rules.
- **Быстрое подключение провайдеров** — Ссылки aqbot:// и импорт CC Switch переносят профили провайдеров в AQBot после подтверждения пользователя.
- **Управление моделями** — Синхронизируйте remote model lists, группы, latency test, capabilities, context length, sampling defaults, reasoning profiles и extra_body для каждой модели.
- **Сценарии диалогов** — Streaming replies, thinking blocks, версии сообщений, ветки, статус генерации заголовка, сжатие длинных чатов и параллельные ответы нескольких моделей.

## AI Agent

- **Agent mode** — Модель может редактировать файлы, запускать команды и анализировать код в контролируемом рабочем процессе.
- **Контроль прав** — Выбирайте стандартную проверку, auto-accept edits или full-access mode при активной sandbox рабочего каталога.
- **Одобрения и стоимость** — Проверяйте tool calls в реальном времени, запоминайте разрешения и отслеживайте token/cost по каждой сессии.

## Рендеринг контента

- **Markdown и математика** — Рендеринг Markdown, подсветки кода, таблиц, task lists и LaTeX в потоковых диалогах.
- **Код, диаграммы и Artifact** — Monaco, Mermaid, D2 и Artifact panel для кода, Markdown notes, отчетов и preview.
- **HTML-фрагменты** — Безопасный preview HTML-фрагментов, с учетом последних исправлений streaming stability.

## Поиск и знания

- **Web search** — Tavily, Zhipu WebSearch, Bocha с цитируемыми источниками и генерацией search queries.
- **Локальная база знаний** — Индексируйте приватные документы через sqlite-vec, настраивайте retrieval/rerank и смотрите retrieval feedback.
- **Управление контекстом** — Прикрепляйте files, search results, knowledge snippets, memories и tool output к контексту диалога.

## Инструменты и расширения

- **MCP protocol** — Запускайте Model Context Protocol servers через stdio, SSE или StreamableHTTP.
- **Встроенные инструменты** — Используйте @aqbot/fetch и поиск файлов без установки отдельного сервера.
- **Лимит tool loop** — Настраивайте максимум MCP tool-call loops и лучше восстанавливайтесь после прерванных или зависших tool sessions.

## API-шлюз

- **Локальный gateway** — Публикуйте OpenAI Chat Completions, OpenAI Responses, Claude-native и Gemini-native endpoints из desktop app.
- **Доступ и наблюдаемость** — Управляйте gateway keys, SSL/TLS certificates, request logs и usage analytics локально.
- **Шаблоны клиентов** — Готовые templates для Claude Code, Codex CLI, OpenCode, Gemini CLI и custom clients.

## Импорт данных и backups

- **Сторонний импорт** — Импортируйте ChatGPT official exports, Cherry Studio backups и Kelivo backups с preview counts, warnings и duplicate handling.
- **Миграция провайдеров и файлов** — Импорт Cherry Studio/Kelivo может переносить linked providers, API keys и file attachments.
- **Backups** — Создавайте и восстанавливайте backups через local folders, WebDAV или S3-compatible storage.

## Desktop и безопасность

- **Локальное шифрование** — App state хранится в ~/.aqbot/, user files — в ~/Documents/aqbot/, API keys защищены AES-256 и локальным master key.
- **Desktop-интеграция** — Tray, always-on-top, global shortcuts, auto-start, proxy settings и automatic update checks.
- **11 языков интерфейса** — Переключение между Simplified Chinese, Traditional Chinese, English, Japanese, Korean, French, German, Spanish, Russian, Hindi и Arabic.
