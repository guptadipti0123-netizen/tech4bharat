import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { GalleryPhoto } from "@/lib/gallery/service";

interface CTASectionProps {
  image: GalleryPhoto;
}

/** Closing CTA banner. Purely presentational: the background photo arrives as a prop. */
export default function CTASection({ image }: CTASectionProps) {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-[40px] px-8 py-20 text-center shadow-2xl sm:px-16 sm:py-24">
            <Image src={image.src} alt="" fill loading="lazy" sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-br from-[#1F4E3D]/95 via-[#1F4E3D]/90 to-[#173d2f]/95" />
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 animate-blob rounded-full"
              style={{ background: "radial-gradient(circle, rgba(212,160,23,0.3), transparent 70%)" }}
            />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#D4A017]">
                Get Involved
              </span>
              <h2 className="mt-3 text-[32px] font-extrabold text-white sm:text-[44px]">
                Become Part of India&apos;s Innovation Journey
              </h2>
              <p className="mt-4 text-lg text-white/75">
                Join a nationwide community of founders, mentors, and institutions building
                Bharat&apos;s startup future.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  href="/programs"
                  size="lg"
                  className="bg-[#D4A017] text-[#1F4E3D] shadow-lg shadow-[#D4A017]/25 hover:bg-[#e0ac1c] hover:shadow-xl hover:shadow-[#D4A017]/30"
                >
                  Join Programs <ArrowRight size={18} />
                </Button>
                <Button
                  href="/contact"
                  size="lg"
                  variant="outline"
                  className="border-white/25 bg-white/5 text-white backdrop-blur-md hover:border-white hover:bg-white/10"
                >
                  <Mail size={18} /> Contact Us
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
