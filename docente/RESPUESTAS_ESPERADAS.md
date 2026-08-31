# RESPUESTAS ESPERADAS — CanchaYa

> **MATERIAL DEL DOCENTE.** Lista completa de los **12 problemas intencionales** del laboratorio CanchaYa, con ubicación, principio violado, evidencia, impacto, severidad sugerida, solución y posibles formulaciones equivalentes del estudiante.
>
> La IA correctora debe usar este archivo como **referencia principal**, pero **NO exigir coincidencia textual**. Las respuestas semánticamente equivalentes son aceptables.

---

## 📊 Resumen tabular

| ID | Categoría | Principio | Severidad |
|---|---|---|---|
| C-01 | Accesibilidad | POUR — Operable (foco no visible) | Media |
| C-02 | Accesibilidad | POUR — Perceptible (contraste bajo) | Media |
| C-03 | Accesibilidad | POUR — Robusto / WCAG (input sin label) | Media |
| C-04 | Accesibilidad | POUR — Perceptible (imagen sin alt) | Baja |
| C-05 | Usabilidad | Nielsen #3 (control y libertad) | Alta |
| C-06 | Usabilidad | Nielsen #5 (prevención) | Alta |
| C-07 | Usabilidad | Nielsen #9 (errores y recuperación) | Media |
| C-08 | Psicología cognitiva | Ley de Hick | Media |
| C-09 | Psicología cognitiva | Miller / chunking | Media |
| C-10 | Psicología cognitiva | Ley de Fitts | Alta |
| C-11 | Dark pattern | Preselección | Media |
| C-12 | Dark pattern | Costos ocultos | Media |

**Totales:** 3 Alta · 7 Media · 2 Baja.
**Distribución:** 4 accesibilidad, 3 usabilidad, 3 psicología cognitiva, 2 dark patterns.

---

## C-01 · Botones sin foco visible (POUR — Operable)

| Campo | Valor |
|---|---|
| **Ubicación** | Todos los botones y enlaces de CanchaYa |
| **Descripción** | El CSS aplica `outline: none` globalmente a `button, a, input`. Cuando el usuario navega con teclado (Tab), no aparece ningún indicador visual de qué elemento está enfocado. |
| **Principio principal** | **WCAG / POUR — Operable.** Toda la interfaz debe ser operable por teclado. |
| **Principio alternativo** | WCAG 2.4.7 (focus visible), Nielsen #1 (visibilidad del estado). |
| **Evidencia** | `button, a, input { outline: none; }` en `src/styles.css`. |
| **Impacto** | Usuarios que navegan con teclado (lectores de pantalla, personas con movilidad reducida) no saben dónde están. |
| **Severidad sugerida** | Media |
| **Solución** | Restaurar el outline por defecto del navegador o definir un outline personalizado con contraste suficiente (mínimo 3:1). |

**Posibles respuestas del estudiante aceptables:**
- "No puedo ver qué botón está seleccionado cuando uso Tab".
- "Los botones no muestran foco al navegar con teclado".
- "El navegador no resalta qué elemento está activo".

---

## C-02 · Contraste bajo en horarios disponibles (POUR — Perceptible)

| Campo | Valor |
|---|---|
| **Ubicación** | Vista de detalle de cancha, sección "Horarios disponibles" |
| **Descripción** | Los botones de horarios (`.horario-btn`) usan texto gris claro sobre fondo blanco con borde gris. El contraste es insuficiente. |
| **Principio principal** | **WCAG / POUR — Perceptible.** El texto debe tener contraste suficiente (mínimo 4.5:1 para AA). |
| **Principio alternativo** | WCAG 1.4.3 (contraste mínimo). |
| **Evidencia** | `.horario-btn { background: var(--card); border: 1px solid var(--border); }` con texto en `var(--text)` claro. |
| **Impacto** | Usuarios con baja visión o luz solar fuerte no distinguen los horarios. |
| **Severidad sugerida** | Media |
| **Solución** | Aumentar el contraste del texto a mínimo 4.5:1 (por ejemplo, texto `#1E293B` sobre fondo `#FFFFFF`). |

---

## C-03 · Inputs sin label asociado (WCAG / POUR — Robusto)

| Campo | Valor |
|---|---|
| **Ubicación** | Vista de detalle de cancha, formulario de reserva |
| **Descripción** | Los inputs de nombre, teléfono, correo y DNI solo tienen `placeholder`. No hay `<label>` asociado, por lo que los lectores de pantalla anuncian "edit text" sin contexto. |
| **Principio principal** | **WCAG / POUR — Robusto / Comprensible.** Los inputs deben tener etiquetas accesibles. |
| **Principio alternativo** | WCAG 1.3.1 (info and relationships), 4.1.2 (name, role, value). |
| **Evidencia** | `<input type="text" id="nombre" placeholder="Nombre completo">` en `index.html`. |
| **Impacto** | Lectores de pantalla no anuncian qué campo es. Usuarios con discapacidad visual no pueden completar el formulario. |
| **Severidad sugerida** | Media |
| **Solución** | Añadir `<label for="nombre">Nombre completo</label>` (visible o con `.sr-only`) antes de cada input. |

---

## C-04 · Imagen sin texto alternativo (POUR — Perceptible)

| Campo | Valor |
|---|---|
| **Ubicación** | Detalle de cancha (algunas canchas como Miraflores y Vóley Express) |
| **Descripción** | Las imágenes de las canchas 1 (Miraflores) y 5 (Vóley Express) tienen `alt=""` (vacío). |
| **Principio principal** | **WCAG / POUR — Perceptible.** Las imágenes deben tener texto alternativo. |
| **Principio alternativo** | WCAG 1.1.1 (non-text content). |
| **Evidencia** | `imagenAlt: ''` en `src/data.js` para `id: 1` y `id: 5`. |
| **Impacto** | Lectores de pantalla no describen la imagen. Usuarios con discapacidad visual no saben qué deporte/distrito es. |
| **Severidad sugerida** | Baja |
| **Solución** | Añadir `alt="Cancha de fútbol en Miraflores"` etc. |

---

## C-05 · "Volver" oculto (Nielsen #3)

| Campo | Valor |
|---|---|
| **Ubicación** | Vista de detalle de cancha, pie del formulario |
| **Descripción** | El enlace "← Volver" usa la clase `.link-volver` con `color: rgba(255, 255, 255, 0.5)` y `font-size: 10px`. Sobre fondo blanco es casi imperceptible. |
| **Principio principal** | **Nielsen #3 — Control y libertad del usuario.** |
| **Principio alternativo** | WCAG (contraste), Nielsen #1 (visibilidad). |
| **Evidencia** | `.link-volver { color: rgba(255,255,255,0.5); font-size: 10px; }` en `src/styles.css`. |
| **Impacto** | El usuario queda atrapado en la pantalla de detalle. La única salida visible es "Confirmar reserva". |
| **Severidad sugerida** | Alta |
| **Solución** | Hacer el enlace visible, en color secundario con buen contraste (mínimo 4.5:1) y tamaño ≥ 14px. |

---

## C-06 · Eliminar cuenta sin confirmación (Nielsen #5)

| Campo | Valor |
|---|---|
| **Ubicación** | Pantalla de éxito y "Mi cuenta" |
| **Descripción** | El botón "Eliminar mi cuenta" borra todas las reservas con un solo clic. No hay diálogo de confirmación ni opción de deshacer. |
| **Principio principal** | **Nielsen #5 — Prevención de errores.** |
| **Principio alternativo** | Nielsen #3 (control y libertad). |
| **Evidencia** | Función `eliminarCuenta()` en `src/main.js` ejecuta `state.reservas = []` directamente. |
| **Impacto** | Pérdida accidental de todas las reservas. Frustración alta. |
| **Severidad sugerida** | Alta |
| **Solución** | Diálogo de confirmación "¿Eliminar tu cuenta? Esta acción no se puede deshacer" con botones Cancelar / Eliminar. |

---

## C-07 · Mensaje de error genérico (Nielsen #9)

| Campo | Valor |
|---|---|
| **Ubicación** | Vista de detalle, formulario de reserva |
| **Descripción** | Al fallar la validación aparece el banner `err-banner` con texto literal "Datos inválidos". No indica qué campo, qué falla ni cómo corregir. |
| **Principio principal** | **Nielsen #9 — Ayudar a reconocer, diagnosticar y recuperarse de errores.** |
| **Principio alternativo** | WCAG 3.3.1 (error identification), WCAG 3.3.3 (error suggestion). |
| **Evidencia** | `<div id="err-banner" class="err-banner hidden">Datos inválidos.</div>` y `document.getElementById('err-banner').classList.remove('hidden')` en `main.js`. |
| **Impacto** | El usuario no sabe qué campo está mal. Tiene que probar uno por uno. |
| **Severidad sugerida** | Media |
| **Solución** | Mensaje específico por campo: "El correo debe tener formato válido" + resaltar el campo problemático. |

---

## C-08 · 18 deportes sin jerarquía (Ley de Hick)

| Campo | Valor |
|---|---|
| **Ubicación** | Página de inicio, sección "Deportes disponibles" |
| **Descripción** | Se muestran 18 deportes en una grilla plana, todos con el mismo tamaño, color y peso visual. No hay agrupación, ni destacados, ni categorías (p. ej. deportes de equipo vs. individuales). |
| **Principio principal** | **Ley de Hick** — más opciones = más tiempo para decidir. |
| **Principio alternativo** | Carga cognitiva, Nielsen #8 (estética minimalista). |
| **Evidencia** | `deportes-grid` con 18 `deporte-card` idénticas. |
| **Impacto** | Parálisis por análisis. El usuario tarda más en encontrar su deporte. |
| **Severidad sugerida** | Media |
| **Solución** | Agrupar por categoría (equipo / individual / acuáticos), destacar los más populares, reducir el grid inicial a 6–8 con un "ver todos". |

---

## C-09 · 32 franjas horarias sin agrupar (Miller / chunking)

| Campo | Valor |
|---|---|
| **Ubicación** | Vista de detalle, sección "Horarios disponibles" |
| **Descripción** | Los 32 horarios del día (06:00 a 22:00 cada 30 min) se muestran en una sola grilla plana de 8 columnas. No hay agrupación por turno (mañana/tarde/noche) ni por hora. |
| **Principio principal** | **Ley de Miller (7±2) y chunking** — la memoria de trabajo no puede procesar 32 elementos sueltos. |
| **Principio alternativo** | Carga cognitiva, Gestalt (proximidad). |
| **Evidencia** | `horarios-grid { grid-template-columns: repeat(8, 1fr); }` con 32 botones `.horario-btn`. |
| **Impacto** | El usuario no puede escanear visualmente los turnos. Cuesta encontrar un horario disponible. |
| **Severidad sugerida** | Media |
| **Solución** | Agrupar en 3 secciones: Mañana (06:00–12:00) · Tarde (12:00–18:00) · Noche (18:00–22:00). Mostrar cada turno como un chunk con encabezado. |

---

## C-10 · Botón confirmar diminuto (Ley de Fitts)

| Campo | Valor |
|---|---|
| **Ubicación** | Vista de detalle, pie del formulario |
| **Descripción** | El botón "Confirmar reserva" mide 20×20 px con texto de 8px. Prácticamente invisible. |
| **Principio principal** | **Ley de Fitts** — T = a + b·log₂(D/W + 1). |
| **Principio alternativo** | Nielsen #1 (visibilidad), Nielsen #2 (correspondencia con el mundo real). |
| **Evidencia** | `.btn-confirmar-tiny { width: 20px; height: 20px; font-size: 8px; }` en `src/styles.css`. |
| **Impacto** | El usuario no encuentra cómo confirmar. Alta tasa de abandono. |
| **Severidad sugerida** | Alta |
| **Solución** | Botón mínimo 44×44 px (mobile) o 88×44 px (desktop), texto ≥ 14px, color de marca. |

---

## C-11 · Checkbox de promociones preseleccionado (Dark pattern — preselección)

| Campo | Valor |
|---|---|
| **Ubicación** | Vista de detalle, formulario de reserva |
| **Descripción** | El checkbox "Quiero recibir promociones y novedades" viene con el atributo `checked` por defecto. |
| **Principio principal** | **Dark pattern — preselección manipulativa.** |
| **Principio alternativo** | WCAG / ética digital / GDPR (consentimiento informado). |
| **Evidencia** | `<input type="checkbox" id="promo" checked>` en `index.html`. |
| **Impacto** | El usuario acepta recibir correo comercial sin haberlo decidido. Viola autonomía. |
| **Severidad sugerida** | Media |
| **Solución** | Quitar el atributo `checked` para que el usuario elija activamente. |

**Posibles respuestas del estudiante aceptables:**
- "La casilla de promociones ya viene marcada".
- "El usuario tiene que desmarcarla si no quiere recibir spam".

---

## C-12 · Cargo oculto del seguro premium (Dark pattern — costos ocultos)

| Campo | Valor |
|---|---|
| **Ubicación** | Vista de detalle, formulario de reserva |
| **Descripción** | El checkbox "Agregar seguro premium contra lesiones (S/ 9.90)" añade un cargo extra que solo aparece en el resumen final, después de confirmar. |
| **Principio principal** | **Dark pattern — costos ocultos.** |
| **Principio alternativo** | Nielsen #5 (prevención), transparencia de precios. |
| **Evidencia** | `seguro = document.getElementById('seguro-premium').checked; const total = state.selectedCancha.precio + (seguro ? 9.90 : 0);` en `main.js`. |
| **Impacto** | El usuario puede pagar más de lo esperado. Pérdida de confianza. |
| **Severidad sugerida** | Media |
| **Solución** | Mostrar el cargo total en tiempo real mientras el usuario marca/desmarca el checkbox. Incluir el desglose en la pantalla de confirmación. |

**Posibles respuestas del estudiante aceptables:**
- "Hay un cobro extra que aparece al final sin haberlo visto claro".
- "El seguro suma S/ 9.90 pero no se nota hasta después de pagar".

---

## 📚 Conceptos cubiertos por hallazgo

| Concepto | Hallazgos |
|---|---|
| WCAG / POUR — Perceptible | C-02, C-04 |
| WCAG / POUR — Operable | C-01 |
| WCAG / POUR — Comprensible / Robusto | C-03, C-07 |
| Nielsen #1 (visibilidad) | C-01, C-10 |
| Nielsen #3 (control y libertad) | C-05 |
| Nielsen #5 (prevención) | C-06 |
| Nielsen #8 (estética minimalista) | C-08 |
| Nielsen #9 (errores) | C-07 |
| Ley de Hick | C-08 |
| Ley de Miller / chunking | C-09 |
| Ley de Fitts | C-10 |
| Carga cognitiva | C-08, C-09 |
| Gestalt | (relacionado a C-08 / C-09) |
| Dark patterns | C-11, C-12 |
| Ética digital | C-11, C-12 |

---

## 🔍 Criterios para la IA correctora

1. **Aceptar respuestas semánticamente equivalentes.** Si el estudiante dice "muchas opciones confunden al usuario" en lugar de "Ley de Hick", es válido.
2. **No exigir coincidencia literal** con ningún texto de este archivo.
3. **Si un hallazgo no está en esta lista pero existe en CanchaYa**, evaluarlo según su mérito, citando la ubicación específica.
4. **Si un hallazgo es totalmente inventado** (no se puede verificar en el laboratorio), puntuar Problema con 0 y evaluar coherencia interna del resto sin dar crédito total.
5. **Si un hallazgo es vago o genérico** ("la página es fea"), puntuar como máximo 0.5 en Problema.
6. **Otorgar puntos completos** cuando el hallazgo, principio, impacto y solución están bien argumentados, aunque no coincidan con un C-XX específico.

---

Instituto Isabel La Católica · Diseño y Desarrollo Web · 2026-II
