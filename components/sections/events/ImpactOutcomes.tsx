import Image from "next/image";
import { Handshake, Layers, Network, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface OutcomeCard {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
}

// Featured + medium cards reuse three of the site's real established outcome themes.
const featured: OutcomeCard = {
  icon: Network,
  title: "Strong Startup Ecosystem",
  description: "Connecting founders with mentors, investors, and experts across the network.",
  iconBg: "#1F4E3D",
};

const mediumCards: OutcomeCard[] = [
  {
    icon: Layers,
    title: "Practical Learning",
    description: "Hands-on workshops and real-world startup guidance.",
    iconBg: "#1B2E4A",
  },
  {
    icon: Handshake,
    title: "Strategic Networking",
    description: "Meaningful connections across academia, industry, and government.",
    iconBg: "#D4A017",
  },
];

// Real counts, computed from this project's own data (lib/data.ts startups/mentors/advisors,
// lib/events.ts Workshop-type events) — not invented figures.
const kpis = [
  { value: "8+", label: "Startups", accent: "#1F4E3D" },
  { value: "6+", label: "Mentors", accent: "#D4A017" },
  { value: "4+", label: "Workshops", accent: "#1F4E3D" },
];

/** Compact "Impact & Outcomes" closer for the Events page — an editorial dashboard instead
 *  of six identical cards: a real workshop photo on the left, and on the right one wide
 *  featured card, two pastel medium cards, and three compact KPI tiles, each styled
 *  differently so nothing reads as a repeated template. */
export default function ImpactOutcomes() {
  const FeaturedIcon = featured.icon;
  const MediumIcon0 = mediumCards[0].icon;
  const MediumIcon1 = mediumCards[1].icon;

  return (
    <section id="impact-outcomes" className="bg-sand-50 py-6 sm:py-9">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Impact & Outcomes"
            description="Key outcomes and learnings from Tech4Bharat programs and workshops."
            titleClassName="text-[27px] font-bold leading-[1.1] tracking-[-0.02em] text-[#163B2D] sm:text-[38px] lg:text-[44px]"
            descriptionClassName="mt-2 text-[14px] sm:mt-3 sm:text-[18px] font-medium leading-relaxed text-[#5F6B68]"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-9">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[42fr_58fr] lg:gap-10">
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-[0_8px_24px_rgba(22,58,58,0.1)] lg:aspect-auto lg:h-full">
                <Image
                  src="/images/legacy/policy-workshop-3.jpg"
                  alt="Students and faculty at the closing session of a Tech4Bharat workshop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-4">
                {/* Featured outcome — full width */}
                <div className="relative overflow-hidden rounded-[18px] border-[1.5px] border-[#D9E7DF] bg-[#FBFAF6] p-5">
                  <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-[#1F4E3D]" />
                  <div className="pl-3">
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: featured.iconBg }}
                      >
                        <FeaturedIcon size={17} />
                      </span>
                      <span className="rounded-full bg-[#1F4E3D]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#1F4E3D]">
                        Featured Outcome
                      </span>
                    </div>
                    <h3 className="mt-3 text-[19px] font-bold leading-tight text-ink-900">{featured.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">
                      {featured.description}
                    </p>
                  </div>
                </div>

                {/* Medium cards — pastel backgrounds, alternating icon position */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[18px] p-5" style={{ backgroundColor: "#EEF6F1" }}>
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: mediumCards[0].iconBg }}
                    >
                      <MediumIcon0 size={16} />
                    </span>
                    <h3 className="mt-3 text-[17px] font-bold leading-tight text-ink-900">{mediumCards[0].title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{mediumCards[0].description}</p>
                  </div>
                  <div className="rounded-[18px] p-5" style={{ backgroundColor: "#EEF6FF" }}>
                    <div className="flex justify-end">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: mediumCards[1].iconBg }}
                      >
                        <MediumIcon1 size={16} />
                      </span>
                    </div>
                    <h3 className="mt-3 text-[17px] font-bold leading-tight text-ink-900">{mediumCards[1].title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{mediumCards[1].description}</p>
                  </div>
                </div>

                {/* KPI tiles — no icons, compact, colored top border only */}
                <div className="grid grid-cols-3 gap-4">
                  {kpis.map((kpi) => (
                    <div
                      key={kpi.label}
                      className="rounded-[14px] border-t-[3px] bg-white px-3 py-4 text-center shadow-sm"
                      style={{ borderTopColor: kpi.accent }}
                    >
                      <p className="text-[28px] font-extrabold leading-none text-ink-900">{kpi.value}</p>
                      <p className="mt-1.5 text-[12px] font-semibold text-slate-500">{kpi.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
