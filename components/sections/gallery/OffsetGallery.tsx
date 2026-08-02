"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";
import type { GalleryPhoto } from "@/lib/gallery/service";

interface OffsetGalleryProps {
  /** Exactly 4 photos, laid out as a single overlapping row. */
  photos: GalleryPhoto[];
}

const rotations = [-4, 3, -3, 4];

/** Offset layered-cards layout — a compact, statically overlapping row (no scroll-linked
 *  height), so the "layered" visual doesn't cost the page any extra scroll runway. */
export default function OffsetGallery({ photos }: OffsetGalleryProps) {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#a3780f]">
            Layered Moments
          </span>
          <h2 className="mt-4 text-[32px] font-extrabold tracking-tight text-[#1F4E3D] sm:text-[44px]">
            Frames Worth a Second Look
          </h2>
        </AnimatedSection>

        <div className="mt-12 flex flex-wrap items-center justify-center -space-x-8 sm:-space-x-12">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 24, rotate: rotations[i] }}
              whileInView={{ opacity: 1, y: 0, rotate: rotations[i] }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ rotate: 0, scale: 1.08, zIndex: 20 }}
              style={{ zIndex: i }}
              className={cn(
                "relative h-56 w-44 shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow-[0_16px_32px_rgba(31,78,61,0.2)] sm:h-64 sm:w-52"
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes="208px"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
