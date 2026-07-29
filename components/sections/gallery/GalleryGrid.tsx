"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Images, X, ZoomIn } from "lucide-react";
import FilterTabs from "@/components/ui/FilterTabs";
import AnimatedSection from "@/components/ui/AnimatedSection";
import EmptyState from "@/components/ui/EmptyState";
import { cn } from "@/lib/utils";
import { galleryCategories, galleryImages, type GalleryImage } from "@/lib/gallery";

const categoryLabelBySlug = new Map(galleryCategories.map((c) => [c.slug, c.label]));
const filterOptions = ["All", ...galleryCategories.map((c) => c.label)];

// Cycles through a few aspect ratios so the columns layout reads as a genuine masonry grid.
const MASONRY_ASPECTS = ["aspect-square", "aspect-3/4", "aspect-4/3", "aspect-square", "aspect-3/4"];
function masonryAspect(index: number): string {
  return MASONRY_ASPECTS[index % MASONRY_ASPECTS.length];
}

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered: GalleryImage[] =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => categoryLabelBySlug.get(img.category) === activeFilter);

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
    <div>
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
        <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4">
          {filtered.map((image, i) => (
            <AnimatedSection
              key={image.src}
              delay={(i % 8) * 0.05}
              animation="scale"
              className="mb-4 break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => openLightbox(i)}
                aria-label={`View ${image.alt}`}
                className={cn(
                  "group relative block w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
                  masonryAspect(i)
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-ink-900/0 opacity-0 transition-all duration-300 group-hover:bg-ink-900/40 group-hover:opacity-100">
                  <ZoomIn size={24} className="text-white" />
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      )}

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-ink-900/90 p-4 backdrop-blur-sm"
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
              key={active.src}
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
                className="rounded-xl object-contain"
              />
            </motion.div>

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
