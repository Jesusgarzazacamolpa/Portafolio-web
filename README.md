# Landing CV — Jesús Antonio Garza Zacamolpa

Landing page personal que presenta mi perfil profesional, experiencia, stack técnico y portafolio. Construida como app de una sola página con React, Vite y Tailwind, sin backend: todo el contenido vive en archivos TypeScript editables.

> **Estado:** landing funcionando y en producción local (`npm run dev`).

## Qué incluye

- **Hero** con disponibilidad, resumen, estadísticas y una tarjeta tipo editor (`perfil.ts`).
- **Especialidades** (Frontend, Backend & APIs, Datos, IA & automatización).
- **Stack técnico** agrupado y con iconos de marca.
- **Experiencia** en orden cronológico inverso (más reciente → más antigua), con la posición actual destacada.
- **Portafolio** con tarjetas por proyecto y enlace al repositorio de GitHub.
- **Contacto** con email, GitHub y redes.
- Detalles de UX: navbar fija con menú móvil, animaciones de aparición, soporte de `prefers-reduced-motion`, skip link y foco visible.

## Stack

| Capa | Tecnología |
|---|---|
| UI | React 19 + TypeScript 7 |
| Build | Vite 8 |
| Estilos | Tailwind CSS 3 + PostCSS |
| Animación | Framer Motion |
| Iconos | lucide-react + react-icons |

## Cómo ejecutarlo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + build de producción en dist/
npm run preview  # sirve el build
```

> Si `npm install` falla con `UNABLE_TO_VERIFY_LEAF_SIGNATURE` (intercepción TLS de la red), usa `npm install --strict-ssl=false` como workaround local.

## Cómo editar el contenido

| Qué | Archivo |
|---|---|
| Nombre, rol, resumen, email, ubicación, años de experiencia | `src/data/cv.ts` → `profile` |
| Estadísticas del hero | `src/data/cv.ts` → `stats` |
| Experiencia laboral (orden: reciente → antigua) | `src/data/cv.ts` → `experience` |
| Tecnologías por grupo | `src/data/cv.ts` → `skillGroups` |
| Proyectos y URLs de GitHub | `src/data/portfolio.ts` |
| Iconos y colores de cada tecnología | `src/components/TechIcon.tsx` → `TECH` |

### Agregar un proyecto al portafolio

Edita `src/data/portfolio.ts` y añade un objeto:

```ts
{
  title: "Mi proyecto",
  tagline: "Una línea que explique qué hace",
  description: "Descripción más amplia del proyecto.",
  stack: ["React", "Node.js", "PostgreSQL"],
  github: "https://github.com/Jesusgarzazacamolpa/mi-repo",
  icon: "viewer", // workflow | viewer | portal
  glow: "from-cyan-400/40 via-sky-400/20 to-transparent",
}
```

`stack` son etiquetas libres para mostrar; los iconos de la sección de tecnologías sí deben existir en el registro `TECH` de `src/components/TechIcon.tsx`.

## Estructura

```
src/
├── App.tsx                 # composición de secciones y fondo
├── components/             # Hero, TechStack, Experience, Portfolio, Contact, ...
├── data/
│   ├── cv.ts               # perfil, experiencia, skills, stats
│   └── portfolio.ts        # proyectos y URLs
└── index.css               # Tailwind, utilidades (.glass, .gradient-text, ...)
```

## Despliegue

La landing es un sitio estático y se publica en **Vercel** (build `npm run build`, salida `dist/`). El paso a paso —desde `git init` hasta dominio propio y despliegues automáticos— está en [docs/despliegue.md](docs/despliegue.md).

## Documentación

- [Despliegue en Vercel](docs/despliegue.md) — publicación, dominio y despliegues automáticos.

### Propuestas anteriores (en pausa)

La idea original del proyecto era un chat con IA local (Ollama) que respondiera preguntas sobre el CV. Se conserva como referencia:

- [Propuesta técnica — chat con IA local](docs/propuesta-tecnica.md)
- [Anexo RAG para el chat del CV](docs/rag.md)
