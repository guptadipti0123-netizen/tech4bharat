import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Calendar,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Coins,
  Globe2,
  Handshake,
  Landmark,
  Lightbulb,
  MapPin,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { getEventImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Upcoming Events | Tech4Bharat",
  description:
    "One-Day Startup Bootcamp in Mumbai (October 2026) — intensive sessions on fundraising, business model development, product validation, market access, government schemes, and investor readiness.",
  openGraph: {
    title: "Upcoming Events | Tech4Bharat",
    description: "One-Day Startup Bootcamp in Mumbai (October 2026) for social impact entrepreneurs.",
    type: "website",
    locale: "en_IN",
  },
};

const bootcampSessions = [
  {
    icon: Coins,
    title: "Fundraising",
    description:
      "Understanding investor expectations, cap-table structures, seed grant readiness, and structuring an effective pitch narrative.",
  },
  {
    icon: TrendingUp,
    title: "Business Model Development",
    description:
      "Crafting sustainable revenue streams, pricing models, and viable unit economics tailored for social impact ventures.",
  },
  {
    icon: Lightbulb,
    title: "Product Validation",
    description:
      "Structured methodologies to test hypotheses, validate product-market fit, and iterate MVPs with real customer feedback.",
  },
  {
    icon: Globe2,
    title: "Market Access",
    description:
      "Strategies to unlock enterprise channels, B2B procurement, rural supply chains, and pilot deployment opportunities.",
  },
  {
    icon: Landmark,
    title: "Government Schemes",
    description:
      "Navigating Startup India benefits, DPIIT recognition, BIRAC grants, and state-level innovation incentives.",
  },
  {
    icon: Handshake,
    title: "Investor Readiness & Networking",
    description:
      "Data room preparation, one-on-one pitch feedback, and direct networking with venture funds, angels, and mentors.",
  },
];

const participantGroups = [
  {
    icon: Rocket,
    title: "15+ Social Impact Startups",
    description: "Curated cohort of early-stage founders building across core impact domains.",
  },
  {
    icon: Users,
    title: "Mentors & Industry Experts",
    description: "Seasoned operators providing hands-on tactical guidance and problem solving.",
  },
  {
    icon: Building2,
    title: "Academic Institutions",
    description: "Faculty and translation leads from premier institutes like IIT Bombay.",
  },
  {
    icon: Coins,
    title: "Investors & Angels",
    description: "Active impact funds, angel syndicates, and grant committees.",
  },
];

export default function UpcomingEventsPage() {
  return (
    <>
      <PageHero
        title="Upcoming Events"
        description="Explore our scheduled startup bootcamps, workshops, and ecosystem programs for social innovators."
        icon={CalendarCheck}
      />

      {/* Main Bootcamp Spotlight */}
      <section className="bg-white py-8 sm:py-14">
        <Container>
          <AnimatedSection>
            <div className="overflow-hidden rounded-3xl border-2 border-brand-200 bg-gradient-to-r from-[#0B2A4A] via-[#103E6B] to-[#155E9A] p-6 text-white shadow-xl sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
                      Upcoming Program (MoM Planned)
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                      October 2026
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-black sm:text-3xl lg:text-4xl text-white">
                    One-Day Startup Bootcamp
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/85 max-w-xl">
                    An intensive one-day bootcamp organized in Mumbai to equip social impact entrepreneurs with actionable business frameworks, investor readiness, and ecosystem connections.
                  </p>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white/90">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-amber-400 shrink-0" />
                      <span><strong>Venue:</strong> Mumbai</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-amber-400 shrink-0" />
                      <span><strong>Date:</strong> October 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-amber-400 shrink-0" />
                      <span><strong>Cohort:</strong> Min. 15 Startups</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={16} className="text-amber-400 shrink-0" />
                      <span><strong>Focus:</strong> Social Entrepreneurship</span>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button
                      href="/startup-bootcamp"
                      variant="primary"
                      className="bg-white text-[#0B2A4A] hover:bg-brand-50"
                    >
                      View Full Bootcamp Page <ArrowRight size={15} />
                    </Button>
                    <Button
                      href="/contact"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      Register Interest
                    </Button>
                  </div>
                </div>

                <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/20 shadow-lg">
                  <Image
                    src={getEventImage("tech4bharat-startup-bootcamp-2026")}
                    alt="One-Day Startup Bootcamp Mumbai 2026"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* 6 Key Sessions Planned in MoM */}
      <section className="bg-slate-50 py-8 sm:py-14 border-t border-slate-200/60">
        <Container>
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-brand-700">
              Bootcamp Curriculum
            </span>
            <h2 className="mt-2 text-xl font-bold text-[#0B2A4A] sm:text-2xl lg:text-3xl">
              Key Sessions Planned in MoM
            </h2>
            <p className="mt-1.5 text-xs text-slate-600 sm:text-sm">
              Comprehensive sessions designed specifically for early-stage social impact founders.
            </p>
          </AnimatedSection>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {bootcampSessions.map((session, i) => {
              const Icon = session.icon;
              return (
                <AnimatedSection key={session.title} delay={i * 0.05} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-md">
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                        <Icon size={20} />
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="mt-3.5 text-base font-bold text-[#0B2A4A]">
                      {session.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                      {session.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Participation Breakdown */}
      <section className="bg-white py-8 sm:py-14 border-t border-slate-100">
        <Container>
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl font-bold text-[#0B2A4A] sm:text-2xl">
              Ecosystem Participation
            </h2>
            <p className="mt-1 text-xs text-slate-600 sm:text-sm">
              Bringing together key stakeholders across the Indian social innovation landscape.
            </p>
          </AnimatedSection>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
            {participantGroups.map((group, i) => {
              const Icon = group.icon;
              return (
                <AnimatedSection key={group.title} delay={i * 0.05} className="h-full">
                  <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-center items-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-700 shadow-2xs border border-slate-200">
                      <Icon size={18} />
                    </span>
                    <h3 className="mt-3 text-sm font-bold text-[#0B2A4A]">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 leading-snug">
                      {group.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={0.2} className="mt-8 text-center">
            <Button href="/contact" variant="primary" size="md">
              Apply to Participate <ArrowRight size={15} />
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
