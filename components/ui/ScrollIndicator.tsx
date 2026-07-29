"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/** A gently bobbing "scroll down" cue for full-height hero sections. */
export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-white/60"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <ChevronDown size={28} strokeWidth={1.5} />
    </motion.div>
  );
}
