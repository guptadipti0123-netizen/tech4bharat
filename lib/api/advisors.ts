import { apiFetch, buildQuery, type PaginationMeta } from "./client";
import { adminMutateWithFile } from "./adminMutate";
import type { Advisor, ContentStatus } from "./types";

interface RawAdvisor {
  id: number;
  slug: string;
  name: string;
  designation: string | null;
  organization: string | null;
  bio: string | null;
  photo_url: string | null;
  linkedin_url: string | null;
  status: ContentStatus;
}

function mapAdvisor(raw: RawAdvisor): Advisor {
  return {
    id: raw.id,
    slug: raw.slug,
    name: raw.name,
    designation: raw.designation,
    organization: raw.organization,
    bio: raw.bio,
    photoUrl: raw.photo_url,
    linkedinUrl: raw.linkedin_url,
    status: raw.status,
  };
}

export interface GetAdvisorsParams {
  status?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export async function getAdvisors(
  params: GetAdvisorsParams = {}
): Promise<{ items: Advisor[]; meta?: PaginationMeta }> {
  const query = buildQuery({ ...params });
  const { data, meta } = await apiFetch<RawAdvisor[]>(`/advisors${query}`);
  return { items: data.map(mapAdvisor), meta };
}

export async function createAdvisor(fields: Record<string, unknown>, file: File | null, token: string): Promise<Advisor> {
  const raw = await adminMutateWithFile<RawAdvisor>("/advisors", "POST", fields, file, "photo", token);
  return mapAdvisor(raw);
}

export async function updateAdvisor(
  id: number,
  fields: Record<string, unknown>,
  file: File | null,
  token: string
): Promise<Advisor> {
  const raw = await adminMutateWithFile<RawAdvisor>(`/advisors/${id}`, "PUT", fields, file, "photo", token);
  return mapAdvisor(raw);
}

export async function deleteAdvisor(id: number, token: string): Promise<void> {
  await apiFetch(`/advisors/${id}`, { method: "DELETE", token, revalidate: false });
}
