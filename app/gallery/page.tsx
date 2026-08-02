import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import GalleryHero from "@/components/sections/gallery/GalleryHero";
import FeaturedEventsGallery from "@/components/sections/gallery/FeaturedEventsGallery";
import AppleHorizontalGallery from "@/components/sections/gallery/AppleHorizontalGallery";
import MasonryGallery from "@/components/sections/gallery/MasonryGallery";
import BentoGallery from "@/components/sections/gallery/BentoGallery";
import OffsetGallery from "@/components/sections/gallery/OffsetGallery";
import TimelineGallery from "@/components/sections/gallery/TimelineGallery";
import InfiniteCarousel from "@/components/sections/gallery/InfiniteCarousel";
import StatsSection from "@/components/sections/gallery/StatsSection";
import QuoteGallery from "@/components/sections/gallery/QuoteGallery";
import CTASection from "@/components/sections/gallery/CTASection";
import { getGalleryCategories, getGallerySections } from "@/lib/gallery/service";

export const metadata: Metadata = {
  title: "Gallery | Tech4Bharat",
  description:
    "Real moments from India's innovation ecosystem — student hackathons, incubation centres, women-led AgriTech ventures, mentorship sessions, and startup showcases.",
  openGraph: {
    title: "Gallery | Tech4Bharat",
    description:
      "Real moments from India's innovation ecosystem — hackathons, incubation, mentorship, and startup showcases.",
    type: "website",
    locale: "en_IN",
  },
};

/**
 * Every photo shown on this page is fetched exactly once here, then handed down as props —
 * no section component imports the data layer itself. Swapping the underlying photo store
 * (see `lib/gallery/repository.ts`) later never requires touching a component in this tree.
 *
 * Seven sections, seven distinct layouts — Magazine, Apple-style horizontal, Pinterest
 * masonry, Bento grid, scroll-stacked cards, Timeline, and an infinite carousel — each with
 * its own card design and its own hover signature (zoom, focus-blur, lift, tilt, parallax,
 * glow, glass-overlay) so no two sections ever look alike.
 */
export default async function GalleryPage() {
  const [sections, categories] = await Promise.all([getGallerySections(), getGalleryCategories()]);

  return (
    <>
      <GalleryHero />
      <FeaturedEventsGallery photos={sections.magazine} />
      <AppleHorizontalGallery photos={sections.appleHorizontal} />
      <section className="bg-[#FFFDF8] py-14 sm:py-20">
        <Container>
          <MasonryGallery photos={sections.masonry} categories={categories} />
        </Container>
      </section>
      <BentoGallery photos={sections.bento} />
      <OffsetGallery photos={sections.offset} />
      <TimelineGallery photos={sections.timeline} />
      <InfiniteCarousel photos={sections.carousel} />
      <StatsSection />
      <QuoteGallery image={sections.quote} />
      <CTASection image={sections.cta} />
    </>
  );
}
