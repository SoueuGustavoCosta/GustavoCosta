import { useEffect, useState } from "react";
import { REDUCE } from "../hooks/useScramble";

// Abertura: o nome é desenhado e preenchido; some sozinho ou com um clique.
export function Intro({ onDone }) {
  const [state, setState] = useState(REDUCE ? "gone" : "on");

  useEffect(() => {
    if (REDUCE) { onDone(); return; }
    const t = setTimeout(() => setState(s => (s === "on" ? "out" : s)), 2700);
    return () => clearTimeout(t);
  }, [onDone]);

  useEffect(() => {
    if (state !== "out") return;
    onDone();
    const t = setTimeout(() => setState("gone"), 700);
    return () => clearTimeout(t);
  }, [state, onDone]);

  if (state === "gone") return null;
  const lines = <><text x="260" y="100" textAnchor="middle">GUSTAVO</text><text x="260" y="205" textAnchor="middle">COSTA</text></>;
  return (
    <div id="intro" className={state === "out" ? "out" : ""} aria-hidden="true" onClick={() => setState("out")}>
      <svg viewBox="0 0 520 230"><g className="ln">{lines}</g><g className="cover">{lines}</g></svg>
    </div>
  );
}
