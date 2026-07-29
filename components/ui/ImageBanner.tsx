import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageBannerProps {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  description?: string;
  height?: string;
  className?: string;
}

/** Full-bleed photo banner with a bottom-anchored caption — used as a visual break between sections. */
export default function ImageBanner({
  src,
  alt,
  eyebrow,
  title,
  description,
  height = "h-80 sm:h-96",
  className,
}: ImageBannerProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl shadow-xl", height, className)}>
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-ink-900/85 via-ink-900/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
        {eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-400">{eyebrow}</span>
        )}
        <h3 className="mt-2 max-w-xl text-2xl font-bold text-white sm:text-3xl">{title}</h3>
        {description && <p className="mt-2 max-w-xl text-white/70">{description}</p>}
      </div>
    </div>
  );
}
