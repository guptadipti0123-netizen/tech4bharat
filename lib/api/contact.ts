import { apiFetch, buildQuery, type PaginationMeta } from "./client";
import type { ContactMessage } from "./types";

interface RawContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  is_read: number;
  created_at: string;
}

function mapMessage(raw: RawContactMessage): ContactMessage {
  return {
    id: raw.id,
    name: raw.name,
    email: raw.email,
    subject: raw.subject,
    message: raw.message,
    isRead: Boolean(raw.is_read),
    createdAt: raw.created_at,
  };
}

export interface SubmitContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function submitContactMessage(payload: SubmitContactPayload): Promise<void> {
  await apiFetch("/contact-messages", { method: "POST", body: payload, revalidate: false });
}

export interface GetMessagesParams {
  isRead?: boolean;
  page?: number;
  limit?: number;
}

export async function getContactMessages(
  params: GetMessagesParams,
  token: string
): Promise<{ items: ContactMessage[]; meta?: PaginationMeta }> {
  const query = buildQuery({ ...params, isRead: params.isRead === undefined ? undefined : String(params.isRead) });
  const { data, meta } = await apiFetch<RawContactMessage[]>(`/contact-messages${query}`, {
    token,
    revalidate: false,
  });
  return { items: data.map(mapMessage), meta };
}

export async function markMessageRead(id: number, isRead: boolean, token: string): Promise<void> {
  await apiFetch(`/contact-messages/${id}/read`, {
    method: "PATCH",
    body: { isRead },
    token,
    revalidate: false,
  });
}

export async function deleteMessage(id: number, token: string): Promise<void> {
  await apiFetch(`/contact-messages/${id}`, { method: "DELETE", token, revalidate: false });
}
