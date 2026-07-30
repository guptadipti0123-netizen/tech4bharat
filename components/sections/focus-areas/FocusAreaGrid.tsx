import Image from "next/image";
import { Cpu, GraduationCap, HeartPulse, Leaf, Sprout, Wallet, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface FocusArea {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

const focusAreas: FocusArea[] = [
  {
    title: "AI & Data Science",
    description: "Backing founders building applied AI products with real-world impact.",
    icon: Cpu,
    image: "/images/domains/ai-ml.jpg",
  },
  {
    title: "Healthcare",
    description: "Solutions expanding access to quality, affordable care across India.",
    icon: HeartPulse,
    image: "/images/domains/healthtech.jpg",
  },
  {
    title: "Agriculture",
    description: "Technology strengthening farmer incomes and rural supply chains.",
    icon: Leaf,
    image: "/images/domains/agritech.jpg",
  },
  {
    title: "FinTech",
    description: "Products bringing formal financial services to underserved communities.",
    icon: Wallet,
    image: "/images/programs/investors-meeting.jpg",
  },
  {
    title: "Sustainability",
    description: "Ventures tackling climate, energy, and resource challenges at scale.",
    icon: Sprout,
    image: "/images/domains/climatetech.jpg",
  },
  {
    title: "Education",
    description: "Platforms making quality learning accessible beyond the metros.",
    icon: GraduationCap,
    image: "/images/domains/education-technology.jpg",
  },
];

export default function FocusAreaGrid() {
  return (
    <section className="bg-white py-10 sm:py-17.5">
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
                <Card className="overflow-hidden p-0">
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={cn(
                        "absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl shadow-md backdrop-blur-sm",
                        isGold ? "bg-secondary-50/95 text-secondary-700" : "bg-brand-50/95 text-brand-700"
                      )}
                    >
                      <Icon size={22} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-ink-900">{area.title}</h3>
                    <p className="mt-2 text-slate-600">{area.description}</p>
                  </div>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
