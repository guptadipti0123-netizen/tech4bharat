import Image from "next/image";
import { Cpu, GraduationCap, HeartPulse, Leaf, Sprout, Wallet, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";
import DotGrid from "@/components/ui/DotGrid";
import SectionDivider from "@/components/ui/SectionDivider";
import { cn } from "@/lib/utils";

interface HomeFocusArea {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

const homeFocusAreas: HomeFocusArea[] = [
  {
    title: "AI & Data Science",
    description: "Backing founders building applied AI products with real-world impact.",
    icon: Cpu,
    image: "/images/gallery/hackathons-3.jpg",
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
    image: "/images/gallery/gallery-2.jpg",
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
    image: "/images/gallery/gallery-6.jpg",
  },
];

const iconTones = [
  "bg-brand-50/95 text-brand-700",
  "bg-secondary-50/95 text-secondary-700",
  "bg-accent-100/95 text-accent-700",
];

export default function FocusAreas() {
  return (
    <section id="focus-areas" className="relative overflow-hidden bg-secondary-50 py-16 sm:py-24">
      <DotGrid className="left-0 top-0 h-full w-full text-secondary-700/6" />
      <Blob tone="secondary" className="-right-28 -top-20 h-80 w-80" />
      <Blob tone="accent" className="-left-20 bottom-0 h-64 w-64" animate={false} />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Focus Areas"
            title="Domains we're doubling down on"
            description="We back founders building in sectors critical to India's next decade of growth."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeFocusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <AnimatedSection key={area.title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-[0_4px_20px_rgba(22,58,58,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary-200 hover:shadow-[0_0_36px_rgba(46,196,182,0.28),0_16px_40px_rgba(22,58,58,0.1)]">
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
                        "absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full shadow-md backdrop-blur-sm",
                        iconTones[i % iconTones.length]
                      )}
                    >
                      <Icon size={22} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-ink-900">{area.title}</h3>
                    <p className="mt-2 text-slate-600">{area.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>

      <SectionDivider color="text-brand-50" />
    </section>
  );
}
