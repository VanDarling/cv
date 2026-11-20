# Bitácora de prompts — Sesión 10

> **Nota:** todavía no se cuenta con los encabezados obligatorios de la lección.
> Esta estructura es provisional y se adaptará a ellos cuando estén disponibles.
> El `prompts.md` original no se recibió; este archivo se creó nuevo.

- **CV de:** Vannia Delbouis Darling (cuenta de GitHub: VanDarling)
- **Fecha:** 19 de noviembre de 2026
- **Herramienta:** Claude Code (modelo Claude Opus 5.5) en la app de escritorio de Claude, en macOS.
- **Cómo se trabajó:** las instrucciones se dieron a Claude desde la sesión de un compañero,
  con autorización del profesor para usar Claude en lugar de opencode.

---

## Instrucciones principales dadas a Claude

1. Crear un proyecto independiente en `~/Documents/GitHub/cv-amigo` con el HTML, CSS y
   JavaScript originales del CV de Vannia, sin usar datos de otros CV.
2. Guardar una versión fiel del original (incluidos sus errores) para el primer commit.
3. Mejorar el diseño responsivo, la accesibilidad y las imágenes en un segundo commit.
4. Agregar la sección **Cursos y certificaciones** (`id="certifications"`) con su enlace en el
   menú, usando «Pendiente de completar» porque no hay cursos confirmados.
5. Probar a 375, 768 y 1280 píxeles y no afirmar pruebas que no se ejecutaron.
6. Esperar la identidad Git confirmada por la dueña de la cuenta antes de crear commits.
7. No publicar en GitHub hasta verificar el proyecto y la autorización de la cuenta.
8. Actualizar esta bitácora con los commits creados, modificando solo el tercer commit
   con `git commit --amend` y conservando los dos primeros.
9. Comparar un prompt vago y un prompt preciso en dos sesiones nuevas e independientes,
   partiendo del mismo commit, y registrar tres diferencias reales en «Qué cambió».

---

## Versión 1 — CV original

Se guardaron los archivos tal como se recibieron. Al probarlos en `http://localhost:8766`
se encontraron estos problemas (se conservan en esta versión):

| Problema | Evidencia |
|---|---|
| El botón **Anterior** de la galería no hace nada | En `interactions.js` no existe `prevButton.addEventListener` |
| `<ul>` de Experiencia sin cerrar | El navegador lo cierra solo; el verificador de etiquetas lo marca |
| Falta `<html lang="es">` y `</html>` | El documento no declara idioma |
| Regla `{ box-sizing: border-box; }` sin selector | El navegador la ignora (`content-box` en `.col-1-2`) |
| Regla `.contact-float` mal escrita | «Escríbeme» queda sin `right`/`bottom` y sin altura mínima |
| 5 imágenes de `/publico/img/muestras/` | Error 404 fuera de la plataforma (favicon, fondo, `thumb-cv.svg`, galería) |
| Pie de página | «Hecho a mano con HTML y CSS» quedaba dentro del enlace del correo |

Funcionaban: el menú (5 enlaces), el botón **Siguiente** y el botón «Más sobre mí».

## Versión 2 — Mejoras

- **Correcciones:** evento del botón Anterior, cierre de `<ul>`, `<html lang="es">`,
  selector `*` para `box-sizing`, regla de `.contact-float`, enlace del pie de página.
- **Imágenes locales** en `img/` (SVG propios con la paleta del CV): `profile.svg`, `banner.svg`,
  `thumb-cv.svg`, `article-html.svg`, `article-flexbox.svg`, `article-accessibility.svg`.
- **Respaldo de imágenes externas:** `project-cards.svg` y `project-water.svg`; si una imagen
  externa falla, JavaScript la cambia por su versión local (`data-fallback`).
- **Texto alternativo:** la imagen del encabezado es la ilustración de un conejito de caricatura
  leyendo un libro, no una silueta; se corrigió su `alt`.
- **Ortografía (solo acentos y letras):** Información, fábrica, embajada, Educación,
  Solución, problemática. No se cambió el contenido.
- **Diseño:** se conservaron los colores originales (`#265178`, `#7DB8E3`, `#15181B`, `#0F5C3D`),
  la fuente Arimo y el ancho máximo de 720 px. Se agregaron tarjetas, foco visible con teclado,
  enlace «Saltar al contenido» y diseño para tableta (≤ 700 px), teléfono (≤ 600 px)
  y teléfono pequeño (≤ 420 px).
- La lista de «Más sobre mí» ahora se inserta después del grupo de botones para no separarlos.
- Los correos `tucorreo@ejemplo.com` y `vandar@ejemplo.com` se conservaron y se marcaron
  como correos de ejemplo.

## Versión 3 — Cursos y certificaciones

- `<section class="row" id="certifications">` con `<h2>Cursos y certificaciones</h2>`.
- Enlace `<a href="#certifications">Cursos y certificaciones</a>` en el menú.
- Dos tarjetas («Curso por registrar» y «Certificación por registrar») con institución, fecha y
  constancia marcadas como **«Pendiente de completar»**. No se inventaron datos.
- Cuadrícula de 2 columnas que pasa a 1 en pantallas angostas.

---

## Qué cambió

**Cómo se hizo la prueba (19 de noviembre de 2026):**

- Se extrajeron dos copias del commit `393e8c3` (el CV antes de agregar certificaciones),
  sin historial de Git, en `~/Documents/GitHub/cv-amigo-pruebas/vago` y `.../preciso`,
  fuera de este repositorio.
- Cada prompt se ejecutó en una sesión nueva de Claude Code, abierta en su propia carpeta.
  Primero terminó la prueba vaga y después se inició la precisa.
- Ambas sesiones recibieron la misma nota de contexto: «Esta carpeta contiene un CV web
  hecho con HTML, CSS y JavaScript (…). Trabaja solo dentro de esta carpeta.»
- Se revisó el registro de cada sesión: cada una leyó y editó solo los archivos de su carpeta.
  La app les dio una carpeta de notas compartida, que estaba vacía cuando cada una la consultó;
  la sesión precisa solo vio que existía otra sesión llamada «prueba-vago», no sus resultados.
- Los resultados se guardaron en `cv-amigo-pruebas/vago.diff` y `cv-amigo-pruebas/preciso.diff`.

**Prompt vago:**

> Agrega una sección de cursos a mi CV.

**Prompt preciso:**

> En index.html agrega `<section class="row" id="certifications">` con
> `<h2>Cursos y certificaciones</h2>`, después de Educación. Agrega el enlace
> `<a href="#certifications">Cursos y certificaciones</a>` al menú. No inventes cursos:
> crea dos tarjetas con institución, fecha y constancia marcadas «Pendiente de completar».
> Usa los colores y la fuente de css/styles.css, que se vea en una columna a 375 px,
> y no modifiques otras secciones.

**Tres diferencias entre los resultados:**

1. **Datos inventados.** Con el prompt vago, la IA escribió tres cursos que Vannia no ha
   tomado («Desarrollo web con HTML y CSS · 2025», «Programación orientada a objetos en
   Java · 2024» e «Inglés intermedio · 2023») y añadió la nota «Cursos de ejemplo». Con el
   prompt preciso no inventó nada: las dos tarjetas dicen «Pendiente de completar».
2. **Identificador, título y menú.** El prompt vago produjo `id="courses"`, `<h2>Cursos</h2>`
   y un enlace «Cursos», que no cumplen lo que pide la plataforma. El preciso produjo
   `id="certifications"`, `<h2>Cursos y certificaciones</h2>` y el enlace
   `<a href="#certifications">`, tal como se pidió.
3. **Información de cada tarjeta.** En el resultado vago cada curso solo tiene nombre y una
   línea «plataforma · año», sin constancia. En el preciso cada tarjeta tiene una lista con
   Institución, Fecha y Constancia, y usa las columnas `col-1-2` del CV, que pasan a una sola
   columna a 600 px o menos.

Nota: la sección de este repositorio (commit 3) se hizo antes de esta prueba, con
instrucciones detalladas; no es la copia del resultado del prompt preciso.

---

## Verificaciones ejecutadas por Claude

En el navegador integrado de la app de Claude, sirviendo la carpeta en `localhost`:

| Verificación | 375 px | 768 px | 1280 px |
|---|---|---|---|
| Imágenes cargadas | 5/5 | 5/5 | 5/5 |
| Galería: Anterior y Siguiente (1 → 3 → 1 → 2) | ✓ | ✓ | ✓ |
| «Más sobre mí»: `aria-expanded` true/false/true, sin duplicar la lista | ✓ | ✓ | ✓ |
| Enlace del menú a `#certifications` | ✓ | ✓ | ✓ |
| Desbordamiento horizontal | No | No | No |

Además:

- Verificador de etiquetas (script de Python): sin etiquetas abiertas, sin `img` sin `alt`,
  sin IDs duplicados.
- Los 6 enlaces del menú apuntan a secciones existentes.
- Respaldo de imagen: al romper a propósito la imagen de Card-Jitsu, cambió a `img/project-cards.svg`.
- A 375 px, todos los botones y enlaces del menú miden al menos 44 px de alto.
- Consola del navegador sin mensajes ni errores.

## Historial de Git

La identidad Git fue confirmada por la dueña de la cuenta y se configuró solo en este
repositorio: `Vannia Delbouis Darling <212460084+VanDarling@users.noreply.github.com>`.
El número del correo coincide con el ID público de la cuenta VanDarling en GitHub.

| Orden | Commit | Mensaje |
|---|---|---|
| 1 | `bbc1860` | Agregar CV original de la sesion 7 |
| 2 | `393e8c3` | Mejorar diseno responsivo y accesibilidad |
| 3 | `3a67e29` | Agregar seccion de cursos y certificaciones |
| 4 | (este commit) | Agregar comparacion de prompts en la bitacora |

Verificaciones realizadas sobre el historial:

- Autora y committer de los tres commits: Vannia Delbouis Darling.
- Cada commit coincide exactamente con su versión (original, mejoras, certificaciones).
- El primer commit conserva los errores originales; el segundo los corrige.
- `id="certifications"` aparece solo a partir del tercer commit.
- Sin contraseñas, tokens ni correos de otras cuentas en el historial.
- Los mensajes incluyen a Claude como coautor (`Co-Authored-By`), según la autorización del profesor.
- El tercer commit se modificó con `git commit --amend` para actualizar esta bitácora;
  los dos primeros no cambiaron.
- El cuarto commit solo modifica esta bitácora para agregar «Qué cambió».
- Remoto `origin`: `https://github.com/VanDarling/cv.git`.

## Pendiente

- [x] Confirmar la identidad Git de la dueña de la cuenta y crear los tres commits.
- [x] Crear el repositorio `VanDarling/cv` (existe, es público y está vacío).
- [x] Subir los tres primeros commits desde la cuenta VanDarling (`git push -u origin main`).
- [x] Comparar el prompt vago y el preciso y documentar «Qué cambió».
- [ ] Subir el cuarto commit a `VanDarling/cv`.
- [ ] Validar en https://validator.w3.org/ (no se ejecutó).
- [ ] Probar en Safari y en un teléfono real (solo se probaron anchos emulados).
- [ ] Completar cursos, certificaciones y correo real cuando haya datos.
- [ ] Registrar el repositorio en la plataforma educativa.
