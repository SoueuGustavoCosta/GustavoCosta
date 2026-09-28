import { useState } from "react";
import { SECTIONS } from "../data/content";

export function Header({ cur, go }) {
  const [open, setOpen] = useState(false);
  const nav = i => e => { e.preventDefault(); go(i); setOpen(false); };

  return (
    <header>
      <a href="#inicio" className="logo" onClick={nav(0)} aria-label="Início">Gustavo<span>Costa</span></a>
      <nav aria-label="Principal">
        <ul id="menu" className={open ? "open" : ""}>
          {SECTIONS.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={cur === i ? "active" : ""} aria-current={cur === i ? "true" : undefined} onClick={nav(i)}>{s.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="menu-btn" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(o => !o)}>
        <i /><i /><i />
      </button>
    </header>
  );
}
