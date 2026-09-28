import { LANGUAGES } from "../data/content";
import { Title } from "../components/Section";

export function About() {
  return (
    <div className="inner">
      <div className="about">
        <Title note="about me">Sobre</Title>
        <div className="rv">
          <p>Sou desenvolvedor e moro em Ipatinga, Minas Gerais. Antes da programação, trabalhei como ajudante de andaime, almoxarife e auxiliar administrativo, e foi nesse dia a dia que percebi quanto trabalho repetitivo podia ser resolvido com software.</p>
          <p>Hoje sou auxiliar técnico de planejamento na NM Engenharia e curso Ciência da Computação na Faculdade Única. Desenvolvo sistemas com Python, Django, PostgreSQL e React, sempre partindo de problemas reais: controle de estoque, medição de serviços, lançamentos que antes eram feitos à mão.</p>
          <p>Busco atuar com desenvolvimento de software, automação de processos e análise de dados.</p>
        </div>
      </div>
      <div className="rv">
        <div className="langs">
          <h3>Idiomas</h3>
          {LANGUAGES.map(l => (
            <div className="lang-row" key={l.name}>
              <b>{l.name}</b>
              <div className="bar" role="img" aria-label={`${l.name}: ${l.level}`}><i style={{ "--w": `${l.w}%` }} /></div>
              <small>{l.level}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
