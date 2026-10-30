import type { TechName } from "../components/TechIcon";

export const profile = {
  name: "Jesús Antonio Garza Zacamolpa",
  displayName: "Jesús Garza",
  role: "Full Stack Developer",
  location: "México",
  email: "jesusantoniogarza804@gmail.com",
  github: "https://github.com/Jesusgarzazacamolpa",
  linkedin: null as string | null,
  availability: "Disponible para proyectos freelance y oportunidades full-time",
  summary:
    "Desarrollador Full Stack con experiencia en aplicaciones web modernas. Trabajo de punta a punta: interfaces con Angular y React, APIs con Java, Spring Boot y Node.js, y bases de datos relacionales. Me enfoco en código claro, rendimiento y soluciones que se mantienen en el tiempo.",
  startYear: 2018,
};

export interface Job {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  description: string;
  technologies: string[];
}

// Ordenado de la experiencia más reciente a la más antigua.
export const experience: Job[] = [
  {
    company: "Banregio",
    role: "Full Stack Developer",
    period: "2021 — Presente",
    current: true,
    description:
      "Desarrollo full stack de aplicaciones financieras: microservicios para la plataforma de créditos, migración de Java 8 a 11 y soporte a otros desarrolladores. Construí un componente de seguimiento de flujos automatizados que dio trazabilidad al equipo y eliminó consultas manuales a base de datos. Pruebas end-to-end con Playwright.",
    technologies: [
      "Angular",
      "Java",
      "Spring",
      "PostgreSQL",
      "TypeScript",
      "Angular Material",
      "Playwright",
    ],
  },
  {
    company: "Abastos Online",
    role: "Full Stack Developer",
    period: "2020 — 2021",
    description:
      "Desarrollo de sistemas de e-commerce completos y funcionales: catálogos de productos, carrito de compra, pasarelas de pago e interfaces de usuario.",
    technologies: ["Node.js", "React", "GraphQL", "Strapi", "Bootstrap", "Git"],
  },
  {
    company: "IMJ",
    role: "Full Stack Developer",
    period: "2020",
    description:
      "Migración de un sistema de gestión de espectáculos de PHP a TypeScript, con React y Node.js.",
    technologies: ["React", "Node.js", "TypeScript", "Express", "MySQL", "Bootstrap"],
  },
  {
    company: "TRUSOT",
    role: "Full Stack Developer",
    period: "2019 — 2020",
    description:
      "Desarrollo de un sistema de geocercas para control de flotillas, con frontend en JavaScript y backend en PHP.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL", "Bootstrap"],
  },
  {
    company: "MBN",
    role: "Full Stack Developer",
    period: "2018 — 2019",
    description:
      "Desarrollo de un sistema de gestión de personal con Java, Spring Boot, PrimeFaces y PostgreSQL.",
    technologies: ["Java", "Spring Boot", "PrimeFaces", "PostgreSQL", "HTML", "Bootstrap"],
  },
];

export interface SkillGroup {
  title: string;
  description: string;
  items: TechName[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces, componentes y diseño responsive.",
    items: [
      "angular",
      "react",
      "typescript",
      "javascript",
      "html5",
      "css3",
      "tailwind",
      "bootstrap",
      "angularmaterial",
      "primereact",
      "sass",
    ],
  },
  {
    title: "Backend & APIs",
    description: "Servicios, lógica de negocio e integraciones.",
    items: [
      "java",
      "spring",
      "springsecurity",
      "hibernate",
      "node",
      "express",
      "graphql",
      "apollo",
      "rest",
      "php",
      "swagger",
    ],
  },
  {
    title: "Datos",
    description: "Modelado, consultas y contenido estructurado.",
    items: ["postgres", "mysql", "sql", "strapi"],
  },
  {
    title: "DevOps & calidad",
    description: "Control de versiones, contenedores y pruebas.",
    items: ["git", "github", "docker", "gcp", "openshift", "jira", "jest", "playwright", "bitbucket"],
  },
  {
    title: "IA local",
    description: "Modelos locales y automatización de flujos con herramientas MCP.",
    items: ["ollama", "springai", "mcp", "llm", "prompt"],
  },
];

export const stats = [
  { value: `${new Date().getFullYear() - profile.startYear}+`, label: "años de experiencia" },
  { value: "5", label: "empresas" },
  { value: "35+", label: "tecnologías" },
];
