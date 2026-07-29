import { apiFetch } from "./client";
import type { DashboardCounts, RecentActivityItem } from "./types";

export async function getDashboardStats(
  token: string
): Promise<{ counts: DashboardCounts; recentActivity: RecentActivityItem[] }> {
  const { data } = await apiFetch<{ counts: DashboardCounts; recentActivity: RecentActivityItem[] }>(
    "/dashboard/stats",
    { token, revalidate: false }
  );
  return data;
}
