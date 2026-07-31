import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { galleryImages } from "@/lib/gallery";

// A hand-picked, visually varied slice — not the full library — keeps the loop tight and readable.
const carouselImages = galleryImages.filter((_, i) => i % 2 === 0).slice(0, 10);

export default function GalleryCarousel() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-28">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F4E3D]/8 px-4 py-1.5 text-sm font-semibold text-[#1F4E3D]">
            The Ecosystem in Motion
          </span>
          <h2 className="mt-4 text-[32px] font-extrabold tracking-tight text-[#1F4E3D] sm:text-[42px]">
            A Living Gallery
          </h2>
        </AnimatedSection>
      </Container>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent sm:w-32" />

        <div className="group flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
          {[...carouselImages, ...carouselImages].map((image, i) => (
            <div
              key={`${image.src}-${i}`}
              className="relative h-72 w-56 shrink-0 overflow-hidden rounded-3xl shadow-xl sm:h-96 sm:w-72"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="288px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1F4E3D]/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
