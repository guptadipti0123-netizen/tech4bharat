import { Compass, Eye, Target, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface PrincipleCard {
  icon: LucideIcon;
  title: string;
  bullets: string[];
}

const cards: PrincipleCard[] = [
  {
    icon: Compass,
    title: "Our Mission",
    bullets: [
      "Incubate and accelerate high-potential startups",
      "Structured mentorship and funding access",
      "Ecosystem partnerships that drive impact",
    ],
  },
  {
    icon: Eye,
    title: "Our Vision",
    bullets: [
      "Geography never limits ambition",
      "Access to mentorship and capital",
      "A community for category-defining companies",
    ],
  },
  {
    icon: Target,
    title: "Objectives",
    bullets: ["Support Innovation", "Startup Incubation", "Industry Collaboration"],
  },
];

/** Vision, Mission, and Objectives — a duotone accent-curve card shape (a solid blue layer
 *  offset behind a light card, large rounded top-right/bottom-right corners) per the
 *  reference, with an uppercase title and bold blue dot-bullets instead of checkmarks.
 *  Three equal cards in one row on desktop, stacking on mobile. Compact typography. */
export default function VisionMissionObjectives() {
  return (
    <section id="vision-mission" className="bg-[#F3F7FF] py-7 sm:py-10">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Vision, Mission & Objectives"
            className="max-w-3xl"
            titleClassName="text-balance text-[19px] sm:text-[21px] font-bold leading-tight tracking-tight text-[#082F63] lg:text-[23px]"
          />
        </AnimatedSection>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-3 sm:gap-3.5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <AnimatedSection key={card.title} delay={i * 0.08} className="h-full">
                <div className="relative h-full">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-tl-lg rounded-bl-lg rounded-tr-[32px] rounded-br-[32px]"
                    style={{ background: "linear-gradient(135deg,#3156D8,#4F6FF0)" }}
                  />
                  <div className="relative flex h-full flex-col rounded-tl-lg rounded-bl-lg rounded-tr-[32px] rounded-br-[32px] bg-[#F7F9FF] p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#DCE8FF]">
                      <Icon size={14} strokeWidth={1.75} className="text-[#315BEA]" />
                    </span>
                    <h3 className="mt-2.5 text-[13.5px] font-extrabold uppercase tracking-tight text-[#082F63]">
                      {card.title}
                    </h3>

                    <ul className="mt-2 flex flex-col gap-1">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-1.5 text-[11.5px] font-semibold leading-snug text-[#315BEA]">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#315BEA]" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
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
