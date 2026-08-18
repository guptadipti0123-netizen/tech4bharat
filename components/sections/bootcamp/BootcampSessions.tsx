import {
  ArrowUpRight,
  CheckCircle2,
  Coins,
  Globe2,
  Handshake,
  Landmark,
  Lightbulb,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface SessionTrack {
  track: string;
  icon: typeof Coins;
  title: string;
  subtitle: string;
  description: string;
  takeaways: string[];
  accentColor: string;
  bgLight: string;
  borderHover: string;
  shadowColor: string;
}

const sessions: SessionTrack[] = [
  {
    track: "Track 01",
    icon: Coins,
    title: "Fundraising",
    subtitle: "Seed Capital & Pitch Strategy",
    description:
      "Understanding investor expectations, cap-table structures, seed grant readiness, and structuring an effective pitch narrative.",
    takeaways: ["Pitch Deck Hygiene", "Cap Table Basics", "Grant vs Equity Pathways"],
    accentColor: "#059669",
    bgLight: "#F0FDF4",
    borderHover: "#10B981",
    shadowColor: "rgba(5, 150, 105, 0.12)",
  },
  {
    track: "Track 02",
    icon: TrendingUp,
    title: "Business Model Development",
    subtitle: "Unit Economics & Monetization",
    description:
      "Crafting sustainable revenue streams, pricing models, and viable unit economics tailored for social impact ventures.",
    takeaways: ["Sustainable Monetization", "Unit Economics", "Margin Structure"],
    accentColor: "#4F46E5",
    bgLight: "#EEF2FF",
    borderHover: "#6366F1",
    shadowColor: "rgba(79, 70, 229, 0.12)",
  },
  {
    track: "Track 03",
    icon: Lightbulb,
    title: "Product Validation",
    subtitle: "Hypothesis Testing & MVP Sprints",
    description:
      "Structured methodologies to test hypotheses, validate product-market fit, and iterate MVPs with real customer feedback.",
    takeaways: ["Customer Discovery", "MVP Prototyping", "Feedback Loops"],
    accentColor: "#D97706",
    bgLight: "#FFFBEB",
    borderHover: "#F59E0B",
    shadowColor: "rgba(217, 119, 6, 0.12)",
  },
  {
    track: "Track 04",
    icon: Globe2,
    title: "Market Access",
    subtitle: "GTM & Distribution Channels",
    description:
      "Strategies to unlock enterprise channels, B2B procurement, rural supply chains, and pilot deployment opportunities.",
    takeaways: ["B2B & Enterprise Access", "Rural Distribution", "Pilot Partnerships"],
    accentColor: "#0891B2",
    bgLight: "#ECFEFF",
    borderHover: "#06B6D4",
    shadowColor: "rgba(8, 145, 178, 0.12)",
  },
  {
    track: "Track 05",
    icon: Landmark,
    title: "Government Schemes",
    subtitle: "Policy Incentives & Public Grants",
    description:
      "Navigating Startup India benefits, DPIIT recognition, BIRAC grants, and state-level innovation incentives.",
    takeaways: ["Startup India Benefits", "BIRAC Innovation Grants", "Compliance Roadmaps"],
    accentColor: "#1E40AF",
    bgLight: "#EFF6FF",
    borderHover: "#3B82F6",
    shadowColor: "rgba(30, 64, 175, 0.12)",
  },
  {
    track: "Track 06",
    icon: Handshake,
    title: "Investor Readiness & Networking",
    subtitle: "Data Rooms & 1:1 Pitches",
    description:
      "Data room preparation, one-on-one pitch feedback, and direct networking with venture funds, angels, and mentors.",
    takeaways: ["Data Room Essentials", "1:1 Pitch Rounds", "Mentor Office Hours"],
    accentColor: "#E11D48",
    bgLight: "#FFF1F2",
    borderHover: "#F43F5E",
    shadowColor: "rgba(225, 29, 72, 0.12)",
  },
];

export default function BootcampSessions() {
  return (
    <section className="bg-slate-50/70 py-12 sm:py-16 border-t border-slate-200/60">
      <Container>
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 border border-brand-200/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
              <Sparkles size={13} className="text-brand-600" /> Intensive Curriculum
            </span>
            <h2 className="mt-2.5 text-[22px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B2A4A] sm:text-[28px] lg:text-[32px]">
              Six Core Bootcamp Session Tracks
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Every track is designed with practical frameworks, operator insights, and direct mentor reviews.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {sessions.map((session, i) => {
            const Icon = session.icon;
            return (
              <AnimatedSection key={session.title} delay={i * 0.06} className="h-full">
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    boxShadow: `0 8px 24px -6px ${session.shadowColor}`,
                  }}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300"
                >
                  {/* Subtle top color highlight strip */}
                  <div
                    className="absolute inset-x-0 top-0 h-1.5 transition-all duration-300 group-hover:h-2"
                    style={{ backgroundColor: session.accentColor }}
                  />

                  <div>
                    {/* Header: Icon + Track Badge */}
                    <div className="flex items-center justify-between pt-1">
                      <div
                        style={{
                          backgroundColor: session.bgLight,
                          color: session.accentColor,
                        }}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/5 shadow-xs transition-transform duration-300 group-hover:scale-105"
                      >
                        <Icon size={22} strokeWidth={2} />
                      </div>

                      <span
                        style={{
                          backgroundColor: session.bgLight,
                          color: session.accentColor,
                        }}
                        className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide border border-black/5"
                      >
                        {session.track}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="mt-4 text-[17px] font-bold text-[#0B2A4A] group-hover:text-brand-700 transition-colors">
                      {session.title}
                    </h3>
                    <p
                      style={{ color: session.accentColor }}
                      className="text-[12px] font-semibold mt-0.5"
                    >
                      {session.subtitle}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-slate-600">
                      {session.description}
                    </p>
                  </div>

                  {/* Key Takeaways Chips */}
                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key Highlights
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {session.takeaways.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 border border-slate-200/80 px-2.5 py-1 text-xs font-medium text-slate-700"
                        >
                          <CheckCircle2
                            size={11}
                            style={{ color: session.accentColor }}
                            className="shrink-0"
                          />
                          {item}
                        </span>
                      ))}
                    </div>
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
