import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import GalleryHero from "@/components/sections/gallery/GalleryHero";
import FeaturedEvents from "@/components/sections/gallery/FeaturedEvents";
import GalleryGrid from "@/components/sections/gallery/GalleryGrid";
import TimelineGallery from "@/components/sections/gallery/TimelineGallery";
import GalleryCarousel from "@/components/sections/gallery/GalleryCarousel";
import GalleryStats from "@/components/sections/gallery/GalleryStats";
import GalleryQuote from "@/components/sections/gallery/GalleryQuote";
import GalleryCTA from "@/components/sections/gallery/GalleryCTA";

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

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <FeaturedEvents />
      <section className="bg-[#FFFDF8] py-20 sm:py-28">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
      <TimelineGallery />
      <GalleryCarousel />
      <GalleryStats />
      <GalleryQuote />
      <GalleryCTA />
    </>
  );
}
