---
name: styling-tokens
description: Use when styling the IBCE landing with Tailwind CSS v4, defining or using design tokens (Raíces de Esperanza), or building reusable .astro components. Covers Tailwind v4 Vite plugin, semantic @theme tokens, and component structure.
---

# Estilos y Componentes — Tailwind v4 + Tokens "Raíces de Esperanza"

Cómo estilizar sin sacrificar la velocidad ni la mantenibilidad.

## Tailwind CSS v4 (plugin de Vite)
- Usa `@tailwindcss/vite` en `astro.config.mjs` (`vite.plugins`). No configures PostCSS.
- Importa Tailwind una sola vez en `src/styles/global.css` con `@import "tailwindcss";`.

## Tokens semánticos (single source of truth)
- La fuente canónica de valores es `identity-visual/DESIGN.md`. Deriva siempre los tokens de ahí; nunca inventes hex sueltos.
- Declara tokens con `@theme` en `global.css`:
  - Colores: `--color-primary`, `--color-surface-container-low`, etc.
  - Tipografía: `--font-headline-md`, `--text-headline-md`, con `--text-*--line-height`, `--text-*--font-weight`, `--text-*--letter-spacing`.
  - Espaciado: `--spacing-base`, `--spacing-section-gap`, `--spacing-gutter`.
  - Radius: `--radius`, `--radius-xl`.
- **Obligatorio**: usa utilidades semánticas (`text-primary`, `bg-surface-container`) y NUNCA colores crudos (`text-red-700`) ni valores arbitrarios para colores.

## Tipografía
- Headings/labels = Montserrat; body = Be Vietnam Pro.
- Usa las utilidades de par: `font-headline-md text-headline-md` (familia + tamaño).
- Carga las fuentes Google en el `<head>` del `Layout.astro` con `preconnect` y `display=swap`.

## Iconos
- Material Symbols Outlined con `.material-symbols-outlined` (`font-variation-settings: 'FILL' 0, 'wght' 400, ...`) y `.fill-icon` para relleno.
- Usa `data-icon` igual al nombre del glifo como texto del `<span>`.

## Componentes reutilizables
- Componentes presentacionales en `src/components/` (Header, Hero, WelcomeBento, BottomNav, Footer).
- Separa datos de presentación: mapea contenido desde props o desde el diccionario `ui.ts`; no dupliques markup por idioma.
- Prefiere HTML/CSS/`.astro` sobre frameworks JS; evita dependencias pesadas de cliente.
- Sin ángulos rectos: usa `rounded-lg/xl` para cards y `rounded-full` para CTAs/badges.