# Fonctionnalités

AQBot est un espace de travail IA de bureau local-first. Cette page est mise à jour pour v0.0.85 avec les imports de fournisseurs, imports tiers, MCP, rendu HTML, sauvegardes et passerelle.

## Chat et modèles

- **Chat multi-fournisseurs** — Connectez OpenAI, Claude, Gemini, DeepSeek, Qwen et tout endpoint compatible OpenAI avec Base URL, API Path, headers et proxy.
- **Onboarding fournisseur** — Utilisez les liens aqbot:// et l’import CC Switch pour importer des profils fournisseur après confirmation.
- **Gestion des modèles** — Synchronisez les modèles distants, groupes, latence, capacités, contexte, sampling, profils de raisonnement et extra_body par modèle.
- **Workflows de conversation** — Streaming, blocs de réflexion, versions de messages, branches, état de génération du titre, compression et réponses multi-modèles.

## AI Agent

- **Mode Agent** — Le modèle peut éditer des fichiers, exécuter des commandes et analyser du code dans un workflow contrôlé.
- **Contrôle des permissions** — Choisissez revue standard, acceptation automatique des éditions ou accès complet avec sandbox de dossier de travail.
- **Approbation et coûts** — Inspectez les appels d’outils, mémorisez les autorisations et suivez tokens/coûts par session.

## Rendu de contenu

- **Markdown et maths** — Rendu Markdown, code, tableaux, tâches et LaTeX dans les conversations streamées.
- **Code, diagrammes et artifacts** — Monaco, Mermaid, D2 et panneau Artifact pour code, notes Markdown, rapports et aperçus.
- **Fragments HTML** — Prévisualisez les fragments HTML générés avec les correctifs récents de stabilité du streaming.

## Recherche et connaissances

- **Recherche Web** — Tavily, Zhipu WebSearch, Bocha avec sources citées et génération de requêtes.
- **Bases de connaissances locales** — Indexez vos documents avec sqlite-vec, réglez retrieval/rerank et inspectez les retours de récupération.
- **Gestion du contexte** — Ajoutez fichiers, résultats de recherche, extraits, mémoires et sorties d’outils au contexte.

## Outils et extensions

- **Protocole MCP** — Exécutez des serveurs Model Context Protocol en stdio, SSE ou StreamableHTTP.
- **Outils intégrés** — Utilisez @aqbot/fetch et la recherche de fichiers sans serveur séparé.
- **Limite de boucle outils** — Configurez le nombre maximal de boucles MCP et récupérez mieux les sessions bloquées.

## Passerelle API

- **Passerelle locale** — Exposez OpenAI Chat Completions, OpenAI Responses, Claude natif et Gemini natif depuis l’app.
- **Accès et observabilité** — Gérez clés, SSL/TLS, logs de requêtes et statistiques localement.
- **Templates clients** — Templates pour Claude Code, Codex CLI, OpenCode, Gemini CLI et clients personnalisés.

## Import et sauvegarde

- **Imports tiers** — Importez ChatGPT, Cherry Studio et Kelivo avec aperçu, avertissements et gestion des doublons.
- **Migration fournisseurs/fichiers** — Les imports Cherry Studio/Kelivo peuvent migrer fournisseurs, clés API et pièces jointes.
- **Sauvegardes** — Sauvegarde/restauration via dossiers locaux, WebDAV ou stockage compatible S3.

## Bureau et sécurité

- **Chiffrement local** — État dans ~/.aqbot/, fichiers utilisateur dans ~/Documents/aqbot/, clés API protégées par AES-256.
- **Intégration desktop** — Tray, always-on-top, raccourcis globaux, auto-start, proxy et vérification des mises à jour.
- **11 langues** — Interface disponible en chinois simplifié/traditionnel, anglais, japonais, coréen, français, allemand, espagnol, russe, hindi et arabe.
