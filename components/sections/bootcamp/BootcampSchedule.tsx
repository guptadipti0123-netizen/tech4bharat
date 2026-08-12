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
    bg: "#EAF6EE",
    border: "#1F5E4B",
    accent: "#1F5E4B",
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
    bg: "#EAF6EE",
    border: "#1F5E4B",
    accent: "#1F5E4B",
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

/** Bootcamp schedule — a compact responsive card grid (one card per session, merging what
 *  used to be a separate "main" card and "side" detail card into a single card) instead of
 *  a tall two-card-per-session vertical timeline. 2 columns on mobile/tablet, 4 on desktop. */
export default function BootcampSchedule({ agenda }: BootcampScheduleProps) {
  return (
    <section id="schedule" className="bg-secondary-50 py-10 sm:py-11">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Bootcamp Schedule"
            description="A simple, single-day flow from registration to closing."
            className="max-w-3xl"
            titleClassName="text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-[#163B2D] sm:text-[30px] lg:text-[34px]"
            descriptionClassName="mx-auto mt-3 max-w-175 text-[17px] leading-relaxed text-slate-600 sm:text-[18px]"
          />
        </AnimatedSection>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {agenda.map((session, i) => {
            const Icon = iconByTitle[session.title] ?? ClipboardCheck;
            const info = sideInfoByTitle[session.title];

            return (
              <AnimatedSection key={session.title} delay={i * 0.04} className="h-full">
                <div
                  style={{ backgroundColor: info?.bg, borderColor: info ? `${info.border}40` : undefined }}
                  className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_4px_14px_rgba(22,58,58,0.05)] sm:p-4"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#1F5E4B] bg-white text-[#1F5E4B]"
                  >
                    <Icon size={14} strokeWidth={1.75} />
                  </span>

                  <span className="mt-2 inline-flex w-fit items-center rounded-full bg-[#1F5E4B]/8 px-2 py-0.5 text-[11px] font-bold text-[#1F5E4B]">
                    {session.time}
                  </span>
                  <h3 className="mt-1.5 text-[13px] font-bold leading-tight text-ink-900 sm:text-sm">{session.title}</h3>

                  {info && (
                    <ul className="mt-2 flex flex-col gap-1">
                      {info.bullets.slice(0, 2).map((bullet) => (
                        <li key={bullet} className="flex items-start gap-1.5 text-[11px] leading-snug text-slate-600">
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                            style={{ backgroundColor: info.accent }}
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
