/**
 * Data-layer contracts for the Gallery. UI components only ever import from this file
 * (never from `data.ts` or `repository.ts` directly) — that boundary is what lets the
 * storage backend change later without touching a single component.
 */

/** Where a photo's bytes currently live. Lets a future mixed local+S3+API library exist
 *  without the UI needing to know or care which backend served a given photo. */
export type GalleryPhotoSource = "local" | "s3" | "api";

export interface GalleryPhoto {
  /** Stable identifier — a DB row id or S3 object key once this is backed by a real store. */
  id: string;
  /** Public URL: today a `/public` path, tomorrow an S3/CDN URL — components never assume the shape. */
  src: string;
  alt: string;
  categories: string[];
  source: GalleryPhotoSource;
}

export interface GalleryCategory {
  slug: string;
  label: string;
}
