import { ArrowRight, BrainCircuit, CloudSun, HeartPulse, Sprout, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HomeSectionHeading from "@/components/sections/HomeSectionHeading";

interface Domain {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: "brand" | "gold";
}

const domains: Domain[] = [
  {
    icon: BrainCircuit,
    title: "AI & Data Science",
    description: "Backing founders building applied AI with real-world impact.",
    accent: "brand",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Expanding access to quality, affordable care across India.",
    accent: "gold",
  },
  {
    icon: Sprout,
    title: "Agriculture",
    description: "Strengthening farmer incomes and rural supply chains.",
    accent: "brand",
  },
  {
    icon: CloudSun,
    title: "ClimateTech",
    description: "Building climate and environmental resilience.",
    accent: "gold",
  },
];

const accentStyles = {
  brand: { icon: "#1F4E3D", iconBg: "#EAF6EE" },
  gold: { icon: "#D4A017", iconBg: "#FFF7E8" },
};

export default function FocusAreas() {
  return (
    <section className="bg-[linear-gradient(180deg,#f9fcfa_0%,#f7fbf8_100%)] py-14 sm:py-16 lg:py-24">
      <Container>
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <HomeSectionHeading
            title="Domains we're doubling down on"
            description="We back founders building in sectors critical to India's growth."
            align="center"
          />
        </AnimatedSection>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {domains.map((domain, i) => {
            const Icon = domain.icon;
            const { icon, iconBg } = accentStyles[domain.accent];
            const cardClasses =
              domain.accent === "brand"
                ? "border-[#1F4E3D]/12 bg-[#F5FAF7] shadow-[0_8px_18px_rgba(31,78,61,0.05)]"
                : "border-[#D4A017]/14 bg-[#FCF7EA] shadow-[0_8px_18px_rgba(212,160,23,0.05)]";
            return (
              <AnimatedSection key={domain.title} delay={i * 0.05} className="h-full">
                <div className={`flex h-full flex-col rounded-[24px] border p-5 sm:p-6 ${cardClasses}`}>
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl sm:h-13 sm:w-13"
                    style={{ backgroundColor: iconBg, color: icon }}
                  >
                    <Icon size={22} />
                  </span>

                  <h3 className="mt-4 text-[1rem] font-semibold leading-tight text-ink-900 sm:text-[1.05rem]">
                    {domain.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{domain.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.22} className="mt-8 text-center">
          <Button href="/about" variant="outline">
            View All <ArrowRight size={16} />
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
