import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Cpu,
  FileCheck2,
  Rocket,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const stages = [
  {
    step: "01",
    phase: "Grassroots Discovery",
    title: "Problem & Field Validation",
    icon: Compass,
    description:
      "Deep ground immersion with rural communities & cooperatives to validate unmet socio-economic challenges.",
    milestone: "Formulated problem statement & stakeholder mapping",
  },
  {
    step: "02",
    phase: "Deep-Tech Prototyping",
    title: "Lab R&D & Academic Access",
    icon: Cpu,
    description:
      "Translating academic research into working prototypes with lab testing and supercomputing infrastructure.",
    milestone: "Working prototype & lab testing (IIT-B / COEP)",
  },
  {
    step: "03",
    phase: "Policy & Pilot Trials",
    title: "Sandboxes & Compliance",
    icon: FileCheck2,
    description:
      "Real-world field trials in structured sandboxes ensuring regulatory compliance and impact measurement.",
    milestone: "Live district pilots & ESG certification readiness",
  },
  {
    step: "04",
    phase: "National Scale & Capital",
    title: "Catalytic Capital & Scaling",
    icon: Rocket,
    description:
      "Connecting validated ventures to institutional capital, CSR grants, and pan-India distribution channels.",
    milestone: "Investor syndicate pitch & procurement scale",
  },
];

export default function FounderJourney() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 bg-white border-t border-slate-100">
      <Container>
        {/* Section Header */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 border border-brand-200/80 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-[#155E9A]">
              <ShieldCheck size={13} className="text-brand-600" /> Incubation Framework
            </span>
            <h2 className="mt-2 text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold tracking-tight text-[#0B2A4A]">
              The 4-Stage Acceleration Pipeline
            </h2>
            <p className="mt-1 text-xs sm:text-[13.5px] leading-relaxed text-slate-600 max-w-xl">
              From grassroots discovery and academic lab R&amp;D to regulatory pilots and national scaling.
            </p>
          </div>
          <Button href="/incubation-acceleration" variant="outline" size="sm" className="hidden sm:inline-flex text-xs shrink-0">
            Incubation Details <ArrowRight size={13} />
          </Button>
        </AnimatedSection>

        {/* 4-Stage Sequential Roadmap Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <AnimatedSection key={stage.step} delay={idx * 0.04} className="h-full">
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-[#FBFDFF] p-4 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-md">
                  <div>
                    {/* Stage Header */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-extrabold text-[#155E9A] bg-brand-50 border border-brand-200/70 px-2 py-0.5 rounded-md">
                        PHASE {stage.step}
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-200 text-[#155E9A] shadow-2xs group-hover:scale-105 transition-transform">
                        <Icon size={16} />
                      </span>
                    </div>

                    <div className="mt-3">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-brand-700">
                        {stage.phase}
                      </div>
                      <h3 className="text-[14.5px] font-bold text-[#0B2A4A] leading-snug mt-0.5 group-hover:text-brand-700 transition-colors">
                        {stage.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-[12px] sm:text-[12.5px] leading-relaxed text-slate-600">
                      {stage.description}
                    </p>
                  </div>

                  {/* Key Milestone Footer */}
                  <div className="mt-4 pt-3 border-t border-slate-200/80">
                    <div className="flex items-start gap-1.5 text-[11.5px] text-slate-700">
                      <CheckCircle2 size={14} className="shrink-0 text-emerald-600 mt-0.5" />
                      <span className="font-medium">{stage.milestone}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <div className="mt-5 flex sm:hidden justify-center">
          <Button href="/incubation-acceleration" variant="outline" size="sm" className="w-full text-xs">
            Incubation Details <ArrowRight size={13} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
