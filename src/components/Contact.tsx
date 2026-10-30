import { useState } from "react";
import type { ElementType } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { profile } from "../data/cv";
import { gmailComposeLink, mailtoLink } from "../lib/mail";
import { useMailtoFallback } from "../lib/useMailtoFallback";
import { Reveal } from "./Reveal";

interface ContactRow {
  icon: ElementType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}

const contactRows: ContactRow[] = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: mailtoLink,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: profile.location,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: profile.github.replace("https://github.com/", "@"),
    href: profile.github,
  },
];

export default function Contact() {
  const { failed, onMailtoClick } = useMailtoFallback();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    let ok = true;
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const area = document.createElement("textarea");
      area.value = profile.email;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      ok = document.execCommand("copy");
      area.remove();
    }
    setCopied(ok);
    if (ok) window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="relative py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Contacto
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  ¿Trabajamos <span className="gradient-text">juntos</span>?
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
                  Estoy abierto a proyectos freelance, colaboraciones y oportunidades full-time.
                  Si buscas a alguien que conecte interfaz, backend y datos, hablemos.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={mailtoLink}
                    onClick={onMailtoClick}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
                  >
                    <Mail className="h-4 w-4" />
                    Escríbeme
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-white/25 hover:bg-white/[0.07]"
                  >
                    <FaGithub className="h-4 w-4" />
                    Ver GitHub
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                {failed ? (
                  <div
                    role="status"
                    className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-amber-400/25 bg-amber-400/[0.07] px-4 py-3 text-xs text-amber-100/90"
                  >
                    <span>No se abrió tu app de correo.</span>
                    <a
                      href={gmailComposeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold underline underline-offset-4 transition hover:text-white"
                    >
                      Abrir en Gmail
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="font-semibold underline underline-offset-4 transition hover:text-white"
                    >
                      {copied ? "Correo copiado" : "Copiar correo"}
                    </button>
                  </div>
                ) : null}

                <a
                  href={gmailComposeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs text-zinc-500 underline-offset-4 transition hover:text-zinc-300 hover:underline"
                >
                  ¿Sin cliente de correo? Abrir en Gmail
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="space-y-3">
                {contactRows.map((row) => {
                  const Icon = row.icon;
                  const body = (
                    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/20">
                      <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/[0.05] text-emerald-300">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider text-zinc-500">
                          {row.label}
                        </p>
                        <p className="mt-0.5 truncate text-sm font-medium text-zinc-200">
                          {row.value}
                        </p>
                      </div>
                    </div>
                  );

                  return row.href ? (
                    <a
                      key={row.label}
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                      onClick={row.href.startsWith("mailto:") ? onMailtoClick : undefined}
                      className="block"
                    >
                      {body}
                    </a>
                  ) : (
                    <div key={row.label}>{body}</div>
                  );
                })}

                <div className="flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-emerald-300/80">
                      Disponibilidad
                    </p>
                    <p className="mt-1 text-sm leading-5 text-zinc-300">{profile.availability}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
