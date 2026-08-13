import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { aboutImages } from "@/lib/images";

/** About preview — a soft mint panel holding a real photo beside a bold dark card, so the
 *  copy reads with real contrast instead of blending into a pale tint. */
export default function AboutPreview() {
  return (
    <section id="about" className="bg-white py-10 sm:py-14 lg:py-20">
      <Container>
        <div className="rounded-[36px] bg-[linear-gradient(160deg,#F5FAFE_0%,#F5FAFE_100%)] p-3 sm:p-5 lg:p-6">
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-5">
            <AnimatedSection>
              {/* aspect-3/2 matches the source photo's real 612x408 ratio exactly, so
                  object-cover never letterboxes or crops. Sized by aspect ratio alone (not
                  stretched to match the sibling card's height) so that guarantee holds. */}
              <div className="relative aspect-3/2 w-full overflow-hidden rounded-[26px] shadow-[0_8px_24px_rgba(21,94,154,0.08)]">
                <Image
                  src={aboutImages.team}
                  alt="The Tech4Bharat team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="flex h-full flex-col rounded-[26px] bg-brand-900 p-6 shadow-[0_12px_30px_rgba(6,26,44,0.25)] sm:p-8">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-400">
                  About Tech4Bharat
                </span>
                <h2 className="mt-2 max-w-2xl text-balance text-[clamp(1.3rem,2.2vw,1.7rem)] font-semibold leading-tight text-white">
                  A startup incubator built for Indian founders
                </h2>

                <p className="mt-3 text-[14px] leading-6 text-white/75 sm:text-[15px]">
                  Tech4Bharat is a startup incubator helping ambitious founders build
                  category-defining companies across India.
                </p>
                <p className="mt-3 text-[14px] leading-6 text-white/75 sm:text-[15px]">
                  We support founders through mentorship, capital access, and a thriving
                  nationwide startup ecosystem.
                </p>

                <div className="mt-6">
                  <Button href="/about" variant="secondary">
                    Learn More <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
