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
            "inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.22em]",
            isDark ? "text-accent-400" : "text-brand-600"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          eyebrow && "mt-3",
          "text-[1.2rem] font-semibold leading-[1.15] tracking-[-0.01em] sm:text-[1.5rem] lg:text-[2rem]",
          isDark ? "text-white" : "text-ink-900",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-2 text-[14px] leading-6 sm:mt-3 sm:text-[15px]",
            isDark ? "text-white/70" : "text-slate-600",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
