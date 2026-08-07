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

/** How It Works — a compact 4-step horizontal roadmap connected by a single line, trimmed
 *  down from the previous 5-stage timeline. */
export default function FundingTimeline() {
  return (
    <section className="relative overflow-hidden bg-brand-50 py-8 sm:py-12">
      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            title="How It Works"
            description="From discovery to a connected investor, in four steps."
            titleClassName="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#163B2D] sm:text-[34px] lg:text-[40px]"
          />
        </AnimatedSection>

        <div className="relative mt-7">
          <span aria-hidden="true" className="absolute inset-x-0 top-6 hidden h-px bg-brand-200 lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.title} delay={i * 0.08} animation="scale">
                  <div className="relative flex flex-col items-center text-center">
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-white shadow-md shadow-brand-700/25">
                      <Icon size={20} />
                    </span>
                    <Badge variant="brand" className="mt-2 px-2.5 py-0.5 text-[10px]">
                      Step {i + 1}
                    </Badge>
                    <h3 className="mt-1 text-base font-bold text-ink-900">{step.title}</h3>
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
