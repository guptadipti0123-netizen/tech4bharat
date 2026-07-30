import { cn, getInitials } from "@/lib/utils";

interface PartnerLogoCardProps {
  name: string;
  className?: string;
}

/**
 * Stylized wordmark placeholder for a partner org — a monogram badge that
 * shifts from grayscale to full brand color on hover, standing in for a
 * real logo asset in this demo.
 */
export default function PartnerLogoCard({ name, className }: PartnerLogoCardProps) {
  return (
    <div
      className={cn(
        "group flex h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:border-brand-200 hover:shadow-md",
        className
      )}
    >
      <span
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-brand-600 to-secondary-500 text-sm font-bold text-white",
          "grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110"
        )}
      >
        {getInitials(name)}
      </span>
      <span className="text-xs font-semibold leading-tight text-slate-600 transition-colors group-hover:text-brand-700">
        {name}
      </span>
    </div>
  );
}
