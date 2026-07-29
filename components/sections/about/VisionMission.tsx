import { Compass, Target } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function VisionMission() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatedSection>
            <Card>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-700 text-white">
                <Compass size={28} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-ink-900">Our Vision</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                A Bharat where geography never limits ambition — where every founder,
                regardless of where they start, has access to the mentorship, capital, and
                community needed to build a category-defining company.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Card>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary-500 text-white">
                <Target size={28} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-ink-900">Our Mission</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                To incubate and accelerate high-potential Indian startups through structured
                mentorship, funding access, and ecosystem partnerships — with a focus on
                ventures that create measurable social and economic impact.
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
