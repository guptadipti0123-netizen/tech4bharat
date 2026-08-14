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

        <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-8 sm:grid-cols-3 sm:gap-4">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <AnimatedSection key={card.title} delay={i * 0.08} className="h-full">
                <div className="relative h-full">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-2 translate-y-2 rounded-tl-xl rounded-bl-xl rounded-tr-[42px] rounded-br-[42px]"
                    style={{ background: "linear-gradient(135deg,#3156D8,#4F6FF0)" }}
                  />
                  <div className="relative flex h-full min-h-56 flex-col rounded-tl-xl rounded-bl-xl rounded-tr-[42px] rounded-br-[42px] bg-[#F7F9FF] p-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#DCE8FF]">
                      <Icon size={16} strokeWidth={1.75} className="text-[#315BEA]" />
                    </span>
                    <h3 className="mt-3 text-[15px] font-extrabold uppercase tracking-tight text-[#082F63]">
                      {card.title}
                    </h3>

                    <ul className="mt-3 flex flex-col gap-1.5">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-[12px] font-semibold leading-snug text-[#315BEA]">
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
