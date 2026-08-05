import { BrainCircuit, Building2, CheckCircle2, GraduationCap, Puzzle, Scale, Users, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface Takeaway {
  icon: LucideIcon;
  title: string;
  description: string;
  tone: "brand" | "sky" | "accent" | "violet" | "orange" | "secondary";
}

const takeaways: Takeaway[] = [
  { icon: Scale, title: "Policy Understanding", description: "Frameworks for technology governance.", tone: "brand" },
  { icon: BrainCircuit, title: "AI Awareness", description: "A grounding in AI and digital infrastructure.", tone: "sky" },
  { icon: Puzzle, title: "Strategic Thinking", description: "Approaches to innovation and strategy.", tone: "accent" },
  { icon: Users, title: "Networking", description: "Connections across academia and government.", tone: "violet" },
  { icon: GraduationCap, title: "Hands-on Learning", description: "Practical, session-based skill building.", tone: "orange" },
  { icon: Building2, title: "Industry Exposure", description: "Exposure to real institutions and practitioners.", tone: "secondary" },
];

const toneClasses: Record<Takeaway["tone"], string> = {
  brand: "bg-brand-100 text-brand-700",
  sky: "bg-sky-100 text-sky-700",
  accent: "bg-accent-100 text-accent-700",
  violet: "bg-violet-100 text-violet-700",
  orange: "bg-orange-100 text-orange-700",
  secondary: "bg-secondary-100 text-secondary-700",
};

/** Six compact check-cards instead of a closing summary paragraph. */
export default function KeyTakeaways() {
  return (
    <section className="bg-brand-50 py-8 sm:py-12">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Takeaways"
            title="Key Takeaways"
            description="What participants walked away with."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {takeaways.map((takeaway, i) => {
            const Icon = takeaway.icon;
            return (
              <AnimatedSection key={takeaway.title} delay={(i % 6) * 0.06}>
                <div className="flex items-start gap-3 rounded-2xl border border-white bg-white p-4 shadow-sm">
                  <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-full", toneClasses[takeaway.tone])}>
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="flex items-center gap-1.5 text-sm font-bold text-ink-900">
                      <CheckCircle2 size={14} className="text-brand-600" /> {takeaway.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">{takeaway.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
