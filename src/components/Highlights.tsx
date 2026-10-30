import { BrainCircuit, Database, MonitorSmartphone, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

interface Highlight {
  icon: LucideIcon;
  title: string;
  text: string;
}

const highlights: Highlight[] = [
  {
    icon: MonitorSmartphone,
    title: "Frontend de producto",
    text: "Interfaces responsivas y componentes reutilizables con Angular, React y TypeScript.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    text: "Servicios y APIs REST o GraphQL con Java, Spring Boot y Node.js.",
  },
  {
    icon: Database,
    title: "Datos",
    text: "Modelado y consultas eficientes en PostgreSQL y MySQL.",
  },
  {
    icon: BrainCircuit,
    title: "IA & automatización",
    text: "Integración de LLMs locales con Ollama, Spring AI y servidores MCP.",
  },
];

export default function Highlights() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="Especialidades"
            title={
              <>
                De la interfaz <span className="gradient-text">al backend</span>
              </>
            }
            description="Perfil full stack con foco en producto: interfaces claras, APIs mantenibles y datos bien modelados."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="glass card-hover group relative h-full overflow-hidden rounded-2xl p-6">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02]">
                      <Icon className="h-5 w-5 text-emerald-300" />
                    </span>
                    <span className="font-mono text-[11px] text-zinc-600">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
