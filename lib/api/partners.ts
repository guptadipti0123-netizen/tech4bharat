import { apiFetch, buildQuery, type PaginationMeta } from "./client";
import { adminMutateWithFile } from "./adminMutate";
import type { Partner, ContentStatus } from "./types";

interface RawPartner {
  id: number;
  name: string;
  category_id: number | null;
  category_name: string | null;
  category_slug: string | null;
  logo_url: string | null;
  website: string | null;
  description: string | null;
  status: ContentStatus;
}

function mapPartner(raw: RawPartner): Partner {
  return {
    id: raw.id,
    name: raw.name,
    categoryId: raw.category_id,
    categoryName: raw.category_name,
    categorySlug: raw.category_slug,
    logoUrl: raw.logo_url,
    website: raw.website,
    description: raw.description,
    status: raw.status,
  };
}

export interface GetPartnersParams {
  status?: string;
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export async function getPartners(
  params: GetPartnersParams = {}
): Promise<{ items: Partner[]; meta?: PaginationMeta }> {
  const query = buildQuery({ ...params });
  const { data, meta } = await apiFetch<RawPartner[]>(`/partners${query}`);
  return { items: data.map(mapPartner), meta };
}

export async function createPartner(fields: Record<string, unknown>, file: File | null, token: string): Promise<Partner> {
  const raw = await adminMutateWithFile<RawPartner>("/partners", "POST", fields, file, "logo", token);
  return mapPartner(raw);
}

export async function updatePartner(
  id: number,
  fields: Record<string, unknown>,
  file: File | null,
  token: string
): Promise<Partner> {
  const raw = await adminMutateWithFile<RawPartner>(`/partners/${id}`, "PUT", fields, file, "logo", token);
  return mapPartner(raw);
}

export async function deletePartner(id: number, token: string): Promise<void> {
  await apiFetch(`/partners/${id}`, { method: "DELETE", token, revalidate: false });
}
