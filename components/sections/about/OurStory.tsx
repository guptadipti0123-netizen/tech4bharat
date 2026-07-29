import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { aboutImages } from "@/lib/images";

export default function OurStory() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedSection>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              Our Story
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Born from a simple belief: great ideas shouldn&apos;t need a metro city zip code
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Tech4Bharat started at IIT Bombay with a small group of founders, mentors, and
                engineers who noticed a gap: brilliant ideas were being built across India, but
                the support to turn them into companies was concentrated in a handful of
                cities.
              </p>
              <p>
                We set out to change that — building a startup incubator that meets founders
                wherever they are, with the mentorship, capital access, and community they need
                to go the distance.
              </p>
              <p>
                Today, that mission has grown into a network of 150+ startups, 80+ mentors, and
                partnerships spanning academia, government, and industry — all working toward
                one goal: a more inclusive Bharat startup ecosystem.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={aboutImages.team}
                alt="The Tech4Bharat team collaborating"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/10 p-6 backdrop-blur-md">
                <p className="text-3xl font-bold text-white">2021</p>
                <p className="text-sm text-white/70">Founded at IIT Bombay</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
