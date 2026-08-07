import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import DotGrid from "@/components/ui/DotGrid";
import { cn } from "@/lib/utils";

const landscapePhotos = [
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
];

const portraitPhoto = {
  src: "/images/legacy/policy-workshop-2.png",
  alt: "Dr. Chaitanya Giri of Observer Research Foundation speaking at the workshop",
  badge: "Panel",
};

const highlightCards = [
  { badge: "Visit", title: "Institutional Visit", description: "Field visit to C-DAC." },
  {
    badge: "Networking",
    title: "Cross-Institutional Network",
    description: "Students and faculty connected across sessions, building a policy network.",
  },
];

const badgeTone: Record<string, string> = {
  Workshop: "bg-brand-700",
  Mentoring: "bg-accent-600",
  Panel: "bg-secondary-700",
  Visit: "bg-violet-600",
  Networking: "bg-orange-600",
};

/** Event Highlights — a compact asymmetric gallery instead of one oversized hero photo:
 *  two stacked landscape photos on the left, a portrait photo plus two small highlight
 *  cards on the right. Every photo carries a small category badge; no element dominates
 *  the section. */
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

        <AnimatedSection delay={0.1} className="mt-9 grid gap-4 lg:grid-cols-2 lg:items-stretch">
          <div className="grid grid-rows-2 gap-4">
            {landscapePhotos.map((photo) => (
              <div
                key={photo.src}
                className="group relative h-51 w-full overflow-hidden rounded-[18px] border border-slate-200 shadow-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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
          </div>

          <div className="flex flex-col gap-4">
            <div className="group relative w-full flex-1 overflow-hidden rounded-[18px] border border-slate-200 shadow-sm">
              <Image
                src={portraitPhoto.src}
                alt={portraitPhoto.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink-900/55 via-transparent to-transparent" />
              <span
                className={cn(
                  "absolute bottom-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-bold text-white",
                  badgeTone[portraitPhoto.badge]
                )}
              >
                {portraitPhoto.badge}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlightCards.map((card) => (
                <div
                  key={card.title}
                  className="flex h-25 flex-col justify-center rounded-[18px] border border-slate-200 bg-white p-3 shadow-sm"
                >
                  <span
                    className={cn(
                      "w-fit rounded-full px-2 py-0.5 text-[10px] font-bold text-white",
                      badgeTone[card.badge]
                    )}
                  >
                    {card.badge}
                  </span>
                  <h3 className="mt-1.5 text-[13px] font-bold leading-snug text-ink-900">{card.title}</h3>
                  <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-slate-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
