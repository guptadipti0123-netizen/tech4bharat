import Image from "next/image";
import { ArrowRight, Cpu, GraduationCap, HeartPulse, Leaf, Sprout, Wallet, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

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

/** Focus Areas preview — flat bordered cards (no glassmorphism, no blurred backgrounds),
 *  six real sectors, each inside its own premium container. */
export default function FocusAreas() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <Container>
        <AnimatedSection>
          <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
            <span className="h-px w-8 bg-current opacity-50" aria-hidden="true" />
            Focus Areas
          </span>
          <h2 className="mt-4 max-w-3xl text-balance text-[32px] font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-[40px]">
            Domains we&apos;re doubling down on
          </h2>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeFocusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <AnimatedSection key={area.title} delay={i * 0.06}>
                <div className="h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div className="relative h-36 w-full">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                      <Icon size={18} />
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-ink-900">{area.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{area.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.3} className="mt-10 text-center">
          <Button href="/about" variant="outline">
            View All <ArrowRight size={16} />
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
