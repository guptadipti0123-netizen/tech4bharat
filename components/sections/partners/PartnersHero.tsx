import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

/** Full-bleed banner hero — background photo behind a deep gradient wash, one heading,
 *  one description. Matches the same treatment as the Bootcamp and Events page heroes.
 *  Height is driven by `aspect-21/9` (with a `min-h` floor for narrow screens) rather than
 *  a fixed `min-h` alone — a fixed height against a full-viewport-width image meant the crop
 *  window got wildly wider (and more subject-cropping) on desktop than on mobile. An aspect
 *  ratio keeps the visible crop proportionally consistent at every breakpoint. `object-top`
 *  keeps the photo's subjects (two founders collaborating) anchored toward the top of frame. */
export default function PartnersHero() {
  return (
    <section className="relative flex aspect-21/9 min-h-80 items-end pb-10 pt-18 sm:pb-12">
      <Image
        src="/images/gallery/gallery-15.jpg"
        alt="Tech4Bharat partners collaborating"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top brightness-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink-900/75 via-ink-900/35 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-r from-brand-950/40 via-transparent to-transparent" />

      <Container className="relative">
        <AnimatedSection className="max-w-2xl">
          <h1 className="text-[26px] font-extrabold leading-tight tracking-tight text-white sm:text-[34px] lg:text-[40px]">
            Partners &amp; Collaborators
          </h1>
          <p className="mt-2.5 max-w-xl text-[14px] leading-relaxed text-white/90 sm:text-[15px] lg:text-base">
            Building a network of academic, government, industry, and NGO partners from
            August 2026.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
