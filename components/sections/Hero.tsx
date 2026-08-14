import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

/** Home hero — a full-bleed, full-viewport-height hero with a real event photo (Tech4Bharat's
 *  inaugural workshop session) as the background, using object-contain (never object-cover)
 *  so the complete photo is always visible — no cropping on any side, at any breakpoint. The
 *  photo sits over a deep-blue gradient base, which fills any letterboxed space around it,
 *  with a dark wash on top so the white/gold heading and buttons stay readable. */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[560px] items-center overflow-hidden pt-16 sm:pt-17.5 lg:min-h-screen"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(80,140,255,0.35) 0%, rgba(80,140,255,0) 60%), linear-gradient(160deg, #050E3D 0%, #0B23A8 45%, #144FD6 75%, #1C87E0 100%)",
      }}
    >
      {/* Event photo — object-contain guarantees the complete image is shown, never
          cropped/zoomed/stretched on any side; the gradient behind it fills any letterboxing. */}
      <div className="absolute inset-0">
        <Image
          src="/images/legacy/workshops/day1-i1-inaugural-session.png"
          alt="Tech4Bharat's inaugural workshop session and opening ceremony"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
      </div>

      {/* Dark wash on top of the photo, for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(180deg, rgba(5,14,61,0.55) 0%, rgba(5,14,61,0.72) 100%)",
        }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <AnimatedSection>
            <h1 className="text-balance text-[24px] font-extrabold leading-[1.15] tracking-[-0.02em] sm:text-[30px] lg:text-[38px]">
              <span className="text-white">A National Platform for</span>{" "}
              <span className="text-[#ffe08a]">Social Entrepreneurship and Innovation</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-[1.6] text-[#DCE8FF] sm:text-[17px] lg:mx-0">
              Tech4Bharat is proposed to be established as a Section 8 Company.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.18}>
            <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Button
                href="/programs"
                size="md"
                className="w-fit justify-center bg-white px-6 py-3 text-[14px] text-[#0B2A4A] shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:bg-white/90 hover:text-[#0B2A4A]"
              >
                Explore Programs <ArrowRight size={16} />
              </Button>
              <Button
                href="/contact"
                size="md"
                variant="outline"
                className="w-fit justify-center border-white/70 bg-white/10 px-6 py-3 text-[14px] text-white backdrop-blur-sm hover:border-white hover:bg-white/20 hover:text-white"
              >
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
