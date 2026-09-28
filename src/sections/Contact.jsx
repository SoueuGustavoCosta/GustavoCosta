import { useState } from "react";
import { EMAIL, WHATSAPP } from "../data/content";
import { SocialIcon, SocialLinks } from "../components/Icons";
import { Title } from "../components/Section";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); } catch { /* sem permissão: o link mailto continua ali */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <div className="inner">
        <div><Title note="contact">Contato</Title></div>
        <p className="rv" style={{ fontSize: 18, margin: 0 }}>Fique à vontade para entrar em contato e trocar uma ideia!</p>
        <div className="mail rv">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <button className={`copy${copied ? " ok" : ""}`} onClick={copy} aria-label={copied ? "E-mail copiado!" : "Copiar e-mail"} title={copied ? "Copiado!" : "Copiar e-mail"}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h8" /></svg>
          </button>
        </div>
        <a className="wa-btn rv" href={WHATSAPP.href} target="_blank" rel="noopener"><SocialIcon d={WHATSAPP.d} />Chamar no WhatsApp</a>
        <div className="c-icons rv"><SocialLinks /></div>
      </div>
      <footer>
        <div className="f-icons"><SocialLinks /></div>
        <div>Desenvolvido por Gustavo Costa © {new Date().getFullYear()}</div>
        <div className="right">Veja também meu <a href="https://github.com/SoueuGustavoCosta" target="_blank" rel="noopener">GitHub</a>.</div>
      </footer>
    </>
  );
}
