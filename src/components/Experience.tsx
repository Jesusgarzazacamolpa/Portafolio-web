import { CalendarDays } from "lucide-react";
import { experience } from "../data/cv";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="Trayectoria"
            title={
              <>
                Experiencia <span className="gradient-text">profesional</span>
              </>
            }
            description="De la experiencia más reciente a la más antigua."
          />
        </Reveal>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-emerald-400/60 via-white/10 to-transparent"
          />

          <ol className="space-y-8">
            {experience.map((job, index) => (
              <li key={`${job.company}-${job.period}`} className="relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-6 grid h-4 w-4 place-items-center rounded-full border border-emerald-400/40 bg-[#07070c]">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      job.current ? "bg-emerald-400" : "bg-zinc-600"
                    }`}
                  />
                </span>

                <Reveal delay={index * 0.05}>
                  <article className="glass card-hover rounded-2xl p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-zinc-400">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {job.period}
                      </span>
                      {job.current ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
                          Actual
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-4 font-display text-xl font-semibold text-white">{job.role}</h3>
                    <p className="mt-1 text-sm font-medium text-emerald-300/90">{job.company}</p>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{job.description}</p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] font-medium text-zinc-400"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
