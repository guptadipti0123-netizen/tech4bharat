import Image from "next/image";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface CTAButton {
  label: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

interface CTASectionProps {
  image: string;
  eyebrow?: string;
  title: string;
  description?: string;
  buttons: CTAButton[];
  className?: string;
}

/** Full-width, image-backed call-to-action banner with a dark overlay and animated buttons. */
export default function CTASection({ image, eyebrow, title, description, buttons, className }: CTASectionProps) {
  return (
    <Container className={className}>
      <AnimatedSection>
        <div className="relative overflow-hidden rounded-3xl px-8 py-20 text-center shadow-2xl sm:px-16 sm:py-24">
          <Image src={image} alt="" fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-br from-brand-950/95 via-brand-900/90 to-brand-950/85" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            {eyebrow && (
              <span className="text-sm font-semibold uppercase tracking-wider text-accent-400">{eyebrow}</span>
            )}
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            {description && <p className="mt-4 text-lg text-white/70">{description}</p>}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {buttons.map((btn) => (
                <Button
                  key={btn.href + (typeof btn.label === "string" ? btn.label : "")}
                  href={btn.href}
                  size="lg"
                  variant={btn.variant ?? "secondary"}
                  className={
                    btn.variant === "outline"
                      ? "border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10"
                      : undefined
                  }
                >
                  {btn.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Container>
  );
}
