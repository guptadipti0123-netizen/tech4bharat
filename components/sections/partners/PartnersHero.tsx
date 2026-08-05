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
    <section className="relative flex aspect-21/9 min-h-80 items-end pb-10 pt-24 sm:pb-12">
      <Image
        src="/images/gallery/gallery-15.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink-900/90 via-ink-900/50 to-ink-900/15" />
      <div className="absolute inset-0 bg-linear-to-r from-brand-950/60 via-transparent to-transparent" />

      <Container className="relative">
        <AnimatedSection className="max-w-2xl">
          <h1 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[44px]">
            Partners
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            Trusted by institutions across Bharat.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
