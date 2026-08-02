import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { GalleryPhoto } from "@/lib/gallery/service";

interface InfiniteCarouselProps {
  /** The full photo library — a marquee is expected to loop back around as it scrolls. */
  photos: GalleryPhoto[];
}

/** Infinite-marquee carousel — the "living gallery" experience. Purely presentational:
 *  the photo list arrives as a prop and is duplicated once here purely for the seamless CSS loop. */
export default function InfiniteCarousel({ photos }: InfiniteCarouselProps) {
  return (
    <section className="overflow-hidden bg-white py-14 sm:py-20">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F4E3D]/8 px-4 py-1.5 text-sm font-semibold text-[#1F4E3D]">
            The Ecosystem in Motion
          </span>
          <h2 className="mt-4 text-[32px] font-extrabold tracking-tight text-[#1F4E3D] sm:text-[44px]">
            A Living Gallery
          </h2>
        </AnimatedSection>
      </Container>

      <div className="relative mt-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent sm:w-32" />

        <div className="group flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
          {[...photos, ...photos].map((photo, i) => (
            <div
              key={`${photo.id}-${i}`}
              className="group relative h-56 w-40 shrink-0 overflow-hidden rounded-3xl shadow-xl sm:h-72 sm:w-56"
            >
              <Image src={photo.src} alt={photo.alt} fill loading="lazy" sizes="288px" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#1F4E3D]/50 via-transparent to-transparent" />
              <div className="glass-surface absolute inset-x-0 bottom-0 translate-y-full border-t border-white/40 p-4 text-xs font-medium text-[#1F4E3D] opacity-0 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                {photo.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
