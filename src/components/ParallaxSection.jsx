import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function ParallaxSection({
  id,
  children,
  distance = 100,
  className = "",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, distance);

  return (
    <section id={id} ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </section>
  );
}
