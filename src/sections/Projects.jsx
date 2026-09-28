import { useEffect, useRef } from "react";
import { PROJECTS } from "../data/content";
import { REDUCE } from "../hooks/useScramble";
import { Title } from "../components/Section";

// o vídeo só toca quando aparece na tela
function Video({ name, title }) {
  const ref = useRef(null);
  useEffect(() => {
    const v = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !REDUCE) v.play().catch(() => {}); else v.pause();
    }, { threshold: 0.5 });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video ref={ref} muted loop playsInline preload="none" poster={`assets/img/${name}-poster.jpg`} aria-label={`Vídeo do projeto ${title}`}>
      <source src={`assets/video/${name}.mp4`} type="video/mp4" />
    </video>
  );
}

function Project({ p }) {
  return (
    <article className="proj">
      <div className={`shot${p.tall ? " tall" : ""}`}>
        {p.video ? <Video name={p.video} title={p.t} /> : <img src={`assets/img/${p.img}`} alt={`Tela do ${p.t}`} loading="lazy" />}
        {p.note && <small>{p.note}</small>}
      </div>
      <h3>{p.t}</h3>
      <p className="co">{p.co}</p>
      <p>{p.d}</p>
      <div className="pills">{p.tags.map(t => <span className="pill" key={t}>{t}</span>)}</div>
      {(p.live || p.repo) && (
        <div className="acts">
          {p.live && <a href={p.live} target="_blank" rel="noopener">Acessar o projeto</a>}
          {p.repo && <a href={p.repo} target="_blank" rel="noopener">Ver código</a>}
        </div>
      )}
    </article>
  );
}

export function Projects() {
  const rail = useRef(null);
  const slide = dir => {
    const r = rail.current;
    r.scrollBy({ left: dir * (r.querySelector(".proj").offsetWidth + 28) });
  };
  return (
    <div className="inner">
      <Title note="projects">Projetos</Title>
      <p className="lead rv">Aqui estão os projetos que desenvolvi, tanto pessoais quanto os que nasceram das necessidades do meu trabalho.</p>
      <div className="carousel rv">
        <div className="rail" ref={rail}>{PROJECTS.map(p => <Project key={p.t} p={p} />)}</div>
        <div className="arrows">
          <button onClick={() => slide(-1)} aria-label="Projeto anterior"><svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg></button>
          <button onClick={() => slide(1)} aria-label="Próximo projeto"><svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg></button>
        </div>
      </div>
    </div>
  );
}
