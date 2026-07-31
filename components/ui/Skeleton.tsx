import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

/** Base pulsing placeholder block — compose into larger skeleton layouts. */
export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("animate-pulse rounded-lg bg-slate-200/80", className)} aria-hidden="true" />;
}

export function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <Skeleton className="h-40 w-full rounded-none" />
      <div className="space-y-3 p-6">
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

interface SkeletonGridProps {
  count?: number;
  columns?: string;
}

export function SkeletonGrid({ count = 6, columns = "sm:grid-cols-2 lg:grid-cols-3" }: SkeletonGridProps) {
  return (
    <div className={cn("grid gap-6", columns)} role="status" aria-label="Loading content">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
