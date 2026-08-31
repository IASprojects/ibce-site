---
name: astro-pr-review
description: Use when reviewing a pull request or diff in the IBCE Astro project to catch bad practices, bugs, and performance/i18n/token violations. Use on any .astro, .ts, .css, or config change before approving or merging.
---

# Revisión de PRs — Astro (Tech Lead)

Guía para revisar cambios de la landing IBCE (Astro + Tailwind v4 + i18n es/en). Busca problemas reales, no estilo cosmético.

## Cómo revisar

1. Mira el diff completo, no solo los archivos marcados.
2. Confirma que el cambio cumple el propósito declarado del PR.
3. Corre `astro check` y `astro build` localmente si aplica.
4. Señala problemas con severidad y una sugerencia concreta; no solo "esto está mal".

## Checklist — Core de Astro

- [ ] Zero-JS: ¿se introdujo JavaScript de cliente sin necesidad? Prefiere HTML/SSG.
- [ ] Islas correctas: los componentes interactivos usan `client:*` apropiado (`client:idle`/`client:visible` para contenido no crítico), y solo en islas, no en toda la app.
- [ ] `.astro` bien usado: frontmatter mínimo, props tipados con `interface Props`, lógica pesada fuera de la plantilla.
- [ ] Sin `Astro.response`/side-effeects en render de páginas estáticas (debe ser SSG puro).
- [ ] Rutas correctas en `src/pages/` (`index.astro` = `/`, `en/index.astro` = `/en/`).

## Checklist — i18n (es/en)

- [ ] Sin textos hardcodeados en el markup: toda cadena visible sale de `src/i18n/ui.ts`.
- [ ] Claves espejo en `es` y `en`: si agregas una clave, existe en ambos y con el mismo nombre.
- [ ] Enlaces entre idiomas usan `getRelativeLocaleUrl`, no strings manuales.
- [ ] `html lang` dinámico (`Astro.currentLocale`), y `getTranslations` recibe el locale correcto.
- [ ] No se filtró texto del mockup monolingüe (p. ej. "Soy nuevo / I'm New" fusionado).

## Checklist — Design tokens / Tailwind

- [ ] Solo tokens semánticos: NUNCA hex sueltos ni utilidades crudas (`text-red-700`).
- [ ] Valores consistentes con `identity-visual/DESIGN.md` (fuente canónica), no con el spec desactualizado.
- [ ] Sin valores arbitrarios para colores (`text-[#a03f28]`); solo para casos puntuales justificados.
- [ ] Tipografía correcta: Montserrat (headings/labels), Be Vietnam Pro (body).
- [ ] Sin ángulos rectos: `rounded-lg/xl` en cards, `rounded-full` en CTAs/badges.

## Checklist — Componentes

- [ ] Datos separados de presentación: contenido mapeado desde props/diccionario, sin markup duplicado por idioma.
- [ ] Props tipadas y con valores por defecto razonables.
- [ ] Sin dependencias pesadas de cliente introducidas "por si acaso".
- [ ] Componentes pequeños y de una responsabilidad única.

## Checklist — Rendimiento

- [ ] Imágenes vía `astro:assets` (WebP/AVIF, `widths`/`sizes`, lazy), no `<img>` crudo con el PNG de 2.6 MB.
- [ ] `width`/`height` (o `aspect-ratio`) en imágenes para evitar CLS.
- [ ] Fuentes con `preconnect` + `display=swap`; solo los pesos usados.
- [ ] SVG inline y limpio para logos/iconos; prefieren `currentColor`.
- [ ] Sin `background-image` con PNG enorme si hay alternativa más ligera.

## Checklist — HTML / Accesibilidad / Seguridad

- [ ] Semántica correcta: `<header>`, `<main>`, `<nav>`, `<footer>`, una sola `<h1>`.
- [ ] Todo elemento interactivo es `<a>` o `<button>` (no `<div onclick>`); el mockup usaba `onclick` — conviértelo a `<a href>`.
- [ ] `target="_blank"` siempre con `rel="noopener noreferrer"`.
- [ ] Imágenes con `alt`/`aria-label` descriptivo; iconos decorativos con `aria-hidden` si aplica.
- [ ] Contraste legible sobre fondos (texto sobre hero con gradiente).
- [ ] Sin `innerHTML` con contenido no confiable; sin `unsafe`.
- [ ] Enlaces de anclaje (`#visitanos`) apuntan a IDs que existen en la página.

## Checklist — Limpieza

- [ ] Sin `console.log`, `debugger`, código comentado o imports sin usar.
- [ ] Tipos/verificaciones no rotas (`astro check` limpio).
- [ ] `package.json`/lockfile coherentes (sin dependencias huérfanas).

## Cómo reportar

Formato sugerido por hallazgo:

```
[severidad: blocker|major|minor|nit] archivo:línea
Problema: <qué está mal y por qué afecta velocidad/mantenibilidad>
Sugerencia: <cambio concreto con ejemplo de código>
```

Blockers: rompe build o i18n. Major: viola tokens/rendimiento/seguridad. Minor: consistencia. Nit: cosmético (no impide merge).