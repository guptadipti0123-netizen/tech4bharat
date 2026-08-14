"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, Images, X, ZoomIn } from "lucide-react";
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

const PAGE_SIZE = 16;

/** Pinterest-style masonry layout — the comprehensive, filterable photo archive. Purely
 *  presentational: the full photo library and category taxonomy both arrive as props. */
export default function MasonryGallery({ photos, categories }: MasonryGalleryProps) {
  const categoryLabelBySlug = new Map(categories.map((c) => [c.slug, c.label]));

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = photos.slice(0, visibleCount);
  const hasMore = visibleCount < photos.length;

  function openLightbox(index: number) {
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function showNext() {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % visible.length));
  }

  function showPrev() {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + visible.length) % visible.length));
  }

  const active = lightboxIndex !== null ? visible[lightboxIndex] : null;

  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? null : (i + 1) % visible.length));
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i === null ? null : (i - 1 + visible.length) % visible.length));
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, visible.length]);

  return (
    <div id="gallery-masonry" className="scroll-mt-28">
      {photos.length === 0 ? (
        <EmptyState
          icon={Images}
          title="No photos yet"
          description="Check back soon — we're always adding new moments from the Tech4Bharat ecosystem."
        />
      ) : (
        <>
          <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3 xl:columns-4">
            <AnimatePresence initial={false} mode="popLayout">
              {visible.map((photo, i) => (
                <motion.button
                  key={photo.id}
                  type="button"
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, delay: (i % 8) * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
                  onClick={() => openLightbox(i)}
                  aria-label={`View ${photo.alt}`}
                  className={cn(
                    "group relative mb-3 block w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm transition-all duration-300 ease-out hover:z-10 hover:-translate-y-2 hover:shadow-[0_20px_36px_rgba(21,94,154,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#155E9A] focus-visible:ring-offset-2 sm:mb-4",
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
                  <div className="absolute inset-0 flex items-end bg-linear-to-t from-[#155E9A]/0 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:from-[#155E9A]/70 group-hover:opacity-100">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-white">
                      <ZoomIn size={14} /> View
                    </span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          {hasMore && (
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-[#155E9A] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#155E9A]/30 hover:shadow-md"
              >
                Load More <ChevronDown size={16} />
              </button>
            </div>
          )}
        </>
      )}

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-[#155E9A]/90 p-4 backdrop-blur-md"
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
              {lightboxIndex !== null ? lightboxIndex + 1 : 0} / {visible.length}
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
