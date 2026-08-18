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
      className="group h-full rounded-3xl bg-linear-to-br from-brand-200 via-secondary-200 to-accent-200 p-px shadow-[0_4px_16px_rgba(6,26,44,0.06)] transition-all duration-300 hover:from-brand-500 hover:via-secondary-500 hover:to-accent-500 hover:shadow-[0_18px_40px_rgba(21,94,154,0.18)]"
    >
      <div className="glass-surface flex h-full flex-col gap-2 rounded-[19px] p-3.5 sm:gap-2.5 sm:rounded-[23px] sm:p-4">
        <div className="flex items-center gap-2.5">
          {logo ? (
            <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-slate-100 transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10">
              <Image src={logo} alt={`${name} logo`} width={28} height={28} className="h-5.5 w-5.5 object-contain sm:h-6.5 sm:w-6.5" />
            </span>
          ) : (
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-700 group-hover:text-white sm:h-10 sm:w-10">
              {getInitials(name)}
            </span>
          )}
          <h4 className="font-heading min-w-0 flex-1 truncate text-[15px] font-bold leading-snug text-[#0B2A4A] sm:text-[16px]">{name}</h4>
          <Badge variant="neutral" className="shrink-0 px-2 py-0.5 text-[11px] font-semibold">
            {badge}
          </Badge>
        </div>
        <p className="text-[13px] leading-relaxed text-slate-600 sm:text-[14px]">{description}</p>
      </div>
    </motion.div>
  );
}
