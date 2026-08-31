# Guía del Docente — Evaluación Práctica Diseño y Desarrollo Web

**Duración:** 90 minutos · **Modalidad:** Individual

---

## ⏱️ Cronograma sugerido

| Tiempo | Actividad |
|---|---|
| 00:00 – 00:05 | Bienvenida, mostrar PPT de la evaluación. |
| 00:05 – 00:10 | Repaso exprés de conceptos (WCAG/POUR, Nielsen, ISO, Hick, Miller, Fitts, Gestalt, dark patterns). |
| 00:10 – 00:12 | Publicar URL de CanchaYa y del repositorio. |
| 00:12 – 00:15 | Repartir `docs/INSTRUCCIONES.md`. Resolver dudas. |
| 00:15 – 00:30 | **Fase 1 — Exploración libre** (15 min). |
| 00:30 – 00:50 | **Fase 2 — Selección y análisis** (20 min). |
| 00:50 – 01:25 | **Fase 3 — Crear Issues** (35 min). |
| 01:25 – 01:30 | **Fase 4 — README** (5 min). |
| 01:30 – 01:30 | **Fase 5 — Revisión** con CHECKLIST. |

---

## 🎯 Antes de la clase

1. **Publica CanchaYa** (GitHub Pages o hosting estático).
2. **Crea el repositorio de Issues** (puede ser el mismo que aloja CanchaYa).
3. **Crea 1 Issue de ejemplo** para mostrar a los estudiantes.
4. **Verifica** que la etiqueta `hallazgo-usabilidad` existe y se aplica.
5. **Imprime o proyecta** las instrucciones y la rúbrica general.
6. **Ten a mano** `RESPUESTAS_ESPERADAS.md`.

---

## 📊 Distribución esperada de hallazgos

| Categoría | Problemas disponibles |
|---|---|
| Accesibilidad | C-01, C-02, C-03, C-04 |
| Usabilidad | C-05, C-06, C-07 |
| Psicología cognitiva | C-08, C-09, C-10 |
| Dark patterns | C-11, C-12 |

Cada estudiante debe crear **3 Issues**. La calidad pesa más que la cantidad.

---

## 🚨 Problemas comunes durante la evaluación

### "La página no carga"
- Verifica conexión.
- Comprueba que CanchaYa sigue en línea.
- Si está caído, usa el repositorio local (`npm install && npm run dev`).

### "axe DevTools no funciona"
- Sugiere DevTools del navegador (F12).
- Recuérdale que **no es obligatorio**.

### "No sé si esto es un problema"
- "Si afecta a un usuario real de forma negativa, es un problema. Lo importante es explicarlo bien."

### "Tengo solo 2 Issues buenos"
- Calidad > cantidad. Dos Issues sólidos + 1 débil pueden aprobar.
- Tres Issues mediocres puntúan menos.

---

## 📋 Después de la clase

### Recolección
1. **Cierra la evaluación.** Pide que suban la mano.
2. **Recopila URLs** de Issues + README.

### Corrección
Tienes dos opciones:

#### Opción A — IA correctora (recomendada)
1. Usa `PROMPT_CORRECCION_IA.md`.
2. Adjunta: 3 Issues + README + `RESPUESTAS_ESPERADAS.md` + `RUBRICA.md`.
3. La IA devuelve JSON estructurado.
4. **Verifica manualmente** 3 entregas para calibrar.

#### Opción B — Corrección manual
1. Usa `RUBRICA.md` y `RESPUESTAS_ESPERADAS.md`.
2. Asigna puntaje A–F por Issue + 2 puntos globales.
3. Suma y redondea al medio punto.

---

## ⚠️ Política de integridad

- Issues individuales. Copias = 0 en contenido.
- La IA correctora puede detectar similitudes.
- Reportar al estudiante si hay sospecha.

---

## 📚 Material de apoyo

- `RESPUESTAS_ESPERADAS.md` — 12 problemas.
- `RUBRICA.md` — rúbrica detallada.
- `CHECKLIST_CORRECCION.md` — checklist.
- `PROMPT_CORRECCION_IA.md` — prompt listo para IA.

---

Instituto Isabel La Católica · Diseño y Desarrollo Web · 2026-II
