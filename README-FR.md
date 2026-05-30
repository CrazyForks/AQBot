[简体中文](./README.md) | [繁體中文](./README-ZH-TW.md) | [English](./README-EN.md) | [日本語](./README-JA.md) | [한국어](./README-KO.md) | **Français** | [Deutsch](./README-DE.md) | [Español](./README-ES.md) | [Русский](./README-RU.md) | [हिन्दी](./README-HI.md) | [العربية](./README-AR.md)

[![AQBot](https://socialify.git.ci/AQBot-Desktop/AQBot/image?description=1&font=JetBrains+Mono&forks=1&issues=1&logo=https%3A%2F%2Fgithub.com%2FAQBot-Desktop%2FAQBot%2Fblob%2Fmain%2Fsrc%2Fassets%2Fimage%2Flogo.png%3Fraw%3Dtrue&name=1&owner=1&pattern=Floating+Cogs&pulls=1&stargazers=1&theme=Auto)](https://github.com/AQBot-Desktop/AQBot)

<p align="center">
    <a href="https://www.producthunt.com/products/aqbot?embed=true&amp;utm_source=badge-featured&amp;utm_medium=badge&amp;utm_campaign=badge-aqbot" target="_blank" rel="noopener noreferrer"><img alt="AQBot - Lightweight, high-perf cross-platform AI desktop client | Product Hunt" width="250" height="54" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1118403&amp;theme=light&amp;t=1775627359538"></a>
</p>

## Captures d'écran

| Rendu des graphiques de chat | Fournisseurs et modèles |
|:---:|:---:|
| ![](.github/images/s1-0412.png) | ![](.github/images/s2-0412.png) |

| Base de connaissances | Mémoire |
|:---:|:---:|
| ![](.github/images/s3-0412.png) | ![](.github/images/s4-0412.png) |

| Agent - Demande | Passerelle API en un clic |
|:---:|:---:|
| ![](.github/images/s5-0412.png) | ![](.github/images/s6-0412.png) |

| Sélection du modèle de chat | Navigation des chats |
|:---:|:---:|
| ![](.github/images/s7-0412.png) | ![](.github/images/s8-0412.png) |

| Agent - Approbation des permissions | Aperçu de la passerelle API |
|:---:|:---:|
| ![](.github/images/s9-0412.png) | ![](.github/images/s10-0412.png) |

## Fonctionnalités

AQBot est un espace de travail IA de bureau local-first. Cette page est mise à jour pour v0.0.85 avec les imports de fournisseurs, imports tiers, MCP, rendu HTML, sauvegardes et passerelle.

### Chat et modèles

- **Chat multi-fournisseurs** — Connectez OpenAI, Claude, Gemini, DeepSeek, Qwen et tout endpoint compatible OpenAI avec Base URL, API Path, headers et proxy.
- **Onboarding fournisseur** — Utilisez les liens aqbot:// et l’import CC Switch pour importer des profils fournisseur après confirmation.
- **Gestion des modèles** — Synchronisez les modèles distants, groupes, latence, capacités, contexte, sampling, profils de raisonnement et extra_body par modèle.
- **Workflows de conversation** — Streaming, blocs de réflexion, versions de messages, branches, état de génération du titre, compression et réponses multi-modèles.

### AI Agent

- **Mode Agent** — Le modèle peut éditer des fichiers, exécuter des commandes et analyser du code dans un workflow contrôlé.
- **Contrôle des permissions** — Choisissez revue standard, acceptation automatique des éditions ou accès complet avec sandbox de dossier de travail.
- **Approbation et coûts** — Inspectez les appels d’outils, mémorisez les autorisations et suivez tokens/coûts par session.

### Rendu de contenu

- **Markdown et maths** — Rendu Markdown, code, tableaux, tâches et LaTeX dans les conversations streamées.
- **Code, diagrammes et artifacts** — Monaco, Mermaid, D2 et panneau Artifact pour code, notes Markdown, rapports et aperçus.
- **Fragments HTML** — Prévisualisez les fragments HTML générés avec les correctifs récents de stabilité du streaming.

### Recherche et connaissances

- **Recherche Web** — Tavily, Zhipu WebSearch, Bocha avec sources citées et génération de requêtes.
- **Bases de connaissances locales** — Indexez vos documents avec sqlite-vec, réglez retrieval/rerank et inspectez les retours de récupération.
- **Gestion du contexte** — Ajoutez fichiers, résultats de recherche, extraits, mémoires et sorties d’outils au contexte.

### Outils et extensions

- **Protocole MCP** — Exécutez des serveurs Model Context Protocol en stdio, SSE ou StreamableHTTP.
- **Outils intégrés** — Utilisez @aqbot/fetch et la recherche de fichiers sans serveur séparé.
- **Limite de boucle outils** — Configurez le nombre maximal de boucles MCP et récupérez mieux les sessions bloquées.

### Passerelle API

- **Passerelle locale** — Exposez OpenAI Chat Completions, OpenAI Responses, Claude natif et Gemini natif depuis l’app.
- **Accès et observabilité** — Gérez clés, SSL/TLS, logs de requêtes et statistiques localement.
- **Templates clients** — Templates pour Claude Code, Codex CLI, OpenCode, Gemini CLI et clients personnalisés.

### Import et sauvegarde

- **Imports tiers** — Importez ChatGPT, Cherry Studio et Kelivo avec aperçu, avertissements et gestion des doublons.
- **Migration fournisseurs/fichiers** — Les imports Cherry Studio/Kelivo peuvent migrer fournisseurs, clés API et pièces jointes.
- **Sauvegardes** — Sauvegarde/restauration via dossiers locaux, WebDAV ou stockage compatible S3.

### Bureau et sécurité

- **Chiffrement local** — État dans ~/.aqbot/, fichiers utilisateur dans ~/Documents/aqbot/, clés API protégées par AES-256.
- **Intégration desktop** — Tray, always-on-top, raccourcis globaux, auto-start, proxy et vérification des mises à jour.
- **11 langues** — Interface disponible en chinois simplifié/traditionnel, anglais, japonais, coréen, français, allemand, espagnol, russe, hindi et arabe.

## Plateformes prises en charge

| Plateforme | Architecture |
|------------|-------------|
| macOS | Apple Silicon (arm64), Intel (x86_64) |
| Windows 10/11 | x86_64, arm64 |
| Linux | x86_64 (AppImage/deb/rpm), arm64 (AppImage/deb/rpm) |

## Démarrage rapide

Rendez-vous sur la page [Releases](https://github.com/AQBot-Desktop/AQBot/releases) et téléchargez le programme d'installation pour votre plateforme.

## FAQ

### macOS : « L'application est endommagée » ou « Impossible de vérifier le développeur »

Comme l'application n'est pas signée par Apple, macOS peut afficher l'une des invites suivantes :

- « AQBot » est endommagé et ne peut pas être ouvert
- « AQBot » ne peut pas être ouvert car Apple ne peut pas vérifier l'absence de logiciels malveillants

**Étapes pour résoudre le problème :**

**1. Autoriser les applications de « N'importe où »**

```bash
sudo spctl --master-disable
```

Ensuite, allez dans **Réglages Système → Confidentialité et sécurité → Sécurité** et sélectionnez **N'importe où**.

**2. Supprimer l'attribut de quarantaine**

```bash
sudo xattr -dr com.apple.quarantine /Applications/AQBot.app
```

> Astuce : Vous pouvez faire glisser l'icône de l'application dans le terminal après avoir tapé `sudo xattr -dr com.apple.quarantine `.

**3. Étape supplémentaire pour macOS Ventura et versions ultérieures**

Après avoir effectué les étapes ci-dessus, le premier lancement peut encore être bloqué. Allez dans **Réglages Système → Confidentialité et sécurité**, puis cliquez sur **Ouvrir quand même** dans la section Sécurité. Cette opération n'est nécessaire qu'une seule fois.

## Communauté
- [LinuxDO](https://linux.do)

## Licence

Ce projet est sous licence [AGPL-3.0](LICENSE).
