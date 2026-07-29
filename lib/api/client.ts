import { API_BASE_URL } from "./config";

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface ApiEnvelope<T> {
  success: boolean;
  message: string;
  data: T;
  meta?: PaginationMeta;
}

export interface ApiFetchOptions extends Omit<RequestInit, "body"> {
  body?: unknown;
  /** Next.js Data Cache hint. Defaults to a 60s revalidate so listing pages stay reasonably fresh without hammering the API. */
  revalidate?: number | false;
  token?: string;
}

/**
 * Thin fetch wrapper around the Tech4Bharat API's `{ success, message, data, meta }` envelope.
 * Throws ApiError on any non-2xx or `success: false` response.
 */
export async function apiFetch<T>(path: string, options: ApiFetchOptions = {}): Promise<{ data: T; meta?: PaginationMeta }> {
  const { body, revalidate = 60, token, headers, ...rest } = options;

  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    next: revalidate === false ? undefined : { revalidate },
    cache: revalidate === false ? "no-store" : undefined,
  });

  let parsed: ApiEnvelope<T> | null = null;
  try {
    parsed = (await res.json()) as ApiEnvelope<T>;
  } catch {
    // Non-JSON response body (shouldn't normally happen against this API).
  }

  if (!res.ok || !parsed?.success) {
    throw new ApiError(parsed?.message || `Request failed with status ${res.status}`, res.status);
  }

  return { data: parsed.data, meta: parsed.meta };
}

export function buildQuery<T extends Record<string, unknown>>(params: T): string {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      query.set(key, String(value));
    }
  });
  const str = query.toString();
  return str ? `?${str}` : "";
}
