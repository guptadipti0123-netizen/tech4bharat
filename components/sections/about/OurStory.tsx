import Image from "next/image";
import { Lightbulb, MapPin, TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";
import { aboutImages } from "@/lib/images";

const storyBlocks = [
  {
    icon: Lightbulb,
    label: "The Gap",
    body: "Tech4Bharat started at IIT Bombay to close a gap: brilliant ideas were being built across India, but the support to turn them into companies was concentrated in a handful of cities.",
  },
  {
    icon: TrendingUp,
    label: "Today",
    body: "We back founders wherever they are with mentorship, capital access, and a community that goes the distance.",
  },
];

export default function OurStory() {
  return (
    <section id="our-story" className="relative overflow-hidden bg-white py-8 sm:py-12">
      <Blob tone="accent" className="-right-28 top-10 h-72 w-72" animate={false} />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              <span className="h-px w-8 bg-current opacity-50" aria-hidden="true" />
              Our Story
            </span>
            <h2 className="mt-4 text-[32px] font-extrabold tracking-tight text-ink-900 sm:text-[44px]">
              Born from a simple belief: great ideas shouldn&apos;t need a metro city zip code
            </h2>
            <div className="relative mt-8 max-w-lg space-y-7 border-l-2 border-brand-100 pl-7">
              {storyBlocks.map((block) => {
                const Icon = block.icon;
                return (
                  <div key={block.label} className="relative">
                    <span className="absolute -left-11 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-brand-700 text-white shadow-md shadow-brand-700/25">
                      <Icon size={15} />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wide text-brand-600">
                      {block.label}
                    </span>
                    <p className="mt-1 leading-relaxed text-slate-600">{block.body}</p>
                  </div>
                );
              })}
            </div>
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
