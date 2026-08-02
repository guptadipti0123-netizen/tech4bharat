import Image from "next/image";
import { MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";
import { aboutImages } from "@/lib/images";

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <Blob tone="accent" className="-right-28 top-10 h-72 w-72" animate={false} />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedSection>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-brand-50 to-secondary-50 px-4 py-1.5 text-sm font-semibold text-brand-700">
              Our Story
            </span>
            <h2 className="mt-4 text-[32px] font-extrabold tracking-tight text-ink-900 sm:text-[44px]">
              Born from a simple belief: great ideas shouldn&apos;t need a metro city zip code
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
              Tech4Bharat started at IIT Bombay to close a gap: brilliant ideas were being
              built across India, but the support to turn them into companies was
              concentrated in a handful of cities. Today, we back founders wherever they are
              with mentorship, capital access, and a community that goes the distance.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="group relative aspect-4/3 overflow-hidden rounded-4xl border-4 border-white shadow-xl">
              <Image
                src={aboutImages.team}
                alt="The Tech4Bharat team collaborating"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink-900/40 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-2 text-xs font-semibold text-ink-900 shadow-lg backdrop-blur-sm">
                <MapPin size={14} className="text-brand-600" /> IIT Bombay, Powai
              </span>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
