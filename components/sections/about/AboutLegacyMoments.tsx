import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface MomentPhoto {
  src: string;
  alt: string;
}

// Real photos from Tech4Bharat's earlier Digital & Tech Policy Workshop program (the old
// site, before the startup-incubator rebrand) — genuine history, not stock imagery.
const photos: MomentPhoto[] = [
  {
    src: "/images/legacy/workshops/day1-i2-intro-to-tech-policy.png",
    alt: "A speaker addressing the cohort at the Digital & Tech Policy Workshop",
  },
  {
    src: "/images/legacy/workshops/day3-i2-strategic-innovation-frameworks.png",
    alt: "A candid group moment with the workshop cohort",
  },
  {
    src: "/images/legacy/workshops/day4-i1-clean-energy-cyberphysical-systems.jpg",
    alt: "A memento exchange between speakers at the workshop",
  },
];

/** A compact three-photo strip marking where Tech4Bharat's programs began — real moments
 *  from the earlier workshop era, kept small and out of the way of the surrounding
 *  icon-card sections. */
export default function AboutLegacyMoments() {
  return (
    <section className="bg-secondary-50 py-8 sm:py-12">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Where It Began"
            title="Highlights from our earlier initiatives."
            description="Real photos from the workshops that shaped Tech4Bharat's founding mission."
            className="max-w-200"
            titleClassName="text-balance"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10 grid gap-5 sm:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="group relative aspect-4/3 overflow-hidden rounded-3xl border border-white shadow-[0_8px_24px_rgba(31,78,61,0.1)]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}
