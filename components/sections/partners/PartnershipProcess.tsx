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

/** Horizontal numbered-step process — a distinct visual identity from the page's other
 *  timeline-style sections (no left-label/right-image split, just a connected step row). */
export default function PartnershipProcess() {
  return (
    <section id="collaborations" className="relative overflow-hidden bg-white pb-8 pt-6 sm:pb-12 sm:pt-9">
      <DotGrid className="left-0 top-0 h-full w-full text-brand-700/5" />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            title="From first conversation to shared impact"
            className="max-w-250"
            titleClassName="text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-[#163A39] sm:text-[30px] lg:text-[34px]"
          />
        </AnimatedSection>

        <div className="relative mt-7 grid grid-cols-2 gap-x-4 gap-y-6 sm:mt-10 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-4 lg:gap-8">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-linear-to-r from-transparent via-brand-200 to-transparent lg:block"
          />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={step.title} delay={i * 0.1} className="relative text-center">
                <div className="relative mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-white shadow-md shadow-brand-700/25 sm:h-12 sm:w-12">
                  <Icon size={17} className="sm:hidden" />
                  <Icon size={20} className="hidden sm:block" />
                  <span className="absolute -right-1 -top-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-accent-500 text-[9px] font-bold text-ink-900 sm:h-5 sm:w-5 sm:text-[10px]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-2.5 text-[14px] font-bold text-ink-900 sm:mt-4 sm:text-base">{step.title}</h3>
                <p className="mt-1 text-[12.5px] leading-snug text-slate-600 sm:mt-2 sm:text-sm sm:leading-relaxed">{step.description}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
