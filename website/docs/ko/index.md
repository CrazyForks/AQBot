---
layout: home
title: "AQBot — 오픈소스 AI 데스크톱 클라이언트 & 게이트웨이"
titleTemplate: false

head:
  - - meta
    - name: description
      content: "AQBot은 멀티 모델 채팅, Agent, MCP, ChatGPT/Cherry Studio/Kelivo 가져오기, 로컬 RAG, S3/WebDAV 백업, 내장 AI 게이트웨이를 지원하는 무료 오픈소스 AI 데스크톱 클라이언트입니다."

hero:
  name: AQBot
  text: "AI 데스크톱 워크스페이스"
  tagline: "멀티 모델 채팅, Agent, MCP 도구, API 게이트웨이, 가져오기, 지식베이스, 백업을 하나의 로컬 우선 클라이언트에 통합"
  image:
    src: /logo.png
    alt: AQBot
  actions:
    - theme: brand
      text: "빠른 시작"
      link: /ko/guide/getting-started
    - theme: alt
      text: "다운로드"
      link: /ko/download
    - theme: alt
      text: GitHub
      link: https://github.com/AQBot-Desktop/AQBot

features:
  - icon: robot
    title: "채팅 및 모델"
    details: "OpenAI, Claude, Gemini, DeepSeek, Qwen 및 OpenAI 호환 엔드포인트를 Base URL, API Path, headers, proxy rules와 함께 연결합니다."
  - icon: api
    title: "제공업체 설정"
    details: "aqbot:// provider links 및 CC Switch import로 사용자 확인 후 provider profiles를 AQBot으로 가져옵니다."
  - icon: thunderbolt
    title: "AI Agent"
    details: "모델이 controlled workflow에서 files edit, commands run, code analysis를 수행합니다."
  - icon: edit
    title: "콘텐츠 렌더링"
    details: "Markdown, code highlighting, tables, task lists, LaTeX를 streaming conversation에서 렌더링합니다."
  - icon: search
    title: "검색 및 지식"
    details: "Tavily, Zhipu WebSearch, Bocha 등과 cited sources, generated queries를 지원합니다."
  - icon: cloud-server
    title: "API 게이트웨이"
    details: "OpenAI Chat Completions, OpenAI Responses, Claude-native, Gemini-native endpoints를 desktop app에서 노출합니다."
  - icon: book
    title: "데이터 가져오기 및 백업"
    details: "ChatGPT official exports, Cherry Studio backups, Kelivo backups를 preview counts, warnings, duplicate handling과 함께 가져옵니다."
  - icon: lock
    title: "데스크톱 및 보안"
    details: "app state는 ~/.aqbot/, user files는 ~/Documents/aqbot/에 저장되며 API keys는 AES-256 local master key로 보호됩니다."
  - icon: desktop
    title: "데스크톱 및 보안"
    details: "app state는 ~/.aqbot/, user files는 ~/Documents/aqbot/에 저장되며 API keys는 AES-256 local master key로 보호됩니다."
---
