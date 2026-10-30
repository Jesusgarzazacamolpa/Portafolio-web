import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile, stats } from "../data/cv";
import { mailtoLink } from "../lib/mail";
import { TECH, TechIcon } from "./TechIcon";

const floatingTechs = [
  { name: "angular", position: "-left-3 -top-10 sm:-left-4 sm:-top-12", delay: "0s" },
  { name: "java", position: "-right-3 -top-10 sm:-right-4 sm:-top-12", delay: "1.1s" },
  { name: "react", position: "-left-3 -bottom-10 sm:-left-4 sm:-bottom-12", delay: "2.2s" },
  { name: "postgres", position: "-right-3 -bottom-10 sm:-right-4 sm:-bottom-12", delay: "0.6s" },
] as const;

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Disponible para nuevos proyectos
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">Jesús Antonio</span>
              <span className="gradient-text block">Garza Zacamolpa</span>
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-lg text-zinc-200 sm:text-xl">
              <span>{profile.role}</span>
              <span className="hidden h-1 w-1 rounded-full bg-zinc-600 sm:block" />
              <span className="text-zinc-400">Angular · Java · React · Node.js</span>
            </div>

            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">{profile.summary}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#portafolio"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
              >
                Ver portafolio
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-white/25 hover:bg-white/[0.07]"
              >
                Hablemos
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {profile.location}
              </span>
              <a
                href={mailtoLink}
                className="inline-flex items-center gap-1.5 transition hover:text-zinc-300"
              >
                <Mail className="h-3.5 w-3.5" />
                {profile.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-gradient-to-tr from-emerald-500/20 via-cyan-500/10 to-indigo-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b12]/90 shadow-2xl shadow-black/60">
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-auto font-mono text-[11px] text-zinc-500">perfil.ts</span>
              </div>

              <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-7 text-zinc-400 sm:text-[13px]">
                <code>
                  <span className="text-indigo-300">const</span>{" "}
                  <span className="text-cyan-300">dev</span> = {"{"}
                  {"\n  "}nombre: <span className="text-emerald-300">"Jesús Garza"</span>,
                  {"\n  "}rol: <span className="text-emerald-300">"Full Stack Developer"</span>,
                  {"\n  "}stack: [
                  {"\n    "}
                  <span className="text-emerald-300">"Angular"</span>,{" "}
                  <span className="text-emerald-300">"Java"</span>,{" "}
                  <span className="text-emerald-300">"Spring Boot"</span>,
                  {"\n    "}
                  <span className="text-emerald-300">"React"</span>,{" "}
                  <span className="text-emerald-300">"Node.js"</span>,
                  {"\n  "}],
                  {"\n  "}base: <span className="text-emerald-300">"México"</span>,
                  {"\n  "}disponibilidad: <span className="text-emerald-300">"open to work"</span>,
                  {"\n"}{"}"};
                </code>
              </pre>

              <div className="flex items-center justify-between border-t border-white/5 px-4 py-3 font-mono text-[11px] text-zinc-500">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  open to work
                </span>
                <span>México</span>
              </div>
            </div>

            {floatingTechs.map((tech) => (
              <div
                key={tech.name}
                className={`absolute hidden animate-float items-center gap-2 rounded-xl border border-white/10 bg-[#0d0d15]/90 px-3 py-2 shadow-lg shadow-black/40 backdrop-blur-md sm:flex ${tech.position}`}
                style={{ animationDelay: tech.delay }}
              >
                <TechIcon name={tech.name} className="h-4 w-4" />
                <span className="text-xs font-medium text-zinc-300">{TECH[tech.name].label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
