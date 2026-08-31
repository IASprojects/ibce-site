---
name: web-performance
description: Use when optimizing the IBCE landing site for ultra-fast loading (QR-code mobile entry), images, fonts, SVGs, or Lighthouse/Core Web Vitals. Covers astro:assets, font loading, clean SVG, and zero-JS delivery.
---

# Rendimiento y Optimización — carga ultrarrápida en móvil (QR)

El sitio se abre desde un QR impreso en banners e invitaciones; optimiza para el primer clic en una red móvil lenta.

## Principios
- Prerenderiza todo (SSG). El objetivo es que el contenido sea visible sin esperar JS.
- Mantén el JS de cliente en cero o cerca de cero para la landing.
- Prioriza Core Web Vitals: LCP, CLS, INP.

## Imágenes
- Usa `astro:assets` (`Astro.Image`/`Image` de `astro:assets`) para servir WebP/AVIF optimizado, con `widths`/`sizes` y lazy loading.
- La hero (`herosample.png`, ~2.6 MB) es candidata a: redimensionar, comprimir y servir como `webp`/`avif` con `srcset`.
- Pon `width`/`height` (o `aspect-ratio`) para evitar saltos de layout (CLS).

## Fuentes
- `preconnect` a `fonts.googleapis.com` y `fonts.gstatic.com` (crossorigin).
- `font-display: swap` / `&display=swap` para evitar FOIT y bloqueo de render.
- Carga solo los pesos usados (Montserrat 400-800, Be Vietnam Pro 400-700).

## SVG limpio
- Embeber SVG inline para logos/iconos (sin request extra), con `currentColor` para poder teñirlos con tokens.
- Elimina metadata/editor cruft y `<title>` duplicados; usa `viewBox` y rutas mínimas.

## CSS
- Gracias a Astro, cada página carga solo su CSS. No importes utilidades no usadas.
- Evita `background-image` con PNG enorme; usa gradientes + imagen comprimida.

## Verificación
- Corre `astro build` y revisa el peso de `dist/` (CSS/JS/imagen).
- Verifica LCP: el hero debería pintarse con imagen comprimida + gradiente de respaldo.