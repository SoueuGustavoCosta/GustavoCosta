import { useEffect, useState } from "react";
import { CV, STACK } from "../data/content";
import { REDUCE, useScramble, useScrambleWhen } from "../hooks/useScramble";
import { useTyped } from "../hooks/useTyped";

function Word({ text, className = "", play }) {
  const [shown, run] = useScramble(text, 1200);
  useScrambleWhen(run, play, 0);
  return <span className={className} data-text={text} aria-hidden="true" onMouseEnter={() => run(900)}>{shown}</span>;
}

export function Hero({ started }) {
  const typed = useTyped(STACK);
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setGlow(true), REDUCE ? 0 : 1400);
    return () => clearTimeout(t);
  }, [started]);

  return (
    <div className="inner">
      <div>
        <h1 className="hero-name rv">
          <span className="sr-only">Gustavo Costa</span>
          <Word text="Gustavo" play={started} /> <Word text="Costa" className={`costa${glow ? " on" : ""}`} play={started} />
        </h1>
        <p className="hero-role rv">Desenvolvedor</p>
        <div className="hero-stack rv">
          <span className="sr-only">{STACK.join(", ")}</span>
          <span aria-hidden="true">{typed}</span><span className="caret" aria-hidden="true" />
        </div>
        <div className="rv"><a href={CV} className="btn-cv" download>Baixar CV</a></div>
      </div>
      <div className="hero-photo rv">
        <div className="frame" />
        <img className="img" src="assets/img/gustavo-costa-perfil.jpg" alt="Foto de Gustavo Costa" width="900" height="1201" />
      </div>
    </div>
  );
}
