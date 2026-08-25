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
    <section className="relative overflow-hidden py-8 sm:py-12 bg-white border-y border-slate-100">
      <Container>
        {/* Section Header */}
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 border border-brand-200/80 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-[#155E9A]">
            <ShieldCheck size={13} className="text-brand-600" /> Incubation Framework
          </span>
          <h2 className="mt-2 text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold tracking-tight text-[#0B2A4A]">
            The 4-Stage Bharat Acceleration Pipeline
          </h2>
          <p className="mx-auto mt-1.5 max-w-xl text-[13px] sm:text-[14px] leading-relaxed text-slate-600">
            How we guide purpose-driven founders from grassroots discovery to national scale.
          </p>
        </AnimatedSection>

        {/* Mobile Segmented Stage Selector */}
        <div className="mt-5 grid grid-cols-4 gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200/80 sm:hidden">
          {stages.map((stage, idx) => {
            const isSelected = activeStage === idx;
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`py-2 px-1 rounded-lg text-center transition-all ${
                  isSelected
                    ? "bg-[#0B2A4A] text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <div className={`text-[10px] font-mono font-extrabold ${isSelected ? "text-amber-300" : "text-slate-500"}`}>
                  P-{stage.step}
                </div>
                <div className="text-[11.5px] font-bold truncate mt-0.5">
                  {stage.phase.split(" ")[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Desktop & Tablet 4-Stage Stepper Buttons */}
        <div className="mt-6 sm:mt-8 hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = activeStage === idx;
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`relative flex flex-col items-start p-3 sm:p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#0B2A4A] text-white border-[#0B2A4A] shadow-md scale-101"
                    : "bg-[#F8FAFC] text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`font-mono text-[11px] font-extrabold px-1.5 py-0.5 rounded ${
                      isSelected ? "bg-amber-400 text-slate-950" : "bg-slate-200 text-slate-800"
                    }`}
                  >
                    PHASE {stage.step}
                  </span>
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                      isSelected ? "bg-white/15 text-white" : "bg-white text-brand-600 border border-slate-200"
                    }`}
                  >
                    <Icon size={15} />
                  </div>
                </div>

                <div className="mt-2.5">
                  <div className={`text-[11px] font-semibold ${isSelected ? "text-amber-300" : "text-brand-600"}`}>
                    {stage.phase}
                  </div>
                  <div className="text-[13px] sm:text-[14px] font-bold leading-snug mt-0.5 truncate w-full">
                    {stage.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep-Dive Card */}
        <div className="mt-4 sm:mt-5 rounded-2xl border border-slate-200 bg-[#F5FAFE] p-4 sm:p-6 lg:p-7 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
            {/* Left Col: Overview & Deliverables */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-2.5 py-0.5 text-[11px] font-bold text-brand-800">
                Phase {stages[activeStage].step}: {stages[activeStage].badge}
              </span>
              <h3 className="mt-2 text-[18px] sm:text-[20px] font-bold text-[#0B2A4A] leading-snug">
                {stages[activeStage].title}
              </h3>
              <p className="mt-2 text-[13px] sm:text-[13.5px] leading-relaxed text-slate-700">
                {stages[activeStage].description}
              </p>

              {/* Deliverables */}
              <div className="mt-3.5 pt-3 border-t border-slate-200/70">
                <h4 className="text-[11.5px] font-bold uppercase tracking-wider text-slate-800">
                  Key Milestones &amp; Outcomes
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {stages[activeStage].deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-slate-700">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Col: Institutional Support Box */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs h-full">
              <div>
                <div className="flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-wider text-brand-700">
                  <Building2 size={14} />
                  <span>Institutional Backing</span>
                </div>
                <p className="mt-2 text-[12.5px] sm:text-[13px] leading-relaxed text-slate-600">
                  {stages[activeStage].supportPillars}
                </p>

                <div className="mt-3 border-t border-slate-100 pt-2.5">
                  <div className="text-[11px] font-semibold text-slate-500">Partner Hubs:</div>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {["IIT Bombay CDTIES", "COEP Tech University", "VJTI Mumbai", "C-DAC Pune"].map((hub) => (
                      <span
                        key={hub}
                        className="rounded-md bg-slate-50 px-2 py-0.5 text-[10.5px] font-semibold text-slate-700 border border-slate-200"
                      >
                        {hub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2.5">
                <Button href="/incubation-acceleration" size="sm" variant="primary" className="text-xs px-3 py-1.5">
                  Incubation Details <ArrowRight size={12} />
                </Button>
                <Button href="/programs" size="sm" variant="outline" className="text-xs px-3 py-1.5">
                  All Programs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
