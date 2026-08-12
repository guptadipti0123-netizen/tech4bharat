"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Container from "@/components/ui/Container";

interface GalleryPhoto {
  src: string;
  alt: string;
}

const photos: GalleryPhoto[] = [
  { src: "/images/legacy/policy-workshop-1.png", alt: "Day 3 — Innovation Management & Policy at the Digital & Tech Policy Workshop" },
  { src: "/images/legacy/policy-workshop-2.png", alt: "Dr. Chaitanya Giri of Observer Research Foundation speaking at the Digital & Tech Policy Workshop" },
  { src: "/images/legacy/workshops/day1-i2-intro-to-tech-policy.png", alt: "Day 1 — Introduction to Technology Policy: a speaker addresses the cohort at the podium" },
  { src: "/images/legacy/workshops/day2-i1-digital-narratives-blockchain.png", alt: "Day 2 — Digital Narratives & Blockchain: the full cohort and faculty in the auditorium" },
  { src: "/images/legacy/workshops/day2-i2-digital-public-infrastructure-ai.png", alt: "Day 2 — Digital Public Infrastructure & AI: faculty and students at the session close" },
  { src: "/images/legacy/workshops/day3-i2-strategic-innovation-frameworks.png", alt: "Day 3 — Strategic Innovation Frameworks: a candid group photo with the cohort" },
  { src: "/images/legacy/workshops/day4-i1-clean-energy-cyberphysical-systems.jpg", alt: "Day 4 — Clean Energy & Cyber-Physical Systems: a memento exchange between speakers" },
  { src: "/images/legacy/workshops/day4-i2-uav-simulation-security-analysis.png", alt: "Day 4 — UAV Simulation & Security Analysis: the cohort in the lecture hall" },
  { src: "/images/legacy/workshops/day5-i1-earth-observation-strategic-tech.png", alt: "Day 5 — Earth Observation & Strategic Technologies: the cohort on their field visit to C-DAC" },
  { src: "/images/legacy/workshops/day5-i2-field-visit-advanced-computing.png", alt: "Day 5 — Field Visit & Advanced Computing: the cohort back in session" },
  { src: "/images/legacy/policy-workshop-3.jpg", alt: "Students and faculty at the closing session of the Digital & Tech Policy Workshop, COEP" },
];

/** Event Gallery — a premium featured-image-plus-grid layout: one large photo on the left
 *  (60%) and four uniform square tiles on the right (40%), all drawn from the same real
 *  legacy workshop photo set. A photo-count badge and click-to-open lightbox (with full
 *  keyboard navigation) give access to every remaining photo beyond the five shown. */
export default function EventGalleryMarquee() {
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
  const featured = photos[0];
  const gridPhotos = photos.slice(1, 5);

  return (
    <section className="relative overflow-hidden bg-ink-900 py-8 sm:py-12">
      <Container>
        <h2 className="text-[24px] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[30px] lg:text-[34px]">
          Event Gallery
        </h2>
        <p className="mt-3 max-w-xl text-[18px] font-medium leading-relaxed text-white/70">
          Moments from Tech4Bharat&apos;s programs and workshops.
        </p>

        <div className="mt-9 grid gap-5 lg:grid-cols-[3fr_2fr]">
          <button
            type="button"
            onClick={() => setOpenIndex(0)}
            className="group relative h-80 w-full overflow-hidden rounded-3xl shadow-lg lg:h-135"
          >
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3.5 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              📷 {photos.length} Photos
            </span>
          </button>

          <div className="grid grid-cols-2 gap-4">
            {gridPhotos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setOpenIndex(i + 1)}
                className="group relative aspect-square w-full overflow-hidden rounded-xl border-2 border-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </Container>

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
