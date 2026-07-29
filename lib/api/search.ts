import { apiFetch } from "./client";
import type { SearchResults } from "./types";

export async function globalSearch(query: string): Promise<SearchResults> {
  const { data } = await apiFetch<SearchResults>(`/search?q=${encodeURIComponent(query)}`, {
    revalidate: false,
  });
  return data;
}
