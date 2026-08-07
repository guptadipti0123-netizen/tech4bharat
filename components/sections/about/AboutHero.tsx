import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

/** About page hero — content left, one real legacy photo right (never cropped, never
 *  zoomed). Compact: padding + content only, no viewport-height lock. */
export default function AboutHero() {
  return (
    <section className="bg-white pb-10 pt-24 sm:pb-14 sm:pt-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <AnimatedSection>
            <h1 className="text-balance text-3xl sm:text-3xl font-bold leading-tight tracking-tight text-ink-900 md:text-4xl lg:text-4xl">
              About Tech4Bharat
            </h1>
            <p className="mt-5 max-w-lg text-balance text-lg leading-relaxed text-slate-600 sm:text-xl">
              Tech4Bharat is being established as a national platform to support social
              entrepreneurship, innovation, and startup development across Bharat.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/programs" size="lg">
                Explore Programs <ArrowRight size={18} />
              </Button>
              <Button href="/contact" size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-[28px] border-4 border-white shadow-2xl">
              <Image
                src="/images/legacy/policy-workshop-1.png"
                alt="A Tech4Bharat workshop session at COEP Technological University"
                fill
                priority
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
