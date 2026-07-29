"use client";

import { motion } from "framer-motion";
import PartnerLogoCard from "@/components/ui/PartnerLogoCard";

interface PartnerLogoMarqueeProps {
  names: string[];
  duration?: number;
}

/** Auto-scrolling row of partner logo cards — used at the top of the Partners page only. */
export default function PartnerLogoMarquee({ names, duration = 32 }: PartnerLogoMarqueeProps) {
  const doubled = [...names, ...names];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex w-max gap-5"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((name, i) => (
          <PartnerLogoCard key={`${name}-${i}`} name={name} className="w-44 shrink-0" />
        ))}
      </motion.div>
    </div>
  );
}
