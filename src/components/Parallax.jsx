import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Parallax({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={ref}
      className="relative "
    >
      {children}
      <motion.div className="fixed bottom-0 left-0 right-0 h-1 bg-primary origin-left" style={{ scaleX }} />
    </div>
  );
}
