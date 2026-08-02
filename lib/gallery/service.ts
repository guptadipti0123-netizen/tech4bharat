import { galleryRepository } from "./repository";
import type { GalleryCategory, GalleryPhoto } from "./types";

export type { GalleryCategory, GalleryPhoto } from "./types";

export async function getAllGalleryPhotos(): Promise<GalleryPhoto[]> {
  return galleryRepository.list();
}

export async function getGalleryCategories(): Promise<GalleryCategory[]> {
  return galleryRepository.listCategories();
}

export async function getGalleryPhotosByCategory(slug: string): Promise<GalleryPhoto[]> {
  const all = await getAllGalleryPhotos();
  if (slug === "all") return all;
  return all.filter((photo) => photo.categories.includes(slug));
}

/** One page's worth of section-to-photo assignments, handed out once per request. */
export interface GallerySections {
  /** Section 1 — Magazine: large frame + 3 stacked frames. */
  magazine: GalleryPhoto[];
  /** Section 2 — Apple-style horizontal scroller with an active/focused card. */
  appleHorizontal: GalleryPhoto[];
  /** Section 4 — Bento grid: every cell a different shape. */
  bento: GalleryPhoto[];
  /** Section 5 — Compact overlapping/offset row of layered cards. */
  offset: GalleryPhoto[];
  /** Section 6 — Timeline, 3 photos per era. */
  timeline: GalleryPhoto[];
  quote: GalleryPhoto;
  cta: GalleryPhoto;
  /** Section 3 — Pinterest masonry: the comprehensive, filterable archive. */
  masonry: GalleryPhoto[];
  /** Section 7 — Infinite carousel: the full library on loop (a marquee is expected to repeat). */
  carousel: GalleryPhoto[];
}

/**
 * Deals every gallery section its own sequential, non-overlapping slice of the photo
 * library — the single place that decides "who gets which photos" so no two sections show
 * the same picture until the whole library has been used at least once. Sections that need
 * the complete archive (the masonry grid, the infinite carousel) get the full library
 * instead of a slice, since showing every photo once is their entire purpose.
 */
export async function getGallerySections(): Promise<GallerySections> {
  const all = await getAllGalleryPhotos();
  const total = all.length;

  let cursor = 0;
  function take(count: number): GalleryPhoto[] {
    const slice = Array.from({ length: count }, (_, i) => all[(cursor + i) % total]);
    cursor += count;
    return slice;
  }

  return {
    magazine: take(4),
    appleHorizontal: take(7),
    bento: take(7),
    offset: take(4),
    timeline: take(9),
    quote: take(1)[0],
    cta: take(1)[0],
    masonry: all,
    carousel: all,
  };
}
