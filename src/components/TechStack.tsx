import { skillGroups } from "../data/cv";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { TECH, TechIcon } from "./TechIcon";

export default function TechStack() {
  return (
    <section id="tecnologias" className="relative py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeader
            eyebrow="Stack"
            title={
              <>
                Tecnologías con las que <span className="gradient-text">trabajo</span>
              </>
            }
            description="Herramientas que uso para construir productos de punta a punta, desde la interfaz hasta la base de datos."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.05}
              className={index === skillGroups.length - 1 ? "md:col-span-2" : undefined}
            >
              <article className="glass card-hover h-full rounded-2xl p-6 sm:p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
                  <span className="font-mono text-[11px] text-zinc-500">
                    {group.items.length} tecnologías
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-zinc-400">{group.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300 transition hover:border-white/25 hover:bg-white/[0.07] hover:text-white">
                        <TechIcon
                          name={item}
                          className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                        />
                        {TECH[item].label}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
