import { apiFetch, buildQuery, type PaginationMeta } from "./client";
import { adminMutateWithFile } from "./adminMutate";
import type { SuccessStory, ImpactMetric, ContentStatus } from "./types";

interface RawSuccessStory {
  id: number;
  slug: string;
  startup_name: string;
  founder_name: string;
  category_name: string | null;
  category_slug: string | null;
  headline: string;
  excerpt: string | null;
  story: string[];
  impactMetrics: ImpactMetric[];
  cover_image_url: string | null;
  status: ContentStatus;
}

function mapSuccessStory(raw: RawSuccessStory): SuccessStory {
  return {
    id: raw.id,
    slug: raw.slug,
    startupName: raw.startup_name,
    founderName: raw.founder_name,
    categoryName: raw.category_name,
    categorySlug: raw.category_slug,
    headline: raw.headline,
    excerpt: raw.excerpt,
    story: raw.story || [],
    impactMetrics: raw.impactMetrics || [],
    coverImageUrl: raw.cover_image_url,
    status: raw.status,
  };
}

export interface GetSuccessStoriesParams {
  status?: string;
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export async function getSuccessStories(
  params: GetSuccessStoriesParams = {}
): Promise<{ items: SuccessStory[]; meta?: PaginationMeta }> {
  const query = buildQuery({ ...params });
  const { data, meta } = await apiFetch<RawSuccessStory[]>(`/success-stories${query}`);
  return { items: data.map(mapSuccessStory), meta };
}

export async function getSuccessStoryBySlug(slug: string): Promise<SuccessStory> {
  const { data } = await apiFetch<RawSuccessStory>(`/success-stories/slug/${slug}`);
  return mapSuccessStory(data);
}

export async function createSuccessStory(
  fields: Record<string, unknown>,
  file: File | null,
  token: string
): Promise<SuccessStory> {
  const raw = await adminMutateWithFile<RawSuccessStory>("/success-stories", "POST", fields, file, "coverImage", token);
  return mapSuccessStory(raw);
}

export async function updateSuccessStory(
  id: number,
  fields: Record<string, unknown>,
  file: File | null,
  token: string
): Promise<SuccessStory> {
  const raw = await adminMutateWithFile<RawSuccessStory>(
    `/success-stories/${id}`,
    "PUT",
    fields,
    file,
    "coverImage",
    token
  );
  return mapSuccessStory(raw);
}

export async function deleteSuccessStory(id: number, token: string): Promise<void> {
  await apiFetch(`/success-stories/${id}`, { method: "DELETE", token, revalidate: false });
}
