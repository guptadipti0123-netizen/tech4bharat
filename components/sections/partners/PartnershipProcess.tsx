import { Handshake, MessageSquare, Search, TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import DotGrid from "@/components/ui/DotGrid";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "We map where your institution's goals overlap with our founder ecosystem.",
  },
  {
    icon: MessageSquare,
    title: "Align",
    description: "A structured conversation to define scope, commitments, and shared outcomes.",
  },
  {
    icon: Handshake,
    title: "Collaborate",
    description: "Joint programs, funding access, or mentorship go live with our cohorts.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "We track impact together and expand the partnership year over year.",
  },
];

/** Horizontal numbered-step process â€” a distinct visual identity from the page's other
 *  timeline-style sections (no left-label/right-image split, just a connected step row). */
export default function PartnershipProcess() {
  return (
    <section id="collaborations" className="relative overflow-hidden bg-white pb-8 pt-6 sm:pb-12 sm:pt-9">
      <DotGrid className="left-0 top-0 h-full w-full text-brand-700/5" />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            title="From first conversation to shared impact"
            className="max-w-2xl"
            titleClassName="text-[24px] font-extrabold leading-[1.15] tracking-tight text-[#0B2A4A] sm:text-[28px] lg:text-[32px]"
          />
        </AnimatedSection>

        <div className="relative mt-8 grid grid-cols-2 gap-x-5 gap-y-7 sm:mt-12 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-8">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-linear-to-r from-transparent via-brand-200 to-transparent lg:block"
          />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={step.title} delay={i * 0.1} className="relative text-center">
                <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-white shadow-md shadow-brand-700/25 sm:h-14 sm:w-14">
                  <Icon size={20} className="sm:hidden" />
                  <Icon size={24} className="hidden sm:block" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-400 text-[11px] font-bold text-ink-900 shadow-xs sm:h-6 sm:w-6 sm:text-xs">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-3 text-[16px] sm:text-[18px] font-bold text-[#0B2A4A]">{step.title}</h3>
                <p className="mt-1.5 text-[13.5px] sm:text-[15px] leading-relaxed text-slate-600">{step.description}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
