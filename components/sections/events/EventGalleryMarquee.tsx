"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { useDragMarquee } from "@/lib/hooks/useDragMarquee";
import { cn } from "@/lib/utils";

interface GalleryPhoto {
  src: string;
  alt: string;
  width: "w-56" | "w-72" | "w-80";
}

const photos: GalleryPhoto[] = [
  { src: "/images/legacy/policy-workshop-1.png", alt: "Day 3 — Innovation Management & Policy at the Digital & Tech Policy Workshop", width: "w-72" },
  { src: "/images/legacy/policy-workshop-2.png", alt: "Dr. Chaitanya Giri of Observer Research Foundation speaking at the Digital & Tech Policy Workshop", width: "w-56" },
  { src: "/images/legacy/workshops/day1-i2-intro-to-tech-policy.png", alt: "Day 1 — Introduction to Technology Policy: a speaker addresses the cohort at the podium", width: "w-80" },
  { src: "/images/legacy/workshops/day2-i1-digital-narratives-blockchain.png", alt: "Day 2 — Digital Narratives & Blockchain: the full cohort and faculty in the auditorium", width: "w-72" },
  { src: "/images/legacy/workshops/day2-i2-digital-public-infrastructure-ai.png", alt: "Day 2 — Digital Public Infrastructure & AI: faculty and students at the session close", width: "w-56" },
  { src: "/images/legacy/workshops/day3-i2-strategic-innovation-frameworks.png", alt: "Day 3 — Strategic Innovation Frameworks: a candid group photo with the cohort", width: "w-80" },
  { src: "/images/legacy/workshops/day4-i1-clean-energy-cyberphysical-systems.jpg", alt: "Day 4 — Clean Energy & Cyber-Physical Systems: a memento exchange between speakers", width: "w-72" },
  { src: "/images/legacy/workshops/day4-i2-uav-simulation-security-analysis.png", alt: "Day 4 — UAV Simulation & Security Analysis: the cohort in the lecture hall", width: "w-56" },
  { src: "/images/legacy/workshops/day5-i1-earth-observation-strategic-tech.png", alt: "Day 5 — Earth Observation & Strategic Technologies: the cohort on their field visit to C-DAC", width: "w-80" },
  { src: "/images/legacy/workshops/day5-i2-field-visit-advanced-computing.png", alt: "Day 5 — Field Visit & Advanced Computing: the cohort back in session", width: "w-72" },
  { src: "/images/legacy/policy-workshop-3.jpg", alt: "Students and faculty at the closing session of the Digital & Tech Policy Workshop, COEP", width: "w-56" },
];

/** Premium horizontal marquee for the full legacy workshop photo set — mixed card widths,
 *  hover zoom, and a self-contained click-to-open lightbox (no shared Lightbox component
 *  exists yet in the codebase, so the pattern from MasonryGallery is reimplemented here). */
export default function EventGalleryMarquee() {
  const { trackProps } = useDragMarquee({ itemCount: photos.length });
  const loopPhotos = [...photos, ...photos];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [openIndex]);

  const active = openIndex !== null ? photos[openIndex] : null;

  return (
    <section className="relative overflow-hidden bg-ink-900 py-8 sm:py-12">
      <Container>
        <h2 className="text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[38px] lg:text-[44px]">
          Event Gallery
        </h2>
        <p className="mt-3 max-w-xl text-[18px] font-medium leading-relaxed text-white/70">
          Moments from Tech4Bharat&apos;s programs and workshops.
        </p>
      </Container>

      <div className="relative mt-9">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-ink-900 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-ink-900 to-transparent sm:w-24" />

        <div
          {...trackProps}
          className="flex cursor-grab gap-4 overflow-x-auto scroll-smooth px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] active:cursor-grabbing sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden"
        >
          {loopPhotos.map((photo, i) => (
            <button
              key={`${photo.src}-${i}`}
              type="button"
              onClick={() => setOpenIndex(i % photos.length)}
              className={cn(
                "group relative aspect-4/3 shrink-0 overflow-hidden rounded-2xl shadow-lg",
                photo.width
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="320px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-ink-900/95 backdrop-blur-md"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <span className="absolute left-5 top-5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white">
              {openIndex !== null ? openIndex + 1 : 0} / {photos.length}
            </span>

            <button
              type="button"
              onClick={() => setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length))}
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={() => setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length))}
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>

            <div className="mx-auto flex max-w-3xl flex-col items-center px-14">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
                <Image src={active.src} alt={active.alt} fill sizes="768px" className="object-contain" />
              </div>
              <p className="mt-4 text-center text-sm text-white/70">{active.alt}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
