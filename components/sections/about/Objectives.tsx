import { GraduationCap, Handshake, Lightbulb, Sprout, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import DotGrid from "@/components/ui/DotGrid";

interface Objective {
  title: string;
  description: string;
  icon: LucideIcon;
}

const objectives: Objective[] = [
  {
    title: "Support Innovation",
    description: "Backing bold ideas with the resources founders need to build.",
    icon: Lightbulb,
  },
  {
    title: "Startup Incubation",
    description: "Structured support from first idea to a fundable company.",
    icon: Sprout,
  },
  {
    title: "Skill Development",
    description: "Hands-on training in the skills founders need to scale.",
    icon: GraduationCap,
  },
  {
    title: "Industry Collaboration",
    description: "Connecting founders with partners across academia and industry.",
    icon: Handshake,
  },
];

export default function Objectives() {
  return (
    <section id="objectives" className="relative overflow-hidden bg-sand-50 py-8 sm:py-12">
      <DotGrid className="left-0 top-0 h-full w-full text-brand-700/6" />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Objectives"
            title="Building the future of innovation."
            className="max-w-200"
            titleClassName="text-balance"
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((objective, i) => {
            const Icon = objective.icon;
            return (
              <AnimatedSection key={objective.title} delay={i * 0.06}>
                <Card>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink-900">{objective.title}</h3>
                  <p className="mt-2 text-slate-600">{objective.description}</p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
