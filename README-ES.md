[简体中文](./README.md) | [繁體中文](./README-ZH-TW.md) | [English](./README-EN.md) | [日本語](./README-JA.md) | [한국어](./README-KO.md) | [Français](./README-FR.md) | [Deutsch](./README-DE.md) | **Español** | [Русский](./README-RU.md) | [हिन्दी](./README-HI.md) | [العربية](./README-AR.md)

[![AQBot](https://socialify.git.ci/AQBot-Desktop/AQBot/image?description=1&font=JetBrains+Mono&forks=1&issues=1&logo=https%3A%2F%2Fgithub.com%2FAQBot-Desktop%2FAQBot%2Fblob%2Fmain%2Fsrc%2Fassets%2Fimage%2Flogo.png%3Fraw%3Dtrue&name=1&owner=1&pattern=Floating+Cogs&pulls=1&stargazers=1&theme=Auto)](https://github.com/AQBot-Desktop/AQBot)


## Capturas de pantalla

| Renderizado de gráficos de chat | Proveedores y modelos |
|:---:|:---:|
| ![](.github/images/s1-0412.png) | ![](.github/images/s2-0412.png) |

| Base de conocimientos | Memoria |
|:---:|:---:|
| ![](.github/images/s3-0412.png) | ![](.github/images/s4-0412.png) |

| Agent - Consulta | Acceso rápido a API Gateway |
|:---:|:---:|
| ![](.github/images/s5-0412.png) | ![](.github/images/s6-0412.png) |

| Selección de modelo de chat | Navegación de chats |
|:---:|:---:|
| ![](.github/images/s7-0412.png) | ![](.github/images/s8-0412.png) |

| Agent - Aprobación de permisos | Resumen de API Gateway |
|:---:|:---:|
| ![](.github/images/s9-0412.png) | ![](.github/images/s10-0412.png) |

## Características

AQBot es un espacio de trabajo de IA de escritorio local-first. Esta página está actualizada para v0.0.85 e incluye importación de proveedores, importación de datos de terceros, MCP, renderizado HTML, copias de seguridad y pasarela.

### Chat y modelos

- **Chat multi-proveedor** — Conecta OpenAI, Claude, Gemini, DeepSeek, Qwen y endpoints compatibles con OpenAI con Base URL, API Path, headers y proxy.
- **Alta de proveedores** — Usa enlaces aqbot:// e importación CC Switch para traer perfiles tras confirmación del usuario.
- **Gestión de modelos** — Sincroniza modelos, grupos, latencia, capacidades, contexto, sampling, perfiles de razonamiento y extra_body por modelo.
- **Flujos de conversación** — Streaming, bloques de pensamiento, versiones, ramas, estado de título, compresión y comparación multi-modelo.

### AI Agent

- **Modo Agent** — El modelo puede editar archivos, ejecutar comandos y analizar código en un flujo controlado.
- **Permisos** — Revisión estándar, aceptar ediciones automáticamente o acceso completo con sandbox del directorio de trabajo.
- **Aprobación y coste** — Revisa tool calls, recuerda permisos y sigue tokens/coste por sesión.

### Renderizado de contenido

- **Markdown y matemáticas** — Markdown, código, tablas, tareas y LaTeX en conversaciones en streaming.
- **Código, diagramas y artifacts** — Monaco, Mermaid, D2 y panel Artifact para código, notas, informes y vistas previas.
- **Fragmentos HTML** — Previsualiza HTML generado con las mejoras recientes de estabilidad del streaming.

### Búsqueda y conocimiento

- **Búsqueda web** — Tavily, Zhipu WebSearch, Bocha con fuentes citadas y generación de consultas.
- **Base de conocimiento local** — Indexa documentos privados con sqlite-vec y ajusta retrieval/rerank con feedback.
- **Gestión de contexto** — Adjunta archivos, resultados, fragmentos, memorias y salida de herramientas.

### Herramientas y extensiones

- **Protocolo MCP** — Ejecuta servidores Model Context Protocol por stdio, SSE o StreamableHTTP.
- **Herramientas integradas** — Usa @aqbot/fetch y búsqueda de archivos sin servidor separado.
- **Límite de bucle** — Configura el máximo de bucles MCP y recupera mejor sesiones interrumpidas.

### Pasarela API

- **Pasarela local** — Expone OpenAI Chat Completions, OpenAI Responses, Claude nativo y Gemini nativo desde la app.
- **Acceso y observabilidad** — Gestiona claves, SSL/TLS, logs y analíticas localmente.
- **Plantillas cliente** — Plantillas para Claude Code, Codex CLI, OpenCode, Gemini CLI y clientes propios.

### Importación y backup

- **Importaciones de terceros** — Importa ChatGPT, Cherry Studio y Kelivo con vista previa, avisos y duplicados.
- **Migración de proveedores/ficheros** — Cherry Studio/Kelivo pueden migrar proveedores, API keys y adjuntos.
- **Copias de seguridad** — Backup/restore con carpetas locales, WebDAV o almacenamiento compatible S3.

### Escritorio y seguridad

- **Cifrado local** — Estado en ~/.aqbot/, archivos en ~/Documents/aqbot/, API keys protegidas por AES-256.
- **Integración desktop** — Tray, always-on-top, atajos globales, auto-start, proxy y actualizaciones.
- **11 idiomas** — Interfaz en chino simplificado/tradicional, inglés, japonés, coreano, francés, alemán, español, ruso, hindi y árabe.

## Plataformas compatibles

| Plataforma | Arquitectura |
|------------|-------------|
| macOS | Apple Silicon (arm64), Intel (x86_64) |
| Windows 10/11 | x86_64, arm64 |
| Linux | x86_64 (AppImage/deb/rpm), arm64 (AppImage/deb/rpm) |

## Primeros pasos

Ve a la página de [Releases](https://github.com/AQBot-Desktop/AQBot/releases) y descarga el instalador para tu plataforma.

## Preguntas frecuentes

### macOS: «La app está dañada» o «No se puede verificar al desarrollador»

Dado que la aplicación no está firmada por Apple, macOS puede mostrar uno de los siguientes mensajes:

- «AQBot» está dañado y no se puede abrir
- «AQBot» no se puede abrir porque Apple no puede comprobar si contiene software malicioso

**Pasos para resolver el problema:**

**1. Permitir apps de «Cualquier origen»**

```bash
sudo spctl --master-disable
```

Luego ve a **Configuración del sistema → Privacidad y seguridad → Seguridad** y selecciona **Cualquier origen**.

**2. Eliminar el atributo de cuarentena**

```bash
sudo xattr -dr com.apple.quarantine /Applications/AQBot.app
```

> Consejo: Puedes arrastrar el ícono de la app al terminal después de escribir `sudo xattr -dr com.apple.quarantine `.

**3. Paso adicional para macOS Ventura y versiones posteriores**

Después de completar los pasos anteriores, es posible que el primer lanzamiento aún esté bloqueado. Ve a **Configuración del sistema → Privacidad y seguridad** y haz clic en **Abrir igualmente** en la sección de Seguridad. Esto solo debe hacerse una vez.

## Comunidad
- [LinuxDO](https://linux.do)

## Licencia

Este proyecto está bajo la licencia [AGPL-3.0](LICENSE).
