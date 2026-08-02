import { cn } from "@/lib/utils";

interface DotGridProps {
  className?: string;
}

/** A faint dot-grid texture — the kind of ambient premium-SaaS background detail that keeps
 *  a flat section from ever reading as empty, without competing with the content on top. */
export default function DotGrid({ className }: DotGridProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)",
        backgroundSize: "28px 28px",
        maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 90%)",
        WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 40%, transparent 90%)",
      }}
    />
  );
}
