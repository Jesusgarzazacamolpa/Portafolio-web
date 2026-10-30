import { useEffect, useRef, useState } from "react";

const FALLBACK_DELAY = 1500;

export function useMailtoFallback() {
  const [failed, setFailed] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const onMailtoClick = () => {
    setFailed(false);
    window.clearTimeout(timer.current);

    // Si el cliente de correo se abre, la página pierde el foco o pasa a oculta.
    let left = false;
    const markLeft = () => {
      left = true;
      window.clearTimeout(timer.current);
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") markLeft();
    };
    window.addEventListener("blur", markLeft, { once: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    timer.current = window.setTimeout(() => {
      window.removeEventListener("blur", markLeft);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (!left) setFailed(true);
    }, FALLBACK_DELAY);
  };

  return { failed, onMailtoClick, dismiss: () => setFailed(false) };
}
