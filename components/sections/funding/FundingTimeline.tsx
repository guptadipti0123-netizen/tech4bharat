import { ClipboardCheck, Handshake, Search, Send, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";

interface Step {
  icon: LucideIcon;
  title: string;
}

const steps: Step[] = [
  { icon: Search, title: "Find the Right Program" },
  { icon: ClipboardCheck, title: "Prepare Your Startup" },
  { icon: Send, title: "Apply with Guidance" },
  { icon: Handshake, title: "Connect with Investors" },
];

/** How It Works â€” a compact 4-step horizontal roadmap connected by a single line, trimmed
 *  down from the previous 5-stage timeline. */
export default function FundingTimeline() {
  return (
    <section className="relative overflow-hidden bg-brand-50 py-8 sm:py-12">
      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            title="How It Works"
            description="From discovery to a connected investor, in four steps."
            titleClassName="text-[22px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B2A4A] sm:text-[26px] lg:text-[30px]"
          />
        </AnimatedSection>

        <div className="relative mt-6 sm:mt-7">
          <span aria-hidden="true" className="absolute inset-x-0 top-6 hidden h-px bg-brand-200 lg:block" />
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.title} delay={i * 0.08} animation="scale">
                  <div className="relative flex flex-col items-center text-center">
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-white shadow-md shadow-brand-700/25 sm:h-12 sm:w-12">
                      <Icon size={18} className="sm:hidden" />
                      <Icon size={20} className="hidden sm:block" />
                    </span>
                    <Badge variant="brand" className="mt-2 px-2.5 py-0.5 text-[10px]">
                      Step {i + 1}
                    </Badge>
                    <h3 className="mt-1 text-[13px] font-bold leading-snug text-ink-900 sm:text-base">{step.title}</h3>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
