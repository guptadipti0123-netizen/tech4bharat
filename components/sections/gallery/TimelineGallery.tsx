import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getGalleryImagesByYear } from "@/lib/gallery";

const timeline = [
  {
    year: 2025 as const,
    title: "Innovation Workshops",
    description: "Hands-on sessions turning early ideas into fundable, working products.",
  },
  {
    year: 2024 as const,
    title: "Hackathons",
    description: "48-hour sprints where student teams build and ship in public.",
  },
  {
    year: 2023 as const,
    title: "Startup Showcase",
    description: "The founders and campuses where the Tech4Bharat story began.",
  },
];

export default function TimelineGallery() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF8] py-20 sm:py-28">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1F4E3D]/8 px-4 py-1.5 text-sm font-semibold text-[#1F4E3D]">
            Our Journey
          </span>
          <h2 className="mt-4 text-[32px] font-extrabold tracking-tight text-[#1F4E3D] sm:text-[42px]">
            Three Years of Building Bharat&apos;s Future
          </h2>
        </AnimatedSection>

        <div className="relative mt-16 space-y-16 sm:space-y-20">
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-[13px] top-4 hidden w-px bg-[#1F4E3D]/12 sm:block lg:left-34"
          />

          {timeline.map((entry, i) => {
            const images = getGalleryImagesByYear(entry.year).slice(0, 3);
            return (
              <AnimatedSection
                key={entry.year}
                delay={i * 0.1}
                className="relative grid gap-8 sm:pl-10 lg:grid-cols-[220px_1fr] lg:gap-14 lg:pl-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 -translate-x-[calc(50%-0.5px)] rounded-full border-4 border-[#FFFDF8] bg-[#D4A017] shadow-[0_0_0_3px_rgba(212,160,23,0.25)] sm:block lg:left-34.5"
                />
                <div>
                  <p className="text-5xl font-extrabold text-[#1F4E3D]">{entry.year}</p>
                  <p className="mt-2 text-lg font-semibold text-[#a3780f]">{entry.title}</p>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500">{entry.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                  {images.map((image, idx) => (
                    <div
                      key={image.src}
                      className={`group relative aspect-4/5 overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                        idx === 0 ? "col-span-2 aspect-16/10 sm:col-span-1 sm:aspect-4/5" : ""
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
