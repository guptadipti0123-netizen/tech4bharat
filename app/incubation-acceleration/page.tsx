import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Handshake,
  Lightbulb,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Users,
  Clock,
  Award,
  Landmark,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Incubation & Acceleration Programs | Tech4Bharat",
  description:
    "Tech4Bharat offers structured Incubation and Acceleration support for social impact startups — covering product validation, mentorship, NGO field pilot projects, and investor readiness.",
  openGraph: {
    title: "Incubation & Acceleration Programs | Tech4Bharat",
    description:
      "Stage-appropriate incubation and acceleration for social entrepreneurship and innovation across Bharat.",
    type: "website",
    locale: "en_IN",
  },
};

const incubationPoints = [
  "Problem-solution & grassroots product-market fit validation",
  "Laboratory access & hardware prototyping at partner institutes",
  "Business model formulation and regulatory compliance guidance",
  "One-on-one mentorship from dedicated academic & sector advisors",
  "Pre-seed grant facilitation (BIRAC, DST, MeitY, CSR innovation funds)",
];

const accelerationPoints = [
  "Go-to-market scaling and state-wide distribution partnerships",
  "Structured field pilots through verified NGO and institutional networks",
  "Syndicated investor pitch readiness & term-sheet navigation",
  "Procurement integration with government agencies & enterprise CSR",
  "Growth capital access (₹25L to ₹2Cr+ institutional and angel rounds)",
];

const criteriaList = [
  {
    title: "Socio-Economic Impact",
    desc: "Venture must address one of the 13 core social impact domains in India (e.g. AgriTech, Water, Healthcare, Clean Energy).",
  },
  {
    title: "Scientific or Tech Rigour",
    desc: "Solutions leveraging tangible technology, IoT, AI, indigenous hardware, or sustainable materials.",
  },
  {
    title: "Committed Founding Team",
    desc: "Founders with domain knowledge, execution grit, and deep empathy for grassroots challenges in Bharat.",
  },
  {
    title: "Scalability & Sustainability",
    desc: "Clear pathway to financially viable unit-economics and long-term socio-economic self-reliance.",
  },
];

export default function IncubationAccelerationPage() {
  return (
    <>
      <PageHero
        title="Incubation & Acceleration"
        description="Structured, stage-appropriate pathways for purpose-driven founders — bridging scientific innovation with grassroots deployment and national scale."
        icon={Rocket}
      />

      {/* Incubation & Acceleration Dual Tracks */}
      <section className="bg-white py-10 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Incubation */}
            <AnimatedSection delay={0.05} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-[#F4F9FD] p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B2A4A] text-white shadow-xs">
                        <Lightbulb size={22} />
                      </span>
                      <div>
                        <h2 className="text-xl font-extrabold text-[#0B2A4A] sm:text-2xl">
                          Incubation Track
                        </h2>
                        <span className="text-xs font-bold text-brand-700">
                          Idea to MVP / Early Stage
                        </span>
                      </div>
                    </div>
                    <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-800">
                      6 - 9 Months
                    </span>
                  </div>

                  <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-slate-700">
                    Designed for early-stage social impact founders looking to validate ideas, build robust working prototypes, and establish solid business fundamentals with academic lab backing.
                  </p>

                  <ul className="mt-5 space-y-3 border-t border-slate-200/80 pt-4">
                    {incubationPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-[13.5px] sm:text-[14.5px] text-slate-700">
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/60">
                  <Button href="/contact" variant="primary" size="md" className="w-full justify-center">
                    Apply for Incubation <ArrowRight size={15} />
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Acceleration */}
            <AnimatedSection delay={0.1} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white shadow-xs">
                        <TrendingUp size={22} />
                      </span>
                      <div>
                        <h2 className="text-xl font-extrabold text-[#0B2A4A] sm:text-2xl">
                          Acceleration Track
                        </h2>
                        <span className="text-xs font-bold text-slate-600">
                          Growth &amp; National Scaling Stage
                        </span>
                      </div>
                    </div>
                    <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-800">
                      4 - 6 Months
                    </span>
                  </div>

                  <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-slate-700">
                    For post-revenue or pilot-validated startups ready to scale operations, execute district-level pilots, unlock institutional funding, and expand their market footprint.
                  </p>

                  <ul className="mt-5 space-y-3 border-t border-slate-200/80 pt-4">
                    {accelerationPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-[13.5px] sm:text-[14.5px] text-slate-700">
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/60">
                  <Button href="/contact" variant="secondary" size="md" className="w-full justify-center">
                    Apply for Acceleration <ArrowRight size={15} />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Selection Criteria Section */}
      <section className="bg-[#F8FAFC] py-12 sm:py-16 border-t border-slate-200/80">
        <Container>
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 border border-brand-200/80 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-[#155E9A]">
              <ShieldCheck size={13} className="text-brand-600" /> Selection Framework
            </span>
            <h2 className="mt-2 text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold tracking-tight text-[#0B2A4A]">
              What We Look For in Founding Teams
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Our evaluation focuses on purpose, technological defensibility, and authentic ground-level impact.
            </p>
          </AnimatedSection>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {criteriaList.map((crit, idx) => (
              <AnimatedSection key={crit.title} delay={idx * 0.04} className="h-full">
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                  <div className="font-mono text-xs font-bold text-brand-600">0{idx + 1}.</div>
                  <h3 className="mt-2 text-[15px] font-bold text-[#0B2A4A]">{crit.title}</h3>
                  <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {crit.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
