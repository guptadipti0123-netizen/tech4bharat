"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationStyle = "fade" | "slide-left" | "slide-right" | "scale" | "rotate";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  /** Defaults to "fade" (fade + rise) — the original, still most-used entrance style. */
  animation?: AnimationStyle;
}

const variantsByStyle: Record<AnimationStyle, Variants> = {
  fade: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  rotate: {
    hidden: { opacity: 0, rotate: -4, y: 20 },
    visible: { opacity: 1, rotate: 0, y: 0 },
  },
};

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  once = true,
  animation = "fade",
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variantsByStyle[animation]}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
