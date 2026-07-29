import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: number;
  icon: LucideIcon;
}

export default function StatCard({ label, value, icon: Icon }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
          <Icon size={22} />
        </div>
      </div>
      <p className="mt-5 text-3xl font-bold text-ink-900">{value.toLocaleString("en-IN")}</p>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </div>
  );
}
