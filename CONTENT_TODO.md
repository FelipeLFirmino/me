# Content To-Do

Boilerplate/demo content from the Astro Nano theme has been removed. These slots are now empty and need real content.

## Projects (`src/content/projects/`)

Currently empty — the site has no projects to show. Add one markdown file per project, following this frontmatter shape (see `src/content/config.ts` for the schema):

```md
---
title: ""
description: ""
date: ""
demoURL: ""   # optional
repoURL: ""   # optional
---

Body content here.
```

Candidates to write up, based on recent conversations:
- [ ] PLAUDD — multi-agent AI architecture project (orchestrator + subagents via MCP, PostgreSQL, Angular)
- [ ] PH-Sheets — retail pricing automation tool (NFe XML/CSV parsing, Brazilian tax rules, Excel output, packaged as a desktop app)
- [ ] PH marketing site (ph-maceio.com.br) — AI-assisted design → production site, SEO/analytics, interactive carousel
- [ ] Cash-flow audit platform — Angular + NestJS/PostgreSQL multi-unit reconciliation system
- [ ] Anything else worth showcasing (personal/open-source work, older projects)

## README.md

Replaced with a minimal stub (site description + commands + license). Expand if you want more detail about the project (e.g. deployment notes, structure).

## Removed files (for reference)

Deleted as leftover theme demo content:
- `src/content/projects/project-1/index.md` (Astro Sphere writeup)
- `src/content/projects/project-2/index.md` (Astro Nano writeup)
- `_astro_nano.png`, `_deploy_netlify.svg`, `_deploy_vercel.svg`, `_lighthouse.png` (root)
- `public/astro-nano.png`, `public/astro-sphere.jpg`, `public/deploy_netlify.svg`, `public/deploy_vercel.svg`, `public/lighthouse.png`, `public/patrick.webp`
