import { ArrowUpRight, LayoutDashboard, PanelsTopLeft, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { profile } from "../data/cv";
import { projects } from "../data/portfolio";
import type { ProjectIcon } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const projectIcons: Record<ProjectIcon, LucideIcon> = {
  workflow: Workflow,
  viewer: PanelsTopLeft,
  portal: LayoutDashboard,
};

export default function Portfolio() {
  return (
    <section id="portafolio" className="relative py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="Portafolio"
            title={
              <>
                Proyectos que he <span className="gradient-text">construido</span>
              </>
            }
            description="Arquitecturas full stack, microfrontends y orquestación de IA. Cada tarjeta enlaza a su repositorio en GitHub."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = projectIcons[project.icon];
            return (
              <Reveal key={project.title} delay={index * 0.07}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20">
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${project.glow} opacity-0 blur-3xl transition duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent">
                      <Icon className="h-6 w-6 text-white" />
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Repositorio de ${project.title}`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-zinc-400 transition hover:border-white/25 hover:text-white"
                    >
                      <FaGithub className="h-4 w-4" />
                    </a>
                  </div>

                  <h3 className="relative mt-5 font-display text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="relative mt-1 text-sm font-medium text-emerald-300/90">
                    {project.tagline}
                  </p>
                  <p className="relative mt-3 flex-1 text-sm leading-6 text-zinc-400">
                    {project.description}
                  </p>

                  <ul className="relative mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] font-medium text-zinc-400"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 transition group-hover:text-emerald-300"
                  >
                    Ver repositorio
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-white/25 hover:bg-white/[0.07]"
            >
              <FaGithub className="h-4 w-4" />
              Explorar todos mis repositorios
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
