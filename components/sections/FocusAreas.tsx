import { ArrowRight, BrainCircuit, CloudSun, HeartPulse, Sprout, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface Domain {
  icon: LucideIcon;
  title: string;
  description: string;
  cardBg: string;
  border: string;
}

const domains: Domain[] = [
  {
    icon: BrainCircuit,
    title: "AI & Data Science",
    description: "Backing founders building applied AI with real-world impact.",
    cardBg: "#F5F7FF",
    border: "#6366F1",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Expanding access to quality, affordable care across India.",
    cardBg: "#F3FBF7",
    border: "#10B981",
  },
  {
    icon: Sprout,
    title: "Agriculture",
    description: "Strengthening farmer incomes and rural supply chains.",
    cardBg: "#FFF8F0",
    border: "#F59E0B",
  },
  {
    icon: CloudSun,
    title: "ClimateTech",
    description: "Building climate and environmental resilience.",
    cardBg: "#F4FBFA",
    border: "#0F766E",
  },
];

/** Focus Areas preview — four compact horizontal cards (icon left, title + description
 *  right), each with its own subtle background tint and matching accent border, arranged
 *  in a single row on desktop. */
export default function FocusAreas() {
  return (
    <section className="bg-white py-6 sm:py-8">
      <Container>
        <AnimatedSection className="mx-auto max-w-162.5 text-center">
          <h2 className="text-balance text-[27px] font-bold leading-[1.2] text-ink-900 md:text-4xl">
            Domains we&apos;re doubling down on
          </h2>
          <p className="mt-3 text-balance text-base leading-relaxed text-slate-600">
            We back founders building in sectors critical to India&apos;s growth.
          </p>
        </AnimatedSection>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {domains.map((domain, i) => {
            const Icon = domain.icon;
            return (
              <AnimatedSection key={domain.title} delay={i * 0.06} className="h-full">
                <div
                  style={{ backgroundColor: domain.cardBg, borderColor: domain.border }}
                  className="group flex h-full min-h-0 items-center gap-2.5 rounded-2xl border-2 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:min-h-25 sm:gap-3 sm:rounded-[18px] sm:p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1F4E3D] text-white sm:h-12 sm:w-12">
                    <Icon size={18} className="sm:hidden" />
                    <Icon size={22} className="hidden sm:block" />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-[15px] font-bold leading-tight text-[#123D32] sm:text-[18px]">{domain.title}</h3>
                    <p className="mt-0.5 line-clamp-none text-[13px] leading-snug text-[#5F6B73] sm:text-[14px] sm:leading-relaxed sm:line-clamp-2">
                      {domain.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.32} className="mt-7 text-center">
          <Button href="/about" variant="outline">
            View All <ArrowRight size={16} />
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
