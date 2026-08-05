import { GraduationCap, Handshake, Landmark, Sprout, Users, Venus, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";
import CountUp from "@/components/ui/CountUp";
import { impactStats } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = { Sprout, Venus, GraduationCap, Users, Landmark, Handshake };

// A focused slice of the full impact dataset — enough to read as substantive without
// crowding the page; the complete set already lives on the home page's stats strip.
const featured = ["Startups Supported", "Women Entrepreneurs", "Mentors", "States Reached"];

/** Animated statistics strip — glass cards over a softly blobbed backdrop. */
export default function AboutStats() {
  const stats = impactStats.filter((stat) => featured.includes(stat.label));

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-brand-50 via-secondary-50/40 to-white py-8 sm:py-12">
      <Blob tone="brand" className="-left-24 top-0 h-72 w-72" />
      <Blob tone="secondary" className="-right-20 bottom-0 h-64 w-64" animate={false} />

      <Container className="relative">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] ?? Sprout;
            return (
              <AnimatedSection key={stat.label} delay={i * 0.08} animation="scale">
                <div className="glass-surface flex flex-col items-center rounded-3xl border border-white/60 p-6 text-center shadow-[0_8px_28px_rgba(31,78,61,0.08)] transition-all duration-300 hover:-translate-y-1.5 sm:p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-white shadow-md shadow-brand-700/25">
                    <Icon size={22} />
                  </span>
                  <p className="mt-4 text-3xl font-extrabold text-ink-900 sm:text-4xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-slate-600 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
