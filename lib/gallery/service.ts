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
