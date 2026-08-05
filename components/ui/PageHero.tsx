import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";
import DotGrid from "@/components/ui/DotGrid";

interface PageHeroProps {
  title: string;
  description: string;
  /** Optional background photo — rendered as a soft rounded frame beneath the copy when provided. */
  image?: string;
  /** Optional oversized, near-invisible watermark icon — gives each page's hero its own
   *  identity (a camera for Gallery, a calendar for Events, a map pin for Contact, …). */
  icon?: LucideIcon;
}

/**
 * Shared page hero. Height is always auto — driven by padding + content, never a fixed
 * or viewport-relative height — so long titles/descriptions can never get clipped. There
 * is no absolutely-positioned divider at the bottom: the gradient simply fades to the page
 * background, and the next section's own top padding provides the transition, so nothing
 * can ever overlap the text above it. Padding is intentionally compact (just enough to
 * clear the fixed navbar) so the first real section on every page starts almost
 * immediately — every page using this component shares this same tight rhythm. There is no
 * eyebrow badge above the title — every page leads with a single, direct heading.
 */
export default function PageHero({ title, description, image, icon: Icon }: PageHeroProps) {
  return (
    <section className="relative bg-linear-to-b from-brand-50 via-white to-white pb-7 pt-20 sm:pb-10 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <DotGrid className="left-0 top-0 h-full w-full text-brand-700/5" />
        <Blob tone="secondary" className="-left-24 -top-24 h-72 w-72" />
        <Blob tone="accent" className="-right-16 top-10 h-64 w-64" animate={false} />
        {Icon && (
          <Icon
            aria-hidden="true"
            strokeWidth={1}
            className="absolute -right-8 bottom-0 h-56 w-56 text-brand-700/6 sm:h-64 sm:w-64"
          />
        )}
      </div>

      <Container className="relative">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <h1 className="text-[32px] font-extrabold leading-tight tracking-tight text-ink-900 sm:text-[44px]">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">{description}</p>
        </AnimatedSection>

        {image && (
          <AnimatedSection
            delay={0.15}
            className="relative mx-auto mt-10 aspect-video max-w-4xl overflow-hidden rounded-[28px] border-4 border-white bg-white shadow-xl"
          >
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain"
            />
          </AnimatedSection>
        )}
      </Container>
    </section>
  );
}
