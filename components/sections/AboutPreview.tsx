import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { aboutImages } from "@/lib/images";

/** About preview — a plain bordered photo on the left, two short paragraphs and one button
 *  on the right, inside a single bordered container. No blob shapes, no blurred glow, no
 *  icon-highlight grid. */
export default function AboutPreview() {
  return (
    <section id="about" className="bg-slate-50 py-8 sm:py-12">
      <Container>
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <AnimatedSection>
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-slate-200">
                <Image
                  src={aboutImages.team}
                  alt="The Tech4Bharat team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="max-w-2xl text-balance text-3xl font-bold leading-tight text-ink-900 md:text-4xl lg:text-4xl">
                A startup incubator built for Indian founders
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Tech4Bharat is a startup incubator helping ambitious founders build
                category-defining companies across India.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                We support founders through mentorship, capital access, and a thriving
                nationwide startup ecosystem.
              </p>

              <div className="mt-7">
                <Button href="/about" variant="outline">
                  Learn More <ArrowRight size={16} />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
