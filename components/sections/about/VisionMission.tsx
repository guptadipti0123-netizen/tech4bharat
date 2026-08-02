import { Compass, Target } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";

export default function VisionMission() {
  return (
    <section id="vision-mission" className="relative overflow-hidden bg-brand-50 py-16 sm:py-24">
      <Blob tone="brand" className="left-1/3 -top-24 h-80 w-80" />
      <Blob tone="secondary" className="-right-24 bottom-0 h-72 w-72" animate={false} />

      <Container className="relative">
        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatedSection>
            <div className="glass-surface h-full rounded-3xl border border-white/60 p-6 shadow-[0_8px_28px_rgba(31,78,61,0.1)] transition-all duration-300 hover:-translate-y-1.5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white shadow-md shadow-brand-700/25">
                <Compass size={28} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-ink-900">Our Vision</h3>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                A Bharat where geography never limits ambition, and every founder can access
                the mentorship, capital, and community to build a category-defining company.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="glass-surface h-full rounded-3xl border border-white/60 p-6 shadow-[0_8px_28px_rgba(31,78,61,0.1)] transition-all duration-300 hover:-translate-y-1.5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary-700 text-white shadow-md shadow-secondary-700/25">
                <Target size={28} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-ink-900">Our Mission</h3>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
                To incubate and accelerate high-potential Indian startups through structured
                mentorship, funding access, and ecosystem partnerships that drive real impact.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
