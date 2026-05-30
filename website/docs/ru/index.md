---
layout: home
title: "AQBot — open-source AI-десктоп клиент и gateway"
titleTemplate: false

head:
  - - meta
    - name: description
      content: "AQBot — бесплатный open-source AI desktop client с multi-model chat, Agent, MCP, импортом ChatGPT/Cherry Studio/Kelivo, local RAG, S3/WebDAV backup и встроенным AI gateway."

hero:
  name: AQBot
  text: "Ваш AI-десктоп workspace"
  tagline: "Мультимодельный чат, Agent, MCP-инструменты, API gateway, импорт данных, база знаний и backups в одном local-first клиенте"
  image:
    src: /logo.png
    alt: AQBot
  actions:
    - theme: brand
      text: "Начало работы"
      link: /ru/guide/getting-started
    - theme: alt
      text: "Скачать"
      link: /ru/download
    - theme: alt
      text: GitHub
      link: https://github.com/AQBot-Desktop/AQBot

features:
  - icon: robot
    title: "Мультимодельный чат"
    details: "OpenAI, Claude, Gemini, DeepSeek, Qwen и compatible APIs с key rotation, branches, compression и multi-model answers."
  - icon: api
    title: "Быстрое подключение"
    details: "aqbot:// links, CC Switch import, custom headers, proxy settings, OpenAI Responses и per-model extra_body."
  - icon: thunderbolt
    title: "AI Agent"
    details: "File edits, commands и code analysis с permission levels, working-directory sandbox, approval UI и cost tracking."
  - icon: edit
    title: "Рендеринг контента"
    details: "Markdown, LaTeX, Mermaid, D2, Monaco code blocks, HTML fragments и Artifact previews."
  - icon: search
    title: "Search & RAG"
    details: "Web search с citations, query generation, local sqlite-vec knowledge bases, rerank settings и retrieval feedback."
  - icon: cloud-server
    title: "API Gateway"
    details: "Локальные OpenAI-compatible, OpenAI Responses, Claude и Gemini endpoints для Claude Code, Codex, OpenCode и custom tools."
  - icon: book
    title: "Импорт данных"
    details: "ChatGPT official exports, Cherry Studio backups и Kelivo backups с duplicate handling и optional provider migration."
  - icon: lock
    title: "Backup и безопасность"
    details: "AES-256 local storage, dual-root data layout, local/WebDAV/S3 backups и restore workflows."
  - icon: desktop
    title: "Desktop experience"
    details: "11 languages, tray mode, always-on-top, global shortcuts, auto-start, proxy support и auto-update checks."
---
