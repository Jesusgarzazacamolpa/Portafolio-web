import type { CSSProperties, ElementType } from "react";
import { FaJava } from "react-icons/fa6";
import {
  SiAngular,
  SiApollographql,
  SiBitbucket,
  SiBootstrap,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiGraphql,
  SiHibernate,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiRedhatopenshift,
  SiSass,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
  SiStrapi,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BrainCircuit, Cpu, Database, FlaskConical, Layers, Network, Sparkles } from "lucide-react";

type IconComponent = ElementType<{ className?: string; style?: CSSProperties }>;

export const TECH = {
  angular: { label: "Angular", Icon: SiAngular, color: "#DD0031" },
  react: { label: "React", Icon: SiReact, color: "#61DAFB" },
  typescript: { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  javascript: { label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  html5: { label: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  css3: { label: "CSS3", Icon: SiCss, color: "#1572B6" },
  tailwind: { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  bootstrap: { label: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
  angularmaterial: { label: "Angular Material", Icon: SiAngular, color: "#DD0031" },
  primereact: { label: "PrimeReact", Icon: Layers, color: "#F59E0B" },
  sass: { label: "SASS / SCSS", Icon: SiSass, color: "#CC6699" },
  java: { label: "Java", Icon: FaJava, color: "#F89820" },
  spring: { label: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
  springsecurity: { label: "Spring Security", Icon: SiSpringsecurity, color: "#6DB33F" },
  hibernate: { label: "Hibernate", Icon: SiHibernate, color: "#59666C" },
  node: { label: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  express: { label: "Express", Icon: SiExpress, color: "#E5E7EB" },
  graphql: { label: "GraphQL", Icon: SiGraphql, color: "#E10098" },
  apollo: { label: "Apollo Server", Icon: SiApollographql, color: "#311C87" },
  rest: { label: "REST APIs", Icon: TbApi, color: "#22D3EE" },
  php: { label: "PHP", Icon: SiPhp, color: "#777BB4" },
  swagger: { label: "Swagger", Icon: SiSwagger, color: "#85EA2D" },
  postgres: { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  mysql: { label: "MySQL", Icon: SiMysql, color: "#4479A1" },
  sql: { label: "SQL", Icon: Database, color: "#38BDF8" },
  strapi: { label: "Strapi", Icon: SiStrapi, color: "#4945FF" },
  git: { label: "Git", Icon: SiGit, color: "#F05032" },
  github: { label: "GitHub", Icon: SiGithub, color: "#E5E7EB" },
  docker: { label: "Docker", Icon: SiDocker, color: "#2496ED" },
  gcp: { label: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4" },
  openshift: { label: "OpenShift", Icon: SiRedhatopenshift, color: "#EE0000" },
  jira: { label: "Jira", Icon: SiJira, color: "#0052CC" },
  jest: { label: "Jest", Icon: SiJest, color: "#C21325" },
  playwright: { label: "Playwright", Icon: FlaskConical, color: "#2EAD33" },
  bitbucket: { label: "Bitbucket", Icon: SiBitbucket, color: "#0052CC" },
  ollama: { label: "Ollama", Icon: BrainCircuit, color: "#22D3EE" },
  springai: { label: "Spring AI", Icon: SiSpring, color: "#6DB33F" },
  mcp: { label: "MCP", Icon: Network, color: "#A78BFA" },
  llm: { label: "LLM local", Icon: Cpu, color: "#94A3B8" },
  prompt: { label: "Prompt engineering", Icon: Sparkles, color: "#FBBF24" },
} satisfies Record<string, { label: string; Icon: IconComponent; color: string }>;

export type TechName = keyof typeof TECH;

export function TechIcon({ name, className }: { name: TechName; className?: string }) {
  const { Icon, color } = TECH[name];
  return <Icon className={className} style={{ color }} aria-hidden="true" />;
}
