import {
  Cpu,
  GraduationCap,
  HeartPulse,
  Landmark,
  Leaf,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";
import { focusAreas, type FocusArea } from "@/lib/data";

const icons: Record<FocusArea["icon"], LucideIcon> = {
  Cpu,
  Leaf,
  HeartPulse,
  GraduationCap,
  Landmark,
  Rocket,
};

export default function FocusAreas() {
  return (
    <section id="focus-areas" className="bg-white py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Focus Areas"
            title="Domains we're doubling down on"
            description="We back founders building in sectors critical to India's next decade of growth."
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, i) => {
            const Icon = icons[area.icon];
            const isTeal = i % 2 === 1;
            return (
              <AnimatedSection key={area.title} delay={i * 0.08}>
                <Card>
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl",
                      isTeal ? "bg-secondary-50 text-secondary-700" : "bg-brand-50 text-brand-700"
                    )}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-ink-900">{area.title}</h3>
                  <p className="mt-2 text-slate-600">{area.description}</p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
