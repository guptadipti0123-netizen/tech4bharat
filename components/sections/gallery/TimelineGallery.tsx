"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { GalleryPhoto } from "@/lib/gallery/service";

interface TimelineGalleryProps {
  /** Exactly 9 photos — split 3/3/3 across the three narrative years below. */
  photos: GalleryPhoto[];
}

const eras = [
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

/** Timeline layout — a chronological narrative, three photos per era, with the connecting
 *  line filling in as the reader scrolls. Hover signature: a soft golden glow, no motion. */
export default function TimelineGallery({ photos }: TimelineGalleryProps) {
  const timeline = eras.map((era, i) => ({ ...era, images: photos.slice(i * 3, i * 3 + 3) }));

  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 0.8", "end 0.6"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative overflow-hidden bg-[#FFFDF8] py-14 sm:py-20">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#a3780f]">
            Our Journey
          </span>
          <h2 className="mt-4 text-[32px] font-extrabold tracking-tight text-[#1F4E3D] sm:text-[44px]">
            Three Years of Building Bharat&apos;s Future
          </h2>
        </AnimatedSection>

        <div ref={trackRef} className="relative mt-10 space-y-10 sm:space-y-14">
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-3.25 top-4 hidden w-px bg-[#1F4E3D]/10 sm:block lg:left-34"
          />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: lineScale }}
            className="absolute bottom-4 left-3.25 top-4 hidden w-px origin-top bg-[#D4A017] sm:block lg:left-34"
          />

          {timeline.map((entry, i) => (
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
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{entry.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                {entry.images.map((photo, idx) => (
                  <div
                    key={photo.id}
                    className={`relative aspect-4/5 overflow-hidden rounded-2xl shadow-md transition-shadow duration-500 hover:shadow-[0_0_0_1px_rgba(212,160,23,0.4),0_0_36px_rgba(212,160,23,0.4)] ${
                      idx === 0 ? "col-span-2 aspect-16/10 sm:col-span-1 sm:aspect-4/5" : ""
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
