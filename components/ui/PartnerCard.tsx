"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { getInitials } from "@/lib/utils";

interface PartnerCardProps {
  name: string;
  description: string;
  badge: string;
  /** Optional real logo image path. Falls back to an initials monogram when omitted —
   *  the common case today, since most partner entries have no logo asset yet. */
  logo?: string;
  delay?: number;
}

/** Rich partner card — gradient border, glass surface, and a badge/description pair.
 *  Hover signature: border gradient intensifies, the card lifts, and the shadow deepens. */
export default function PartnerCard({ name, description, badge, logo, delay = 0 }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className="group h-full rounded-3xl bg-linear-to-br from-brand-200 via-secondary-200 to-accent-200 p-px shadow-[0_4px_16px_rgba(22,58,58,0.06)] transition-all duration-300 hover:from-brand-500 hover:via-secondary-500 hover:to-accent-500 hover:shadow-[0_18px_40px_rgba(31,78,61,0.18)]"
    >
      <div className="glass-surface flex h-full flex-col gap-2 rounded-[19px] p-4 sm:gap-3 sm:rounded-[23px] sm:p-6">
        <div className="flex items-center justify-between gap-2">
          {logo ? (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-slate-100 transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12">
              <Image src={logo} alt={`${name} logo`} width={32} height={32} className="h-6.5 w-6.5 object-contain sm:h-8 sm:w-8" />
            </span>
          ) : (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-700 group-hover:text-white sm:h-12 sm:w-12 sm:text-sm">
              {getInitials(name)}
            </span>
          )}
          <Badge variant="neutral" className="px-2.5 py-1 text-[10px]">
            {badge}
          </Badge>
        </div>
        <h4 className="font-heading text-[15px] font-bold leading-snug text-ink-900 sm:text-base">{name}</h4>
        <p className="flex-1 text-[13px] leading-relaxed text-slate-600 sm:text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
