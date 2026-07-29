import { apiFetch, buildQuery, type PaginationMeta } from "./client";
import { adminMutateWithFile } from "./adminMutate";
import type { GalleryImage } from "./types";

interface RawGalleryImage {
  id: number;
  title: string | null;
  image_url: string;
  category: string | null;
  event_id: number | null;
}

function mapGalleryImage(raw: RawGalleryImage): GalleryImage {
  return {
    id: raw.id,
    title: raw.title,
    imageUrl: raw.image_url,
    category: raw.category,
    eventId: raw.event_id,
  };
}

export interface GetGalleryParams {
  category?: string;
  eventId?: number;
  page?: number;
  limit?: number;
}

export async function getGalleryImages(
  params: GetGalleryParams = {}
): Promise<{ items: GalleryImage[]; meta?: PaginationMeta }> {
  const query = buildQuery({ ...params });
  const { data, meta } = await apiFetch<RawGalleryImage[]>(`/gallery${query}`);
  return { items: data.map(mapGalleryImage), meta };
}

export async function createGalleryImage(
  fields: Record<string, unknown>,
  file: File | null,
  token: string
): Promise<GalleryImage> {
  const raw = await adminMutateWithFile<RawGalleryImage>("/gallery", "POST", fields, file, "image", token);
  return mapGalleryImage(raw);
}

export async function updateGalleryImage(
  id: number,
  fields: Record<string, unknown>,
  token: string
): Promise<GalleryImage> {
  const { data } = await apiFetch<RawGalleryImage>(`/gallery/${id}`, {
    method: "PUT",
    body: fields,
    token,
    revalidate: false,
  });
  return mapGalleryImage(data);
}

export async function deleteGalleryImage(id: number, token: string): Promise<void> {
  await apiFetch(`/gallery/${id}`, { method: "DELETE", token, revalidate: false });
}
