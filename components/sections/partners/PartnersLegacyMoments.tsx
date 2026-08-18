import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface MomentPhoto {
  src: string;
  alt: string;
}

// Real collaboration moments with partner institutions — genuine photography rather than
// generic stock "networking" imagery. Kept distinct from the Digital & Tech Policy
// Workshop's own Event Gallery, which already covers that program's full photo archive.
const photos: MomentPhoto[] = [
  {
    src: "/images/legacy/workshops/day2-i1-digital-narratives-blockchain.png",
    alt: "The workshop cohort and faculty together in the auditorium",
  },
  {
    src: "/images/legacy/workshops/day5-i1-earth-observation-strategic-tech.png",
    alt: "The cohort on their field visit to partner institution C-DAC",
  },
];

/** A two-photo collaboration strip â€” real moments from partner-institution programming,
 *  standing in for generic "networking" stock photography. */
export default function PartnersLegacyMoments() {
  return (
    <section className="bg-sand-50 pb-8 pt-6 sm:pb-12 sm:pt-9">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Real moments from the field"
            description="Real moments from workshops, field visits, and collaborative innovation."
            className="max-w-187.5"
            titleClassName="text-balance text-[22px] font-bold leading-[1.1] tracking-[-0.01em] text-[#0B2A4A] sm:text-[26px] lg:text-[30px]"
            descriptionClassName="mt-2 text-[14px] sm:mt-3 sm:text-[17px] font-medium text-[#526777] line-clamp-2 text-balance"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10 grid gap-5 sm:grid-cols-2">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="group relative aspect-16/10 overflow-hidden rounded-3xl border border-white shadow-[0_8px_24px_rgba(21,94,154,0.1)]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}
