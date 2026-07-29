"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  FileText,
  Handshake,
  Image as ImageIcon,
  Mail,
  MessageSquare,
  Quote,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { getDashboardStats } from "@/lib/api/dashboard";
import type { DashboardCounts, RecentActivityItem } from "@/lib/api/types";
import { ApiError } from "@/lib/api/client";
import StatCard from "@/components/admin/StatCard";
import Spinner from "@/components/ui/Spinner";
import EmptyState from "@/components/ui/EmptyState";

const ACTIVITY_LABELS: Record<string, string> = {
  startup: "New startup added",
  blog: "New blog post",
  event: "New event",
  contact_message: "New contact message",
  newsletter_subscriber: "New newsletter subscriber",
};

export default function AdminDashboardPage() {
  const { accessToken, user } = useAuth();
  const [counts, setCounts] = useState<DashboardCounts | null>(null);
  const [activity, setActivity] = useState<RecentActivityItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!accessToken) return;
    getDashboardStats(accessToken)
      .then((result) => {
        setCounts(result.counts);
        setActivity(result.recentActivity);
      })
      .catch((err) => setError(err instanceof ApiError ? err.message : "Failed to load dashboard stats."))
      .finally(() => setIsLoading(false));
  }, [accessToken]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-ink-900">Welcome back, {user?.name?.split(" ")[0]}</h1>
      <p className="mt-1 text-sm text-slate-500">Here&apos;s what&apos;s happening across Tech4Bharat.</p>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <Spinner size={32} />
        </div>
      ) : error || !counts ? (
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white">
          <EmptyState title="Couldn't load dashboard stats" description={error ?? undefined} />
        </div>
      ) : (
        <>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <StatCard label="Startups" value={counts.totalStartups} icon={Rocket} />
            <StatCard label="Mentors" value={counts.totalMentors} icon={Users} />
            <StatCard label="Advisors" value={counts.totalAdvisors} icon={Users} />
            <StatCard label="Partners" value={counts.totalPartners} icon={Handshake} />
            <StatCard label="Events" value={counts.totalEvents} icon={Calendar} />
            <StatCard label="Blogs" value={counts.totalBlogs} icon={FileText} />
            <StatCard label="Testimonials" value={counts.totalTestimonials} icon={Quote} />
            <StatCard label="Success Stories" value={counts.totalSuccessStories} icon={Sparkles} />
            <StatCard label="Gallery Images" value={counts.totalGalleryImages} icon={ImageIcon} />
            <StatCard label="Messages" value={counts.totalMessages} icon={MessageSquare} />
            <StatCard label="Unread Messages" value={counts.unreadMessages} icon={Mail} />
            <StatCard label="Newsletter Subscribers" value={counts.newsletterSubscribers} icon={Mail} />
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-ink-900">Recent Activity</h2>
            {activity.length === 0 ? (
              <p className="mt-4 text-sm text-slate-500">No recent activity yet.</p>
            ) : (
              <ul className="mt-5 divide-y divide-slate-100">
                {activity.map((item, i) => (
                  <li key={i} className="flex items-center justify-between py-3 text-sm">
                    <div>
                      <span className="font-medium text-ink-900">
                        {ACTIVITY_LABELS[item.type] || item.type}:{" "}
                      </span>
                      <span className="text-slate-600">{item.title}</span>
                    </div>
                    <span className="shrink-0 text-xs text-slate-400">
                      {new Date(item.created_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
}
