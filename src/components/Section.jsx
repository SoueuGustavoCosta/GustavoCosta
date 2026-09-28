import { createContext, useContext } from "react";
import { useScramble, useScrambleWhen } from "../hooks/useScramble";

const InView = createContext(false);
export const useInView = () => useContext(InView);

export function Section({ id, inView, pageRef, onFocus, children }) {
  return (
    <InView.Provider value={inView}>
      <section className={`page${inView ? " in" : ""}`} id={id} ref={pageRef} onFocus={onFocus}>
        {children}
      </section>
    </InView.Provider>
  );
}

// Título com a tradução em inglês, que se embaralha ao aparecer e ao passar o mouse.
export function Title({ note, children }) {
  const [shown, run] = useScramble(note);
  useScrambleWhen(run, useInView());
  return (
    <h2 className="title rv" onMouseEnter={() => run()}>
      {children}
      <span className="note" aria-hidden="true">{shown}</span>
    </h2>
  );
}
