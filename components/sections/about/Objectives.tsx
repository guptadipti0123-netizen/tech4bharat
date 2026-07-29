import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";
import { objectives } from "@/lib/data";

export default function Objectives() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle eyebrow="Objectives" title="What we're working to achieve" />
        </AnimatedSection>

        <ul className="mx-auto mt-14 max-w-3xl space-y-4">
          {objectives.map((objective, i) => (
            <AnimatedSection key={objective.title} delay={i * 0.06}>
              <li className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/10">
                <CheckCircle2
                  size={24}
                  className={cn(
                    "mt-0.5 shrink-0",
                    i % 2 === 0 ? "text-brand-600" : "text-secondary-600"
                  )}
                />
                <span className="text-lg text-slate-700">{objective.title}</span>
              </li>
            </AnimatedSection>
          ))}
        </ul>
      </Container>
    </section>
  );
}
