import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  /** Optional background photo — falls back to the plain brand gradient when omitted. */
  image?: string;
}

export default function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-950 pb-14 pt-32 text-white">
      {image && (
        <>
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-brand-950/85" />
        </>
      )}
      <Container className="relative">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80">
            {eyebrow}
          </span>
          <h1 className="mt-5 text-[30px] font-bold leading-tight tracking-tight sm:text-[42px]">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">{description}</p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
