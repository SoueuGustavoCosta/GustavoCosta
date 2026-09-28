import { useState } from "react";
import { COURSES } from "../data/content";
import { Title } from "../components/Section";

const TABS = [["acad", "Formação acadêmica"], ["cert", "Cursos e certificados"]];

export function Education() {
  const [tab, setTab] = useState("acad");
  // setas do teclado alternam entre as abas
  const onKey = e => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.stopPropagation();
    const next = TABS[(TABS.findIndex(([k]) => k === tab) + 1) % TABS.length][0];
    setTab(next);
    document.getElementById(`tab-${next}`).focus();
  };

  return (
    <div className="inner">
      <Title note="education">Educação</Title>
      <p className="lead rv">Minha formação, cursos e certificados.</p>
      <div className="rv">
        <div className="tabs" role="tablist" onKeyDown={onKey}>
          {TABS.map(([k, label]) => (
            <button key={k} role="tab" id={`tab-${k}`} aria-selected={tab === k} aria-controls={`p-${k}`} tabIndex={tab === k ? 0 : -1} onClick={() => setTab(k)}>{label}</button>
          ))}
        </div>
        <div id="p-acad" role="tabpanel" aria-labelledby="tab-acad" hidden={tab !== "acad"}>
          <article className="edu">
            <div className="edu-top">
              <div><h3>Faculdade Única</h3><em>Bacharelado em Ciência da Computação</em></div>
              <span className="date">Previsão de conclusão: 04/2030</span>
            </div>
            <p>Graduação com foco em algoritmos, estruturas de dados, programação orientada a objetos, banco de dados e engenharia de software.</p>
            <div className="status">Em andamento</div>
          </article>
        </div>
        <div id="p-cert" role="tabpanel" aria-labelledby="tab-cert" hidden={tab !== "cert"}>
          {COURSES.map(c => (
            <article className="edu" key={c}><div className="edu-top"><div><h3>{c}</h3><em>Curso livre</em></div></div></article>
          ))}
        </div>
      </div>
    </div>
  );
}
