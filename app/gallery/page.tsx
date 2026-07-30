import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import GalleryGrid from "@/components/sections/gallery/GalleryGrid";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Gallery | Tech4Bharat",
  description:
    "Moments from the Tech4Bharat ecosystem — startup events, bootcamps, mentorship sessions, hackathons, and more.",
  openGraph: {
    title: "Gallery | Tech4Bharat",
    description:
      "Moments from the Tech4Bharat ecosystem — startup events, bootcamps, mentorship sessions, hackathons, and more.",
    type: "website",
    locale: "en_IN",
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from the Tech4Bharat ecosystem"
        description="A look inside our bootcamps, mentorship sessions, hackathons, and the founders building Bharat's future."
      />
      <section className="py-24 sm:py-32">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
