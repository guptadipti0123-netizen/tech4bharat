import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HomeSectionHeading from "@/components/sections/HomeSectionHeading";

interface GalleryTile {
  src: string;
  alt: string;
  className?: string;
}

const tiles: GalleryTile[] = [
  { src: "/images/gallery/gallery-4.jpg", alt: "Founders at a Tech4Bharat session", className: "sm:col-span-2" },
  { src: "/images/gallery/students-1.jpg", alt: "Students at a Tech4Bharat program" },
  { src: "/images/gallery/gallery-10.jpg", alt: "A Tech4Bharat cohort in session" },
  { src: "/images/gallery/agriculture-2.jpg", alt: "An AgriTech founder in the field", className: "sm:row-span-2" },
  { src: "/images/gallery/gallery-13.jpg", alt: "A Tech4Bharat networking moment" },
  { src: "/images/gallery/gallery-5.jpg", alt: "A Tech4Bharat mentoring session" },
];

export default function GalleryPreview() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fcf9_100%)] py-14 sm:py-16 lg:py-24">
      <Container>
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <HomeSectionHeading title="Moments from the ecosystem" align="center" />
        </AnimatedSection>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {tiles.map((tile, i) => (
            <AnimatedSection key={tile.src} delay={i * 0.06} className={tile.className ?? ""}>
              <div className="group relative h-56 overflow-hidden rounded-[24px] border border-slate-200/80 bg-[linear-gradient(135deg,#f7fcf9_0%,#eef6f1_100%)] shadow-[0_8px_24px_rgba(22,58,58,0.05)] sm:h-64 lg:h-72">
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

        <AnimatedSection delay={0.3} className="mt-8 text-center sm:mt-10">
          <Button href="/gallery" variant="outline">
            View Gallery <ArrowRight size={16} />
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
