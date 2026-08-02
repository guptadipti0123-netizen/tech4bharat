import Image from "next/image";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { GalleryPhoto } from "@/lib/gallery/service";

interface QuoteGalleryProps {
  image: GalleryPhoto;
}

/** Compact glass-card layout — a small frosted quote panel over a slowly-drifting photo.
 *  Kept deliberately short: this is a breather beat between bigger sections, not a showcase. */
export default function QuoteGallery({ image }: QuoteGalleryProps) {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16">
      <div className="absolute inset-0 animate-[quote-drift_16s_ease-in-out_infinite_alternate]">
        <Image src={image.src} alt="" fill loading="lazy" sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-[#1F4E3D]/85 via-[#1F4E3D]/75 to-[#1F4E3D]/85" />

      <Container className="relative">
        <AnimatedSection animation="scale" className="mx-auto max-w-lg">
          <div className="glass-surface rounded-3xl border border-white/50 p-6 text-center shadow-2xl sm:p-8">
            <Quote className="mx-auto h-7 w-7 text-[#D4A017]" strokeWidth={1.5} />
            <p className="mt-4 text-lg font-semibold italic leading-snug text-[#1F4E3D] sm:text-xl">
              &ldquo;Innovation happens when people collaborate.&rdquo;
            </p>
            <div className="mx-auto mt-4 h-px w-12 bg-[#D4A017]" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#1F4E3D]/60">
              Tech4Bharat
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
