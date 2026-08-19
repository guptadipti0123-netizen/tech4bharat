import Image from "next/image";
import { Cpu, GraduationCap, Heart, Sparkles, Sprout, Venus, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface Persona {
  icon: LucideIcon;
  label: string;
  supportingLine: string;
}

const leftPersonas: Persona[] = [
  { icon: Sprout, label: "Early-Stage Startups", supportingLine: "Building your first company" },
  { icon: GraduationCap, label: "Student Founders", supportingLine: "Turning ideas into ventures" },
  { icon: Venus, label: "Women Entrepreneurs", supportingLine: "Empowering diverse leadership" },
];

const rightPersonas: Persona[] = [
  { icon: Heart, label: "Social Impact Startups", supportingLine: "Solving real-world problems" },
  { icon: Cpu, label: "Technology Innovators", supportingLine: "Creating the next breakthrough" },
  { icon: Sparkles, label: "First-Time Founders", supportingLine: "Starting your founder journey" },
];

function Spoke({ item, align }: { item: Persona; align: "left" | "right" }) {
  const Icon = item.icon;
  const isLeft = align === "left";
  return (
    <div className={`flex items-center gap-3 ${isLeft ? "flex-row-reverse text-right" : "text-left"}`}>
      <div>
        <h3 className="flex items-center gap-1.5 text-[14px] font-bold text-[#0B2A4A] sm:text-[16px]">
          {isLeft ? null : <Icon size={14} className="shrink-0 text-[#155E9A]" />}
          {item.label}
          {isLeft ? <Icon size={14} className="shrink-0 text-[#155E9A]" /> : null}
        </h3>
        <p className="mt-0.5 max-w-48 text-[12px] leading-snug text-slate-500 sm:text-[13px]">{item.supportingLine}</p>
      </div>
      <span className="hidden shrink-0 items-center gap-1.5 sm:flex">
        {isLeft && <span className="h-px w-6 bg-[#B9CFE0] lg:w-10" />}
        <span className="h-2 w-2 shrink-0 rounded-full bg-[#155E9A]" />
        {!isLeft && <span className="h-px w-6 bg-[#B9CFE0] lg:w-10" />}
      </span>
    </div>
  );
}

/** Who should attend — a hub-and-spoke diagram: a compact dark-navy center circle holding
 *  the section title and tagline, with the six founder personas arranged as three spokes on
 *  each side (dot + connector line), matching the same pattern used for Mentors & Advisors.
 *  On mobile the circle sits on top and the six personas stack in a compact 2-col grid. */
export default function WhoShouldAttend() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-11">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{ background: "linear-gradient(180deg, #F5FAFE 0%, #EDF8FF 50%, #F5FAFE 100%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, #0B2A4A 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            title="Who Should Attend"
            className="max-w-3xl"
            titleClassName="text-[22px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B2A4A] sm:text-[26px] lg:text-[30px]"
          />
        </AnimatedSection>

        {/* Desktop / tablet: hub-and-spoke row */}
        <div className="mt-10 hidden items-center justify-center gap-4 sm:flex lg:gap-8 xl:gap-12">
          <div className="flex flex-col gap-6 lg:gap-8">
            {leftPersonas.map((item) => (
              <Spoke key={item.label} item={item} align="left" />
            ))}
          </div>

          <AnimatedSection className="relative aspect-4/3 w-72 shrink-0 overflow-hidden rounded-3xl shadow-[0_14px_36px_rgba(6,26,44,0.18)] ring-6 ring-white md:w-84 lg:w-[380px] xl:w-[420px]">
            <Image
              src="/images/legacy/policy-workshop-1.png"
              alt="Indian founders and students attending a Tech4Bharat Startup Bootcamp workshop"
              fill
              sizes="(max-width: 1024px) 380px, 420px"
              className="object-cover brightness-105"
            />
          </AnimatedSection>

          <div className="flex flex-col gap-6 lg:gap-8">
            {rightPersonas.map((item) => (
              <Spoke key={item.label} item={item} align="right" />
            ))}
          </div>
        </div>

        {/* Mobile: image on top, six personas stacked in a compact 2-col grid */}
        <div className="mt-8 flex flex-col items-center sm:hidden">
          <AnimatedSection className="relative aspect-16/10 w-full max-w-[320px] shrink-0 overflow-hidden rounded-2xl shadow-[0_10px_28px_rgba(6,26,44,0.16)] ring-4 ring-white">
            <Image
              src="/images/legacy/policy-workshop-1.png"
              alt="Indian founders and students attending a Tech4Bharat Startup Bootcamp workshop"
              fill
              sizes="320px"
              className="object-cover brightness-105"
            />
          </AnimatedSection>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5">
            {[...leftPersonas, ...rightPersonas].map((item) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.label}>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#155E9A]" />
                    <div>
                      <h3 className="flex items-center gap-1.5 text-[13px] font-bold text-[#0B2A4A]">
                        <Icon size={13} className="shrink-0 text-[#155E9A]" />
                        {item.label}
                      </h3>
                      <p className="mt-0.5 text-[11.5px] leading-snug text-slate-500">{item.supportingLine}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
