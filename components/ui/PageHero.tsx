import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";
import DotGrid from "@/components/ui/DotGrid";
import SectionDivider from "@/components/ui/SectionDivider";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  /** Optional background photo — rendered as a soft rounded frame beneath the copy when provided. */
  image?: string;
  /** Optional oversized, near-invisible watermark icon — gives each page's hero its own
   *  identity (a camera for Gallery, a calendar for Events, a map pin for Contact, …). */
  icon?: LucideIcon;
}

export default function PageHero({ eyebrow, title, description, image, icon: Icon }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-brand-50 via-white to-white pb-10 pt-22">
      <DotGrid className="left-0 top-0 h-full w-full text-brand-700/5" />
      <Blob tone="secondary" className="-left-24 -top-24 h-72 w-72" />
      <Blob tone="accent" className="-right-16 top-10 h-64 w-64" animate={false} />
      {Icon && (
        <Icon
          aria-hidden="true"
          strokeWidth={1}
          className="pointer-events-none absolute -right-8 bottom-0 h-56 w-56 text-brand-700/6 sm:h-64 sm:w-64"
        />
      )}

      <Container className="relative">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-brand-50 to-secondary-50 px-4 py-1.5 text-sm font-semibold text-brand-700">
            {eyebrow}
          </span>
          <h1 className="mt-5 text-[32px] font-extrabold leading-tight tracking-tight text-ink-900 sm:text-[44px]">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">{description}</p>
        </AnimatedSection>

        {image && (
          <AnimatedSection delay={0.15} className="relative mx-auto mt-10 h-48 max-w-4xl overflow-hidden rounded-[28px] shadow-xl sm:h-72">
            <Image src={image} alt="" fill priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
          </AnimatedSection>
        )}
      </Container>

      <SectionDivider color="text-white" />
    </section>
  );
}
