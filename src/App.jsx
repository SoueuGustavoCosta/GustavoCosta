import { useCallback, useState } from "react";
import { SECTIONS } from "./data/content";
import { useFullpage } from "./hooks/useFullpage";
import { Intro } from "./components/Intro";
import { Header } from "./components/Header";
import { SocialLinks } from "./components/Icons";
import { Section } from "./components/Section";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Education } from "./sections/Education";
import { Tech } from "./sections/Tech";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";

const IDS = SECTIONS.map(s => s.id);
const CONTENT = [Hero, Projects, Experience, Education, Tech, About, Contact];

export default function App() {
  const fp = useFullpage(IDS);
  const { cur, go, start } = fp;
  const [started, setStarted] = useState(false);
  const onIntroDone = useCallback(() => { setStarted(true); start(); }, [start]);
  const last = SECTIONS.length - 1;

  return (
    <>
      <Intro onDone={onIntroDone} />
      <Header cur={cur} go={go} />

      <div className="ticks" aria-label="Seções">
        {SECTIONS.map((s, i) => (
          <button key={s.id} className={cur === i ? "active" : ""} aria-label={s.name} onClick={() => go(i)} />
        ))}
      </div>
      <div className="socials"><SocialLinks /></div>
      <button className={`next${cur === last ? " hide" : ""}`} onClick={() => go(cur + 1)} tabIndex={cur === last ? -1 : 0}>
        <span>{SECTIONS[Math.min(cur + 1, last)].name}</span>
      </button>

      <main id="pages" onScroll={fp.onPagesScroll}>
        <div id="track" style={fp.trackStyle}>
          {SECTIONS.map((s, i) => {
            const Content = CONTENT[i];
            return (
              <Section key={s.id} id={s.id} inView={fp.seen.includes(i)} pageRef={fp.pageRef(i)} onFocus={fp.onPageFocus(i)}>
                <Content started={started} />
              </Section>
            );
          })}
        </div>
      </main>
    </>
  );
}
