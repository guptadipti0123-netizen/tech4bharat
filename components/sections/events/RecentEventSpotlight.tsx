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
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
          <AnimatedSection>
            <h1 className="text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-[#163B2D] sm:text-[38px] lg:text-[44px]">
              Digital &amp; Tech Policy Workshop
            </h1>
            <p className="mt-3 max-w-lg text-[15px] font-medium leading-relaxed text-[#5F6B68] sm:text-[18px]">
              Technology, Governance &amp; Strategic Decision-Making.
            </p>

            <div className="mt-7 grid gap-2.5 sm:mt-9 sm:grid-cols-2 sm:gap-3">
              {infoCards.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
                    <p className="mt-0.5 text-sm font-semibold text-ink-900">{value}</p>
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
