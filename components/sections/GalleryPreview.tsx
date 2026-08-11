import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface GalleryTile {
  src: string;
  alt: string;
  span: string;
}

// Six real photos, none repeated elsewhere on the Home page.
const tiles: GalleryTile[] = [
  { src: "/images/gallery/gallery-4.jpg", alt: "Founders at a Tech4Bharat session", span: "row-span-2" },
  { src: "/images/gallery/students-1.jpg", alt: "Students at a Tech4Bharat program", span: "" },
  { src: "/images/gallery/gallery-10.jpg", alt: "A Tech4Bharat cohort in session", span: "" },
  { src: "/images/gallery/agriculture-2.jpg", alt: "An AgriTech founder in the field", span: "row-span-2" },
  { src: "/images/gallery/gallery-13.jpg", alt: "A Tech4Bharat networking moment", span: "" },
  { src: "/images/gallery/gallery-5.jpg", alt: "A Tech4Bharat mentoring session", span: "" },
];

/** Gallery preview — a compact masonry grid of real photos, none reused from any other
 *  section on this page. */
export default function GalleryPreview() {
  return (
    <section className="bg-slate-50 py-8 sm:py-12">
      <Container>
        <AnimatedSection className="text-center">
          <h2 className="mx-auto max-w-2xl text-balance text-[27px] font-bold leading-[1.2] text-ink-900 md:text-4xl">
            Moments from the ecosystem
          </h2>
        </AnimatedSection>

        <div className="mt-10 grid auto-rows-40 grid-cols-2 gap-4 lg:grid-cols-3">
          {tiles.map((tile, i) => (
            <AnimatedSection key={tile.src} delay={i * 0.06} className={tile.span}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200">
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-10 text-center">
          <Button href="/gallery" variant="outline">
            View Gallery <ArrowRight size={16} />
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
