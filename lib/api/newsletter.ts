import { apiFetch, buildQuery, type PaginationMeta } from "./client";
import { API_BASE_URL } from "./config";
import type { NewsletterSubscriber } from "./types";

interface RawSubscriber {
  id: number;
  email: string;
  is_active: number;
  subscribed_at: string;
}

function mapSubscriber(raw: RawSubscriber): NewsletterSubscriber {
  return { id: raw.id, email: raw.email, isActive: Boolean(raw.is_active), subscribedAt: raw.subscribed_at };
}

export async function subscribeToNewsletter(email: string): Promise<void> {
  await apiFetch("/newsletter/subscribe", { method: "POST", body: { email }, revalidate: false });
}

export async function unsubscribeFromNewsletter(email: string): Promise<void> {
  await apiFetch("/newsletter/unsubscribe", { method: "POST", body: { email }, revalidate: false });
}

export interface GetSubscribersParams {
  isActive?: boolean;
  page?: number;
  limit?: number;
}

export async function getNewsletterSubscribers(
  params: GetSubscribersParams,
  token: string
): Promise<{ items: NewsletterSubscriber[]; meta?: PaginationMeta }> {
  const query = buildQuery({
    ...params,
    isActive: params.isActive === undefined ? undefined : String(params.isActive),
  });
  const { data, meta } = await apiFetch<RawSubscriber[]>(`/newsletter${query}`, { token, revalidate: false });
  return { items: data.map(mapSubscriber), meta };
}

export async function deleteSubscriber(id: number, token: string): Promise<void> {
  await apiFetch(`/newsletter/${id}`, { method: "DELETE", token, revalidate: false });
}

/**
 * The export endpoint requires an Authorization header, so it can't be a plain <a href>.
 * This fetches the CSV client-side and triggers a browser download.
 */
export async function downloadNewsletterExport(token: string): Promise<void> {
  const res = await fetch(`${API_BASE_URL}/newsletter/export`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    throw new Error("Failed to export subscribers.");
  }
  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `newsletter-subscribers-${Date.now()}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
}
