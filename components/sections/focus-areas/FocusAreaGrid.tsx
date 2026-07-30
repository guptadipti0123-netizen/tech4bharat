import { Cpu, GraduationCap, HeartPulse, Leaf, Sprout, Wallet, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface FocusArea {
  title: string;
  description: string;
  icon: LucideIcon;
}

const focusAreas: FocusArea[] = [
  {
    title: "AI & Data Science",
    description: "Backing founders building applied AI products with real-world impact.",
    icon: Cpu,
  },
  {
    title: "Healthcare",
    description: "Solutions expanding access to quality, affordable care across India.",
    icon: HeartPulse,
  },
  {
    title: "Agriculture",
    description: "Technology strengthening farmer incomes and rural supply chains.",
    icon: Leaf,
  },
  {
    title: "FinTech",
    description: "Products bringing formal financial services to underserved communities.",
    icon: Wallet,
  },
  {
    title: "Sustainability",
    description: "Ventures tackling climate, energy, and resource challenges at scale.",
    icon: Sprout,
  },
  {
    title: "Education",
    description: "Platforms making quality learning accessible beyond the metros.",
    icon: GraduationCap,
  },
];

export default function FocusAreaGrid() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <Container>
        <AnimatedSection>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-slate-600">
            Tech4Bharat backs founders building category-defining companies across sectors
            critical to India&apos;s next decade of growth. These are the domains where we
            invest our mentorship, capital, and ecosystem support.
          </p>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            const isGold = i % 2 === 1;
            return (
              <AnimatedSection key={area.title} delay={i * 0.08}>
                <Card>
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl",
                      isGold ? "bg-secondary-50 text-secondary-700" : "bg-brand-50 text-brand-700"
                    )}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-ink-900">{area.title}</h3>
                  <p className="mt-2 text-slate-600">{area.description}</p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
