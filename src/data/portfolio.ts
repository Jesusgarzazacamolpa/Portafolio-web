export type ProjectIcon = "workflow" | "viewer" | "portal";

export interface Project {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
  icon: ProjectIcon;
  glow: string;
}

// Cambia el usuario o los enlaces cuando publiques cada repositorio.
const GITHUB = "https://github.com/Jesusgarzazacamolpa";

export const projects: Project[] = [
  {
    title: "Orquestrator - Mcps",
    tagline: "Flujos de IA con intervención humana",
    description:
      "Orquestador que coordina un LLM local con microservicios y herramientas MCP. Incluye máquina de estados, pausas para intervención humana y bitácora de cada ejecución.",
    stack: ["Java 21", "Spring Boot", "Spring AI", "Ollama", "MCP", "PostgreSQL"],
    github: `${GITHUB}/agent-orquestator`,
    icon: "workflow",
    glow: "from-emerald-400/40 via-cyan-400/20 to-transparent",
  },
  {
    title: "Mf Flow Viewer",
    tagline: "Microfrontend de seguimiento",
    description:
      "Vista en Angular 19 para seguir el avance de los flujos, revisar la bitácora y resolver las tareas que requieren confirmación humana.",
    stack: ["Angular 19", "TypeScript", "RxJS", "Jest", "Heroicons"],
    github: `${GITHUB}/flow-viewer`,
    icon: "viewer",
    glow: "from-indigo-400/40 via-violet-400/20 to-transparent",
  },
  {
    title: "Mf Flow Portal",
    tagline: "Acceso y composición de microfrontends",
    description:
      "Portal en React que integra los módulos del orquestador mediante iframes y sesión compartida, con una experiencia de acceso unificada.",
    stack: ["React", "Vite", "TypeScript", "React Router", "React Query"],
    github: `${GITHUB}/flow-portal-`,
    icon: "portal",
    glow: "from-cyan-400/40 via-sky-400/20 to-transparent",
  }, 
  {
    title: "Ms Usuarios",
    tagline: "Aadministración de usuarios con Spring Boot WebFlux",
    description:
      "Una aplicación Spring Boot WebFlux con autenticación JWT y autorización basada en roles para la gestión completa de usuarios.",
    stack: ["Java 17", "Spring Boot", "Spring Security", "Spring WebFlux", "Spring Data R2DBC"],
    github: `${GITHUB}/usuarios`,
    icon: "portal",
    glow: "from-cyan-400/40 via-sky-400/20 to-transparent",
  },
  {
    title: "Mcp-domain",
    tagline: "Servicio Java 21 + Spring Boot que expone las operaciones de negocio de la compra de vehículos como herramientas MCP (Model Context Protocol) sobre HTTP",
    description:
      "Una aplicación Spring Boot WebFlux con autenticación JWT y autorización basada en roles para la gestión completa de usuarios.",
    stack: ["Java 21", "Spring Boot"],
    github: `${GITHUB}/usuarios`,
    icon: "portal",
    glow: "from-cyan-400/40 via-sky-400/20 to-transparent",
  },
  {
    title: "Ms orquestador-service",
    tagline: "Servicio con Node.js  express que expone las operaciones de negocio de la orquestación de microservicios sobre HTTP",
    description:
      "Servicio orquestador en Node.js/Express para gestionar catálogos de vehículos, agentes y servicios de clientes.",
    stack: ["Node", "Express"],
    github: `${GITHUB}/orquestador-service`,
    icon: "portal",
    glow: "from-cyan-400/40 via-sky-400/20 to-transparent",
  },
];
