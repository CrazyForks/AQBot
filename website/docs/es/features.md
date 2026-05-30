# Características

AQBot es un espacio de trabajo de IA de escritorio local-first. Esta página está actualizada para v0.0.85 e incluye importación de proveedores, importación de datos de terceros, MCP, renderizado HTML, copias de seguridad y pasarela.

## Chat y modelos

- **Chat multi-proveedor** — Conecta OpenAI, Claude, Gemini, DeepSeek, Qwen y endpoints compatibles con OpenAI con Base URL, API Path, headers y proxy.
- **Alta de proveedores** — Usa enlaces aqbot:// e importación CC Switch para traer perfiles tras confirmación del usuario.
- **Gestión de modelos** — Sincroniza modelos, grupos, latencia, capacidades, contexto, sampling, perfiles de razonamiento y extra_body por modelo.
- **Flujos de conversación** — Streaming, bloques de pensamiento, versiones, ramas, estado de título, compresión y comparación multi-modelo.

## AI Agent

- **Modo Agent** — El modelo puede editar archivos, ejecutar comandos y analizar código en un flujo controlado.
- **Permisos** — Revisión estándar, aceptar ediciones automáticamente o acceso completo con sandbox del directorio de trabajo.
- **Aprobación y coste** — Revisa tool calls, recuerda permisos y sigue tokens/coste por sesión.

## Renderizado de contenido

- **Markdown y matemáticas** — Markdown, código, tablas, tareas y LaTeX en conversaciones en streaming.
- **Código, diagramas y artifacts** — Monaco, Mermaid, D2 y panel Artifact para código, notas, informes y vistas previas.
- **Fragmentos HTML** — Previsualiza HTML generado con las mejoras recientes de estabilidad del streaming.

## Búsqueda y conocimiento

- **Búsqueda web** — Tavily, Zhipu WebSearch, Bocha con fuentes citadas y generación de consultas.
- **Base de conocimiento local** — Indexa documentos privados con sqlite-vec y ajusta retrieval/rerank con feedback.
- **Gestión de contexto** — Adjunta archivos, resultados, fragmentos, memorias y salida de herramientas.

## Herramientas y extensiones

- **Protocolo MCP** — Ejecuta servidores Model Context Protocol por stdio, SSE o StreamableHTTP.
- **Herramientas integradas** — Usa @aqbot/fetch y búsqueda de archivos sin servidor separado.
- **Límite de bucle** — Configura el máximo de bucles MCP y recupera mejor sesiones interrumpidas.

## Pasarela API

- **Pasarela local** — Expone OpenAI Chat Completions, OpenAI Responses, Claude nativo y Gemini nativo desde la app.
- **Acceso y observabilidad** — Gestiona claves, SSL/TLS, logs y analíticas localmente.
- **Plantillas cliente** — Plantillas para Claude Code, Codex CLI, OpenCode, Gemini CLI y clientes propios.

## Importación y backup

- **Importaciones de terceros** — Importa ChatGPT, Cherry Studio y Kelivo con vista previa, avisos y duplicados.
- **Migración de proveedores/ficheros** — Cherry Studio/Kelivo pueden migrar proveedores, API keys y adjuntos.
- **Copias de seguridad** — Backup/restore con carpetas locales, WebDAV o almacenamiento compatible S3.

## Escritorio y seguridad

- **Cifrado local** — Estado en ~/.aqbot/, archivos en ~/Documents/aqbot/, API keys protegidas por AES-256.
- **Integración desktop** — Tray, always-on-top, atajos globales, auto-start, proxy y actualizaciones.
- **11 idiomas** — Interfaz en chino simplificado/tradicional, inglés, japonés, coreano, francés, alemán, español, ruso, hindi y árabe.
