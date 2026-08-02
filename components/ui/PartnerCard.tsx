"use client";

import { motion } from "framer-motion";
import { getInitials } from "@/lib/utils";

interface PartnerCardProps {
  name: string;
  description: string;
  badge: string;
  delay?: number;
}

/** Rich partner card — gradient border, glass surface, and a badge/description pair.
 *  Hover signature: border gradient intensifies and the card lifts. */
export default function PartnerCard({ name, description, badge, delay = 0 }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group h-full rounded-2xl bg-linear-to-br from-brand-200 via-secondary-200 to-accent-200 p-px transition-all duration-300 hover:from-brand-500 hover:via-secondary-500 hover:to-accent-500 hover:shadow-[0_16px_36px_rgba(31,78,61,0.16)]"
    >
      <div className="glass-surface flex h-full flex-col gap-3 rounded-[15px] p-5">
        <div className="flex items-start justify-between gap-2">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
            {getInitials(name)}
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
            {badge}
          </span>
        </div>
        <h4 className="font-heading text-base font-bold leading-snug text-ink-900">{name}</h4>
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </motion.div>
  );
}
