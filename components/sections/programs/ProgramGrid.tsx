import { ArrowUpRight, Calendar, Handshake, Rocket, Users, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface ProgramItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
  cardBg: string;
  iconBg: string;
  border: string;
}

// `id` gives each card a real anchor target — the Navbar's Programs dropdown links to
// /programs#incubation and /programs#workshops directly.
const programs: ProgramItem[] = [
  {
    id: "incubation",
    icon: Rocket,
    title: "Startup Incubation",
    description: "Structured, cohort-based support from first idea to a working, fundable company.",
    badge: "Cohort-Based",
    cardBg: "#EAF6EE",
    iconBg: "#1F4E3D",
    border: "border border-[#1F4E3D]/15",
  },
  {
    id: "mentorship",
    icon: Users,
    title: "Mentorship",
    description: "One-on-one guidance from experienced operators and industry mentors.",
    badge: "1:1 Guidance",
    cardBg: "#FFFFFF",
    iconBg: "#1F4E3D",
    border: "border border-slate-200 border-l-4 border-l-[#1F4E3D]",
  },
  {
    id: "workshops",
    icon: Calendar,
    title: "Workshops & Training",
    description: "Hands-on sessions covering fundraising, product, and go-to-market fundamentals.",
    badge: "Weekly Sessions",
    cardBg: "#FFF7EC",
    iconBg: "#D4A017",
    border: "border border-[#D4A017]/20",
  },
  {
    id: "funding-networking",
    icon: Handshake,
    title: "Funding & Networking",
    description: "Grant facilitation and curated introductions to our investor and partner network.",
    badge: "Investor Connect",
    cardBg: "#EEF6FF",
    iconBg: "#1B2E4A",
    border: "border border-[#1B2E4A]/15",
  },
];

const learnMoreHref = "/contact";

/** One editorial program card — a small icon badge, a category tag, and a compact CTA,
 *  each card carrying its own background/border/icon-color treatment so the four cards
 *  read as distinct entries rather than four repeats of the same template. */
function ProgramCard({ id, icon: Icon, title, description, badge, cardBg, iconBg, border }: ProgramItem) {
  return (
    <div
      id={id}
      style={{ backgroundColor: cardBg }}
      className={cn(
        "group flex h-64 scroll-mt-28 flex-col rounded-[18px] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1",
        border
      )}
    >
      <div className="flex items-start justify-between">
        <span
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full text-white"
          style={{ backgroundColor: iconBg }}
        >
          <Icon size={32} />
        </span>
        <span
          className="rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide"
          style={{ color: iconBg }}
        >
          {badge}
        </span>
      </div>

      <h3 className="mt-4 text-[26px] font-bold leading-tight text-ink-900">{title}</h3>
      <p className="mt-1.5 flex-1 text-[15px] leading-relaxed text-slate-600">{description}</p>

      <Button href={learnMoreHref} variant="outline" size="sm" className="mt-3 w-fit">
        Learn More <ArrowUpRight size={16} />
      </Button>
    </div>
  );
}

export default function ProgramGrid() {
  return (
    <section className="relative overflow-hidden bg-brand-50 pb-8 pt-4 sm:pb-12 sm:pt-6">
      <Container className="relative">
        <div className="grid gap-6 sm:grid-cols-2">
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
