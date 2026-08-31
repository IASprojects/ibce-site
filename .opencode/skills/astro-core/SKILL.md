---
name: astro-core
description: Use when writing or refactoring Astro 5.x pages, routes, layouts, .astro components, or i18n (es/en) for the IBCE landing site. Covers Zero-JS/Islands architecture, file-based routing, and native internationalization.
---

# Astro Core (v5.x) — IBCE Landing

Guías para construir con Astro manteniendo velocidad y mantenibilidad.

## Zero-JS by default
- Todo lo posible debe ser HTML generado en el servidor (SSG). El JS de cliente es la excepción, no la regla.
- Solo agrega interactividad con directivas `client:*` (`client:load`, `client:idle`, `client:visible`) en componentes "isla" que realmente la necesiten (p. ej. formularios, donaciones).
- Una isla JavaScript pesada no debe bloquear el render del resto: usa `client:idle`/`client:visible` para posponer hidratación.

## Archivo `.astro`
- Un componente `.astro` tiene frontmatter (`---`) + plantilla + `<style>` con alcance automático (scoped).
- Usa `Astro.props` tipado para recibir datos; `Astro.currentLocale` para leer el idioma.
- Mantén el frontmatter con lógica mínima y declara tipos con `interface Props`.
- El `<style>` de un `.astro` se empaqueta y se inyecta solo donde se usa (CSS mínimo por página).

## Enrutamiento por archivos (`src/pages/`)
- La estructura de `src/pages/` define las rutas; `index.astro` = `/`, `en/index.astro` = `/en/`.
- Coloca layouts en `src/layouts/`, componentes reutilizables en `src/components/`, y traducciones en `src/i18n/`.

## i18n nativo (es / en)
- Config en `astro.config.mjs`: `i18n.defaultLocale: 'es'`, `locales: ['es','en']`, `routing.prefixDefaultLocale: false` (español en la raíz).
- URLs por idioma con `getRelativeLocaleUrl('en', '/')`; no concatenes strings a mano.
- El diccionario vive en `src/i18n/ui.ts`: exporta `ui` (claves `es`/`en`) y `getTranslations(locale)`.
- Idealmente nunca dupliques markup por idioma: un solo componente + datos traducidos.

## SSG por defecto
- `output: 'static'` genera HTML estático listo para CDN/edge. No requiere servidor.