# Mejoras de usabilidad y rendimiento en la página de inicio

> Estado: completado

## Contexto / Problema

La página de inicio presenta la bienvenida y sus acciones principales, pero la jerarquía visual, la navegación móvil y el peso del recurso visual principal pueden dificultar encontrar rápidamente cómo visitar la iglesia o conocerla. El encabezado también carga fuentes externas e iconos que afectan el primer renderizado.

## Objetivo

Hacer que una persona nueva identifique rápidamente cuándo y dónde reunirse, qué esperar de su primera visita y cómo dar el siguiente paso, reduciendo a la vez los recursos que bloquean o retrasan la carga inicial.

## Alcance

- Incluido:
  - Mejorar la jerarquía y legibilidad del hero y la sección de bienvenida en escritorio y móvil.
  - Hacer más claras y accesibles la navegación, las llamadas a la acción y sus estados de foco.
  - Reducir solicitudes y trabajo de renderizado en la ruta inicial, incluida la carga de fuentes e imagen principal cuando el formato del recurso lo permita.
  - Mantener español e inglés y usar tokens de `identity-visual/DESIGN.md`.
- Fuera de alcance:
  - Cambiar otras páginas, rutas o el contenido de formularios externos.
  - Inventar o modificar horarios, direcciones, enlaces, fotografías o datos de contacto.
  - Añadir JavaScript de cliente o dependencias nuevas sin una necesidad comprobada.

## Áreas afectadas

- `landing/src/virtual-velocity/src/pages/index.astro`
- `landing/src/virtual-velocity/src/components/Header.astro`
- `landing/src/virtual-velocity/src/components/Hero.astro`
- `landing/src/virtual-velocity/src/components/WelcomeBento.astro`
- `landing/src/virtual-velocity/src/layouts/Layout.astro`
- `landing/src/virtual-velocity/src/styles/global.css`
- `landing/src/virtual-velocity/src/i18n/ui.ts`

## Criterios de aceptación

- [x] Una persona nueva puede identificar el horario y acceder claramente a la información para visitar la iglesia desde la página inicial.
- [x] La navegación y las acciones principales se pueden usar en móvil y teclado, con foco visible y nombres accesibles.
- [x] La página conserva su contenido en español e inglés y sus enlaces existentes.
- [x] Se reducen las solicitudes o el peso no esencial de recursos del primer renderizado sin introducir JavaScript de cliente.
- [x] Los estilos siguen los tokens de `identity-visual/DESIGN.md`.

## Riesgos / Notas

- La imagen original PNG se conserva. Se generaron versiones WebP de 640, 960 y 1440 px para adaptarse a móviles, tabletas y escritorio.
- No cambiar el destino del formulario externo aunque su URL parezca inusual.
- El repositorio ya tiene cambios ajenos en `identity-visual/DESIGN.md` y un directorio `.astro/` sin seguimiento; preservarlos.
