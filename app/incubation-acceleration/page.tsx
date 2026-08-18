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
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Incubation & Acceleration | Tech4Bharat",
  description:
    "Tech4Bharat offers structured Incubation and Acceleration support for social impact startups — covering product validation, mentorship, NGO field pilot projects, and investor readiness.",
  openGraph: {
    title: "Incubation & Acceleration | Tech4Bharat",
    description:
      "Stage-appropriate incubation and acceleration for social entrepreneurship and innovation across Bharat.",
    type: "website",
    locale: "en_IN",
  },
};

const incubationPoints = [
  "Idea and problem-solution validation",
  "Product prototyping and technical guidance",
  "Business model development",
  "One-on-one mentorship from experienced advisors",
];

const accelerationPoints = [
  "Market access and go-to-market strategy",
  "Field implementation through NGO and industry pilot projects",
  "Investor readiness and fundraising preparation",
  "Facilitation for government schemes and grants",
];

export default function IncubationAccelerationPage() {
  return (
    <>
      <PageHero
        title="Incubation & Acceleration"
        description="Stage-appropriate support for social entrepreneurship and innovation — from early idea validation to field implementation and scale."
        icon={Rocket}
      />

      {/* Incubation & Acceleration Tracks */}
      <section className="bg-white py-10 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Incubation */}
            <AnimatedSection delay={0.05} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-[#F4F9FD] p-6 shadow-xs sm:p-8">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-700 text-white">
                      <Lightbulb size={22} />
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-[#0B2A4A] sm:text-2xl">
                        Incubation Program
                      </h2>
                      <span className="text-xs font-semibold text-brand-700">
                        Idea to Early Stage
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600">
                    Designed for early-stage social impact founders looking to validate ideas, build working prototypes, and establish solid business fundamentals.
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-slate-200/80 pt-4">
                    {incubationPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-brand-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <Button href="/contact" variant="primary" size="sm" className="w-full justify-center">
                    Inquire for Incubation <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Acceleration */}
            <AnimatedSection delay={0.1} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-xs sm:p-8">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B2A4A] text-white">
                      <TrendingUp size={22} />
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-[#0B2A4A] sm:text-2xl">
                        Acceleration Program
                      </h2>
                      <span className="text-xs font-semibold text-slate-600">
                        Growth &amp; Scaling Stage
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600">
                    Tailored for impact startups with an initial product ready to execute pilot deployments, access markets, and prepare for funding.
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-slate-200/80 pt-4">
                    {accelerationPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#0B2A4A]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <Button href="/contact" variant="secondary" size="sm" className="w-full justify-center">
                    Inquire for Acceleration <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
