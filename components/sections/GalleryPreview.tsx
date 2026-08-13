import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HomeSectionHeading from "@/components/sections/HomeSectionHeading";

interface GalleryTile {
  src: string;
  alt: string;
}

const tiles: GalleryTile[] = [
  { src: "/images/gallery/gallery-4.jpg", alt: "Founders at a Tech4Bharat session" },
  { src: "/images/gallery/students-1.jpg", alt: "Students at a Tech4Bharat program" },
  { src: "/images/gallery/gallery-10.jpg", alt: "A Tech4Bharat cohort in session" },
  { src: "/images/gallery/agriculture-2.jpg", alt: "An AgriTech founder in the field" },
  { src: "/images/gallery/gallery-13.jpg", alt: "A Tech4Bharat networking moment" },
  { src: "/images/gallery/gallery-5.jpg", alt: "A Tech4Bharat mentoring session" },
];

/** Gallery preview — a uniform image-tile grid (every tile the same size, radius, and
 *  border), held inside a soft panel to match the rest of the Home page's visual rhythm. */
export default function GalleryPreview() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20">
      <Container>
        <div className="rounded-[36px] bg-[linear-gradient(160deg,#F5FAFE_0%,#FFFFFF_100%)] p-4 sm:p-6 lg:p-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <HomeSectionHeading title="Moments from the ecosystem" align="center" />
          </AnimatedSection>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {tiles.map((tile, i) => (
              <AnimatedSection key={tile.src} delay={i * 0.06}>
                <div className="group relative h-44 overflow-hidden rounded-2xl border border-brand-500/15 bg-[linear-gradient(135deg,#F5FAFE_0%,#F5FAFE_100%)] shadow-[0_2px_10px_rgba(21,94,154,0.05)] sm:h-48 lg:h-52">
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="mt-6 text-center">
            <Button href="/gallery" variant="outline">
              View Gallery <ArrowRight size={16} />
            </Button>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
