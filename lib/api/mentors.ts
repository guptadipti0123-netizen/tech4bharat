import { apiFetch, buildQuery, type PaginationMeta } from "./client";
import { adminMutateWithFile } from "./adminMutate";
import type { Mentor, MentorCategory, ContentStatus } from "./types";

interface RawMentor {
  id: number;
  slug: string;
  name: string;
  designation: string | null;
  organization: string | null;
  category: MentorCategory;
  bio: string | null;
  photo_url: string | null;
  linkedin_url: string | null;
  expertise: string[];
  status: ContentStatus;
}

function mapMentor(raw: RawMentor): Mentor {
  return {
    id: raw.id,
    slug: raw.slug,
    name: raw.name,
    designation: raw.designation,
    organization: raw.organization,
    category: raw.category,
    bio: raw.bio,
    photoUrl: raw.photo_url,
    linkedinUrl: raw.linkedin_url,
    expertise: raw.expertise || [],
    status: raw.status,
  };
}

export interface GetMentorsParams {
  status?: string;
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export async function getMentors(
  params: GetMentorsParams = {}
): Promise<{ items: Mentor[]; meta?: PaginationMeta }> {
  const query = buildQuery({ ...params });
  const { data, meta } = await apiFetch<RawMentor[]>(`/mentors${query}`);
  return { items: data.map(mapMentor), meta };
}

export async function getMentorBySlug(slug: string): Promise<Mentor> {
  const { data } = await apiFetch<RawMentor>(`/mentors/slug/${slug}`);
  return mapMentor(data);
}

export async function getAllMentorExpertise(): Promise<string[]> {
  const { items } = await getMentors({ status: "published", limit: 100 });
  const skills = new Set<string>();
  items.forEach((mentor) => mentor.expertise.forEach((skill) => skills.add(skill)));
  return Array.from(skills).sort();
}

export async function createMentor(fields: Record<string, unknown>, file: File | null, token: string): Promise<Mentor> {
  const raw = await adminMutateWithFile<RawMentor>("/mentors", "POST", fields, file, "photo", token);
  return mapMentor(raw);
}

export async function updateMentor(
  id: number,
  fields: Record<string, unknown>,
  file: File | null,
  token: string
): Promise<Mentor> {
  const raw = await adminMutateWithFile<RawMentor>(`/mentors/${id}`, "PUT", fields, file, "photo", token);
  return mapMentor(raw);
}

export async function deleteMentor(id: number, token: string): Promise<void> {
  await apiFetch(`/mentors/${id}`, { method: "DELETE", token, revalidate: false });
}
