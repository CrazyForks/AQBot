[简体中文](./README.md) | [繁體中文](./README-ZH-TW.md) | [English](./README-EN.md) | **日本語** | [한국어](./README-KO.md) | [Français](./README-FR.md) | [Deutsch](./README-DE.md) | [Español](./README-ES.md) | [Русский](./README-RU.md) | [हिन्दी](./README-HI.md) | [العربية](./README-AR.md)

[![AQBot](https://socialify.git.ci/AQBot-Desktop/AQBot/image?description=1&font=JetBrains+Mono&forks=1&issues=1&logo=https%3A%2F%2Fgithub.com%2FAQBot-Desktop%2FAQBot%2Fblob%2Fmain%2Fsrc%2Fassets%2Fimage%2Flogo.png%3Fraw%3Dtrue&name=1&owner=1&pattern=Floating+Cogs&pulls=1&stargazers=1&theme=Auto)](https://github.com/AQBot-Desktop/AQBot)


## スクリーンショット

| チャットチャートレンダリング | プロバイダーとモデル |
|:---:|:---:|
| ![](.github/images/s1-0412.png) | ![](.github/images/s2-0412.png) |

| ナレッジベース | メモリー |
|:---:|:---:|
| ![](.github/images/s3-0412.png) | ![](.github/images/s4-0412.png) |

| Agent - 質問 | APIゲートウェイ ワンクリック接続 |
|:---:|:---:|
| ![](.github/images/s5-0412.png) | ![](.github/images/s6-0412.png) |

| チャットモデル選択 | チャットナビゲーション |
|:---:|:---:|
| ![](.github/images/s7-0412.png) | ![](.github/images/s8-0412.png) |

| Agent - 権限承認 | APIゲートウェイ概要 |
|:---:|:---:|
| ![](.github/images/s9-0412.png) | ![](.github/images/s10-0412.png) |

## 機能一覧

AQBot はローカルファーストの AI デスクトップワークスペースです。このページは v0.0.85 に合わせて、プロバイダー導入、外部データインポート、MCP、HTML レンダリング、バックアップ、ゲートウェイ機能を更新しています。

### チャットとモデル

- **マルチプロバイダー対応** — OpenAI、Claude、Gemini、DeepSeek、Qwen、OpenAI 互換エンドポイントを、Base URL、API Path、ヘッダー、プロキシ設定付きで接続できます。
- **プロバイダー導入** — aqbot:// プロバイダーリンクと CC Switch インポートで、ユーザー確認後にプロバイダー設定を取り込めます。
- **モデル管理** — リモートモデル同期、グループ管理、レイテンシーテスト、能力タグ、コンテキスト長、サンプリング既定値、推論プロファイル、モデル別 extra_body を設定できます。
- **会話ワークフロー** — ストリーミング返信、思考ブロック、メッセージバージョン、会話分岐、タイトル生成状態、長文圧縮、複数モデル並列回答に対応します。

### AI Agent

- **Agent モード** — 制御されたデスクトップワークフロー内で、モデルにファイル編集、コマンド実行、コード分析を任せられます。
- **権限制御** — 標準レビュー、自動編集承認、フルアクセスを選べ、作業ディレクトリのサンドボックスチェックは維持されます。
- **承認とコスト UI** — ツール呼び出しをリアルタイムで確認し、許可判断を記憶し、各 Agent セッションの token とコストを追跡できます。

### コンテンツレンダリング

- **Markdown と数式** — ストリーミング会話で Markdown、コードハイライト、表、タスクリスト、LaTeX 数式を表示します。
- **コード、図、Artifact** — Monaco コードブロック、Mermaid、D2、Artifact パネルでコード、Markdown メモ、レポート、プレビューを扱えます。
- **HTML フラグメント** — 生成された HTML 断片を安全にプレビューし、最近のリリースで追加されたストリーミング安定化も反映しています。

### 検索とナレッジ

- **Web 検索** — Tavily、Zhipu WebSearch、Bocha などを使い、引用元と検索クエリ生成を会話に追加できます。
- **ローカルナレッジベース** — sqlite-vec で非公開ドキュメントを索引化し、取得/リランク設定と検索フィードバックを確認できます。
- **コンテキスト管理** — ファイル、検索結果、ナレッジ断片、メモリ、ツール出力を会話コンテキストへ追加できます。

### ツールと拡張機能

- **MCP プロトコル** — stdio、SSE、StreamableHTTP の Model Context Protocol サーバーを実行できます。
- **ビルトインツール** — @aqbot/fetch やファイル検索などの内蔵 MCP ツールを、追加サーバーなしで利用できます。
- **ツールループ上限** — MCP ツール呼び出しの最大ループ数を設定し、中断や停止したツールセッションから復帰しやすくなりました。

### API ゲートウェイ

- **ローカルゲートウェイ** — デスクトップアプリから OpenAI Chat Completions、OpenAI Responses、Claude ネイティブ、Gemini ネイティブ API を公開します。
- **アクセスと可観測性** — ゲートウェイキー、SSL/TLS 証明書、リクエストログ、利用統計をローカルで管理できます。
- **クライアントテンプレート** — Claude Code、Codex CLI、OpenCode、Gemini CLI、カスタムクライアント向けのテンプレートを提供します。

### データインポートとバックアップ

- **サードパーティインポート** — ChatGPT 公式エクスポート、Cherry Studio、Kelivo バックアップをプレビュー、警告、重複処理付きで取り込めます。
- **プロバイダーとファイル移行** — Cherry Studio/Kelivo から関連プロバイダー、API キー、添付ファイルを任意で移行できます。
- **バックアップ** — ローカルフォルダー、WebDAV、S3 互換ストレージでバックアップと復元を行えます。

### デスクトップとセキュリティ

- **ローカル暗号化** — アプリ状態は ~/.aqbot/、ユーザーファイルは ~/Documents/aqbot/ に保存され、API キーは AES-256 とローカルマスターキーで保護されます。
- **デスクトップ統合** — トレイ、常に手前、グローバルショートカット、自動起動、プロキシ、自動更新チェックをサポートします。
- **11 言語 UI** — 簡体字中国語、繁体字中国語、英語、日本語、韓国語、フランス語、ドイツ語、スペイン語、ロシア語、ヒンディー語、アラビア語を切り替えられます。

## プラットフォームサポート

| プラットフォーム | アーキテクチャ |
|-----------------|---------------|
| macOS | Apple Silicon (arm64), Intel (x86_64) |
| Windows 10/11 | x86_64, arm64 |
| Linux | x86_64 (AppImage/deb/rpm), arm64 (AppImage/deb/rpm) |

## はじめに

[Releases](https://github.com/AQBot-Desktop/AQBot/releases) ページにアクセスして、お使いのプラットフォーム向けのインストーラーをダウンロードしてください。

## よくある質問

### macOS：「アプリが壊れています」または「開発元を確認できません」

アプリケーションが Apple によって署名されていないため、macOS は次のいずれかのプロンプトを表示する場合があります：

- 「AQBot」は壊れているため開けません
- 悪意のあるソフトウェアがないか確認できないため、「AQBot」を開けません

**解決手順：**

**1. 「すべてのアプリケーションを許可」する**

```bash
sudo spctl --master-disable
```

次に **「システム設定 → プライバシーとセキュリティ → セキュリティ」** に移動し、**「すべてのアプリケーションを許可」** を選択してください。

**2. 検疫属性を削除する**

```bash
sudo xattr -dr com.apple.quarantine /Applications/AQBot.app
```

> ヒント：ターミナルに `sudo xattr -dr com.apple.quarantine ` と入力した後、アプリアイコンをドラッグ＆ドロップできます。

**3. macOS Ventura 以降の追加手順**

上記の手順を完了した後も、初回起動時にブロックされる場合があります。**「システム設定 → プライバシーとセキュリティ」** に移動し、セキュリティセクションの **「このまま開く」** をクリックしてください。この操作は一度だけ必要です。

## コミュニティ
- [LinuxDO](https://linux.do)

## ライセンス

このプロジェクトは [AGPL-3.0](LICENSE) ライセンスの下でライセンスされています。
