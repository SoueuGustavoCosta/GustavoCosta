import { ICONS } from "../data/icons";
import { SOCIALS, TECH_NAMES } from "../data/content";

export function SocialIcon({ d }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={d} /></svg>;
}

export function SocialLinks() {
  return SOCIALS.map(s => (
    <a key={s.name} href={s.href} target="_blank" rel="noopener" aria-label={s.name}><SocialIcon d={s.d} /></a>
  ));
}

// os SVGs vêm prontos do devicon (conteúdo fixo, sem entrada do usuário)
export function Tech({ k }) {
  return (
    <div className="tech">
      <span className="tech-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ICONS[k] }} />
      <span>{TECH_NAMES[k]}</span>
    </div>
  );
}
