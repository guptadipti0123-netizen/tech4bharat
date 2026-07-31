import { cn } from "@/lib/utils";

type BlobTone = "brand" | "secondary" | "accent";

interface BlobProps {
  tone?: BlobTone;
  className?: string;
  animate?: boolean;
}

const toneStyles: Record<BlobTone, string> = {
  brand: "bg-brand-300/30",
  secondary: "bg-secondary-300/30",
  accent: "bg-accent-300/30",
};

/** Soft, blurred organic shape used as ambient background decoration behind sections. */
export default function Blob({ tone = "brand", className, animate = true }: BlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        toneStyles[tone],
        animate && "animate-blob",
        className
      )}
    />
  );
}
