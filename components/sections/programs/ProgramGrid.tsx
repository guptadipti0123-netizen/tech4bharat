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
  accent: string;
  cardBg: string;
  chipBg: string;
  shadow: string;
}

// `id` gives each card a real anchor target — the Navbar's Programs dropdown links to
// /programs#incubation and /programs#workshops directly.
// One shared color set for every card — same accent, tint, and shadow — so the four cards
// read as perfectly uniform, distinguished only by their icon, title, description, and chips.
const ACCENT = "#155E9A";
const CARD_BG = "#EAF4FB";
const CHIP_BG = "rgba(21,94,154,.08)";
const SHADOW = "0 10px 26px rgba(21,94,154,.10)";

const programs: ProgramItem[] = [
  {
    id: "incubation",
    icon: Rocket,
    title: "Startup Incubation",
    description: "Structured, cohort-based support from first idea to a working, fundable company.",
    chips: ["Idea Validation", "Product Development", "Demo Day"],
    accent: ACCENT,
    cardBg: CARD_BG,
    chipBg: CHIP_BG,
    shadow: SHADOW,
  },
  {
    id: "mentorship",
    icon: Users,
    title: "Mentorship",
    description: "One-on-one guidance from experienced operators and industry mentors.",
    chips: ["1:1 Sessions", "Industry Experts", "Career Guidance"],
    accent: ACCENT,
    cardBg: CARD_BG,
    chipBg: CHIP_BG,
    shadow: SHADOW,
  },
  {
    id: "workshops",
    icon: Calendar,
    title: "Workshops & Training",
    description: "Hands-on sessions covering fundraising, product, and go-to-market fundamentals.",
    chips: ["Hands-on Learning", "Live Workshops", "Skill Building"],
    accent: ACCENT,
    cardBg: CARD_BG,
    chipBg: CHIP_BG,
    shadow: SHADOW,
  },
  {
    id: "funding-networking",
    icon: Handshake,
    title: "Funding & Networking",
    description: "Grant facilitation and curated introductions to our investor and partner network.",
    chips: ["Investor Connect", "Grant Support", "Partner Network"],
    accent: ACCENT,
    cardBg: CARD_BG,
    chipBg: CHIP_BG,
    shadow: SHADOW,
  },
];

const learnMoreHref = "/contact";

// One shared card template rendered four times — only the accent color, tint, icon, and
// copy change per card, so every card reads as the same design system.
function ProgramCard({ id, icon: Icon, title, description, chips, accent, cardBg, chipBg, shadow }: ProgramItem) {
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
        <Button href={learnMoreHref} variant="primary" size="sm" className="mt-2 w-fit px-2.5 py-1.5 text-[10.5px] sm:mt-4 sm:px-4.5 sm:py-2.25 sm:text-[13px]">
          Learn More <ArrowUpRight size={12} className="sm:hidden" /><ArrowUpRight size={16} className="hidden sm:block" />
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
