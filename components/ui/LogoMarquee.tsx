"use client";

import { motion } from "framer-motion";

interface LogoMarqueeProps {
  items: string[];
  duration?: number;
}

export default function LogoMarquee({ items, duration = 28 }: LogoMarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex w-max gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex h-20 w-48 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-center text-sm font-semibold text-slate-500 transition-colors hover:border-brand-200 hover:text-brand-700"
          >
            {name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
