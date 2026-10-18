# Pasos — Mejoras de usabilidad y rendimiento en la página de inicio

1. [x] Revisar los recursos y controles actuales de la ruta inicial en español e inglés.
   - Archivos: `landing/src/virtual-velocity/src/pages/index.astro`, `src/components/`, `src/layouts/Layout.astro`, `src/i18n/ui.ts`, `public/assets/`
   - Verificación: inspección del contenido, enlaces, imágenes y estilos existentes.

2. [x] Mejorar la estructura semántica, claridad de la bienvenida, accesibilidad y navegación adaptable usando el contenido existente.
   - Archivos: `src/components/Header.astro`, `src/components/Hero.astro`, `src/components/WelcomeBento.astro`, `src/i18n/ui.ts`, `src/styles/global.css`
   - Verificación: revisar rutas y textos traducidos, estados de teclado y tamaños táctiles en el markup.

3. [x] Reducir recursos críticos de carga y desplazamiento visual sin añadir JavaScript al cliente.
   - Archivos: `src/layouts/Layout.astro`, `src/components/Hero.astro`, `public/assets/` (solo si la conversión es viable)
   - Verificación: comparar recursos cargados y dimensiones antes y después; ejecutar `npm run build` y `npm run check`.

4. [x] Cierre: revisar el diff, conservar cambios preexistentes y actualizar el estado de esta propuesta.
   - Archivos: esta carpeta de feature y los archivos de implementación
   - Verificación: `git diff --check`, build estático y revisión de rutas generadas en ambos idiomas.
