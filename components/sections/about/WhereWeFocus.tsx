import {
  Briefcase,
  BrainCircuit,
  CloudSun,
  Droplets,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Recycle,
  Sprout,
  Stethoscope,
  TreePine,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import DotGrid from "@/components/ui/DotGrid";
import { cn } from "@/lib/utils";

interface FocusCard {
  icon: LucideIcon;
  title: string;
  description: string;
  tone: "brand" | "secondary" | "accent" | "sky" | "violet" | "orange";
}

const focusAreas: FocusCard[] = [
  { icon: BrainCircuit, title: "AI & ML", description: "Building intelligent solutions for real-world challenges.", tone: "brand" },
  { icon: Sprout, title: "AgriTech", description: "Empowering agriculture through innovation.", tone: "secondary" },
  { icon: HeartPulse, title: "HealthTech", description: "Technology improving healthcare access.", tone: "accent" },
  { icon: CloudSun, title: "ClimateTech", description: "Creating sustainable environmental solutions.", tone: "sky" },
  { icon: Zap, title: "Clean Energy", description: "Accelerating renewable energy adoption.", tone: "violet" },
  { icon: GraduationCap, title: "Education", description: "Improving learning through technology.", tone: "orange" },
  { icon: Droplets, title: "Water & Sanitation", description: "Building healthier communities.", tone: "brand" },
  { icon: HandHeart, title: "Women Empowerment", description: "Supporting inclusive entrepreneurship.", tone: "secondary" },
  { icon: TreePine, title: "Rural Development", description: "Driving innovation beyond urban centres.", tone: "accent" },
  { icon: Recycle, title: "Waste Management", description: "Technology for circular economy.", tone: "sky" },
  { icon: Briefcase, title: "Livelihood Generation", description: "Creating sustainable employment opportunities.", tone: "violet" },
  { icon: Stethoscope, title: "MedTech", description: "Advancing medical innovation.", tone: "orange" },
];

const toneClasses: Record<FocusCard["tone"], { border: string; icon: string; glow: string }> = {
  brand: { border: "hover:border-brand-300", icon: "bg-brand-50 text-brand-700", glow: "hover:shadow-brand-200/50" },
  secondary: { border: "hover:border-secondary-300", icon: "bg-secondary-50 text-secondary-700", glow: "hover:shadow-secondary-200/50" },
  accent: { border: "hover:border-accent-300", icon: "bg-accent-100 text-accent-700", glow: "hover:shadow-accent-200/50" },
  sky: { border: "hover:border-sky-300", icon: "bg-sky-50 text-sky-700", glow: "hover:shadow-sky-200/50" },
  violet: { border: "hover:border-violet-300", icon: "bg-violet-50 text-violet-700", glow: "hover:shadow-violet-200/50" },
  orange: { border: "hover:border-orange-300", icon: "bg-orange-50 text-orange-700", glow: "hover:shadow-orange-200/50" },
};

/** Where We Focus — merged in from the retired standalone /focus-areas page. A single
 *  premium container holding a compact 4x3 icon-card grid (real sectors, one short line
 *  each) instead of a whole separate page. */
export default function WhereWeFocus() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-brand-50/40 via-white to-secondary-50/30 py-8 sm:py-12">
      <DotGrid className="left-0 top-0 h-full w-full text-brand-700/4" />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Our Focus"
            title="Where We Focus"
            description="Supporting innovation across sectors that create meaningful impact for Bharat."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {focusAreas.map((area, i) => {
                const Icon = area.icon;
                const tone = toneClasses[area.tone];
                return (
                  <AnimatedSection key={area.title} delay={(i % 8) * 0.05} animation="scale">
                    <div
                      className={cn(
                        "flex h-full max-h-50 flex-col rounded-2xl border border-slate-200 bg-slate-50/60 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg",
                        tone.border,
                        tone.glow
                      )}
                    >
                      <span className={cn("flex h-12 w-12 items-center justify-center rounded-xl", tone.icon)}>
                        <Icon size={22} />
                      </span>
                      <h3 className="mt-3 text-base font-bold leading-snug text-ink-900">{area.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{area.description}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
