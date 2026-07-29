import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** "glass" is for use over photos/dark backgrounds. "gradient-border" is for special/featured moments. */
  variant?: "solid" | "glass" | "gradient-border";
}

const variantStyles = {
  solid: "border-slate-200 bg-white shadow-md hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/10",
  glass: "border-white/15 bg-white/10 backdrop-blur-xl shadow-lg hover:border-white/30 hover:bg-white/15",
};

export default function Card({ children, className, variant = "solid" }: CardProps) {
  if (variant === "gradient-border") {
    return (
      <div className="group relative h-full overflow-hidden rounded-3xl bg-linear-to-br from-brand-400 via-secondary-400 to-accent-400 p-px shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-900/10">
        <div className={cn("h-full rounded-[calc(1.5rem-1px)] bg-white p-8", className)}>{children}</div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1.5",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
