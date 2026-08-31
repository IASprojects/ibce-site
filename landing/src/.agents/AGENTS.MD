# Guidelines for AI Agents & Developers (`AGENTS.md`)

Welcome to the **Iglesia Bíblica Camino de Esperanza (IBCE)** web repository. This document serves as the single source of truth for AI coding agents (such as Claude Code, Cursor, Copilot, ChatGPT, Gemini) and human developers working on this codebase.

---

## 1. Project Overview & Context

- **Organization:** Iglesia Bíblica Camino de Esperanza (IBCE)
- **Location:** Guayabo de Bagaces, Guanacaste, Costa Rica
- **Core Goals:**
  1. **Primary Visitor Touchpoint:** Optimized for mobile phones scanning a QR code on church entrance banners, invitation cards, or brochures.
  2. **Community Impact & Transparency:** Encourage volunteer participation in service teams (Social Action, Senior Care, Church Maintenance, Music/Arts) and foster donor trust through clear financial accountability.
  3. **Mission, Vision & History:** Clearly communicate the church’s identity, values, historical background in Guayabo de Bagaces, and dynamic media (photos/videos).
- **Brand Vibe & Tone:** Security, dynamism, radical hospitality, warmth, and hope (*"Raíces de Esperanza"* design system).

---

## 2. Technical Stack & Dependencies

- **Framework:** **Astro v5.x** (Static Site Generation / Zero-JS by default for ultra-fast QR loading).
- **Styling:** Tailwind CSS (configured with custom theme tokens & Material 3 semantic variables).
- **Typography:**
  - **Headings & Brand:** `Montserrat` (Google Fonts)
  - **Body & Text:** `Be Vietnam Pro` (Google Fonts)
- **Icons:** Google Material Symbols Outlined (`font-variation-settings: 'FILL' 0..1, 'wght' 400`).
- **Internationalization (i18n):** Astro native i18n routing (`defaultLocale: 'es'`, `locales: ['es', 'en']`).
- **Deployment Target:** Vercel / Netlify / Cloudflare Pages (Static Edge delivery).

---

## 3. Design System & Theme Tokens ("Raíces de Esperanza")

AI Agents **MUST** strictly use semantic Tailwind tokens rather than arbitrary standard utility colors (e.g., use `text-primary` instead of `text-red-700`).

### A. Color Palette

| Token Name | Hex Code | Usage / Purpose |
| :--- | :--- | :--- |
| `primary` | `#a03f28` | Terracotta — Main brand buttons, primary titles, CTAs |
| `primary-container` | `#c0573e` | Lighter Terracotta — Badge fills, active navigation states |
| `on-primary` | `#ffffff` | High contrast text over primary backgrounds |
| `secondary` | `#466556` | Deep Sage Green — Secondary actions, outlines, natural accents |
| `secondary-container` | `#c8ead8` | Light Sage — Background fills for icon circles & subtle cards |
| `on-secondary-container` | `#4c6b5c` | Dark text over light sage elements |
| `tertiary` | `#7b5500` | Warm Amber — Highlight subtitles & feature accents |
| `tertiary-fixed` | `#ffdeac` | Soft Golden Amber — Family & kids section cards |
| `background` / `surface` | `#fef9f0` | Warm Sand — Light mode page background |
| `surface-container-low` | `#f8f3ea` | Bento card backgrounds, subtle elevation |
| `surface-container` | `#f2ede4` | Hover states & interactive block surfaces |
| `surface-container-high` | `#ece8df` | Header & Footer background fills |
| `on-surface` | `#1d1c16` | Deep Charcoal — Primary headings & readable body text |
| `on-surface-variant` | `#56423d` | Warm Muted Brown — Subtitles & English translations |

### B. Typography & Spacing Scale

- **Display Large (`font-display-lg`):** `Montserrat`, `48px` / Line Height `56px`, Weight `700`
- **Display Mobile (`font-display-lg-mobile`):** `Montserrat`, `32px` / Line Height `40px`, Weight `700`
- **Headline Medium (`font-headline-md`):** `Montserrat`, `24px` / Line Height `32px`, Weight `600`
- **Body Large (`font-body-lg`):** `Be Vietnam Pro`, `18px` / Line Height `28px`, Weight `400`
- **Body Medium (`font-body-md`):** `Be Vietnam Pro`, `16px` / Line Height `24px`, Weight `400`
- **Label / Caps (`font-label-caps`):** `Montserrat`, `12px` / Line Height `16px`, Weight `700`, Tracking `0.1em`
- **Corner Radii:** Soft rounded corners (`rounded-xl` / `0.75rem` for cards; `rounded-full` for CTAs). Zero sharp 90° angles.

---

## 4. Repository Structure (Astro v5)

```text
ibce-landing/
├── public/
│   ├── assets/
│   │   ├── favicon.svg
│   │   ├── herosample.png      # Hero image asset
│   │   └── logos/              # IBCE SVG logos
│   └── sitemap.xml             # Generated static sitemap
├── src/
│   ├── components/
│   │   ├── Header.astro        # Fixed top navigation & language toggle
│   │   ├── Hero.astro          # QR-optimized primary landing banner
│   │   ├── WelcomeBento.astro  # First-time visitor guide (3-pillar bento grid)
│   │   ├── Identity.astro      # History, Mission & Vision sections
│   │   ├── ImpactVolunteer.astro# Volunteer teams & Financial integrity block
│   │   ├── BottomNav.astro     # Mobile-only fixed bottom navbar
│   │   └── Footer.astro        # Contact info, map & prayer request links
│   ├── i18n/
│   │   └── ui.ts               # Translation keys (ES / EN)
│   ├── layouts/
│   │   └── Layout.astro        # Global head, font preloads, SEO metadata
│   └── pages/
│       ├── index.astro         # Default Spanish Landing Page (`/`)
│       └── en/
│           └── index.astro     # English Landing Page (`/en/`)
├── astro.config.mjs            # Astro 5 configuration & i18n settings
├── tailwind.config.mjs         # Color tokens & typography extensions
└── AGENTS.md                   # AI Agent Directives (This file)
```

## Site Map

```text
[ Inicio / Landing Page (URL Root: /) ]
│
├── 1.0 Header & Navegación Global (Fixed Top Bar)
│   ├── Logo IBCE (Isotipo + Tipograma)
│   ├── Menú de Navegación (Anchor Links):
│   │   ├── #inicio (Inicio)
│   │   ├── #visitanos (Visítanos / Guía de Bienvenida)
│   │   ├── #nosotros (Nuestra Historia, Misión y Visión)
│   │   ├── #voluntariado-impacto (Equipos & Impacto)
│   │   └── #donaciones (Transparencia Financiera & Apoyo)
│   ├── Switcher de Idioma [ ES | EN ]
│   └── CTA Principal: [ ¡Soy Nuevo! / I'm New ]
│
├── 2.0 Sección Hero (Experiencia QR y Primer Impacto)
│   ├── Badge de Horario & Ubicación: "Domingos 9:00 AM - Guayabo de Bagaces"
│   ├── Titular Principal & Subtítulo (Español / Inglés)
│   └── Botones de Acción Inmediata:
│       ├── [ Soy Nuevo / Formulario de Bienvenida ] -> Opens Google Form / Modal
│       └── [ Conócenos más / Redes Sociales ]
│
├── 3.0 Guía de Bienvenida al Visitante (Bento Grid)
│   ├── Tarjeta 1: "Ven tal como eres" (Aceptación y ambiente relajado)
│   ├── Tarjeta 2: "Espacio para la familia" (Cuidado de niños y comunidad)
│   └── Tarjeta 3: "Enseñanza clara y práctica" (Mensajes aplicables a la vida)
│
├── 4.0 Identidad: Misión, Visión e Historia
│   ├── Reseña Histórica de IBCE en Guayabo de Bagaces
│   ├── Tarjetas paralelas: Misión y Visión
│   └── Galería Multimedia (Fotos de la comunidad, adoración y reuniones)
│
├── 5.0 Acción Social, Voluntariado & Impacto
│   ├── Título: "Sumando Manos, Transformando Vidas"
│   ├── Grid de Equipos de Servicio (Cards con botón para unirse):
│   │   ├── Acción Social
│   │   ├── Atención al Adulto Mayor
│   │   ├── Mantenimiento del Templo
│   │   └── Música y Artes
│   └── CTA: [ Unirme a un Equipo ] -> Abre Formulario de Voluntariado/WhatsApp
│
├── 6.0 Transparencia Financiera & Donaciones
│   ├── Módulo de Integridad Financiera (Explicación de controles y rendición de cuentas)
│   ├── Métodos para apoyar la misión (SINPE Móvil, Cuentas Bancarias / Transferencia)
│   └── CTA: [ Ver Informe de Transparencia / Apoyar la Misión ]
│
├── 7.0 Pie de Página (Footer & Contacto)
│   ├── Información de Contacto (Teléfono, WhatsApp Directo, Correo)
│   ├── Dirección Física con Enlace a Waze / Google Maps
│   ├── Enlaces a Redes Sociales (Facebook, Instagram, YouTube)
│   ├── Formulario / Enlace para Peticiones de Oración
│   └── Derechos Reservados & Aviso de Privacidad
│
└── 8.0 Barra de Navegación Inferior Móvil (Mobile Bottom Bar)
    ├── [Inicio] (Home Icon)
    ├── [Visítanos] (Location Icon)
    ├── [Misiones] (Volunteer Icon)
    └── [Donar] (Payments Icon)
```