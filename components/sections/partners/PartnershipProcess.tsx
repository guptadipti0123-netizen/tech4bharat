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
    <section id="collaborations" className="relative overflow-hidden bg-white py-8 sm:py-12">
      <DotGrid className="left-0 top-0 h-full w-full text-brand-700/5" />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle eyebrow="How It Works" title="From first conversation to shared impact" />
        </AnimatedSection>

        <div className="relative mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-linear-to-r from-transparent via-brand-200 to-transparent lg:block"
          />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={step.title} delay={i * 0.1} className="relative text-center">
                <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-white shadow-md shadow-brand-700/25">
                  <Icon size={20} />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-500 text-[10px] font-bold text-ink-900">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-ink-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
