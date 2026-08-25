"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Cpu,
  FileCheck2,
  Rocket,
  ShieldCheck,
  Building2,
  Users,
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
    badge: "Discovery & Immersion",
    description:
      "Deep ground-level immersion with rural communities, farming cooperatives, and local administrative bodies to validate real unmet socio-economic challenges.",
    deliverables: [
      "Rigorous problem statement formulation",
      "Field interviews & stakeholder mapping",
      "Initial unit-economics & viability blueprint",
    ],
    supportPillars: "Mentorship from grassroots NGO leaders & social sector veterans",
  },
  {
    step: "02",
    phase: "Deep-Tech Prototyping",
    title: "Lab R&D & Academic Translation",
    icon: Cpu,
    badge: "Institutional Access",
    description:
      "Bridging academic research into viable product prototypes with access to premier laboratory infrastructure and high-performance computing facilities.",
    deliverables: [
      "Bench-scale prototype & hardware-software design",
      "Access to IIT Bombay, COEP, VJTI & C-DAC testing facilities",
      "IP filing strategy and prior-art evaluation",
    ],
    supportPillars: "Faculty guidance, institutional lab testing & supercomputing credits",
  },
  {
    step: "03",
    phase: "Policy & Pilot Trials",
    title: "Grassroots Deployments & Compliance",
    icon: FileCheck2,
    badge: "Field Implementation",
    description:
      "Real-world pilot deployments in structured sandbox environments, ensuring regulatory compliance, data security, and social impact measurement.",
    deliverables: [
      "Live field pilots across Maharashtra & Tier-2/3 states",
      "Policy sandbox navigation (MeitY, DST, BIRAC)",
      "Standardized impact metrics & ESG certification readiness",
    ],
    supportPillars: "Government scheme facilitation & public sector pilot networks",
  },
  {
    step: "04",
    phase: "National Scale & Capital",
    title: "Catalytic Capital & Pan-India Scale",
    icon: Rocket,
    badge: "Scale & Growth",
    description:
      "Connecting validated ventures to institutional investors, CSR innovation grants, procurement channels, and national distribution partnerships.",
    deliverables: [
      "Investor readiness & syndicated pitch sessions",
      "CSR grant capital unlocking & blended finance models",
      "Enterprise & government procurement integration",
    ],
    supportPillars: "Access to 50+ angel investors, impact funds & CSR foundations",
  },
];

export default function FounderJourney() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="relative overflow-hidden py-12 sm:py-18 bg-white border-y border-slate-200/80">
      <Container>
        {/* Section Header */}
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 border border-brand-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
            <ShieldCheck size={14} className="text-brand-600" />
            <span>Structured Incubation Framework</span>
          </div>
          <h2 className="mt-3 text-[24px] sm:text-[32px] lg:text-[38px] font-extrabold tracking-tight text-[#0B2A4A]">
            The 4-Stage Bharat Acceleration Pipeline
          </h2>
          <p className="mx-auto mt-2.5 max-w-2xl text-[14px] sm:text-[16px] leading-relaxed text-slate-600">
            From initial grassroots problem discovery and academic lab R&amp;D to regulatory pilots and national scaling — how we support founders every step of the way.
          </p>
        </AnimatedSection>

        {/* 4-Stage Stepper Buttons (Desktop & Tablet) */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = activeStage === idx;
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`relative flex flex-col items-start p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#0B2A4A] text-white border-[#0B2A4A] shadow-lg shadow-[#0B2A4A]/15 scale-101"
                    : "bg-[#F8FAFC] text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`font-mono text-xs sm:text-sm font-extrabold px-2 py-0.5 rounded-md ${
                      isSelected ? "bg-amber-400 text-slate-950" : "bg-slate-200 text-slate-800"
                    }`}
                  >
                    PHASE {stage.step}
                  </span>
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      isSelected ? "bg-white/15 text-white" : "bg-white text-brand-600 border border-slate-200"
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                <div className="mt-3">
                  <div className={`text-xs font-semibold ${isSelected ? "text-amber-300" : "text-brand-600"}`}>
                    {stage.phase}
                  </div>
                  <div className="text-[14.5px] sm:text-[15.5px] font-bold leading-snug mt-0.5">
                    {stage.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep-Dive Card */}
        <div className="mt-6 rounded-3xl border border-slate-200 bg-[#F5FAFE] p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Col: Overview & Deliverables */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-200 px-3 py-0.5 text-xs font-bold text-brand-700">
                Phase {stages[activeStage].step}: {stages[activeStage].badge}
              </div>
              <h3 className="mt-3 text-[22px] sm:text-[26px] font-extrabold text-[#0B2A4A] leading-tight">
                {stages[activeStage].title}
              </h3>
              <p className="mt-3 text-[14px] sm:text-[15.5px] leading-relaxed text-slate-700">
                {stages[activeStage].description}
              </p>

              {/* Deliverables */}
              <div className="mt-5">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
                  Key Milestones &amp; Outcomes
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {stages[activeStage].deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13.5px] sm:text-[14.5px] text-slate-700">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Col: Institutional Support Box */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs h-full">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700">
                  <Building2 size={16} />
                  <span>Institutional Ecosystem Backing</span>
                </div>
                <p className="mt-2.5 text-[13.5px] sm:text-[14.5px] leading-relaxed text-slate-600">
                  {stages[activeStage].supportPillars}
                </p>

                <div className="mt-4 border-t border-slate-100 pt-3.5">
                  <div className="text-[12px] font-semibold text-slate-500">Partner Hubs Involved:</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {["IIT Bombay CDTIES", "COEP Tech University", "VJTI Mumbai", "C-DAC Pune"].map((hub) => (
                      <span
                        key={hub}
                        className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700 border border-slate-200"
                      >
                        {hub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <Button href="/incubation-acceleration" size="sm" variant="primary" className="text-xs">
                  Apply for Incubation <ArrowRight size={13} />
                </Button>
                <Button href="/programs" size="sm" variant="outline" className="text-xs">
                  View Programs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
