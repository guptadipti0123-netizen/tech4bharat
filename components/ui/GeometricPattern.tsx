import { cn } from "@/lib/utils";

interface GeometricPatternProps {
  className?: string;
}

/** A faint, rangoli-inspired radial line motif — a subtle nod to Indian geometric
 *  ornamentation, used as an oversized corner accent rather than a literal illustration. */
export default function GeometricPattern({ className }: GeometricPatternProps) {
  const petals = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      className={cn("pointer-events-none absolute", className)}
    >
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <circle cx="200" cy="200" r="60" opacity="0.5" />
        <circle cx="200" cy="200" r="120" opacity="0.35" />
        <circle cx="200" cy="200" r="180" opacity="0.2" />
        {petals.map((deg) => (
          <line
            key={deg}
            x1="200"
            y1="200"
            x2={200 + 190 * Math.cos((deg * Math.PI) / 180)}
            y2={200 + 190 * Math.sin((deg * Math.PI) / 180)}
            opacity="0.15"
          />
        ))}
      </g>
    </svg>
  );
}
