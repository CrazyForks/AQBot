[简体中文](./README.md) | [繁體中文](./README-ZH-TW.md) | [English](./README-EN.md) | [日本語](./README-JA.md) | [한국어](./README-KO.md) | [Français](./README-FR.md) | [Deutsch](./README-DE.md) | [Español](./README-ES.md) | **Русский** | [हिन्दी](./README-HI.md) | [العربية](./README-AR.md)

[![AQBot](https://socialify.git.ci/AQBot-Desktop/AQBot/image?description=1&font=JetBrains+Mono&forks=1&issues=1&logo=https%3A%2F%2Fgithub.com%2FAQBot-Desktop%2FAQBot%2Fblob%2Fmain%2Fsrc%2Fassets%2Fimage%2Flogo.png%3Fraw%3Dtrue&name=1&owner=1&pattern=Floating+Cogs&pulls=1&stargazers=1&theme=Auto)](https://github.com/AQBot-Desktop/AQBot)


## Скриншоты

| Рендеринг диаграмм чата | Провайдеры и модели |
|:---:|:---:|
| ![](.github/images/s1-0412.png) | ![](.github/images/s2-0412.png) |

| База знаний | Память |
|:---:|:---:|
| ![](.github/images/s3-0412.png) | ![](.github/images/s4-0412.png) |

| Agent — Запрос | API-шлюз в один клик |
|:---:|:---:|
| ![](.github/images/s5-0412.png) | ![](.github/images/s6-0412.png) |

| Выбор модели чата | Навигация по чатам |
|:---:|:---:|
| ![](.github/images/s7-0412.png) | ![](.github/images/s8-0412.png) |

| Agent — Утверждение разрешений | Обзор API-шлюза |
|:---:|:---:|
| ![](.github/images/s9-0412.png) | ![](.github/images/s10-0412.png) |

## Возможности

AQBot — локальный AI-десктоп workspace. Страница обновлена для v0.0.85 и отражает импорт провайдеров, импорт сторонних данных, MCP, HTML-рендеринг, резервные копии и шлюз.

### Чат и модели

- **Мультипровайдерный чат** — Подключайте OpenAI, Claude, Gemini, DeepSeek, Qwen и любые OpenAI-compatible endpoints с Base URL, API Path, headers и proxy rules.
- **Быстрое подключение провайдеров** — Ссылки aqbot:// и импорт CC Switch переносят профили провайдеров в AQBot после подтверждения пользователя.
- **Управление моделями** — Синхронизируйте remote model lists, группы, latency test, capabilities, context length, sampling defaults, reasoning profiles и extra_body для каждой модели.
- **Сценарии диалогов** — Streaming replies, thinking blocks, версии сообщений, ветки, статус генерации заголовка, сжатие длинных чатов и параллельные ответы нескольких моделей.

### AI Agent

- **Agent mode** — Модель может редактировать файлы, запускать команды и анализировать код в контролируемом рабочем процессе.
- **Контроль прав** — Выбирайте стандартную проверку, auto-accept edits или full-access mode при активной sandbox рабочего каталога.
- **Одобрения и стоимость** — Проверяйте tool calls в реальном времени, запоминайте разрешения и отслеживайте token/cost по каждой сессии.

### Рендеринг контента

- **Markdown и математика** — Рендеринг Markdown, подсветки кода, таблиц, task lists и LaTeX в потоковых диалогах.
- **Код, диаграммы и Artifact** — Monaco, Mermaid, D2 и Artifact panel для кода, Markdown notes, отчетов и preview.
- **HTML-фрагменты** — Безопасный preview HTML-фрагментов, с учетом последних исправлений streaming stability.

### Поиск и знания

- **Web search** — Tavily, Zhipu WebSearch, Bocha с цитируемыми источниками и генерацией search queries.
- **Локальная база знаний** — Индексируйте приватные документы через sqlite-vec, настраивайте retrieval/rerank и смотрите retrieval feedback.
- **Управление контекстом** — Прикрепляйте files, search results, knowledge snippets, memories и tool output к контексту диалога.

### Инструменты и расширения

- **MCP protocol** — Запускайте Model Context Protocol servers через stdio, SSE или StreamableHTTP.
- **Встроенные инструменты** — Используйте @aqbot/fetch и поиск файлов без установки отдельного сервера.
- **Лимит tool loop** — Настраивайте максимум MCP tool-call loops и лучше восстанавливайтесь после прерванных или зависших tool sessions.

### API-шлюз

- **Локальный gateway** — Публикуйте OpenAI Chat Completions, OpenAI Responses, Claude-native и Gemini-native endpoints из desktop app.
- **Доступ и наблюдаемость** — Управляйте gateway keys, SSL/TLS certificates, request logs и usage analytics локально.
- **Шаблоны клиентов** — Готовые templates для Claude Code, Codex CLI, OpenCode, Gemini CLI и custom clients.

### Импорт данных и backups

- **Сторонний импорт** — Импортируйте ChatGPT official exports, Cherry Studio backups и Kelivo backups с preview counts, warnings и duplicate handling.
- **Миграция провайдеров и файлов** — Импорт Cherry Studio/Kelivo может переносить linked providers, API keys и file attachments.
- **Backups** — Создавайте и восстанавливайте backups через local folders, WebDAV или S3-compatible storage.

### Desktop и безопасность

- **Локальное шифрование** — App state хранится в ~/.aqbot/, user files — в ~/Documents/aqbot/, API keys защищены AES-256 и локальным master key.
- **Desktop-интеграция** — Tray, always-on-top, global shortcuts, auto-start, proxy settings и automatic update checks.
- **11 языков интерфейса** — Переключение между Simplified Chinese, Traditional Chinese, English, Japanese, Korean, French, German, Spanish, Russian, Hindi и Arabic.

## Поддерживаемые платформы

| Платформа | Архитектура |
|-----------|------------|
| macOS | Apple Silicon (arm64), Intel (x86_64) |
| Windows 10/11 | x86_64, arm64 |
| Linux | x86_64 (AppImage/deb/rpm), arm64 (AppImage/deb/rpm) |

## Начало работы

Перейдите на страницу [Releases](https://github.com/AQBot-Desktop/AQBot/releases) и загрузите установщик для вашей платформы.

## Часто задаваемые вопросы

### macOS: «Приложение повреждено» или «Не удаётся проверить разработчика»

Поскольку приложение не подписано Apple, macOS может показать одно из следующих сообщений:

- «AQBot» повреждён и не может быть открыт
- «AQBot» не может быть открыт, поскольку Apple не может проверить его на наличие вредоносного программного обеспечения

**Шаги для решения:**

**1. Разрешить приложения из «Любого источника»**

```bash
sudo spctl --master-disable
```

Затем перейдите в **Системные настройки → Конфиденциальность и безопасность → Безопасность** и выберите **Любой источник**.

**2. Удалить атрибут карантина**

```bash
sudo xattr -dr com.apple.quarantine /Applications/AQBot.app
```

> Совет: Вы можете перетащить значок приложения в терминал после ввода `sudo xattr -dr com.apple.quarantine `.

**3. Дополнительный шаг для macOS Ventura и более поздних версий**

После выполнения вышеуказанных шагов первый запуск всё ещё может быть заблокирован. Перейдите в **Системные настройки → Конфиденциальность и безопасность** и нажмите **Всё равно открыть** в разделе «Безопасность». Это нужно сделать только один раз.

## Сообщество
- [LinuxDO](https://linux.do)

## Лицензия

Этот проект лицензирован по лицензии [AGPL-3.0](LICENSE).
