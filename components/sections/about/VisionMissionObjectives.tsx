import { Check, Compass, Eye, Target, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface PrincipleCard {
  icon: LucideIcon;
  title: string;
  bullets: string[];
  gradient: string;
  border: string;
  hoverBorder: string;
  shadow: string;
  shadowHover: string;
  iconColor: string;
  iconBg: string;
}

const cards: PrincipleCard[] = [
  {
    icon: Eye,
    title: "Vision",
    bullets: [
      "Geography never limits ambition",
      "Access to mentorship and capital",
      "A community for category-defining companies",
    ],
    gradient: "linear-gradient(135deg,#EAF4FF,#F8FBFF)",
    border: "#8CC6FF",
    hoverBorder: "#5BA8F0",
    shadow: "0 12px 30px rgba(59,130,246,.10)",
    shadowHover: "0 16px 34px rgba(59,130,246,.18)",
    iconColor: "#3B82F6",
    iconBg: "rgba(59,130,246,.15)",
  },
  {
    icon: Compass,
    title: "Mission",
    bullets: [
      "Incubate and accelerate high-potential startups",
      "Structured mentorship and funding access",
      "Ecosystem partnerships that drive impact",
    ],
    gradient: "linear-gradient(135deg,#F3EDFF,#FCFAFF)",
    border: "#B8A2FF",
    hoverBorder: "#9678F5",
    shadow: "0 12px 30px rgba(139,92,246,.10)",
    shadowHover: "0 16px 34px rgba(139,92,246,.18)",
    iconColor: "#8B5CF6",
    iconBg: "rgba(139,92,246,.15)",
  },
  {
    icon: Target,
    title: "Objectives",
    bullets: ["Support Innovation", "Startup Incubation", "Industry Collaboration"],
    gradient: "linear-gradient(135deg,#FFF7EB,#FFFCF6)",
    border: "#F5BE63",
    hoverBorder: "#E8A23A",
    shadow: "0 12px 30px rgba(245,158,11,.10)",
    shadowHover: "0 16px 34px rgba(245,158,11,.18)",
    iconColor: "#F59E0B",
    iconBg: "rgba(245,158,11,.15)",
  },
];

/** Vision, Mission, and Objectives — a deliberately distinct treatment from every other
 *  card pattern on the site: compact pastel-gradient cards, a colored border keyed to
 *  each card's theme, a translucent icon roundel paired with the heading, and pill-shaped
 *  points instead of a bulleted checklist. */
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

        <div className="mt-10 grid gap-4.5 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <AnimatedSection key={card.title} delay={i * 0.08}>
                <div
                  style={
                    {
                      background: card.gradient,
                      borderColor: card.border,
                      boxShadow: card.shadow,
                      "--hover-border": card.hoverBorder,
                      "--shadow-hover": card.shadowHover,
                    } as React.CSSProperties
                  }
                  className="flex h-full flex-col rounded-[20px] border-2 px-5 pb-5 pt-4.5 transition-all duration-300 hover:-translate-y-1 hover:border-(--hover-border) hover:shadow-(--shadow-hover)"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: card.iconBg }}
                    >
                      <Icon size={19} style={{ color: card.iconColor }} strokeWidth={1.75} />
                    </span>
                    <h3 className="text-[20px] font-bold text-[#16324A]">{card.title}</h3>
                  </div>

                  <div className="mt-2.5 flex flex-col gap-1.5">
                    {card.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="inline-flex w-fit items-center gap-2.5 rounded-full px-3.5 py-2 text-[14px] leading-snug text-[#3A4256]"
                        style={{ backgroundColor: "rgba(255,255,255,.65)", border: "1px solid rgba(255,255,255,.7)" }}
                      >
                        <Check size={13} className="shrink-0" strokeWidth={3} style={{ color: card.iconColor }} />
                        {bullet}
                      </span>
                    ))}
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
