import { cn } from "@/lib/utils";

interface GeometricPatternProps {
  className?: string;
}

interface GridTextureProps {
  className?: string;
}

/** A faint linear grid — thin hairline rows and columns, the quiet structural texture
 *  premium SaaS heroes use behind gradients and blobs so the space never reads as flat. */
export function GridTexture({ className }: GridTextureProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage:
          "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        WebkitMaskImage: "linear-gradient(to bottom, black, transparent 85%)",
      }}
    />
  );
}

interface InnovationIllustrationProps {
  className?: string;
}

/** A near-invisible line-art illustration — a growth curve threading through a
 *  connected network of nodes — used as an oversized ambient watermark rather than a
 *  literal graphic. Evokes an innovation ecosystem, not any single startup artifact. */
export function InnovationIllustration({ className }: InnovationIllustrationProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      fill="none"
      className={cn("pointer-events-none absolute", className)}
    >
      <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="200" cy="200" r="105" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path
        d="M60 300 L140 260 L200 275 L260 190 L330 130"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <path
        d="M140 260 L200 190 M260 190 L200 130 M200 130 L330 130 M200 130 L200 275"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.3"
      />
      <circle cx="60" cy="300" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="140" cy="260" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="200" cy="275" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="260" cy="190" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="200" cy="130" r="5" fill="currentColor" opacity="0.55" />
      <circle cx="330" cy="130" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
    </svg>
  );
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
