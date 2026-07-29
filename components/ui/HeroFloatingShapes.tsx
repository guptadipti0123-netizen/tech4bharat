"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Floating gradient/glass shapes that drift with the cursor for a subtle
 * depth effect. Tracks mouse position via motion values (not React state)
 * so it never triggers a re-render on move.
 */
export default function HeroFloatingShapes() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 0.5 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const shape1X = useTransform(springX, (v) => v * -30);
  const shape1Y = useTransform(springY, (v) => v * -30);
  const shape2X = useTransform(springX, (v) => v * 24);
  const shape2Y = useTransform(springY, (v) => v * 24);
  const shape3X = useTransform(springX, (v) => v * 42);
  const shape3Y = useTransform(springY, (v) => v * -22);
  const shape4X = useTransform(springX, (v) => v * -36);
  const shape4Y = useTransform(springY, (v) => v * 18);

  return (
    <div className="pointer-events-none absolute inset-0">
      <motion.div
        style={{ x: shape1X, y: shape1Y }}
        className="absolute -top-40 left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl"
      />
      <motion.div
        style={{ x: shape2X, y: shape2Y }}
        className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-accent-500/20 blur-3xl"
      />
      <motion.div
        style={{ x: shape3X, y: shape3Y }}
        className="absolute left-[8%] top-1/3 h-24 w-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
      />
      <motion.div
        style={{ x: shape4X, y: shape4Y }}
        className="absolute right-[12%] top-1/4 h-16 w-16 rounded-full border border-accent-400/20 bg-accent-500/10 backdrop-blur-sm"
      />
    </div>
  );
}
