# Sesión 11 · css/generated.css

## Falla 1
- **Principio:** Jerarquía
- **Línea:** css/generated.css, línea 552
- **Qué falla:** Los títulos de proyectos medían 1.05rem y los de certificaciones 1.1rem.
- **Por qué:** Dos estilos de h3 daban distinto peso visual a títulos del mismo nivel.
- **Cómo la corregí:** Unifiqué ambos h3 en 1.1rem (17.6px); comprobé el valor igual en ambas reglas.

## Falla 2
- **Principio:** Tipografía
- **Línea:** css/generated.css, línea 410
- **Qué falla:** La etiqueta de estado estaba en 0.8rem (12.8px), menor que el texto base de 16px.
- **Por qué:** El texto pequeño pierde legibilidad y cuesta más escanear las tarjetas.
- **Cómo la corregí:** La subí a 0.875rem (14px); comprobé el tamaño en la regla de `.cert-status`.

## Falla 3
- **Principio:** Espacio
- **Línea:** css/generated.css, línea 230
- **Qué falla:** En el CSS original, tres columnas de 33.333% más 8px de padding excedían el ancho disponible.
- **Por qué:** Con `content-box`, los 8px de padding por lado se sumaban fuera del 33.333% y la fila rebasaba su ancho.
- **Cómo la corregí:** Apliqué `border-box` y desconté dos gutters de 1rem: `3 × ((W - 32px) / 3) + 32px = W`.

## Falla 4
- **Principio:** Color
- **Línea:** css/generated.css, línea 598
- **Qué falla:** El enlace del pie tenía contraste 3.89:1 (`#7DB8E3` sobre `#265178`).
- **Por qué:** El texto normal requiere al menos 4.5:1 para cumplir WCAG AA.
- **Cómo la corregí:** Cambié el enlace a blanco; la medición de contraste subió a 8.30:1.

## Lo que encontró opencode

No hay hallazgos verificables de opencode: la nota anterior indica que su revisión quedó pendiente, y `prompts.md` registra que se usó Claude Code en su lugar. Por tanto, no se puede determinar si opencode tenía razón; no hay observaciones suyas que contrastar. Las cuatro fallas anteriores corresponden a mi revisión, no a opencode.
