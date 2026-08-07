import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

/** About Tech4Bharat — a compact, fixed-size photo (400x280px on desktop, well within
 *  380-420 x 260-300) beside two short paragraphs. Deliberately not a hero banner: no
 *  full-width image, minimal padding, so the whole section stays around ~400px tall. */
export default function OurStory() {
  return (
    <section id="our-story" className="bg-slate-50 py-5 sm:py-6">
      <Container>
        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
            <AnimatedSection className="w-full shrink-0 sm:w-100 lg:w-100">
              <div className="relative h-56 w-full overflow-hidden rounded-[18px] border border-slate-200 sm:h-70">
                <Image
                  src="/images/legacy/workshops/day1-i2-intro-to-tech-policy.png"
                  alt="A Tech4Bharat workshop session"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="max-w-130">
              <p className="text-lg leading-relaxed text-slate-600">
                Tech4Bharat started at IIT Bombay to close a gap: brilliant ideas were being
                built across India, but the support to turn them into companies was
                concentrated in a handful of cities.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                We back founders wherever they are with mentorship, capital access, and a
                community that goes the distance.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
