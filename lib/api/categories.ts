import { apiFetch } from "./client";
import type { Category, CategoryType } from "./types";

export async function getCategoriesByType(type: CategoryType): Promise<Category[]> {
  const { data } = await apiFetch<Category[]>(`/categories?type=${type}`);
  return data;
}
