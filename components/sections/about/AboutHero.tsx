import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

/** About page hero — the workshop photo is now a full-bleed background behind the intro
 *  copy, instead of a small framed card beside it. The section's own aspect ratio matches
 *  the photo's real ratio (1280x960 = 4:3) exactly, so `object-contain` never needs to
 *  crop or letterbox — the section simply gets taller on narrower screens instead. `min-h`
 *  is only a floor so the overlaid text/buttons never collide with the fixed navbar on
 *  short phones; it does not crop the image (contain, not cover). */
export default function AboutHero() {
  return (
    <section className="relative aspect-4/3 min-h-140 w-full overflow-hidden rounded-b-[48px] bg-[#0B2A4A] sm:aspect-[21/9] sm:min-h-100 sm:max-h-[480px] lg:max-h-[500px]">
      <Image
        src="/images/about/team.png"
        alt="Tech4Bharat team collaborating at the innovation centre"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#0B2A4A]/90 via-[#0B2A4A]/55 to-[#0B2A4A]/30" />
      <div className="absolute inset-0 bg-linear-to-r from-[#0B2A4A]/85 via-[#0B2A4A]/40 to-transparent" />

      <div className="relative flex h-full items-end pb-10 pt-20 sm:pb-14 lg:pb-16">
        <Container>
          <AnimatedSection className="max-w-xl">
            <h1 className="text-balance text-[1.45rem] font-semibold leading-tight tracking-[-0.01em] text-white sm:text-[1.9rem] lg:text-[2.15rem]">
              About Tech4Bharat
            </h1>
            <p className="mt-3 max-w-lg text-balance text-[13px] leading-6 text-white/85 sm:mt-4 sm:text-[14px]">
              Tech4Bharat is proposed to be established as a Section 8 Company — a national
              platform for social entrepreneurship and innovation.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
              <Button href="/programs" size="sm">
                Explore Programs <ArrowRight size={18} />
              </Button>
              <Button href="/contact" size="sm" variant="outline">
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </div>
    </section>
  );
}
