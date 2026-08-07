import { Check, Compass, ListChecks, Target, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface PrincipleCard {
  icon: LucideIcon;
  title: string;
  bullets: string[];
  iconBg: string;
  hover: string;
}

const cards: PrincipleCard[] = [
  {
    icon: Compass,
    title: "Vision",
    bullets: [
      "Geography never limits ambition",
      "Access to mentorship and capital",
      "A community for category-defining companies",
    ],
    iconBg: "bg-brand-700",
    hover: "hover:-translate-y-1.5",
  },
  {
    icon: Target,
    title: "Mission",
    bullets: [
      "Incubate and accelerate high-potential startups",
      "Structured mentorship and funding access",
      "Ecosystem partnerships that drive impact",
    ],
    iconBg: "bg-accent-600",
    hover: "hover:scale-[1.02]",
  },
  {
    icon: ListChecks,
    title: "Objectives",
    bullets: ["Support Innovation", "Startup Incubation", "Industry Collaboration"],
    iconBg: "bg-brand-500",
    hover: "hover:-translate-y-1.5 hover:shadow-lg",
  },
];

/** Vision, Mission, and Objectives as three compact bulleted cards instead of two
 *  paragraph-heavy sections — each with a distinct accent, icon, and hover behavior. */
export default function VisionMissionObjectives() {
  return (
    <section id="vision-mission" className="bg-white py-8 sm:py-12">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Vision, Mission & Objectives"
            className="max-w-3xl"
            titleClassName="text-balance text-3xl sm:text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-4xl"
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <AnimatedSection key={card.title} delay={i * 0.08}>
                <div
                  className={cn(
                    "h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300",
                    card.hover
                  )}
                >
                  <span className={cn("flex h-12 w-12 items-center justify-center rounded-full text-white shadow-sm", card.iconBg)}>
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink-900">{card.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                        <Check size={15} className="mt-0.5 shrink-0 text-brand-600" strokeWidth={3} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
