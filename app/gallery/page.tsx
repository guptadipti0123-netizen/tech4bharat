import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MasonryGallery from "@/components/sections/gallery/MasonryGallery";
import { getAllGalleryPhotos, getGalleryCategories } from "@/lib/gallery/service";

export const metadata: Metadata = {
  title: "Gallery | Tech4Bharat",
  description:
    "Real moments from India's innovation ecosystem â€” student hackathons, incubation centres, women-led AgriTech ventures, mentorship sessions, and startup showcases.",
  openGraph: {
    title: "Gallery | Tech4Bharat",
    description:
      "Real moments from India's innovation ecosystem â€” hackathons, incubation, mentorship, and startup showcases.",
    type: "website",
    locale: "en_IN",
  },
};

/** Deliberately minimal: heading, one-line description, the filterable photo grid, and a
 *  Load More button â€” nothing else. The full photo library is fetched once here and handed
 *  down as a prop; the grid itself owns filtering, pagination, and the lightbox. */
export default async function GalleryPage() {
  const [photos, categories] = await Promise.all([getAllGalleryPhotos(), getGalleryCategories()]);

  return (
    <section className="bg-white pb-10 pt-20 sm:pt-24">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h1 className="text-[26px] font-extrabold tracking-tight text-ink-900 sm:text-[34px]">
            Gallery
          </h1>
          <p className="mx-auto mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-base">
            Real moments from India&apos;s innovation ecosystem â€” hackathons, incubation, mentorship,
            and startup showcases.
          </p>
        </AnimatedSection>

        <div className="mt-10">
          <MasonryGallery photos={photos} categories={categories} />
        </div>
      </Container>
    </section>
  );
}
