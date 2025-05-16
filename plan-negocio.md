# 🕹️ Plan de Negocio - SaaS para Aprender Python Jugando

## 📌 Resumen Ejecutivo

Este proyecto tiene como objetivo desarrollar una plataforma educativa gamificada para enseñar Python desde cero mediante una experiencia interactiva y divertida. En lugar de cursos estáticos, los usuarios avanzan escribiendo código que controla acciones en un mundo de videojuego. El MVP se centrará exclusivamente en Python, y será desarrollado por un equipo de dos personas a lo largo de 10-12 meses.

---

## 🧠 Idea Principal

### ¿Qué es?

Un SaaS basado en navegador que convierte el aprendizaje de Python en una aventura. El jugador progresa resolviendo puzzles o superando obstáculos con código Python real.

### ¿Por qué ahora?

- La demanda de programadores junior sigue creciendo.
- Hay saturación de plataformas tipo “cursos online”, pero pocas realmente interactivas.
- El interés por aprender a programar desde jóvenes está en auge.
- Gamificación = más retención y motivación.

---

## 🎯 Propuesta de Valor

- Aprender Python desde cero **jugando**.
- Feedback instantáneo, sin tener que instalar nada.
- Un enfoque por niveles que introduce conceptos paso a paso.
- Experiencia visual inmersiva y narrativa atractiva.

---

## 👤 Público Objetivo

- Estudiantes de entre 14 y 30 años.
- Gente autodidacta que quiere aprender programación de forma alternativa.
- Escuelas o academias que buscan herramientas digitales gamificadas.
- Personas con interés en videojuegos y tecnología.

---

## 💡 Características Clave del MVP

- Lenguaje: Python (único lenguaje para la primera versión).
- Editor de código interno con ejecución en tiempo real (Skulpt o Pyodide).
- Juego 2D con vista cenital o lateral simple (Phaser.js o motor propio).
- Al menos **1 mundo con 5-7 niveles**, cada uno enfocado en un concepto.
- Progresión narrativa y desbloqueo de habilidades con código.
- Modo historia guiado con objetivos + modo sandbox limitado.
- Guardado de progreso local o en la nube (Firebase/Supabase).

---

## 🧩 Contenido Educativo del MVP

| Nivel | Concepto              | Objetivo del nivel                             |
|-------|------------------------|------------------------------------------------|
| 1     | Variables y `print()` | Mover al personaje a coordenadas usando input |
| 2     | Condicionales         | Atacar si hay enemigo; si no, avanzar         |
| 3     | Bucles                | Cruzar un puente repitiendo acciones          |
| 4     | Funciones             | Crear funciones para abrir puertas mágicas    |
| 5     | Listas y Strings      | Leer un código secreto                        |

---

## ⚙️ Stack Tecnológico Propuesto

- **Frontend**: React + TailwindCSS + Vite
- **Motor de juego**: Phaser.js o HTML5 Canvas + JS
- **Editor de código**: Monaco Editor o CodeMirror
- **Intérprete Python en navegador**: Skulpt o Pyodide
- **Backend** (mínimo): Firebase / Supabase (auth + progreso)
- **Base de datos**: Firestore o Postgres

---

## 🛠️ Desarrollo y Equipo

### Equipo fundador

- **2 desarrolladores** (uno más frontend/UI y otro más backend/lógica de juego).
- Sin inversión inicial externa, solo tiempo.

### Plan de desarrollo

Duración estimada del MVP: **10-12 meses**

| Mes | Objetivos |
|-----|-----------|
| 1-2 | Diseño de niveles, historia, mecánicas. Setup de proyecto. |
| 3-4 | Desarrollo del motor base de juego + integración del editor. |
| 5-6 | Sistema de ejecución Python + primeros niveles funcionales. |
| 7-8 | UI/UX mejorado, guardado de progreso, animaciones básicas. |
| 9-10 | Beta cerrada, test con usuarios reales, balance y pulido. |
| 11-12 | Lanzamiento del MVP + difusión en redes + feedback. |

---

## 📈 Mercado y Oportunidad

### Tamaño de mercado

- +100 millones de personas buscan aprender a programar cada año.
- Python es uno de los lenguajes más demandados y recomendados para empezar.
- La educación online gamificada crece a doble dígito anualmente.

### Competencia

| Plataforma            | Diferenciador nuestro                          |
|-----------------------|------------------------------------------------|
| Codecademy            | Juego real, no ejercicios estáticos           |
| SoloLearn             | Narrativa + control del mundo con código      |
| CodeCombat            | Más moderno, con motor más avanzado y comunidad |
| freeCodeCamp          | Más divertido, centrado en inmersión          |

---

## 💰 Monetización

### Estrategia Freemium (para MVP):

- Mundo 1 gratuito.
- Acceso completo mediante:
  - Pago único (por ejemplo: 19-29 €)
  - Suscripción mensual (opcional en fases futuras)
- Licencias para colegios o academias (B2B educativo).
- Funcionalidades premium: sandbox ilimitado, skins, mundo extra.

---

## 📣 Marketing y Difusión

### Fase 1: Construcción de comunidad

- Twitter/X: Documentar el proceso (“Build in public”)
- Crear una landing page con lista de espera
- Publicar avances semanales (videos, gifs, ideas de diseño)
- Discord (más adelante) para testers y fans

### Fase 2: Lanzamiento

- Early access con suscriptores de la newsletter
- Campañas con microinfluencers educativos
- Nota de prensa a medios del sector edtech o tech juvenil
- Demo gratuita con botón de compartir en redes

---

## 📦 Inversión (opcional)

Estamos abiertos a levantar una ronda **pre-seed** por un **20% del equity**, manteniendo el 40% cada uno los fundadores.

### Uso de los fondos (~50.000 €):
- Contratar apoyo externo puntual (diseño, animación, QA).
- Mejoras en el motor del juego.
- Presupuesto para marketing, contenido y distribución.
- Hosting + backend escalable.

---

## ⚖️ Riesgos y Mitigaciones

| Riesgo                        | Mitigación                                  |
|------------------------------|---------------------------------------------|
| Falta de tiempo para desarrollo | Planificación estricta por semanas           |
| Dificultad técnica del motor  | Empezar con un scope mínimo viable          |
| Baja retención de usuarios    | Enfocar en jugabilidad y feedback inmediato |
| Saturación de mercado         | Diferenciarnos visual y narrativamente      |

---

## 🏁 Próximos pasos

1. Crear prototipo jugable del primer nivel.
2. Publicar la landing y empezar a construir comunidad.
3. Escribir hilos en Twitter mostrando avances.
4. Validar interés con feedback de usuarios reales.
5. Explorar ronda de inversión si hay tracción inicial.

---

## ✍️ Conclusión

Queremos revolucionar cómo se aprende a programar, haciéndolo divertido, adictivo e interactivo. Este es solo el comienzo de una plataforma que puede escalar a otros lenguajes, crear herramientas para escuelas, y formar parte del futuro de la educación.

---