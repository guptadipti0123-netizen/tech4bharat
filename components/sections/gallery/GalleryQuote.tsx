import Image from "next/image";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function GalleryQuote() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <Image
        src="/images/gallery/gallery-5.jpg"
        alt=""
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#1F4E3D]/85 via-[#1F4E3D]/75 to-[#1F4E3D]/85" />

      <Container className="relative">
        <AnimatedSection animation="scale" className="mx-auto max-w-3xl">
          <div className="glass-surface rounded-[32px] border border-white/50 p-10 text-center shadow-2xl sm:p-16">
            <Quote className="mx-auto h-10 w-10 text-[#D4A017]" strokeWidth={1.5} />
            <p className="mt-6 text-2xl font-semibold italic leading-snug text-[#1F4E3D] sm:text-4xl">
              &ldquo;Innovation happens when people collaborate.&rdquo;
            </p>
            <div className="mx-auto mt-7 h-px w-16 bg-[#D4A017]" />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#1F4E3D]/60">
              Tech4Bharat
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
