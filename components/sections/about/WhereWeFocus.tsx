import Image from "next/image";
import { BrainCircuit, CloudSun, Droplets, HeartPulse, Sprout, Stethoscope, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface FocusRow {
  icon: LucideIcon;
  title: string;
  description: string;
}

const focusAreas: FocusRow[] = [
  { icon: Sprout, title: "AgriTech", description: "Strengthening farmer incomes and rural supply chains." },
  { icon: Droplets, title: "Water & Sanitation", description: "Ensuring safe water and sanitation access for all." },
  { icon: Stethoscope, title: "MedTech", description: "Advancing medical devices and affordable diagnostics." },
  { icon: HeartPulse, title: "HealthTech", description: "Expanding access to affordable, quality healthcare." },
  { icon: BrainCircuit, title: "AI / ML", description: "Solving real-world problems with applied AI." },
  { icon: CloudSun, title: "ClimateTech", description: "Building climate and environmental resilience." },
];

// Icon-circle tint alternates row by row: green on odd rows, gold on even.
const rowTones = [
  { iconBg: "bg-[#EAF6EE]", iconInk: "text-[#1F4E3D]" },
  { iconBg: "bg-[#FFF3DD]", iconInk: "text-[#D4A017]" },
];

// Card background cycles through four extremely soft tints, repeating every 4 rows.
const cardBackgrounds = ["bg-[#F3FAF6]", "bg-[#FFF8EC]", "bg-[#F5FBF8]", "bg-[#FFF6E8]"];

/** Focus Areas — a consulting-report layout: a portrait editorial photo on the left,
 *  paired with a vertical stack of six borderless-feeling "focus rows" (icon, title,
 *  one-line description) on the right. No repeated card grid. */
export default function WhereWeFocus() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAF9] pb-8 pt-6 sm:pb-12 sm:pt-8">
      <div
        aria-hidden="true"
        className="absolute -left-16 -top-16 h-64 w-64 rounded-full border border-[#1F4E3D]/10 opacity-10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full border border-[#D4A017]/10 opacity-10"
      />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            title="Focus Areas"
            description="The sectors where Tech4Bharat supports innovation, technology, and social impact."
            className="max-w-4xl"
            titleClassName="text-balance text-[24px] sm:text-[30px] font-bold leading-tight tracking-tight text-ink-900 lg:text-[34px]"
            descriptionClassName="mx-auto mt-3 max-w-4xl text-balance text-[17px] leading-relaxed text-slate-600 sm:text-[18px]"
          />
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[35%_65%] lg:items-center lg:gap-10">
          <AnimatedSection className="relative mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none">
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 scale-110 rounded-full bg-[#EAF6EE] opacity-60 blur-2xl"
            />
            <div className="relative h-105 w-full overflow-hidden rounded-[24px]">
              <Image
                src="/images/legacy/workshops/day1-i1-inaugural-session.png"
                alt="Tech4Bharat's inaugural workshop session and opening ceremony"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-3.5">
            {focusAreas.map((area, i) => {
              const Icon = area.icon;
              const tone = rowTones[i % rowTones.length];
              const cardBg = cardBackgrounds[i % cardBackgrounds.length];
              return (
                <AnimatedSection key={area.title} delay={i * 0.05}>
                  <div
                    className={cn(
                      "group flex min-h-22 items-center gap-4 rounded-[18px] border border-[#1F4E3D]/25 px-5 py-4.5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-250 hover:-translate-y-0.5 hover:border-[#1F4E3D] hover:shadow-md",
                      cardBg
                    )}
                  >
                    <span className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-full", tone.iconBg)}>
                      <Icon size={22} strokeWidth={1.75} className={tone.iconInk} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold text-ink-900">{area.title}</h3>
                      <p className="mt-0.5 truncate text-sm text-slate-500">{area.description}</p>
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
