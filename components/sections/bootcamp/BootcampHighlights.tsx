import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface HighlightPhoto {
  src: string;
  alt: string;
  /** Relative width — creates the uneven, masonry-style horizontal rhythm. */
  width: string;
}

// A real-photo showcase rather than a feature list. Leads with a genuine photo from
// Tech4Bharat's earlier workshop program (the old site, before the startup-incubator
// rebrand), followed by real founder/mentor/hackathon/networking moments from the current
// gallery library — no stock or placeholder imagery.
const highlightPhotos: HighlightPhoto[] = [
  { src: "/images/legacy/policy-workshop-1.png", alt: "A workshop session in progress at a Tech4Bharat program", width: "w-90" },
  { src: "/images/gallery/gallery-1.jpg", alt: "Student founders discussing their venture on the campus lawn", width: "w-64" },
  { src: "/images/programs/incubation.jpg", alt: "Founders and mentors in a strategy session at the incubation centre", width: "w-52" },
  { src: "/images/gallery/hackathons-2.jpg", alt: "Founders pairing on code during a hackathon sprint", width: "w-48" },
  { src: "/images/gallery/gallery-9.jpg", alt: "Colleagues connecting during a team huddle", width: "w-40" },
];

/** Bootcamp Highlights, redesigned as a premium event-photo showcase — one large white
 *  container holding a horizontal, uneven-width "masonry" row of real bootcamp/workshop
 *  moments, rather than a feature-card grid. */
export default function BootcampHighlights() {
  return (
    <section className="bg-sand-50 py-8 sm:py-12">
      <Container>
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              <span className="h-px w-8 bg-current opacity-50" aria-hidden="true" />
              At a Glance
              <span className="h-px w-8 bg-current opacity-50" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-[44px] font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-[56px] lg:text-[64px]">
              Bootcamp Highlights
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 sm:text-xl">
              Everything packed into one intensive day—from founder learning and investor
              interactions to mentorship and startup networking.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10">
          <div className="rounded-4xl border border-brand-100 bg-white p-4 shadow-[0_20px_60px_rgba(22,58,58,0.1)] sm:p-6">
            <div className="flex gap-4 overflow-x-auto pb-1 sm:gap-5">
              {highlightPhotos.map((photo) => (
                <div
                  key={photo.src}
                  className={`group relative h-72 shrink-0 overflow-hidden rounded-[20px] sm:h-80 ${photo.width}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 60vw, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-slate-600">
            A glimpse into the Startup Bootcamp experience featuring founder sessions, expert
            mentoring, investor interactions, networking opportunities and collaborative
            learning.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
