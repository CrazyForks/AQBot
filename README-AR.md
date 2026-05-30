[简体中文](./README.md) | [繁體中文](./README-ZH-TW.md) | [English](./README-EN.md) | [日本語](./README-JA.md) | [한국어](./README-KO.md) | [Français](./README-FR.md) | [Deutsch](./README-DE.md) | [Español](./README-ES.md) | [Русский](./README-RU.md) | [हिन्दी](./README-HI.md) | **العربية**

[![AQBot](https://socialify.git.ci/AQBot-Desktop/AQBot/image?description=1&font=JetBrains+Mono&forks=1&issues=1&logo=https%3A%2F%2Fgithub.com%2FAQBot-Desktop%2FAQBot%2Fblob%2Fmain%2Fsrc%2Fassets%2Fimage%2Flogo.png%3Fraw%3Dtrue&name=1&owner=1&pattern=Floating+Cogs&pulls=1&stargazers=1&theme=Auto)](https://github.com/AQBot-Desktop/AQBot)


## لقطات الشاشة

| عرض مخططات المحادثة | مزودو الخدمة والنماذج |
|:---:|:---:|
| ![](.github/images/s1-0412.png) | ![](.github/images/s2-0412.png) |

| قاعدة المعرفة | الذاكرة |
|:---:|:---:|
| ![](.github/images/s3-0412.png) | ![](.github/images/s4-0412.png) |

| Agent - استفسار | بوابة API بنقرة واحدة |
|:---:|:---:|
| ![](.github/images/s5-0412.png) | ![](.github/images/s6-0412.png) |

| اختيار نموذج المحادثة | تنقل المحادثات |
|:---:|:---:|
| ![](.github/images/s7-0412.png) | ![](.github/images/s8-0412.png) |

| Agent - الموافقة على الصلاحيات | نظرة عامة على بوابة API |
|:---:|:---:|
| ![](.github/images/s9-0412.png) | ![](.github/images/s10-0412.png) |

## الميزات

AQBot هو مساحة عمل AI مكتبية local-first. تم تحديث هذه الصفحة لـ v0.0.85 لتشمل import للمزوّدين، import للبيانات من التطبيقات الأخرى، MCP، HTML rendering، backup وgateway.

### الدردشة والنماذج

- **Multi-provider chat** — اربط OpenAI وClaude وGemini وDeepSeek وQwen وأي OpenAI-compatible endpoint مع Base URL وAPI Path وheaders وproxy rules.
- **تهيئة المزوّدين** — استخدم aqbot:// provider links وCC Switch import لجلب provider profiles إلى AQBot بعد تأكيد المستخدم.
- **إدارة النماذج** — زامن remote model lists، ونظّم groups، واختبر latency، واضبط capabilities وcontext length وsampling defaults وreasoning profiles وper-model extra_body.
- **مسارات المحادثة** — Streaming replies وthinking blocks وmessage versions وbranches وtitle-generation status وlong chat compression وmulti-model comparison.

### AI Agent

- **Agent mode** — يمكن للنموذج تعديل الملفات وتشغيل الأوامر وتحليل الكود داخل desktop workflow مضبوط.
- **التحكم في الصلاحيات** — اختر standard review أو auto-accept edits أو full-access mode مع استمرار working-directory sandbox checks.
- **الموافقة والتكلفة** — راجع tool calls لحظياً، واحفظ allow decisions، وتابع token/cost لكل session.

### عرض المحتوى

- **Markdown والمعادلات** — اعرض Markdown وcode highlighting وtables وtask lists وLaTeX formulas داخل streaming conversations.
- **الكود والمخططات وArtifact** — استخدم Monaco code blocks وMermaid وD2 وArtifact panel للكود والملاحظات والتقارير والمعاينات.
- **HTML fragments** — عاين generated HTML fragments بأمان مع أحدث streaming stability fixes.

### البحث والمعرفة

- **Web search** — يدعم Tavily وZhipu WebSearch وBocha مع cited sources وgenerated search queries.
- **Local knowledge base** — افهرس private documents باستخدام sqlite-vec واضبط retrieval/rerank options وراجع retrieval feedback.
- **Context management** — أضف files وsearch results وknowledge snippets وmemories وtool output إلى conversation context.

### الأدوات والامتدادات

- **MCP protocol** — شغّل Model Context Protocol servers عبر stdio أو SSE أو StreamableHTTP.
- **Built-in tools** — استخدم @aqbot/fetch وfile search بدون تثبيت server منفصل.
- **Tool loop limit** — اضبط MCP tool-call loop count واستعد بشكل أفضل من interrupted أو stuck tool sessions.

### API gateway

- **Local gateway** — اعرض OpenAI Chat Completions وOpenAI Responses وClaude-native وGemini-native endpoints من desktop app.
- **الوصول والمراقبة** — أدر gateway keys وSSL/TLS certificates وrequest logs وusage analytics محلياً.
- **Client templates** — Templates جاهزة لـ Claude Code وCodex CLI وOpenCode وGemini CLI وcustom clients.

### استيراد البيانات والنسخ الاحتياطي

- **Third-party imports** — استورد ChatGPT official exports وCherry Studio backups وKelivo backups مع preview counts وwarnings وduplicate handling.
- **Provider and file migration** — يمكن لـ Cherry Studio/Kelivo import نقل linked providers وAPI keys وfile attachments اختيارياً.
- **Backups** — انسخ واستعد البيانات عبر local folders أو WebDAV أو S3-compatible storage.

### سطح المكتب والأمان

- **Local encryption** — يُحفظ app state في ~/.aqbot/ وuser files في ~/Documents/aqbot/، وتُحمى API keys عبر AES-256 وlocal master key.
- **Desktop integration** — Tray وalways-on-top وglobal shortcuts وauto-start وproxy settings وautomatic update checks.
- **11 interface languages** — بدّل بين Simplified Chinese وTraditional Chinese وEnglish وJapanese وKorean وFrench وGerman وSpanish وRussian وHindi وArabic.

## دعم المنصات

| المنصة | البنية |
|--------|--------|
| macOS | Apple Silicon (arm64), Intel (x86_64) |
| Windows 10/11 | x86_64, arm64 |
| Linux | x86_64 (AppImage/deb/rpm), arm64 (AppImage/deb/rpm) |

## البدء

توجه إلى صفحة [Releases](https://github.com/AQBot-Desktop/AQBot/releases) وقم بتنزيل المثبّت الخاص بمنصتك.

## الأسئلة الشائعة

### macOS: «التطبيق تالف» أو «لا يمكن التحقق من المطور»

نظراً لأن التطبيق غير موقّع من Apple، قد يعرض macOS أحد الرسائل التالية:

- «AQBot» تالف ولا يمكن فتحه
- لا يمكن فتح «AQBot» لأن Apple لا تستطيع التحقق منه بحثاً عن البرامج الضارة

**خطوات الحل:**

**1. السماح بالتطبيقات من «أي مكان»**

```bash
sudo spctl --master-disable
```

ثم انتقل إلى **إعدادات النظام ← الخصوصية والأمان ← الأمان** وحدد **أي مكان**.

**2. إزالة سمة الحجر الصحي**

```bash
sudo xattr -dr com.apple.quarantine /Applications/AQBot.app
```

> تلميح: يمكنك سحب أيقونة التطبيق إلى الطرفية بعد كتابة `sudo xattr -dr com.apple.quarantine `.

**3. خطوة إضافية لـ macOS Ventura والإصدارات الأحدث**

بعد إتمام الخطوات أعلاه، قد يظل الإطلاق الأول محجوباً. انتقل إلى **إعدادات النظام ← الخصوصية والأمان**، ثم انقر على **فتح على أي حال** في قسم الأمان. هذا يحتاج إلى تنفيذه مرة واحدة فقط.

## المجتمع
- [LinuxDO](https://linux.do)

## الترخيص

هذا المشروع مرخّص بموجب ترخيص [AGPL-3.0](LICENSE).
