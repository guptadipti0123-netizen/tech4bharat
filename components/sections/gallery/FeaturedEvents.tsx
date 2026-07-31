import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { galleryCategories, galleryImages } from "@/lib/gallery";

const categoryLabel = new Map(galleryCategories.map((c) => [c.slug, c.label]));

function labelFor(categories: string[]): string {
  return categoryLabel.get(categories[0]) ?? "Highlight";
}

export default function FeaturedEvents() {
  const hero = galleryImages.find((img) => img.featured === "hero");
  const side = galleryImages.filter((img) => img.featured === "side");

  if (!hero || side.length === 0) return null;

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D4A017]/10 px-4 py-1.5 text-sm font-semibold text-[#a3780f]">
            Featured Moments
          </span>
          <h2 className="mt-4 text-[32px] font-extrabold tracking-tight text-[#1F4E3D] sm:text-[42px]">
            Highlights from the Ecosystem
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 lg:h-150 lg:grid-cols-2">
          <AnimatedSection animation="slide-right" className="h-80 lg:h-full">
            <div className="group relative h-full w-full overflow-hidden rounded-[30px] shadow-xl">
              <Image
                src={hero.src}
                alt={hero.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1F4E3D]/75 via-[#1F4E3D]/5 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1F4E3D]">
                  {labelFor(hero.categories)}
                </span>
                <p className="mt-3 max-w-xs text-lg font-semibold text-white">{hero.alt}</p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-3 lg:h-full lg:grid-cols-1">
            {side.map((image, i) => (
              <AnimatedSection key={image.src} delay={0.1 + i * 0.08} className="h-52 sm:h-full lg:h-full">
                <div className="group relative h-full w-full overflow-hidden rounded-[30px] shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1F4E3D]/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#1F4E3D]">
                    {labelFor(image.categories)}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
