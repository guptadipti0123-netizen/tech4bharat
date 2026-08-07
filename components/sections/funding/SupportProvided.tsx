import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

const support = [
  "Mentorship",
  "Pitch Deck Support",
  "Investor Connections",
  "Grant Discovery",
  "Application Guidance",
  "Networking",
];

/** Support Provided — small checkmark chips instead of cards, the most compact treatment
 *  on the page. */
export default function SupportProvided() {
  return (
    <section className="bg-brand-50 py-8 sm:py-12">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Support Provided"
            description="What founders get alongside every funding path."
            titleClassName="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#163B2D] sm:text-[34px] lg:text-[40px]"
          />
        </AnimatedSection>

        <div className="mx-auto mt-7 flex max-w-3xl flex-wrap justify-center gap-3">
          {support.map((label, i) => (
            <AnimatedSection key={label} delay={i * 0.05}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2.5 text-sm font-semibold text-ink-900 shadow-sm">
                <Check size={15} className="text-brand-600" strokeWidth={3} /> {label}
              </span>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
