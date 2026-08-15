import Image from "next/image";
import { Building2, Calendar, Check, Handshake, MapPin, Timer } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";
import DotGrid from "@/components/ui/DotGrid";

const infoCards = [
  { icon: Calendar, label: "Date", value: "Dec 18–23, 2025" },
  { icon: MapPin, label: "Venue", value: "COEP Technological University, Pune" },
  { icon: Timer, label: "Duration", value: "6 Days" },
  { icon: Building2, label: "Organizers", value: "COEP Technological University & VJTI Mumbai" },
  { icon: Handshake, label: "Partners", value: "C-DAC, Observer Research Foundation" },
];

const floatingBadges = ["6-Day Intensive", "COEP Tech", "Policy & Governance", "C-DAC Field Visit"];

/** Events page opener — a curated spotlight on the most substantial real program in the
 *  data (the 6-day Digital & Tech Policy Workshop), replacing the old generic hero banner
 *  and "Featured Event" card with premium info-cards instead of prose. */
export default function RecentEventSpotlight() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-brand-50 via-white to-white pb-10 pt-24 sm:pb-14 sm:pt-28">
      <DotGrid className="left-0 top-0 h-full w-full text-brand-700/6" />
      <Blob tone="brand" className="-left-32 top-10 h-96 w-96" />
      <Blob tone="accent" className="-right-24 bottom-0 h-80 w-80" animate={false} />

      <Container className="relative">
        <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          <AnimatedSection>
            <h1 className="text-[22px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B2A4A] sm:text-[28px] lg:text-[32px]">
              Digital &amp; Tech Policy Workshop
            </h1>
            <p className="mt-1.5 max-w-lg text-[13px] font-medium leading-relaxed text-[#526777] sm:text-[15px]">
              Technology, Governance &amp; Strategic Decision-Making.
            </p>

            {/* Compact 2-column info grid on mobile & desktop */}
            <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-2.5">
              {infoCards.map(({ icon: Icon, label, value }, idx) => (
                <div
                  key={label}
                  className={`flex items-start gap-2 rounded-xl border border-slate-200/80 bg-white/95 p-2 sm:p-3 shadow-2xs transition-all hover:border-[#155E9A]/30 hover:shadow-xs sm:rounded-2xl ${
                    idx === infoCards.length - 1 ? "col-span-2 sm:col-span-1" : ""
                  }`}
                >
                  <span className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-lg bg-blue-50/90 text-[#155E9A] mt-0.5 sm:h-7.5 sm:w-7.5">
                    <Icon size={13} className="sm:hidden" />
                    <Icon size={14} className="hidden sm:block" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-wider text-slate-400">
                      {label}
                    </p>
                    <p className="mt-0.5 text-[11px] sm:text-[12.5px] font-bold leading-snug text-[#0B2A4A] line-clamp-2">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} animation="scale">
            <div className="relative">
              <div className="relative aspect-4/3 overflow-hidden rounded-[28px] border-4 border-white shadow-2xl">
                <Image
                  src="/images/legacy/policy-workshop-1.png"
                  alt="Digital & Tech Policy Workshop session at COEP Technological University"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2.5">
                {floatingBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-ink-900 shadow-md"
                  >
                    <Check size={12} strokeWidth={3} className="text-brand-600" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
