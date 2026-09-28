import { JOBS } from "../data/content";
import { Title } from "../components/Section";

// duração contando o mês de início e o de fim
function duracao(s, e) {
  const [m1, y1] = s.split("/").map(Number);
  const now = new Date();
  const [m2, y2] = e ? e.split("/").map(Number) : [now.getMonth() + 1, now.getFullYear()];
  const n = (y2 - y1) * 12 + (m2 - m1) + 1, a = Math.floor(n / 12), m = n % 12;
  const pa = a ? `${a} ano${a > 1 ? "s" : ""}` : "", pm = m ? `${m} ${m > 1 ? "meses" : "mês"}` : "";
  return [pa, pm].filter(Boolean).join(" e ");
}

export function Experience() {
  return (
    <div className="inner">
      <Title note="work experience">Experiência profissional</Title>
      <p className="lead rv">Minha trajetória, do emprego atual ao primeiro.</p>
      <div className="tl rv">
        {JOBS.map(j => (
          <div className={`job${j.now ? " now" : ""}`} key={j.co}>
            <div className="when"><b>{j.s}</b><i>•</i><b>{j.e || "Presente"}</b><br />{duracao(j.s, j.e)}</div>
            <div className="card">
              <div className="body">
                <h3>{j.co}</h3>
                <p className="role">{j.role}</p>
                {j.tasks && (
                  <details>
                    <summary>Ver atividades</summary>
                    <ul>{j.tasks.map(t => <li key={t}>{t}</li>)}</ul>
                  </details>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
