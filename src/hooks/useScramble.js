import { useCallback, useEffect, useRef, useState } from "react";

export const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;

const CHARS = "{}[]<>/\\;:=+*#$%&_|01";

// Embaralha o texto com símbolos de código e revela letra a letra.
// Devolve [texto exibido, função que dispara a animação].
export function useScramble(text, dur = 900) {
  const [shown, setShown] = useState(text);
  const raf = useRef(0);

  const run = useCallback((d = dur) => {
    if (REDUCE) return;
    cancelAnimationFrame(raf.current);
    const t0 = performance.now(), n = text.length;
    let last = 0;
    const tick = now => {
      const p = Math.min(1, (now - t0) / d);
      if (now - last > 45 || p === 1) {
        last = now;
        const ok = Math.floor(p * n * 1.2 - n * 0.2);
        setShown([...text].map((c, i) => c === " " || i < ok || p === 1 ? c : CHARS[Math.random() * CHARS.length | 0]).join(""));
      }
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  }, [text, dur]);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);
  return [shown, run];
}

// Dispara a animação uma vez quando `when` fica verdadeiro.
export function useScrambleWhen(run, when, delay = 350) {
  useEffect(() => {
    if (!when) return;
    const t = setTimeout(run, delay);
    return () => clearTimeout(t);
  }, [when, run, delay]);
}
