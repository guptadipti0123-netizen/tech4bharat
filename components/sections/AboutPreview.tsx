import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { aboutImages } from "@/lib/images";

export default function AboutPreview() {
  return (
    <section id="about" className="bg-slate-50 py-12 sm:py-16">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              Who We Are
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              A launchpad for founders solving India&apos;s biggest opportunities
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-slate-600">
              We partner with early-stage founders to build durable companies — combining
              deep operating experience, access to capital, and a community that compounds
              over time.
            </p>
            <Button href="/about" variant="outline" className="mt-6">
              Read More
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={aboutImages.team}
                alt="The Tech4Bharat team collaborating with founders"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
