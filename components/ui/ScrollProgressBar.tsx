"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** A thin animated bar at the very top of the viewport tracking scroll progress. */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-100 h-1 origin-left bg-linear-to-r from-brand-600 via-brand-500 to-accent-500"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
