---
name: feature-workflow
description: Use BEFORE implementing any new feature or non-trivial change in the IBCE repo. Enforces documenting each feature in a numbered folder under features/ with a propuesta.md and steps.md before writing code.
---

# Workflow de Features — documentar antes de implementar

Ninguna feature nueva se implementa sin antes documentarla. La propuesta y los pasos viven en la carpeta `features/` y guían tanto a humanos como a asistentes de IA.

## Regla de oro

> Planifica primero, implementa después. Nunca empieces a escribir código sin una propuesta y pasos aprobados.

## Estructura

Cada feature tiene su carpeta **numerada** en la raíz del repo:

```
features/
  001-service-times-hero/
    propuesta.md
    steps.md
  002-language-toggle/
    propuesta.md
    steps.md
```

- El número es secuencial y con ceros a la izquierda (`001`, `002`, ...).
- El slug es kebab-case y describe la feature.
- Revisa `features/` existente para tomar el siguiente número y evitar colisiones.

## `propuesta.md`

Contenido mínimo (usa este esqueleto):

```markdown
# [Nombre de la feature]

> Estado: propuesta | en progreso | bloqueado | completado

## Contexto / Problema
(Qué falta, qué duele, por qué ahora)

## Objetivo
(Qué se quiere lograr, en una frase medible)

## Alcance
- Incluido:
- Fuera de alcance:

## Áreas afectadas
(Archivos/componentes/skills/diseño que se tocan, p. ej. src/components/Hero.astro, src/i18n/ui.ts)

## Criterios de aceptación
- [ ] Requisito verificable 1
- [ ] Requisito verificable 2

## Riesgos / Notas
(Dependencias, decisiones de diseño, tokens afectados)
```

## `steps.md`

Plan de implementación **incremental y verificable**, pensado para que un agente de IA ejecute un paso a la vez:

```markdown
# Pasos — [Nombre de la feature]

1. [Descripción concreta del paso]
   - Archivos: `src/...`
   - Verificación: `astro build` / `astro check` / render en `/`

2. [Siguiente paso]
   - Archivos: ...
   - Verificación: ...

n. Cierre: revisión, limpieza y actualización del estado en propuesta.md
```

## Mejores prácticas para cambios con IA

- **Una feature, una rama/PR.** No mezcles temas no relacionados.
- **Pasos atómicos y pequeños**: cada paso hace una cosa y termina en algo verificable (build, check, prueba, vista).
- **Cada paso declara su verificación** (`astro check`, `astro build`, un test, o un render concreto). Un paso sin verificación es un paso incompleto.
- **Ordena por dependencias**: tokens/config primero, luego componentes, luego páginas.
- **Usa el skill correcto** por área (`astro-core`, `styling-tokens`, `web-performance`) y los tokens de `DESIGN.md`.
- **Marca el progreso**: tacha `[x]` los pasos completados en `steps.md` y actualiza `Estado` en `propuesta.md` (no dejes docs obsoletos).
- **Revisa contra el PR** antes de cerrar: compara `steps.md` con el diff real y reporta divergencias.

## Flujo típico

1. Crear `features/NNN-slug/` con `propuesta.md` y `steps.md`.
2. Confirmar/ajustar la propuesta antes de tocar código.
3. Ejecutar los pasos uno a uno, verificando en cada iteración.
4. Actualizar estado y pasos al terminar; linkear el PR en `propuesta.md`.

Si alguien pide implementar algo nuevo y no existe `features/NNN-slug/`, detente y créalo primero.