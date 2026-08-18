import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  FileCheck,
  FlaskConical,
  Globe2,
  Handshake,
  Lightbulb,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { socialImpactDomains } from "@/lib/data";

export const metadata: Metadata = {
  title: "Incubation & Acceleration | Tech4Bharat",
  description:
    "Explore Tech4Bharat's dedicated Incubation and Acceleration programs — providing early-stage social impact founders with structured mentorship, lab-to-market translation, NGO pilot deployments, and seed funding access.",
  openGraph: {
    title: "Incubation & Acceleration | Tech4Bharat",
    description:
      "Stage-appropriate venture building programs for social entrepreneurship and deep-tech innovation across Bharat.",
    type: "website",
    locale: "en_IN",
  },
};

const incubationFeatures = [
  "Idea validation and problem-solution sprint",
  "Lab-to-market research translation & prototyping",
  "DPIIT recognition and startup incorporation assistance",
  "Dedicated 1:1 mentor from IIT Bombay & industry network",
  "Access to technical infrastructure and research labs",
  "Pre-seed grant readiness & pitch deck refinement",
];

const accelerationFeatures = [
  "Go-to-market acceleration and customer discovery",
  "Pilot project implementation with premier NGOs & industries",
  "Unit economics, pricing model & revenue optimization",
  "Regulatory compliance, IP filing and patent strategy",
  "Curated introductions to impact angels, VCs, and SIDBI funds",
  "Exclusive Demo Day showcase with institutional investors",
];

const cohortLifecycle = [
  {
    step: "01",
    title: "Application & Diagnostics",
    description:
      "Rigorous screening of social impact ventures focusing on innovation strength, founding team depth, and socio-economic relevance.",
    icon: FileCheck,
  },
  {
    step: "02",
    title: "Lab-to-Market Prototyping",
    description:
      "Leveraging premier academic research labs (IIT Bombay) and technical experts to build robust, scalable MVPs.",
    icon: FlaskConical,
  },
  {
    step: "03",
    title: "Operator-Led Sprints",
    description:
      "Weekly milestone reviews with seasoned founders and domain experts on product strategy, compliance, and growth.",
    icon: Compass,
  },
  {
    step: "04",
    title: "NGO & Field Pilot Deployments",
    description:
      "Special emphasis on strategic NGO partnerships for real-world field trials and community pilot implementations.",
    icon: Handshake,
  },
  {
    step: "05",
    title: "Demo Day & Capital Access",
    description:
      "Direct pitching to curated impact investors, corporate CSR partners, and government grant committees.",
    icon: Rocket,
  },
];

const programPerks = [
  {
    icon: FlaskConical,
    title: "IIT Bombay Academic Ecosystem",
    description:
      "Direct access to premier academic faculty, research facilities, and engineering talent for deep-tech translation.",
  },
  {
    icon: Wallet,
    title: "Grant & Seed Facilitation",
    description:
      "Hands-on assistance in securing central & state government grants, BIRAC schemes, CSR innovation funds, and seed capital.",
  },
  {
    icon: Globe2,
    title: "Pan-India NGO Pilot Network",
    description:
      "Strategic MoUs with grassroots NGOs to test, deploy, and scale technologies directly with end beneficiaries.",
  },
  {
    icon: Users,
    title: "100+ Sector Mentors",
    description:
      "Regular one-on-one office hours with founders, venture capitalists, legal counsel, and public policy advisors.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory & IP Strategy",
    description:
      "Comprehensive advisory on patents, trademark filing, data compliance, and Section 8 / DPIIT registrations.",
  },
  {
    icon: Zap,
    title: "₹50L+ Ecosystem Cloud Credits",
    description:
      "Complimentary cloud credits, developer tools, CRM suites, and legal templates from our technology partners.",
  },
];

export default function IncubationAccelerationPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="Incubation & Acceleration"
        description="A structured launchpad backing India's most ambitious social innovators — from lab-scale validation to national impact."
        icon={Rocket}
      />

      {/* Program Tracks Comparison Section */}
      <section className="relative overflow-hidden bg-white py-10 sm:py-16">
        <Container>
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
              Two Dedicated Tracks
            </span>
            <h2 className="mt-3 text-[22px] font-extrabold tracking-tight text-ink-900 sm:text-[30px] lg:text-[34px]">
              Built for Every Stage of Your Impact Journey
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Whether you are translating lab research into a prototype or scaling proven field traction, our programs provide the exact capital, mentorship, and pilot access you need.
            </p>
          </AnimatedSection>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Incubation Track Card */}
            <AnimatedSection delay={0.05} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-3xl border-2 border-brand-200 bg-gradient-to-b from-[#F4F9FF] to-white p-6 shadow-lg shadow-brand-900/5 sm:p-8">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-700 text-white shadow-md shadow-brand-700/20">
                      <Lightbulb size={24} />
                    </span>
                    <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-800">
                      Early / Prototype Stage
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-ink-900 sm:text-2xl">
                    Startup Incubation Program
                  </h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-brand-700">
                    Duration: 12 – 16 Weeks • Cohort-Based
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Designed for early-stage innovators, researchers, and student founders looking to validate problem statements, build an MVP, and achieve lab-to-market translation.
                  </p>

                  <div className="mt-6 border-t border-slate-200/80 pt-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      What Founders Receive:
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {incubationFeatures.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Button href="/contact" variant="primary" className="w-full justify-center">
                    Apply for Incubation <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Acceleration Track Card */}
            <AnimatedSection delay={0.1} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-3xl border-2 border-indigo-200 bg-gradient-to-b from-[#F5F5FF] to-white p-6 shadow-lg shadow-indigo-900/5 sm:p-8">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
                      <TrendingUp size={24} />
                    </span>
                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-800">
                      Growth / Scaling Stage
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-ink-900 sm:text-2xl">
                    Venture Acceleration Program
                  </h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-indigo-700">
                    Duration: 16 – 24 Weeks • Growth Sprints
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Tailored for post-revenue or validated impact startups ready to expand pilot deployments, unlock enterprise channels, and secure institutional funding.
                  </p>

                  <div className="mt-6 border-t border-slate-200/80 pt-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      What Founders Receive:
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {accelerationFeatures.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-indigo-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Button href="/contact" variant="secondary" className="w-full justify-center bg-indigo-700 text-white hover:bg-indigo-800">
                    Apply for Acceleration <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Cohort Lifecycle / Roadmap */}
      <section className="relative overflow-hidden bg-slate-50 py-10 sm:py-16">
        <Container>
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#1e3a8a]">
              The Cohort Journey
            </span>
            <h2 className="mt-2 text-[20px] font-extrabold tracking-tight text-[#0B2A4A] sm:text-[28px]">
              How We Nurture Social Ventures
            </h2>
            <p className="mt-1.5 text-xs text-slate-600 sm:text-sm">
              A transparent, milestone-driven framework to take ideas from hypothesis to scalable market reality.
            </p>
          </AnimatedSection>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 sm:gap-5">
            {cohortLifecycle.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <AnimatedSection key={stage.step} delay={i * 0.06} className="h-full">
                  <div className="relative flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-black text-brand-600/30">
                          {stage.step}
                        </span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                          <Icon size={18} />
                        </span>
                      </div>
                      <h3 className="mt-3 text-sm font-bold text-[#0B2A4A] sm:text-base">
                        {stage.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 13 Social Impact Domains Covered */}
      <section className="relative overflow-hidden bg-white py-10 sm:py-16">
        <Container>
          <div className="rounded-3xl bg-gradient-to-b from-[#edeef8] via-[#f8f9ff] to-[#c5d1ff] p-6 sm:p-10 shadow-lg border border-white/60">
            <AnimatedSection className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#1e3a8a]">
                13 Focus Domains
              </span>
              <h2 className="mt-2 text-[20px] font-extrabold tracking-tight text-[#0B2A4A] sm:text-[28px]">
                Sectors Eligible for Incubation &amp; Acceleration
              </h2>
              <p className="mx-auto mt-1.5 max-w-xl text-xs text-slate-600 sm:text-sm">
                We accept applications from visionary founders building across all core socio-economic domains outlined in the national social entrepreneurship agenda.
              </p>
            </AnimatedSection>

            <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-2.5">
              {socialImpactDomains.map((domain, index) => (
                <div
                  key={domain}
                  className="flex items-center gap-2 rounded-xl border border-white/80 bg-white/90 px-3.5 py-2 text-xs font-semibold text-[#0B2A4A] shadow-2xs backdrop-blur-sm transition-all hover:border-brand-500 hover:bg-white hover:text-brand-700 hover:shadow-sm"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-[10px] font-bold text-brand-700">
                    {index + 1}
                  </span>
                  <span>{domain}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button href="/portfolio" variant="outline" size="sm">
                Explore Startup Portfolio <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Program Perks & Ecosystem Access */}
      <section className="relative overflow-hidden bg-slate-50 py-10 sm:py-16">
        <Container>
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-brand-700">
              Why Incubate With Us
            </span>
            <h2 className="mt-2 text-[20px] font-extrabold tracking-tight text-[#0B2A4A] sm:text-[28px]">
              Ecosystem Advantages &amp; Support
            </h2>
            <p className="mt-1.5 text-xs text-slate-600 sm:text-sm">
              Comprehensive institutional infrastructure backing your venture at every single milestone.
            </p>
          </AnimatedSection>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {programPerks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <AnimatedSection key={perk.title} delay={i * 0.05} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-3 text-sm font-bold text-ink-900 sm:text-base">
                      {perk.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                      {perk.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Eligibility & CTA Section */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-18">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-900 via-brand-800 to-indigo-950 p-6 sm:p-12 text-white shadow-xl">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
                Cohorts Open for Applications
              </span>
              <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                Ready to Build Bharat&apos;s Next Big Social Innovation?
              </h2>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/80">
                Applications are reviewed on a rolling basis. Join a nationwide community of purpose-driven founders, researchers, and ecosystem builders backed by premier institutions.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  href="/contact"
                  variant="primary"
                  className="bg-white text-brand-900 hover:bg-brand-50"
                >
                  Apply for Next Cohort <ArrowRight size={16} />
                </Button>
                <Button
                  href="/startup-bootcamp"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  View Startup Bootcamp
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
