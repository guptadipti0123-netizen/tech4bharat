import {
  Award,
  ClipboardCheck,
  Coffee,
  Handshake,
  Layers,
  Lightbulb,
  Megaphone,
  MessageSquare,
  Mic2,
  PartyPopper,
  PieChart,
  Presentation,
  Puzzle,
  TrendingUp,
  UserCheck,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { AgendaSession } from "@/lib/events";

interface BootcampScheduleProps {
  agenda: AgendaSession[];
}

const iconByTitle: Record<string, LucideIcon> = {
  Registration: ClipboardCheck,
  "Welcome Session": Handshake,
  "Expert Talks": Mic2,
  "Business Workshops": Layers,
  "Lunch & Networking": Coffee,
  "Investor Readiness Session": TrendingUp,
  "Startup Pitching": Presentation,
  "Closing & Networking": PartyPopper,
};

interface SideInfo {
  icon: LucideIcon;
  bullets: string[];
  bg: string;
  border: string;
  accent: string;
}

// Compact, complementary detail for each session — what the main card's title implies in
// practice — cycling through the brand's green/gold palette with one blue accent per spec.
const sideInfoByTitle: Record<string, SideInfo> = {
  Registration: {
    icon: UserCheck,
    bullets: ["Registration Desk Open", "ID Verification", "Welcome Kit Distribution"],
    bg: "#EAF6EE",
    border: "#1F5E4B",
    accent: "#1F5E4B",
  },
  "Welcome Session": {
    icon: Megaphone,
    bullets: ["Opening Address", "Introduction to Tech4Bharat", "Event Overview"],
    bg: "#FFF7E8",
    border: "#D4A017",
    accent: "#B8860B",
  },
  "Expert Talks": {
    icon: Lightbulb,
    bullets: ["Startup Journey", "Product Strategy", "Market Insights"],
    bg: "#EAF3FF",
    border: "#60A5FA",
    accent: "#2563EB",
  },
  "Business Workshops": {
    icon: Puzzle,
    bullets: ["Hands-on Exercises", "Group Activities", "Practical Frameworks"],
    bg: "#EAF6EE",
    border: "#1F5E4B",
    accent: "#1F5E4B",
  },
  "Lunch & Networking": {
    icon: Utensils,
    bullets: ["Networking Lunch", "Founder Discussions"],
    bg: "#FFF7E8",
    border: "#D4A017",
    accent: "#B8860B",
  },
  "Investor Readiness Session": {
    icon: PieChart,
    bullets: ["Pitch Deck Essentials", "Cap Table Basics", "Investor Q&A"],
    bg: "#EAF3FF",
    border: "#60A5FA",
    accent: "#2563EB",
  },
  "Startup Pitching": {
    icon: MessageSquare,
    bullets: ["Pitch Preparation", "Mentor Feedback", "Presentation Tips"],
    bg: "#EAF6EE",
    border: "#1F5E4B",
    accent: "#1F5E4B",
  },
  "Closing & Networking": {
    icon: Award,
    bullets: ["Certificate Distribution", "Closing Remarks", "Group Photo"],
    bg: "#FFF7E8",
    border: "#D4A017",
    accent: "#B8860B",
  },
};

/** Bootcamp schedule — a two-column vertical timeline. Each session's main card sits on
 *  one side of the spine as before; the empty space on the other side now holds a compact,
 *  pastel-tinted side card with quick-reference detail instead of blank space. Collapses to
 *  a single stacked column (main card, then its side card) on mobile. */
export default function BootcampSchedule({ agenda }: BootcampScheduleProps) {
  return (
    <section id="schedule" className="bg-secondary-50 py-10 sm:py-11">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Bootcamp Schedule"
            description="A simple, single-day flow from registration to closing."
            className="max-w-3xl"
            titleClassName="text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-[#163B2D] sm:text-[36px] lg:text-[42px]"
            descriptionClassName="mx-auto mt-3 max-w-175 text-[17px] leading-relaxed text-slate-600 sm:text-[18px]"
          />
        </AnimatedSection>

        <div className="relative mx-auto mt-9 max-w-5xl">
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-px bg-[#1F5E4B]/15 sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="flex flex-col gap-10 sm:gap-8">
            {agenda.map((session, i) => {
              const Icon = iconByTitle[session.title] ?? ClipboardCheck;
              const info = sideInfoByTitle[session.title];
              const SideIcon = info?.icon ?? ClipboardCheck;
              const isRight = i % 2 === 1;

              const mainCard = (
                <div className="ml-12 flex h-full min-h-38 flex-col justify-center rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_4px_16px_rgba(22,58,58,0.06)] sm:ml-0">
                  <span className="inline-flex w-fit items-center rounded-full bg-[#1F5E4B]/8 px-2.5 py-1 text-xs font-bold text-[#1F5E4B]">
                    {session.time}
                  </span>
                  <h3 className="mt-2 text-base font-bold leading-tight text-ink-900">{session.title}</h3>
                </div>
              );

              const sideCard = info && (
                <div
                  style={{ backgroundColor: info.bg, borderColor: `${info.border}55` }}
                  className="ml-12 flex h-full min-h-38 flex-col justify-center rounded-2xl border p-4.5 shadow-[0_4px_14px_rgba(0,0,0,0.06)] sm:ml-0"
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(255,255,255,.65)" }}
                  >
                    <SideIcon size={14} strokeWidth={1.75} style={{ color: info.accent }} />
                  </span>
                  <ul className="mt-2.5 flex flex-col gap-1.5">
                    {info.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-1.5 text-[12.5px] font-medium leading-snug text-slate-600">
                        <span
                          aria-hidden="true"
                          className="h-1 w-1 shrink-0 rounded-full"
                          style={{ backgroundColor: info.accent }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              );

              return (
                <AnimatedSection key={session.title} delay={i * 0.04}>
                  <div className="relative flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-8 lg:gap-10">
                    <span className="absolute left-4 top-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#1F5E4B] bg-white text-[#1F5E4B] sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2">
                      <Icon size={15} strokeWidth={1.75} />
                    </span>

                    <div className={`sm:flex-1 ${isRight ? "sm:order-2" : "sm:order-1"}`}>{mainCard}</div>
                    <div className={`sm:flex-1 ${isRight ? "sm:order-1" : "sm:order-2"}`}>{sideCard}</div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
