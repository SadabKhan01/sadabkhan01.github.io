import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Bot from "./Bot.jsx";

const PHRASE = "i am definitely not a human";

function verdictFor(score) {
  if (score >= 80) return { title: "CERTIFIED MACHINE", line: "Flawless rhythm. Welcome, unit. The Auditor suspects nothing.", mood: "happy" };
  if (score >= 55) return { title: "PROBABLY A TOASTER", line: "Decent cadence, but the Auditor noticed you breathing.", mood: "curious" };
  if (score >= 30) return { title: "SUSPICIOUSLY HUMAN", line: "Too much hesitation. The Auditor is watching you closely.", mood: "suspicious" };
  return { title: "DEFINITELY HUMAN", line: "Ejected. Emotions detected in your keystrokes.", mood: "suspicious" };
}

export default function AuditorGame() {
  const [typed, setTyped] = useState("");
  const [result, setResult] = useState(null);
  const times = useRef([]);
  const errors = useRef(0);
  const inputRef = useRef(null);

  const done = typed === PHRASE;

  const onChange = (e) => {
    if (result) return;
    const value = e.target.value;
    if (value.length > typed.length) {
      times.current.push(performance.now());
      if (value[value.length - 1] !== PHRASE[value.length - 1]) errors.current += 1;
    }
    if (value.length < typed.length) errors.current += 1; // backspace = hesitation
    setTyped(value.slice(0, PHRASE.length + 10));

    if (value === PHRASE) {
      const t = times.current;
      const gaps = t.slice(1).map((x, i) => x - t[i]);
      if (gaps.length < PHRASE.length / 2) {
        // pasted or autofilled: the most machine move there is
        setResult({
          score: 99,
          title: "COPY-PASTE PROTOCOL",
          line: "You didn't type at all. Honestly? Peak machine behaviour. Approved.",
          mood: "happy",
        });
        return;
      }
      const mean = gaps.reduce((a, b) => a + b, 0) / gaps.length;
      const sd = Math.sqrt(gaps.reduce((a, b) => a + (b - mean) ** 2, 0) / gaps.length);
      const cv = sd / mean; // rhythm consistency: machines are steady
      let score = Math.round(100 - cv * 130 - errors.current * 7);
      score = Math.max(2, Math.min(99, score));
      setResult({ score, ...verdictFor(score) });
    }
  };

  const reset = () => {
    setTyped("");
    setResult(null);
    times.current = [];
    errors.current = 0;
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const chars = useMemo(
    () =>
      PHRASE.split("").map((c, i) => {
        let state = "pending";
        if (i < typed.length) state = typed[i] === c ? "ok" : "bad";
        return { c, state, key: i };
      }),
    [typed]
  );

  return (
    <div className="game">
      <div className="game__bot">
        <Bot size={92} mood={result ? result.mood : typed.length ? "curious" : "happy"} float={!result} />
      </div>
      <div className="game__panel">
        <p className="game__brief mono">
          THE AUDITOR // rhythm check
        </p>
        <p className="game__instructions">
          Inspired by <strong>Us Among AI</strong>: type the phrase below with perfectly even rhythm.
          The Auditor measures the gaps between your keystrokes. Steady cadence reads as machine;
          hesitation and corrections read as human. Good luck, unit.
        </p>
        <p className="game__phrase mono" aria-label={`Phrase to type: ${PHRASE}`}>
          {chars.map(({ c, state, key }) => (
            <span key={key} className={`game__char game__char--${state}`}>{c === " " ? " " : c}</span>
          ))}
        </p>
        <input
          ref={inputRef}
          className="game__input mono"
          type="text"
          value={typed}
          onChange={onChange}
          placeholder="begin transmission…"
          disabled={!!result}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck="false"
          aria-label="Type the phrase here"
        />
        <AnimatePresence>
          {result && (
            <motion.div
              className="game__result"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="game__meter">
                <motion.div
                  className="game__meter-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${result.score}%` }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <p className="game__score mono">{result.score}% machine</p>
              <p className="game__verdict serif">{result.title}</p>
              <p className="game__line">{result.line}</p>
              <button className="btn btn--line game__reset" onClick={reset}>Run it back</button>
            </motion.div>
          )}
        </AnimatePresence>
        {!result && done && null}
      </div>
    </div>
  );
}
