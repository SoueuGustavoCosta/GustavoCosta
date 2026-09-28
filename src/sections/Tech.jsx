import { BUILT, GROUPS } from "../data/content";
import { Tech as Item } from "../components/Icons";
import { Title } from "../components/Section";

export function Tech() {
  return (
    <div className="inner">
      <Title note="stack">Tecnologias</Title>
      <p className="lead rv">Linguagens, frameworks e ferramentas que uso no dia a dia.</p>
      <div className="groups rv">
        {GROUPS.map(([g, ks]) => (
          <fieldset key={g}><legend>{g}</legend><div className="logos">{ks.map(k => <Item key={k} k={k} />)}</div></fieldset>
        ))}
      </div>
      <div className="built rv">
        <p>Este portfólio foi construído com:</p>
        <div className="logos">{BUILT.map(k => <Item key={k} k={k} />)}</div>
      </div>
    </div>
  );
}
