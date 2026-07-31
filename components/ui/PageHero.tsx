import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  /** Optional background photo — rendered as a soft rounded frame beneath the copy when provided. */
  image?: string;
}

export default function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-brand-50 via-white to-white pb-16 pt-36">
      <Blob tone="secondary" className="-left-24 -top-24 h-72 w-72" />
      <Blob tone="accent" className="-right-16 top-10 h-64 w-64" animate={false} />

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
          <AnimatedSection delay={0.15} className="relative mx-auto mt-12 h-56 max-w-4xl overflow-hidden rounded-[28px] shadow-xl sm:h-80">
            <Image src={image} alt="" fill priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
          </AnimatedSection>
        )}
      </Container>
    </section>
  );
}
