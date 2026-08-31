# AGENTS.md

Iglesia Bíblica Camino de Esperanza (IBCE) web repository. Early-stage: no commits yet, no `package.json`, no build/test/lint/CI config. Two independent top-level workspaces.

## Repo layout

- `identity-visual/` — Design system / visual identity ("Raíces de Esperanza"): logos, palettes, typography, icons, mockups. No code.
- `landing/` — Planned Astro site. **Not scaffolded yet** — contains only `src/.agents/AGENTS.MD`.

## Design tokens: single source of truth

`identity-visual/DESIGN.md` is the canonical definition of the color palette, typography scale, spacing, shapes, and elevation. Always derive tokens from it.

- `identity-visual/src/palettes/*.json` are programmatic exports that must stay in sync with `DESIGN.md` (see `src/palettes/README.md`).
- The color table in `landing/src/.agents/AGENTS.MD` is aspirational/partial and has some hex values that diverge from `DESIGN.md` — trust `DESIGN.md` over it.
- Semantic token usage is mandatory: use `text-primary`, `bg-surface-container`, etc., never raw Tailwind color utilities like `text-red-700`.
- Fonts: headings/labels = Montserrat; body = Be Vietnam Pro.

## `landing/` notes

- The existing `landing/src/.agents/AGENTS.MD` describes the **intended** Astro v5 + Tailwind stack (i18n `es`/`en`, `defaultLocale: 'es'`) and a full component/site map, but none of that code exists yet. Treat it as a spec, not a reflection of current files.
- Nothing has been scaffolded: no `astro.config.mjs`, `tailwind.config.mjs`, `src/pages/`, or `public/` yet.

## Conventions (identity-visual)

- File/folder names: lowercase with hyphens (`logo-dark.svg`, `primary-palette.json`). No spaces, uppercase, or special chars.
- Formats: SVG for scalable assets, PNG for raster previews, JSON for palettes, Markdown for docs.
- Each asset category folder keeps a `README.md`/`guidelines.md` explaining usage.

## Existing instruction files

- `identity-visual/ai/instructions.md` — Copilot directives for the visual identity repo (architecture rules, naming, formats).
- `landing/src/.agents/AGENTS.MD` — aspirational spec for the future Astro landing site.
- `identity-visual/DESIGN.md` — the design system spec (YAML front matter + prose).

## Reusable skills (`.opencode/skills/`)

Skills are loadable, task-scoped guides. Each lives in `.opencode/skills/<name>/SKILL.md` with `name` (kebab-case) + `description` frontmatter. Use the matching skill whenever you work on the corresponding area:

- `.opencode/skills/astro-core/SKILL.md` — Astro 5.x core: Zero-JS/Islands, `.astro` components, file-based routing, native i18n (es/en).
- `.opencode/skills/styling-tokens/SKILL.md` — Tailwind CSS v4 via Vite plugin, semantic `@theme` tokens ("Raíces de Esperanza"), reusable components.
- `.opencode/skills/web-performance/SKILL.md` — ultra-fast QR/mobile load: `astro:assets`, font/SVG optimization, Core Web Vitals.
- `.opencode/skills/dev-workflow/SKILL.md` — Node.js/npm, static build (SSG), and authoring AGENTS.md/skills directives.
- `.opencode/skills/astro-pr-review/SKILL.md` — PR review checklist for Astro: bad practices, bugs, performance/i18n/token violations, severity-levelled report.
- `.opencode/skills/feature-workflow/SKILL.md` — document every new feature in `features/NNN-slug/` with `propuesta.md` + `steps.md` before implementing.

These skills are auto-discovered by the skill loader; they don't need to be listed in any config. Keep them updated alongside the code they document.
