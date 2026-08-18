import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  /** Escape hatch to override the h2's size/weight/tracking for a specific section
   *  without changing the default for every other page that uses this component. */
  titleClassName?: string;
  /** Same escape hatch as `titleClassName`, for the description paragraph. */
  descriptionClassName?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  className,
  titleClassName,
  descriptionClassName,
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
            "inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em]",
            isDark ? "text-accent-400" : "text-brand-600"
          )}
        >
          <span className="h-px w-8 bg-current opacity-50" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          eyebrow && "mt-4",
          "text-[22px] font-extrabold leading-[1.15] tracking-tight sm:text-[26px] lg:text-[30px]",
          isDark ? "text-white" : "text-ink-900",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-[14.5px] leading-relaxed sm:mt-4 sm:text-[16px]",
            isDark ? "text-white/80" : "text-slate-600",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
