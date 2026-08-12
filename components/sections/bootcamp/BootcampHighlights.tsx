import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface HighlightPhoto {
  src: string;
  alt: string;
  /** The hover-overlay label — the natural moment/session this photo belongs to. */
  group: string;
  /** Responsive width classes — varies per breakpoint so the row reads as an uneven,
   *  masonry-style rhythm and roughly 1–2 / 3 / 5–6 cards are visible on mobile / tablet /
   *  desktop respectively. */
  width: string;
}

// A real-photo showcase rather than a feature list. Every photo below is a genuine
// Tech4Bharat/Startup Bootcamp moment from the project's own asset library — no stock or
// AI-generated imagery. Grouped into the natural moments a bootcamp day actually contains.
const highlightPhotos: HighlightPhoto[] = [
  {
    src: "/images/legacy/policy-workshop-1.png",
    alt: "A workshop session in progress at a Tech4Bharat program",
    group: "Workshops",
    width: "w-64 md:w-44 lg:w-40",
  },
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Student founders discussing their venture on the campus lawn",
    group: "Founder Networking",
    width: "w-70 md:w-52 lg:w-46",
  },
  {
    src: "/images/programs/incubation.jpg",
    alt: "Founders and mentors in a strategy session at the incubation centre",
    group: "Mentoring Sessions",
    width: "w-76 md:w-58 lg:w-52",
  },
  {
    src: "/images/gallery/hackathons-2.jpg",
    alt: "Founders pairing on code during a hackathon sprint",
    group: "Team Activities",
    width: "w-64 md:w-44 lg:w-40",
  },
  {
    src: "/images/gallery/gallery-9.jpg",
    alt: "Colleagues connecting during a team huddle",
    group: "Founder Networking",
    width: "w-70 md:w-52 lg:w-46",
  },
  {
    src: "/images/gallery/bootcamps-1.jpg",
    alt: "Founders and mentors at a Tech4Bharat Startup Bootcamp session",
    group: "Workshops",
    width: "w-76 md:w-58 lg:w-52",
  },
  {
    src: "/images/gallery/bootcamps-2.jpg",
    alt: "A founder mapping out ideas on a sticky-note wall during a workshop session",
    group: "Workshops",
    width: "w-64 md:w-44 lg:w-40",
  },
  {
    src: "/images/gallery/mentorship-1.jpg",
    alt: "A mentor and founder in conversation at a program networking lounge",
    group: "Mentoring Sessions",
    width: "w-70 md:w-52 lg:w-46",
  },
  {
    src: "/images/gallery/startup-events-1.jpg",
    alt: "A founder presenting results to the room during a pitch session",
    group: "Pitch Sessions",
    width: "w-76 md:w-58 lg:w-52",
  },
  {
    src: "/images/gallery/demo-day-3.jpg",
    alt: "A founder preparing his presentation ahead of Demo Day",
    group: "Pitch Sessions",
    width: "w-64 md:w-44 lg:w-40",
  },
  {
    src: "/images/gallery/award-ceremonies-3.jpg",
    alt: "Founders and partners shaking hands over a table of shared metrics",
    group: "Investor Meetings",
    width: "w-70 md:w-52 lg:w-46",
  },
  {
    src: "/images/gallery/bootcamps-3.jpg",
    alt: "A founder mapping out a product and marketing plan on a flip chart",
    group: "Workshops",
    width: "w-76 md:w-58 lg:w-52",
  },
];

/** Bootcamp Highlights — a premium event-photo showcase — one large white container
 *  holding a horizontal, snap-scrolling, uneven-width "masonry" row of real bootcamp/
 *  workshop moments, each revealing its session group on hover. */
export default function BootcampHighlights() {
  return (
    <section className="bg-sand-50 py-10 sm:py-11">
      <Container>
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-[#163B2D] sm:text-[30px] lg:text-[34px]">
              Bootcamp Highlights
            </h2>
            <p className="mx-auto mt-3 max-w-175 text-[17px] leading-relaxed text-slate-600 sm:text-[18px]">
              Everything packed into one intensive day—from founder learning and investor
              interactions to mentorship and startup networking.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-9">
          <div className="rounded-4xl border border-brand-100 bg-white p-4 shadow-[0_20px_60px_rgba(22,58,58,0.1)] sm:p-6">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1 sm:gap-5">
              {highlightPhotos.map((photo) => (
                <div
                  key={photo.src}
                  className={`group relative h-72 shrink-0 snap-start overflow-hidden rounded-[20px] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(22,58,58,0.22)] sm:h-80 ${photo.width}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 767px) 75vw, (max-width: 1023px) 27vw, 15vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="p-4 text-[15px] font-semibold text-white">{photo.group}</span>
                  </div>
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
