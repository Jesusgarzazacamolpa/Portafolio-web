import { ChevronUp } from "lucide-react";
import { profile } from "../data/cv";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-xs text-zinc-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-5">
          <span>Hecho con React, Vite y Tailwind CSS</span>
          <a
            href="#inicio"
            aria-label="Volver arriba"
            className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-zinc-400 transition hover:border-white/25 hover:text-white"
          >
            <ChevronUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
