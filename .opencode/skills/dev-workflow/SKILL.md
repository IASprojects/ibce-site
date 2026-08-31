---
name: dev-workflow
description: Use when running builds, dev server, installing dependencies, or authoring AGENTS.md/skill directives for the IBCE project. Covers Node.js/npm, static builds (SSG), and project documentation conventions.
---

# Herramientas de Desarrollo — Node/npm, SSG y directivas

Flujo reproducible y mantenible para el monorepo IBCE.

## Node.js y npm
- Requiere Node ≥ 22.12 (ver `engines` en `package.json`).
- `node`/`npm` pueden no estar en `PATH` en Windows PowerShell; usa la ruta `$env:ProgramFiles\nodejs\node.exe` y `npm.cmd` si no resuelven.
- Usa el lockfile (`package-lock.json`) para builds deterministas; no edites dependencias a mano.
- Instala con `npm install`, corre con `npm run <script>`.

## Scripts y build estático (SSG)
- `npm run dev` — servidor de desarrollo (`astro dev`). En este repo el AGENTS recomienda `astro dev --background`.
- `npm run build` — compila a HTML estático en `dist/` (`astro build`).
- `npm run preview` — sirve el build final para validación local.
- Valida i18n/SSG revisando que `dist/` genere `/index.html` y `/en/index.html`.

## TypeScript y checks
- `tsconfig.json` extiende `astro/tsconfigs/strict`; usa `astro check` para validar tipos/props.

## AGENTS.md y skills
- El `AGENTS.md` de la raíz es la guía del repo; `landing/src/.agents/AGENTS.MD` es el spec (no refleja archivos actuales).
- Las skills reutilizables viven en `.opencode/skills/<name>/SKILL.md` con frontmatter `name` (kebab-case) + `description` (con palabras de disparo).
- Describe el "qué + cuándo" en la descripción; escribe en tercera persona ("Use when...").
- Cuando edites config o skills, recuerda reiniciar opencode para que tomen efecto (la config se carga al iniciar).

## Convenciones del repo
- Nombres de archivo/carpetas en lowercase con guiones (`hero.astro`, `primary-palette.json`).
- Formatos: SVG para escalables, PNG para raster, JSON para paletas, Markdown para docs.