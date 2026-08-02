import Image from "next/image";
import {
  Briefcase,
  BrainCircuit,
  CloudSun,
  Droplets,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Lightbulb,
  Recycle,
  Sprout,
  Stethoscope,
  TreePine,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";
import DotGrid from "@/components/ui/DotGrid";
import { cn } from "@/lib/utils";
import { allFocusAreas } from "@/lib/data";
import { getDomainImage } from "@/lib/images";

const iconMap: Record<string, LucideIcon> = {
  Sprout,
  BrainCircuit,
  CloudSun,
  HeartPulse,
  Stethoscope,
  Droplets,
  GraduationCap,
  Zap,
  Recycle,
  TreePine,
  HandHeart,
  Briefcase,
  Lightbulb,
};

const iconTones = [
  "bg-brand-50/95 text-brand-700",
  "bg-secondary-50/95 text-secondary-700",
  "bg-accent-100/95 text-accent-700",
];

export default function FocusAreaGrid() {
  return (
    <section className="relative overflow-hidden bg-secondary-50 py-16 sm:py-24">
      <DotGrid className="left-0 top-0 h-full w-full text-secondary-700/6" />
      <Blob tone="accent" className="-right-24 top-0 h-72 w-72" animate={false} />

      <Container className="relative">
        <AnimatedSection>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-slate-600">
            Tech4Bharat backs founders building category-defining companies across sectors
            critical to India&apos;s next decade of growth. These are the domains where we
            invest our mentorship, capital, and ecosystem support.
          </p>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allFocusAreas.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <AnimatedSection key={area.title} delay={(i % 6) * 0.06}>
                <Card className="overflow-hidden p-0">
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src={getDomainImage(area.title)}
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
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
