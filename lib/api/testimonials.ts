import { apiFetch, buildQuery, type PaginationMeta } from "./client";
import { adminMutateWithFile } from "./adminMutate";
import type { Testimonial, ContentStatus } from "./types";

interface RawTestimonial {
  id: number;
  author_name: string;
  author_role: string | null;
  organization: string | null;
  quote: string;
  avatar_url: string | null;
  rating: number | null;
  is_featured: number;
  status: ContentStatus;
}

function mapTestimonial(raw: RawTestimonial): Testimonial {
  return {
    id: raw.id,
    authorName: raw.author_name,
    authorRole: raw.author_role,
    organization: raw.organization,
    quote: raw.quote,
    avatarUrl: raw.avatar_url,
    rating: raw.rating,
    isFeatured: Boolean(raw.is_featured),
    status: raw.status,
  };
}

export interface GetTestimonialsParams {
  status?: string;
  featured?: boolean;
  page?: number;
  limit?: number;
}

export async function getTestimonials(
  params: GetTestimonialsParams = {}
): Promise<{ items: Testimonial[]; meta?: PaginationMeta }> {
  const query = buildQuery({ ...params, featured: params.featured ? "true" : undefined });
  const { data, meta } = await apiFetch<RawTestimonial[]>(`/testimonials${query}`);
  return { items: data.map(mapTestimonial), meta };
}

export async function createTestimonial(
  fields: Record<string, unknown>,
  file: File | null,
  token: string
): Promise<Testimonial> {
  const raw = await adminMutateWithFile<RawTestimonial>("/testimonials", "POST", fields, file, "avatar", token);
  return mapTestimonial(raw);
}

export async function updateTestimonial(
  id: number,
  fields: Record<string, unknown>,
  file: File | null,
  token: string
): Promise<Testimonial> {
  const raw = await adminMutateWithFile<RawTestimonial>(`/testimonials/${id}`, "PUT", fields, file, "avatar", token);
  return mapTestimonial(raw);
}

export async function deleteTestimonial(id: number, token: string): Promise<void> {
  await apiFetch(`/testimonials/${id}`, { method: "DELETE", token, revalidate: false });
}
