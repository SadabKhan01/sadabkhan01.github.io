import { motion } from "framer-motion";

/*
 * Little mascot bots, Claude-style but ours.
 * mood: "happy" | "curious" | "suspicious" | "wave"
 */
export default function Bot({ size = 80, mood = "happy", float = true, delay = 0, style }) {
  const suspicious = mood === "suspicious";
  const wave = mood === "wave";

  return (
    <motion.svg
      viewBox="0 0 120 130"
      width={size}
      height={size * (130 / 120)}
      style={{ overflow: "visible", ...style }}
      aria-hidden="true"
      animate={float ? { y: [0, -7, 0] } : undefined}
      transition={float ? { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay } : undefined}
    >
      {/* antenna */}
      <line x1="60" y1="30" x2="60" y2="14" stroke="var(--accent)" strokeWidth="3.5" strokeLinecap="round" />
      <motion.circle
        cx="60" cy="11" r="5.5"
        fill="var(--accent)"
        animate={{ scale: [1, 1.25, 1], opacity: [1, 0.75, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: delay + 0.4 }}
      />

      {/* arms */}
      {wave ? (
        <motion.line
          x1="103" y1="72" x2="116" y2="52"
          stroke="var(--accent)" strokeWidth="6" strokeLinecap="round"
          style={{ originX: "103px", originY: "72px" }}
          animate={{ rotate: [0, 26, 0, 26, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
        />
      ) : (
        <line x1="103" y1="72" x2="112" y2="84" stroke="var(--accent)" strokeWidth="6" strokeLinecap="round" />
      )}
      <line x1="17" y1="72" x2="8" y2="84" stroke="var(--accent)" strokeWidth="6" strokeLinecap="round" />

      {/* body */}
      <rect x="18" y="30" width="84" height="76" rx="24" fill="var(--accent)" />
      {/* face plate */}
      <rect x="28" y="42" width="64" height="42" rx="16" fill="var(--cream)" />

      {/* eyes: blink via CSS class, squint when suspicious */}
      {suspicious ? (
        <>
          <rect x="42" y="60" width="12" height="4.5" rx="2.25" fill="var(--ink)" />
          <rect x="66" y="60" width="12" height="4.5" rx="2.25" fill="var(--ink)" />
        </>
      ) : (
        <>
          <circle className="bot-eye" cx="48" cy="62" r="5" fill="var(--ink)" />
          <circle className="bot-eye" cx="72" cy="62" r="5" fill="var(--ink)" />
        </>
      )}

      {/* mouth */}
      {mood === "curious" ? (
        <circle cx="60" cy="75" r="3.4" fill="none" stroke="var(--ink)" strokeWidth="2.4" />
      ) : suspicious ? (
        <line x1="54" y1="76" x2="66" y2="76" stroke="var(--ink)" strokeWidth="2.6" strokeLinecap="round" />
      ) : (
        <path d="M52 73 Q60 80 68 73" fill="none" stroke="var(--ink)" strokeWidth="2.6" strokeLinecap="round" />
      )}

      {/* legs */}
      <line x1="45" y1="106" x2="45" y2="118" stroke="var(--accent)" strokeWidth="7" strokeLinecap="round" />
      <line x1="75" y1="106" x2="75" y2="118" stroke="var(--accent)" strokeWidth="7" strokeLinecap="round" />
    </motion.svg>
  );
}
