import { cn } from "@/lib/utils";

interface SectionDividerProps {
  /** Tailwind text-color class — the wave is filled with `currentColor`, matching the section below it. */
  color: string;
  flip?: boolean;
  className?: string;
}

/** A subtle wave divider dropped at the bottom of a section to soften the transition into the next one. */
export default function SectionDivider({ color, flip = false, className }: SectionDividerProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full translate-y-1 sm:h-24",
        color,
        flip && "rotate-180",
        className
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="h-full w-full" fill="currentColor">
        <path d="M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,50 L1440,100 L0,100 Z" />
      </svg>
    </div>
  );
}
