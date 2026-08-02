import type { GalleryCategory, GalleryPhoto } from "./types";
import { localGalleryCategories, localGalleryPhotos } from "./data";

/**
 * Storage-agnostic contract for where gallery photos come from. `service.ts` (and, through
 * it, every UI component) only ever talks to this interface — never to a concrete backend.
 *
 * To go live with a real backend later, implement this interface once and swap the
 * `galleryRepository` export below:
 *
 *   class S3GalleryRepository implements GalleryRepository {
 *     async list() { return listObjectsFromS3(BUCKET); }
 *     async listCategories() { return fetchCategoryTaxonomy(); }
 *   }
 *   class ApiGalleryRepository implements GalleryRepository {
 *     constructor(private baseUrl: string) {}
 *     async list() { return fetch(`${this.baseUrl}/photos`).then((r) => r.json()); }
 *     async listCategories() { return fetch(`${this.baseUrl}/categories`).then((r) => r.json()); }
 *   }
 *
 * No component, page, or other section needs to change — they all go through `service.ts`.
 */
export interface GalleryRepository {
  list(): Promise<GalleryPhoto[]>;
  listCategories(): Promise<GalleryCategory[]>;
}

/** Reads from the bundled `public/images` library shipped with this build. */
class LocalGalleryRepository implements GalleryRepository {
  async list(): Promise<GalleryPhoto[]> {
    return localGalleryPhotos;
  }

  async listCategories(): Promise<GalleryCategory[]> {
    return localGalleryCategories;
  }
}

/** The single active repository. Reassign this (or read it from config/env) to change backends. */
export const galleryRepository: GalleryRepository = new LocalGalleryRepository();
