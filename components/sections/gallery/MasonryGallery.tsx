"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Images, X, ZoomIn } from "lucide-react";
import FilterTabs from "@/components/ui/FilterTabs";
import AnimatedSection from "@/components/ui/AnimatedSection";
import EmptyState from "@/components/ui/EmptyState";
import { cn } from "@/lib/utils";
import type { GalleryCategory, GalleryPhoto } from "@/lib/gallery/service";

interface MasonryGalleryProps {
  photos: GalleryPhoto[];
  categories: GalleryCategory[];
}

// A compact, mixed-height rhythm (176 / 224 / 200 / 256px) so the columns layout reads as a
// genuine masonry grid without any tile ever running tall or bloating the page.
const TIER_HEIGHTS = ["h-44", "h-56", "h-50", "h-64"];
function masonryHeight(index: number): string {
  return TIER_HEIGHTS[index % TIER_HEIGHTS.length];
}

/** Pinterest-style masonry layout — the comprehensive, filterable photo archive. Purely
 *  presentational: the full photo library and category taxonomy both arrive as props. */
export default function MasonryGallery({ photos, categories }: MasonryGalleryProps) {
  const categoryLabelBySlug = new Map(categories.map((c) => [c.slug, c.label]));
  const filterOptions = ["All", ...categories.map((c) => c.label)];
  const labelToSlug = new Map(categories.map((c) => [c.label, c.slug]));

  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered: GalleryPhoto[] =
    activeFilter === "All"
      ? photos
      : photos.filter((photo) => photo.categories.includes(labelToSlug.get(activeFilter) ?? ""));

  function openLightbox(index: number) {
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function showNext() {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }

  function showPrev() {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }

  const active = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, filtered.length]);

  return (
    <div id="gallery-masonry" className="scroll-mt-28">
      <AnimatedSection>
        <FilterTabs
          options={filterOptions}
          active={activeFilter}
          onChange={(value) => {
            setActiveFilter(value);
            setLightboxIndex(null);
          }}
        />
      </AnimatedSection>

      {filtered.length === 0 ? (
        <EmptyState
          icon={Images}
          title="No photos in this category yet"
          description="Check back soon — we're always adding new moments from the Tech4Bharat ecosystem."
        />
      ) : (
        <div className="mt-8 columns-2 gap-4 sm:columns-3 lg:columns-4">
          <AnimatePresence initial={false} mode="popLayout">
            {filtered.map((photo, i) => (
              <motion.button
                key={photo.id + activeFilter}
                type="button"
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
                onClick={() => openLightbox(i)}
                aria-label={`View ${photo.alt}`}
                className={cn(
                  "group relative mb-4 block w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm transition-all duration-300 ease-out hover:z-10 hover:-translate-y-2 hover:shadow-[0_20px_36px_rgba(31,78,61,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E3D] focus-visible:ring-offset-2",
                  masonryHeight(i)
                )}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 flex items-end bg-linear-to-t from-[#1F4E3D]/0 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:from-[#1F4E3D]/70 group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-white">
                    <ZoomIn size={14} /> View
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      )}

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-[#1F4E3D]/90 p-4 backdrop-blur-md"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close photo viewer"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X size={22} />
            </button>

            <span className="absolute left-5 top-6 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
              {lightboxIndex !== null ? lightboxIndex + 1 : 0} / {filtered.length}
            </span>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft size={22} />
            </button>

            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-4/3 w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="rounded-2xl object-contain"
              />
            </motion.div>

            <p className="absolute bottom-6 left-1/2 max-w-md -translate-x-1/2 text-center text-sm text-white/70">
              {active.alt} · {active.categories.map((c) => categoryLabelBySlug.get(c)).join(", ")}
            </p>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
