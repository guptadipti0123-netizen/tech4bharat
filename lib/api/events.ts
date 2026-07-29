import { apiFetch, buildQuery, type PaginationMeta } from "./client";
import { adminMutateWithFile } from "./adminMutate";
import type { EventItem, EventType, EventStatus, EventSpeaker } from "./types";

interface RawEvent {
  id: number;
  slug: string;
  title: string;
  type: EventType;
  status: EventStatus;
  event_date_label: string;
  start_date: string | null;
  venue: string | null;
  description: string | null;
  long_description: string | null;
  banner_url: string | null;
  is_featured: number;
  speakers: EventSpeaker[];
}

function mapEvent(raw: RawEvent): EventItem {
  return {
    id: raw.id,
    slug: raw.slug,
    title: raw.title,
    type: raw.type,
    status: raw.status,
    eventDateLabel: raw.event_date_label,
    startDate: raw.start_date,
    venue: raw.venue,
    description: raw.description,
    longDescription: raw.long_description,
    bannerUrl: raw.banner_url,
    isFeatured: Boolean(raw.is_featured),
    speakers: raw.speakers || [],
  };
}

export interface GetEventsParams {
  status?: string;
  type?: string;
  featured?: boolean;
  search?: string;
  page?: number;
  limit?: number;
}

export async function getEvents(
  params: GetEventsParams = {}
): Promise<{ items: EventItem[]; meta?: PaginationMeta }> {
  const query = buildQuery({ ...params, featured: params.featured ? "true" : undefined });
  const { data, meta } = await apiFetch<RawEvent[]>(`/events${query}`);
  return { items: data.map(mapEvent), meta };
}

export async function getEventBySlug(slug: string): Promise<EventItem> {
  const { data } = await apiFetch<RawEvent>(`/events/slug/${slug}`);
  return mapEvent(data);
}

export async function getFeaturedEvent(): Promise<EventItem | null> {
  const { items } = await getEvents({ featured: true, limit: 1 });
  return items[0] || null;
}

export async function createEvent(fields: Record<string, unknown>, file: File | null, token: string): Promise<EventItem> {
  const raw = await adminMutateWithFile<RawEvent>("/events", "POST", fields, file, "banner", token);
  return mapEvent(raw);
}

export async function updateEvent(
  id: number,
  fields: Record<string, unknown>,
  file: File | null,
  token: string
): Promise<EventItem> {
  const raw = await adminMutateWithFile<RawEvent>(`/events/${id}`, "PUT", fields, file, "banner", token);
  return mapEvent(raw);
}

export async function deleteEvent(id: number, token: string): Promise<void> {
  await apiFetch(`/events/${id}`, { method: "DELETE", token, revalidate: false });
}
