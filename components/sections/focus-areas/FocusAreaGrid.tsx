import Image from "next/image";
import {
  BrainCircuit,
  Briefcase,
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
import { allFocusAreas, type FocusAreaDetail } from "@/lib/data";
import { getDomainImage } from "@/lib/images";

const icons: Record<FocusAreaDetail["icon"], LucideIcon> = {
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

export default function FocusAreaGrid() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allFocusAreas.map((area, i) => {
            const Icon = icons[area.icon];
            return (
              <AnimatedSection key={area.title} delay={(i % 4) * 0.06}>
                <Card className="flex flex-col overflow-hidden p-0">
                  <div className="relative h-32 w-full overflow-hidden">
                    <Image
                      src={getDomainImage(area.title)}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink-900/70 via-ink-900/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-700 shadow-lg">
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-ink-900">{area.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{area.description}</p>
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
