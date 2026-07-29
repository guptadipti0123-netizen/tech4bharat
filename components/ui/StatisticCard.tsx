import type { LucideIcon } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import { cn } from "@/lib/utils";

interface StatisticCardProps {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
  tone?: "accent" | "secondary";
  className?: string;
}

/** Icon + animated counter + label — used inside dark, glassmorphic stat grids like "Our Impact". */
export default function StatisticCard({
  icon: Icon,
  value,
  suffix,
  label,
  tone = "accent",
  className,
}: StatisticCardProps) {
  return (
    <div
      className={cn(
        "group flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-colors hover:bg-white/10",
        tone === "secondary" ? "hover:border-secondary-400/30" : "hover:border-accent-400/30",
        className
      )}
    >
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
          tone === "secondary" ? "bg-secondary-500/15 text-secondary-400" : "bg-accent-500/15 text-accent-400"
        )}
      >
        <Icon size={22} />
      </div>
      <p className="mt-4 text-3xl font-bold text-white sm:text-4xl">
        <CountUp value={value} suffix={suffix} />
      </p>
      <p className="mt-2 text-sm font-medium text-white/70">{label}</p>
    </div>
  );
}
