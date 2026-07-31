import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  className,
}: SectionTitleProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide",
            isDark
              ? "bg-white/10 text-accent-400"
              : "bg-linear-to-r from-brand-50 to-secondary-50 text-brand-700"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 text-[32px] font-extrabold leading-[1.15] tracking-tight sm:text-[44px]",
          isDark ? "text-white" : "text-ink-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-lg leading-relaxed", isDark ? "text-white/70" : "text-slate-600")}>
          {description}
        </p>
      )}
    </div>
  );
}
