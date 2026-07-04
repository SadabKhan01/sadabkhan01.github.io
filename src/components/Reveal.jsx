import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0, y = 28, immediate = false, ...rest }) {
  const target = { opacity: 1, y: 0 };
  const viewProps = immediate
    ? { animate: target }
    : { whileInView: target, viewport: { once: true, margin: "-60px" } };

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      {...viewProps}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
