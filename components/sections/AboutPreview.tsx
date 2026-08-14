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
              <div className="relative aspect-3/2 w-full overflow-hidden rounded-[26px] shadow-[0_10px_30px_rgba(21,94,154,0.14)] ring-4 ring-white">
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
              <div
                className="relative flex h-full flex-col overflow-hidden rounded-[26px] p-6 shadow-[0_12px_30px_rgba(21,94,154,0.12)] sm:p-8"
                style={{ background: "linear-gradient(135deg, #F1F7FF 0%, #E3F0FF 100%)" }}
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#2563C7]/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-[#FFE08A]/20 blur-3xl" />

                <span className="relative text-[11px] font-bold uppercase tracking-[0.18em] text-[#2563C7]">
                  About Tech4Bharat
                </span>
                <h2 className="relative mt-2 max-w-2xl text-balance text-[clamp(1.3rem,2.2vw,1.7rem)] font-semibold leading-tight text-[#0B2A4A]">
                  A startup incubator built for Indian founders
                </h2>
                <span className="relative mt-3 h-1 w-12 rounded-full bg-[#2563C7]/30" aria-hidden="true" />

                <p className="relative mt-4 text-[14px] leading-6 text-[#526777] sm:text-[15px]">
                  Tech4Bharat is a startup incubator helping ambitious founders build
                  category-defining companies across India.
                </p>
                <p className="relative mt-3 text-[14px] leading-6 text-[#526777] sm:text-[15px]">
                  We support founders through mentorship, capital access, and a thriving
                  nationwide startup ecosystem.
                </p>

                <div className="relative mt-6 border-t border-[#2563C7]/12 pt-5">
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
