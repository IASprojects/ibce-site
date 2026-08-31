# Pasos — Subpáginas de la landing con contenido de ejemplo

1. [x] Crear `features/02-subpaginas-landing/propuesta.md` y `steps.md`.
   - Archivos: `features/02-subpaginas-landing/`
   - Verificación: archivos presentes.

2. [x] Extender `src/i18n/ui.ts` con claves de traducción (es/en) para las 5 subpáginas:
   nosotros (historia, misión, visión, galería), visitanos (horarios, qué esperar, ubicación), voluntariado (4 equipos, CTA), donaciones (integridad, SINPE/transferencia, CTA), contacto (teléfono, WhatsApp, correo, redes, oración).
   - Archivos: `src/i18n/ui.ts`
   - Verificación: `npm run build` sin errores.

3. [x] Crear componentes de sección bilingües:
   `src/components/Identity.astro`, `Visit.astro`, `Volunteer.astro`, `Donate.astro`, `Contact.astro`.
   - Usan `getTranslations(Astro.currentLocale ?? 'es')`, tokens semánticos, Material Symbols y `rounded-xl/full`.
   - Verificación: render en build sin errores.

4. [x] Crear páginas es y en (5 pares):
   `src/pages/{nosotros,visitanos,voluntariado,donaciones,contacto}.astro` y espejos en `src/pages/en/`.
   - Cada página compone `Header` + sección + `BottomNav` + `Footer`.
   - Verificación: `npm run build` genera `/x/index.html` y `/en/x/index.html` en `dist/` (12 páginas).

5. [x] Actualizar navegación:
   - `Header.astro`: menú con Inicio, Visítanos, Nosotros, Voluntariado, Donaciones usando `getRelativeLocaleUrl`.
   - `BottomNav.astro`: hrefs reales (Inicio, Visítanos, Voluntariado, Donar) + estado activo por `Astro.url.pathname`.
   - `Footer.astro`: Dirección → `/visitanos`, Contacto → `/contacto`, Oración → `/contacto#oracion`, Financiera → `/donaciones`.
   - Verificación: build y revisión de `href` en `dist/`.

6. [x] Cierre: verificar `npm run build`, revisar `dist/`, tachar pasos y actualizar estado en `propuesta.md`.
   - Verificación: `npm run build` exitoso (12 páginas) y revisión de HTML generado (idioma, menú activo, footer).