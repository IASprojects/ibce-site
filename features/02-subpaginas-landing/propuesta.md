# Subpáginas de la landing con contenido de ejemplo

> Estado: completado

## Contexto / Problema
El sitio actual (`landing/src/virtual-velocity/`) solo tiene la página de inicio (`/` y `/en/`) con las secciones Hero y WelcomeBento. El sitemap definido en `landing/src/.agents/AGENTS.MD` describe más secciones (Identidad, Voluntariado/Impacto, Donaciones/Transparencia, Contacto) que aún no existen como páginas. Los enlaces de navegación (Header, BottomNav, Footer) usan anclas `#...` o `#` sin destino.

## Objetivo
Crear 5 subpáginas bilingües (es/en) con información de ejemplo y conectar toda la navegación del sitio para apuntar a URLs reales, manteniendo el diseño "Raíces de Esperanza" y el stack Astro SSG + i18n nativo.

## Alcance
- Incluido:
  - Subpáginas es/en: `nosotros`, `visitanos`, `voluntariado`, `donaciones`, `contacto`.
  - Componentes de sección por página (Identity, Visit, Volunteer, Donate, Contact).
  - Claves de traducción (es/en) en `src/i18n/ui.ts`.
  - Enlaces de Header, BottomNav y Footer hacia las URLs reales, con i18n y estado activo.
  - Documentación de la feature en `features/02-subpaginas-landing/`.
- Fuera de alcance:
  - Formularios funcionales (WhatsApp/Google Forms se abren como enlaces externos).
  - Galería multimedia real (placeholders SVG/textuales).
  - Integración de pagos reales (SINPE/transferencia solo como datos de ejemplo).
  - Cambios al diseño `identity-visual/`.

## Áreas afectadas
- `src/i18n/ui.ts`
- `src/components/Header.astro`, `src/components/BottomNav.astro`, `src/components/Footer.astro`
- Nuevos: `src/components/Identity.astro`, `src/components/Visit.astro`, `src/components/Volunteer.astro`, `src/components/Donate.astro`, `src/components/Contact.astro`
- Nuevas páginas: `src/pages/nosotros.astro`, `src/pages/visitanos.astro`, `src/pages/voluntariado.astro`, `src/pages/donaciones.astro`, `src/pages/contacto.astro` y sus espejos en `src/pages/en/`
- Skills aplicadas: `astro-core`, `styling-tokens`, `feature-workflow`
- Diseño: tokens de `identity-visual/DESIGN.md`

## Criterios de aceptación
- [x] `npm run build` genera HTML estático para `/`, `/nosotros`, `/visitanos`, `/voluntariado`, `/donaciones`, `/contacto` y sus versiones `/en/*`.
- [x] Cada subpágina usa solo tokens semánticos (sin colores crudos) y tipografías Montserrat / Be Vietnam Pro.
- [x] Header, BottomNav y Footer enlazan a URLs reales por idioma (sin anclas sueltas ni `#`).
- [x] BottomNav resalta la página activa según la ruta.
- [x] Las 5 subpáginas muestran información de ejemplo coherente con la identidad IBCE.

## Riesgos / Notas
- El `package.json` instalado usa Astro ^7.2.9 (el AGENTS dice v5): se sigue la API ya usada (`astro:i18n`, `Astro.currentLocale`).
- El estado activo del BottomNav se calcula con `Astro.url.pathname`, no con props hardcodeadas.
- El `dist/` existente puede quedar obsoleto hasta regenerar con build.