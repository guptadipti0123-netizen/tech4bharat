import { ArrowUpRight, Calendar, Handshake, Rocket, Users, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface ProgramItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  chips: [string, string, string];
  href: string;
  accent: string;
  cardBg: string;
  chipBg: string;
  shadow: string;
}

const ACCENT = "#155E9A";
const CARD_BG = "#EAF4FB";
const CHIP_BG = "rgba(21,94,154,.08)";
const SHADOW = "0 10px 26px rgba(21,94,154,.10)";

const programs: ProgramItem[] = [
  {
    id: "incubation",
    icon: Rocket,
    title: "Incubation & Acceleration",
    description: "Structured support from early-stage prototype validation to scaling and field pilots.",
    chips: ["Idea Validation", "Prototype Stage", "Growth & Scale"],
    href: "/incubation-acceleration",
    accent: ACCENT,
    cardBg: CARD_BG,
    chipBg: CHIP_BG,
    shadow: SHADOW,
  },
  {
    id: "mentorship",
    icon: Users,
    title: "Advisors & Mentors",
    description: "Guidance from experienced advisors across IIT Bombay, industry, and governance.",
    chips: ["1:1 Guidance", "Domain Experts", "Strategic Advisory"],
    href: "/mentors",
    accent: ACCENT,
    cardBg: CARD_BG,
    chipBg: CHIP_BG,
    shadow: SHADOW,
  },
  {
    id: "workshops",
    icon: Calendar,
    title: "Startup Bootcamp",
    description: "Intensive 1-day founder bootcamp in Mumbai covering validation to funding.",
    chips: ["Mumbai 2026", "15+ Startups", "Investor Readiness"],
    href: "/startup-bootcamp",
    accent: ACCENT,
    cardBg: CARD_BG,
    chipBg: CHIP_BG,
    shadow: SHADOW,
  },
  {
    id: "funding-networking",
    icon: Handshake,
    title: "Funding Opportunities",
    description: "Facilitating access to government schemes, grants, and investor networks.",
    chips: ["Startup India", "BIRAC Grants", "Investor Connect"],
    href: "/funding-opportunities",
    accent: ACCENT,
    cardBg: CARD_BG,
    chipBg: CHIP_BG,
    shadow: SHADOW,
  },
];

function ProgramCard({ id, icon: Icon, title, description, chips, href, accent, cardBg, chipBg, shadow }: ProgramItem) {
  return (
    <div
      id={id}
      style={{ backgroundColor: cardBg, borderColor: accent, boxShadow: shadow }}
      className="group flex h-full scroll-mt-28 flex-col rounded-xl border-2 p-2.5 transition-all duration-300 hover:-translate-y-1 sm:rounded-[20px] sm:p-6"
    >
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-14 sm:w-14 sm:rounded-2xl"
        style={{ backgroundColor: chipBg }}
      >
        <Icon size={15} className="sm:hidden" style={{ color: accent }} strokeWidth={1.75} />
        <Icon size={24} className="hidden sm:block" style={{ color: accent }} strokeWidth={1.75} />
      </span>

      <h3 className="mt-2 text-[12.5px] font-bold leading-tight text-ink-900 sm:mt-4 sm:text-[20px]">{title}</h3>
      <p className="mt-1 line-clamp-3 text-[10.5px] leading-snug text-slate-600 sm:mt-2 sm:text-[14px] sm:leading-relaxed">{description}</p>

      <div className="mt-2 flex flex-wrap gap-1 sm:mt-4 sm:gap-2">
        {chips.map((chip) => (
          <span
            key={chip}
            className="rounded-full px-1.5 py-0.5 text-[8.5px] font-semibold sm:px-3 sm:py-1 sm:text-[12px]"
            style={{ backgroundColor: chipBg, color: accent }}
          >
            {chip}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <div className="mt-2.5 h-px w-8 sm:mt-5 sm:w-10" style={{ backgroundColor: accent, opacity: 0.3 }} />
        <Button href={href} variant="primary" size="sm" className="mt-2 w-fit px-2.5 py-1.5 text-[10.5px] sm:mt-4 sm:px-4.5 sm:py-2.25 sm:text-[13px]">
          Explore Program <ArrowUpRight size={12} className="sm:hidden" /><ArrowUpRight size={16} className="hidden sm:block" />
        </Button>
      </div>
    </div>
  );
}

/** Programs — four cards sharing one consistent design system (same size, structure,
 *  spacing, and button style), distinguished only by each program's accent color, pastel
 *  tint, and icon. */
export default function ProgramGrid() {
  return (
    <section className="relative overflow-hidden bg-brand-50 pb-8 pt-3 sm:pb-12 sm:pt-6">
      <Container className="relative">
        <div className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:grid-cols-4">
          {programs.map((program, i) => (
            <AnimatedSection key={program.title} delay={i * 0.08} animation="scale" className="h-full">
              <ProgramCard {...program} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
