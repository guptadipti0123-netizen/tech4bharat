import { cn } from "@/lib/utils";

type BadgeVariant = "brand" | "secondary" | "accent" | "neutral" | "success";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  brand: "bg-brand-50 text-brand-700",
  secondary: "bg-secondary-50 text-secondary-700",
  accent: "bg-accent-500/10 text-accent-600",
  neutral: "bg-slate-100 text-slate-600",
  success: "bg-emerald-50 text-emerald-700",
};

export default function Badge({ children, variant = "brand", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
