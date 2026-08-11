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
const programs: ProgramItem[] = [
  {
    id: "incubation",
    icon: Rocket,
    title: "Startup Incubation",
    description: "Structured, cohort-based support from first idea to a working, fundable company.",
    chips: ["Idea Validation", "Product Development", "Demo Day"],
    accent: "#1F4E3D",
    cardBg: "#EAF6EE",
    chipBg: "rgba(31,78,61,.08)",
    shadow: "0 10px 26px rgba(31,78,61,.12)",
  },
  {
    id: "mentorship",
    icon: Users,
    title: "Mentorship",
    description: "One-on-one guidance from experienced operators and industry mentors.",
    chips: ["1:1 Sessions", "Industry Experts", "Career Guidance"],
    accent: "#2563EB",
    cardBg: "#EEF6FF",
    chipBg: "rgba(37,99,235,.08)",
    shadow: "0 10px 26px rgba(37,99,235,.12)",
  },
  {
    id: "workshops",
    icon: Calendar,
    title: "Workshops & Training",
    description: "Hands-on sessions covering fundraising, product, and go-to-market fundamentals.",
    chips: ["Hands-on Learning", "Live Workshops", "Skill Building"],
    accent: "#D4A017",
    cardBg: "#FFF7EC",
    chipBg: "rgba(212,160,23,.10)",
    shadow: "0 10px 26px rgba(212,160,23,.12)",
  },
  {
    id: "funding-networking",
    icon: Handshake,
    title: "Funding & Networking",
    description: "Grant facilitation and curated introductions to our investor and partner network.",
    chips: ["Investor Connect", "Grant Support", "Partner Network"],
    accent: "#6D4FC7",
    cardBg: "#F3EEFF",
    chipBg: "rgba(109,79,199,.08)",
    shadow: "0 10px 26px rgba(109,79,199,.12)",
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
      className="group flex h-full min-h-0 scroll-mt-28 flex-col rounded-2xl border-2 p-4 transition-all duration-300 hover:-translate-y-1 sm:min-h-85 sm:rounded-[20px] sm:p-6"
    >
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14 sm:rounded-2xl"
        style={{ backgroundColor: chipBg }}
      >
        <Icon size={19} className="sm:hidden" style={{ color: accent }} strokeWidth={1.75} />
        <Icon size={24} className="hidden sm:block" style={{ color: accent }} strokeWidth={1.75} />
      </span>

      <h3 className="mt-3 text-[17px] font-bold leading-tight text-ink-900 sm:mt-4 sm:text-[20px]">{title}</h3>
      <p className="mt-1.5 line-clamp-3 text-[13px] leading-snug text-slate-600 sm:mt-2 sm:text-[14px] sm:leading-relaxed">{description}</p>

      <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
        {chips.map((chip) => (
          <span
            key={chip}
            className="rounded-full px-2.5 py-1 text-[11px] font-semibold sm:px-3 sm:text-[12px]"
            style={{ backgroundColor: chipBg, color: accent }}
          >
            {chip}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <div className="mt-4 h-px w-10 sm:mt-5" style={{ backgroundColor: accent, opacity: 0.3 }} />
        <Button href={learnMoreHref} variant="outline" size="sm" className="mt-3 w-fit sm:mt-4">
          Learn More <ArrowUpRight size={16} />
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {programs.map((program, i) => (
            <AnimatedSection key={program.title} delay={i * 0.08} animation="scale">
              <ProgramCard {...program} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
