import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { GalleryPhoto } from "@/lib/gallery/service";

interface FeaturedEventsGalleryProps {
  /** Exactly 4 photos: [0] is the large editorial frame, [1..3] stack beside it. */
  photos: GalleryPhoto[];
}

/** Magazine layout — one large editorial frame beside three stacked frames. Purely
 *  presentational: every photo comes in as a prop, nothing here is imported from the data layer. */
export default function FeaturedEventsGallery({ photos }: FeaturedEventsGalleryProps) {
  const [hero, ...side] = photos;
  if (!hero) return null;

  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D4A017]/10 px-4 py-1.5 text-sm font-semibold text-[#a3780f]">
            Featured Moments
          </span>
          <h2 className="mt-4 text-[32px] font-extrabold tracking-tight text-[#1F4E3D] sm:text-[44px]">
            Highlights from the Ecosystem
          </h2>
        </AnimatedSection>

        <div className="mt-10 grid gap-4 lg:h-100 lg:grid-cols-2">
          <AnimatedSection animation="slide-right" className="h-80 sm:h-90 lg:h-full">
            <div className="group relative h-full w-full overflow-hidden rounded-[28px] shadow-xl">
              <Image
                src={hero.src}
                alt={hero.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1F4E3D]/75 via-[#1F4E3D]/5 to-transparent" />
              <p className="absolute bottom-0 left-0 max-w-xs p-7 text-lg font-semibold text-white">{hero.alt}</p>
            </div>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-3 lg:h-full lg:grid-cols-1 lg:grid-rows-3">
            {side.map((photo, i) => (
              <AnimatedSection key={photo.id} delay={0.1 + i * 0.08} className="h-32 sm:h-full lg:h-full">
                <div className="group relative h-full w-full overflow-hidden rounded-[28px] shadow-lg">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1F4E3D]/70 via-transparent to-transparent" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
