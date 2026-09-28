import { useCallback, useEffect, useRef, useState } from "react";
import { REDUCE } from "./useScramble";

const mq = matchMedia("(min-width: 901px)");

// Navegação por seção.
// Desktop: uma seção por tela, trocada pela roda do mouse, teclado ou toque.
// Celular: rolagem normal; a seção visível é marcada no menu.
export function useFullpage(ids) {
  const [desktop, setDesktop] = useState(mq.matches);
  const [cur, setCur] = useState(0);
  const [seen, setSeen] = useState([]); // seções que já apareceram (animação de entrada)
  const pages = useRef([]);
  const curRef = useRef(0);
  const lockUntil = useRef(0);
  const count = ids.length;

  const reveal = useCallback(i => setSeen(s => (s.includes(i) ? s : [...s, i])), []);
  const mark = useCallback(i => { curRef.current = i; setCur(i); reveal(i); }, [reveal]);

  const go = useCallback(i => {
    i = Math.max(0, Math.min(count - 1, i));
    if (mq.matches) {
      if (i === curRef.current) return;
      lockUntil.current = performance.now() + 1000;
      pages.current[i].scrollTop = 0;
      mark(i);
    } else {
      pages.current[i].scrollIntoView({ behavior: REDUCE ? "auto" : "smooth" });
    }
    history.replaceState(null, "", `#${ids[i]}`);
  }, [count, ids, mark]);

  // abre direto na seção do link (ex.: .../#contato)
  const start = useCallback(() => {
    const i = Math.max(0, ids.indexOf(decodeURIComponent(location.hash.slice(1))));
    mark(i);
    if (!mq.matches && i) pages.current[i].scrollIntoView();
  }, [ids, mark]);

  useEffect(() => {
    const onChange = e => setDesktop(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("fp", desktop);
  }, [desktop]);

  // desktop: roda do mouse, teclado e toque
  useEffect(() => {
    if (!desktop) return;
    const locked = () => performance.now() < lockUntil.current;

    const onWheel = e => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      // a inércia do touchpad continua mandando eventos: segura a trava até eles pararem
      if (locked()) { lockUntil.current = Math.max(lockUntil.current, performance.now() + 150); return; }
      if (Math.abs(e.deltaY) < 8) return;
      const pg = pages.current[curRef.current], down = e.deltaY > 0;
      // se a seção tem conteúdo maior que a tela, rola ela primeiro
      const canInner = down ? pg.scrollTop + pg.clientHeight < pg.scrollHeight - 2 : pg.scrollTop > 2;
      if (canInner) { pg.scrollBy({ top: e.deltaY, behavior: "auto" }); return; }
      go(curRef.current + (down ? 1 : -1));
    };
    const onKey = e => {
      if (locked() || e.altKey || e.ctrlKey || e.metaKey) return;
      const to = { ArrowDown: 1, PageDown: 1, ArrowUp: -1, PageUp: -1 }[e.key];
      if (to) { e.preventDefault(); go(curRef.current + to); }
      if (e.key === "Home") { e.preventDefault(); go(0); }
      if (e.key === "End") { e.preventDefault(); go(count - 1); }
    };
    let ty = null;
    const onTouchStart = e => { ty = e.touches[0].clientY; };
    const onTouchEnd = e => {
      if (ty === null) return;
      const dy = ty - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 50) go(curRef.current + (dy > 0 ? 1 : -1));
      ty = null;
    };

    addEventListener("wheel", onWheel, { passive: false });
    addEventListener("keydown", onKey);
    addEventListener("touchstart", onTouchStart, { passive: true });
    addEventListener("touchend", onTouchEnd);
    return () => {
      removeEventListener("wheel", onWheel);
      removeEventListener("keydown", onKey);
      removeEventListener("touchstart", onTouchStart);
      removeEventListener("touchend", onTouchEnd);
    };
  }, [desktop, go, count]);

  // celular: marca a seção visível e anima cada uma quando aparece
  useEffect(() => {
    if (desktop) return;
    const idx = el => pages.current.indexOf(el);
    const spy = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && mark(idx(e.target))),
      { rootMargin: "-45% 0px -50% 0px" });
    const show = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && reveal(idx(e.target))),
      { threshold: 0.12 });
    pages.current.forEach(p => { spy.observe(p); show.observe(p); });
    return () => { spy.disconnect(); show.disconnect(); };
  }, [desktop, mark, reveal]);

  return {
    desktop, cur, seen, go, start,
    pageRef: i => el => { pages.current[i] = el; },
    trackStyle: desktop ? { transform: `translateY(${-cur * 100}vh)` } : undefined,
    // Tab até um link de outra seção: leva para aquela seção
    onPageFocus: i => () => { if (mq.matches && i !== curRef.current) go(i); },
    // o navegador tenta rolar o contêiner até o elemento focado; o deslocamento é só pelo transform
    onPagesScroll: e => { if (mq.matches) e.currentTarget.scrollTop = 0; },
  };
}
