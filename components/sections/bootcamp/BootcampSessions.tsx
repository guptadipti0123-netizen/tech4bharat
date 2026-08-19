import {
  CheckCircle2,
  Coins,
  Globe2,
  Handshake,
  Landmark,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface SessionTrack {
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
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 border-t border-slate-200/60">
      <Container>
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[22px] font-bold leading-[1.15] tracking-tight text-[#0B2A4A] sm:text-[28px] lg:text-[32px]">
              Core Bootcamp Session Tracks
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-base leading-relaxed text-slate-600 sm:text-[17px]">
              Every session is structured around practical frameworks, operator insights, and direct mentor reviews.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {sessions.map((session, i) => {
            const Icon = session.icon;
            return (
              <AnimatedSection key={session.title} delay={i * 0.05} className="h-full">
                <div
                  style={{
                    boxShadow: `0 4px 20px -4px ${session.shadowColor}`,
                  }}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300"
                >
                  {/* Top colored accent header banner */}
                  <div
                    style={{ backgroundColor: session.bgLight }}
                    className="flex items-center gap-3.5 border-b border-slate-100 p-5 sm:p-6"
                  >
                    <div
                      style={{
                        backgroundColor: "#FFFFFF",
                        color: session.accentColor,
                        borderColor: `${session.accentColor}30`,
                      }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border shadow-xs transition-transform duration-300 group-hover:scale-105"
                    >
                      <Icon size={24} strokeWidth={2} />
                    </div>

                    <div>
                      <h3 className="text-[17px] font-bold text-[#0B2A4A] leading-snug group-hover:text-brand-700 transition-colors">
                        {session.title}
                      </h3>
                      <p
                        style={{ color: session.accentColor }}
                        className="text-xs font-semibold mt-0.5"
                      >
                        {session.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <p className="text-[14px] sm:text-[15px] leading-relaxed text-slate-600">
                      {session.description}
                    </p>

                    {/* Integrated Key Highlights Checklist */}
                    <div className="mt-5 border-t border-slate-100/90 pt-4">
                      <div className="flex flex-col gap-2">
                        {session.takeaways.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 text-[13px] font-medium text-slate-700"
                          >
                            <CheckCircle2
                              size={15}
                              style={{ color: session.accentColor }}
                              className="shrink-0"
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
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
