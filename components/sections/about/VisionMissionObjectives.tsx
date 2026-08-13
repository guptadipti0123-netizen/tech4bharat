import { Check, Compass, Eye, Target, type LucideIcon } from "lucide-react";
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

/** Vision, Mission, and Objectives — three equal-width, equal-height compact boxes in a
 *  single row on desktop (icon, title, three bullet points each), stacking to one column
 *  only on narrow mobile widths. */
export default function VisionMissionObjectives() {
  return (
    <section id="vision-mission" className="bg-[#F3F7FF] py-8 sm:py-12">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Vision, Mission & Objectives"
            className="max-w-3xl"
            titleClassName="text-balance text-[20px] sm:text-[22px] font-bold leading-tight tracking-tight text-[#082F63] lg:text-[25px]"
          />
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <AnimatedSection key={card.title} delay={i * 0.08} className="h-full">
                <div className="flex h-full min-h-70 flex-col rounded-2xl border border-[#D8E5F7] bg-[#F8FAFF] p-6 shadow-[0_4px_16px_rgba(8,47,99,0.06)]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DCE8FF]">
                    <Icon size={19} strokeWidth={1.75} className="text-[#315BEA]" />
                  </span>
                  <h3 className="mt-3 text-[22px] font-bold text-[#082F63] lg:text-[24px]">{card.title}</h3>

                  <ul className="mt-3 flex flex-col gap-2.5">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-[13px] leading-snug text-[#526777] lg:text-[14px]">
                        <Check size={14} className="mt-0.5 shrink-0 text-[#315BEA]" strokeWidth={3} />
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
