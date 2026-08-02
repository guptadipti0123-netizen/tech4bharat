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
        "group flex h-32 flex-col items-center justify-center gap-3 rounded-3xl border border-slate-200 bg-white p-4 text-center shadow-[0_4px_20px_rgba(22,58,58,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-brand-200 hover:shadow-[0_16px_40px_rgba(22,58,58,0.12)]",
        className
      )}
    >
      <span
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600",
          "transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white"
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
