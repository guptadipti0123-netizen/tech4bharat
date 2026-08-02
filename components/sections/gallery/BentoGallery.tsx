"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";
import type { GalleryPhoto } from "@/lib/gallery/service";

interface BentoGalleryProps {
  /** Exactly 7 photos, one per uniquely shaped cell below. */
  photos: GalleryPhoto[];
}

const shapes = [
  { name: "Large", span: "lg:col-span-2 lg:row-span-2" },
  { name: "Tall", span: "lg:col-span-1 lg:row-span-2" },
  { name: "Wide", span: "lg:col-span-2 lg:row-span-1" },
  { name: "Square", span: "lg:col-span-1 lg:row-span-1" },
  { name: "Medium", span: "sm:col-span-2 lg:col-span-1 lg:row-span-1" },
  { name: "Landscape", span: "sm:col-span-2 lg:col-span-2 lg:row-span-1" },
  { name: "Portrait", span: "lg:col-span-1 lg:row-span-2" },
];

/** Bento-grid layout — no two cells share a shape (large / tall / wide / square / medium /
 *  landscape / portrait). Hover signature: a 2° tilt + lift, distinct from every other section. */
export default function BentoGallery({ photos }: BentoGalleryProps) {
  const cells = photos.map((photo, i) => ({ photo, shape: shapes[i % shapes.length] }));

  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#a3780f]">
            Editorial Selects
          </span>
          <h2 className="mt-4 text-[32px] font-extrabold tracking-tight text-[#1F4E3D] sm:text-[44px]">
            A Bento of Ecosystem Moments
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            A closer look at the people and places building Tech4Bharat.
          </p>
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-flow-dense lg:auto-rows-[118px] lg:grid-cols-4">
          {cells.map(({ photo, shape }, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ rotate: i % 2 === 0 ? 2 : -2, y: -4, scale: 1.02 }}
              className={cn(
                "group relative h-36 w-full overflow-hidden rounded-[20px] shadow-[0_10px_28px_rgba(31,78,61,0.14)] sm:h-48 lg:h-auto",
                shape.span
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#1F4E3D]/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#1F4E3D] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {shape.name}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
