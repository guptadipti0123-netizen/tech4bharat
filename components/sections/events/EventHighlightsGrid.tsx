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

// Every card in this uniform grid is a real photo — the "Visit" and "Networking" entries
// previously had no photo of their own (text-only cards), so they now use real, unused
// photos from the same Digital & Tech Policy Workshop shoot rather than staying text-only,
// which would have broken the uniform image-grid this redesign calls for.
const highlightPhotos: HighlightPhoto[] = [
  {
    src: "/images/legacy/workshops/day2-i2-digital-public-infrastructure-ai.png",
    alt: "Faculty and students at the close of the Digital Public Infrastructure & AI session",
    badge: "Workshop",
  },
  {
    src: "/images/legacy/workshops/day1-i2-intro-to-tech-policy.png",
    alt: "The cohort during the Introduction to Technology Policy session on Day 1",
    badge: "Mentoring",
  },
  {
    src: "/images/legacy/policy-workshop-2.png",
    alt: "Dr. Chaitanya Giri of Observer Research Foundation speaking at the workshop",
    badge: "Panel",
  },
  {
    src: "/images/legacy/workshops/day5-i2-field-visit-advanced-computing.png",
    alt: "The cohort on their field visit to C-DAC",
    badge: "Visit",
  },
  {
    src: "/images/legacy/workshops/day4-i2-uav-simulation-security-analysis.png",
    alt: "Students and faculty gathered together in the lecture hall",
    badge: "Networking",
  },
  {
    src: "/images/legacy/workshops/day1-i1-inaugural-session.png",
    alt: "Dr. Chaitanya Giri opening the workshop with a talk on science & technology policy",
    badge: "Panel",
  },
  {
    src: "/images/legacy/workshops/day2-i1-digital-narratives-blockchain.png",
    alt: "The cohort and faculty during the Digital Narratives & Blockchain session on Day 2",
    badge: "Workshop",
  },
  {
    src: "/images/legacy/workshops/day3-i2-strategic-innovation-frameworks.png",
    alt: "Participants and organizers in a candid group photo during the Strategic Innovation Frameworks session",
    badge: "Networking",
  },
];

const badgeTone: Record<string, string> = {
  Workshop: "bg-brand-700",
  Mentoring: "bg-accent-600",
  Panel: "bg-secondary-700",
  Visit: "bg-violet-600",
  Networking: "bg-orange-600",
};

/** Event Highlights — a uniform, premium photo grid. Every card is the same size (280px
 *  tall), same border/radius/shadow treatment, with only a bottom-left category badge
 *  distinguishing them — 4 columns on desktop (two full rows of four), 2 on tablet, 1 on
 *  mobile. */
export default function EventHighlightsGrid() {
  return (
    <section className="relative overflow-hidden bg-secondary-50 py-6 sm:py-9">
      <DotGrid className="left-0 top-0 h-full w-full text-secondary-700/6" />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            title="Event Highlights"
            description="Key moments from the program."
            titleClassName="text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-[#163B2D] sm:text-[38px] lg:text-[44px]"
            descriptionClassName="mt-3 text-[18px] sm:text-[18px] font-medium leading-relaxed text-[#5F6B68]"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlightPhotos.map((photo) => (
            <div
              key={photo.src}
              className="group relative h-70 w-full overflow-hidden rounded-2xl border border-emerald-100 shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink-900/55 via-transparent to-transparent" />
              <span
                className={cn(
                  "absolute bottom-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-bold text-white",
                  badgeTone[photo.badge]
                )}
              >
                {photo.badge}
              </span>
            </div>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}
