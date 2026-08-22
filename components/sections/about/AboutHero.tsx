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
    <section className="relative aspect-4/3 min-h-140 w-full overflow-hidden rounded-b-[48px] bg-[#0B2A4A] sm:min-h-115">
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

      <div className="relative flex h-full items-end pb-10 pt-20 sm:items-center sm:pb-0 sm:pt-0">
        <Container>
          <AnimatedSection className="max-w-2xl">
            <h1 className="text-balance text-[26px] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[36px] md:text-[42px] lg:text-[48px]">
              About Tech4Bharat
            </h1>
            <p className="mt-3.5 max-w-xl text-balance text-[16px] font-medium leading-relaxed text-white sm:mt-4 sm:text-[19px] lg:text-[21px]">
              Tech4Bharat is proposed to be established as a Section 8 Company — a national
              platform for social entrepreneurship and innovation.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
              <Button href="/programs" size="md">
                Explore Programs <ArrowRight size={16} />
              </Button>
              <Button href="/contact" size="md" variant="outline">
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </div>
    </section>
  );
}
