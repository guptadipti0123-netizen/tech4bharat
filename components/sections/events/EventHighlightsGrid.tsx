import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import DotGrid from "@/components/ui/DotGrid";
import { cn } from "@/lib/utils";

interface HighlightPhoto {
  src: string;
  alt: string;
  badge: string;
}

// Kept distinct from both GalleryPreview (homepage) and the Event Gallery further down this
// same page, which already carries the Policy Workshop's full real photo archive.
const highlightPhotos: HighlightPhoto[] = [
  {
    src: "/images/gallery/students-campus-group.jpg",
    alt: "Students and faculty gathered together on campus",
    badge: "Workshop",
  },
  {
    src: "/images/gallery/conference-podium-3.jpg",
    alt: "A panel discussion at a Tech4Bharat event",
    badge: "Panel",
  },
  {
    src: "/images/gallery/woman-office-call.jpg",
    alt: "A founder connecting with the Tech4Bharat network",
    badge: "Networking",
  },
  {
    src: "/images/gallery/heritage-tour.jpg",
    alt: "The cohort on an outreach field visit",
    badge: "Visit",
  },
];

const badgeTone: Record<string, string> = {
  Workshop: "bg-brand-700",
  Mentoring: "bg-accent-600",
  Panel: "bg-secondary-700",
  Visit: "bg-brand-800",
  Networking: "bg-accent-700",
};

/** Event Highlights â€” a single-row, slow auto-scrolling marquee (loops seamlessly, pauses
 *  on hover) instead of a static grid, so this strip reads as distinct motion rather than
 *  another photo grid sitting next to the homepage's Gallery preview. */
export default function EventHighlightsGrid() {
  return (
    <section className="relative overflow-hidden bg-secondary-50 py-6 sm:py-9">
      <DotGrid className="left-0 top-0 h-full w-full text-secondary-700/6" />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            title="Event Highlights"
            description="Key moments from the program."
            titleClassName="text-[22px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0B2A4A] sm:text-[26px] lg:text-[30px]"
            descriptionClassName="mt-2 text-[14px] sm:mt-3 sm:text-[18px] font-medium leading-relaxed text-[#526777]"
          />
        </AnimatedSection>
      </Container>

      <AnimatedSection delay={0.1} className="relative mt-6 sm:mt-9">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-secondary-50 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-secondary-50 to-transparent sm:w-28" />
        <div className="flex w-max gap-2.5 animate-[marquee_80s_linear_infinite] hover:[animation-play-state:paused] sm:gap-6">
          {[...highlightPhotos, ...highlightPhotos].map((photo, i) => (
            <div
              key={`${photo.src}-${i}`}
              className="group relative h-28 w-44 shrink-0 overflow-hidden rounded-lg border border-blue-100 shadow-md transition-shadow duration-300 hover:shadow-lg sm:h-70 sm:w-104 sm:rounded-2xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 176px, 416px"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink-900/55 via-transparent to-transparent" />
              <span
                className={cn(
                  "absolute bottom-1.5 left-1.5 rounded-full px-1.5 py-0.5 text-[8.5px] font-bold text-white sm:bottom-3 sm:left-3 sm:px-2.5 sm:py-1 sm:text-[11px]",
                  badgeTone[photo.badge]
                )}
              >
                {photo.badge}
              </span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
