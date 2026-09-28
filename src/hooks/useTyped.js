import { useEffect, useState } from "react";
import { REDUCE } from "./useScramble";

// Digita e apaga cada palavra da lista, em loop.
export function useTyped(words) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (REDUCE) return;
    let w = 0, i = 0, del = false, timer;
    const step = () => {
      const word = words[w];
      setText(word.slice(0, i));
      if (!del && i < word.length) { i++; timer = setTimeout(step, 90); }
      else if (!del) { del = true; timer = setTimeout(step, 1600); }
      else if (i > 0) { i--; timer = setTimeout(step, 45); }
      else { del = false; w = (w + 1) % words.length; timer = setTimeout(step, 300); }
    };
    step();
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}
