import { apiFetch, buildQuery, type PaginationMeta } from "./client";
import { adminMutateWithFile } from "./adminMutate";
import type { Startup, StartupStage, ContentStatus } from "./types";

interface RawStartup {
  id: number;
  slug: string;
  name: string;
  founder_name: string;
  category_id: number | null;
  category_name: string | null;
  category_slug: string | null;
  stage: StartupStage;
  tagline: string | null;
  description: string | null;
  logo_url: string | null;
  website: string | null;
  founded_year: number | null;
  location: string | null;
  status: ContentStatus;
  is_featured: number;
}

function mapStartup(raw: RawStartup): Startup {
  return {
    id: raw.id,
    slug: raw.slug,
    name: raw.name,
    founderName: raw.founder_name,
    categoryId: raw.category_id,
    categoryName: raw.category_name,
    categorySlug: raw.category_slug,
    stage: raw.stage,
    tagline: raw.tagline,
    description: raw.description,
    logoUrl: raw.logo_url,
    website: raw.website,
    foundedYear: raw.founded_year,
    location: raw.location,
    status: raw.status,
    isFeatured: Boolean(raw.is_featured),
  };
}

export interface GetStartupsParams {
  status?: string;
  category?: string;
  stage?: string;
  featured?: boolean;
  search?: string;
  page?: number;
  limit?: number;
}

export async function getStartups(
  params: GetStartupsParams = {}
): Promise<{ items: Startup[]; meta?: PaginationMeta }> {
  const query = buildQuery({ ...params, featured: params.featured ? "true" : undefined });
  const { data, meta } = await apiFetch<RawStartup[]>(`/startups${query}`);
  return { items: data.map(mapStartup), meta };
}

export async function getStartupBySlug(slug: string): Promise<Startup> {
  const { data } = await apiFetch<RawStartup>(`/startups/slug/${slug}`);
  return mapStartup(data);
}

export async function getFeaturedStartups(limit = 6): Promise<Startup[]> {
  const { items } = await getStartups({ status: "published", featured: true, limit });
  return items;
}

export async function createStartup(fields: Record<string, unknown>, file: File | null, token: string): Promise<Startup> {
  const raw = await adminMutateWithFile<RawStartup>("/startups", "POST", fields, file, "logo", token);
  return mapStartup(raw);
}

export async function updateStartup(
  id: number,
  fields: Record<string, unknown>,
  file: File | null,
  token: string
): Promise<Startup> {
  const raw = await adminMutateWithFile<RawStartup>(`/startups/${id}`, "PUT", fields, file, "logo", token);
  return mapStartup(raw);
}

export async function deleteStartup(id: number, token: string): Promise<void> {
  await apiFetch(`/startups/${id}`, { method: "DELETE", token, revalidate: false });
}
