import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

/** Home hero — a large abstract geometric background: a base violet→blue→cyan→mint diagonal
 *  gradient with several big overlapping clip-path polygons layered on top (violet-blue
 *  top-left, a diagonal medium-blue band, a bright-blue central mass, a cyan region on the
 *  right, a soft mint glow bottom-right) so the composition reads as one faceted abstract
 *  scene, not a flat gradient. A single soft radial wash sits behind the text column only,
 *  so the geometry stays visible everywhere else. No photo, no busy small shapes.
 *  Top padding (pt-20/24) matches PageHero's navbar-clearance convention — the Navbar is
 *  `fixed` (measured ~70px desktop / ~64px mobile), so every page's first section needs
 *  this offset or it renders underneath it. The panel's min-height fills the remaining
 *  viewport below the navbar (capped, not forced, so mobile never gets absurdly tall) and
 *  centers its content vertically, so this reads as the site's main hero, not a small card. */
export default function Hero() {
  return (
    <section id="top" className="bg-[#F5FAFE] pb-6 pt-20 sm:pb-8 sm:pt-24">
      <Container>
        <div
          className="relative flex min-h-[460px] items-center overflow-hidden rounded-[24px] px-[18px] py-12 sm:min-h-[520px] sm:px-8 sm:py-14 lg:min-h-[calc(100vh-168px)] lg:px-[30px] lg:py-16"
          style={{
            backgroundImage: "linear-gradient(135deg, #4435FF 0%, #347CFF 30%, #159FEF 55%, #08C7E8 75%, #55E3C4 100%)",
          }}
        >
          {/* Large violet-blue mass, top-left */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0% 0%, 55% 0%, 30% 100%, 0% 100%)",
              background: "linear-gradient(150deg, #4435FF 0%, #3F4FFF 100%)",
            }}
          />
          {/* Diagonal medium-blue band crossing the left/middle */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(22% 0%, 66% 0%, 46% 100%, 6% 100%)",
              background: "linear-gradient(160deg, rgba(52,124,255,0.65) 0%, rgba(21,159,239,0.4) 100%)",
            }}
          />
          {/* Bright electric-blue central mass */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(42% 0%, 100% 0%, 100% 58%, 58% 100%, 32% 100%)",
              background: "linear-gradient(140deg, #159FEF 0%, #08C7E8 100%)",
            }}
          />
          {/* Cyan / turquoise region toward the right */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(68% 0%, 100% 0%, 100% 100%, 74% 100%)",
              background: "linear-gradient(160deg, rgba(8,199,232,0.6) 0%, rgba(36,214,216,0.45) 100%)",
            }}
          />
          {/* Subtle mint glow, lower-right */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 55% 48% at 92% 96%, rgba(154,242,194,0.5) 0%, rgba(154,242,194,0) 65%)",
            }}
          />
          {/* Very subtle dark wash, centered only behind the text column, for legibility */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 65% 60% at 50% 50%, rgba(5,10,30,0.32) 0%, rgba(5,10,30,0) 68%)",
            }}
          />

          <div className="relative z-10 mx-auto w-full max-w-xl text-center">
            <AnimatedSection>
              <h1 className="text-balance text-[20px] font-bold leading-[1.25] tracking-[-0.01em] sm:text-[22px] lg:text-[24px]">
                <span className="text-white">A National Platform for</span>{" "}
                <span className="text-[#ffe08a]">Social Entrepreneurship and Innovation</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <p className="mx-auto mt-3 max-w-md text-[13.5px] leading-[1.6] text-[#EAF4FB]">
                Tech4Bharat is proposed to be established as a Section 8 Company.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.18}>
              <div className="mt-5 flex flex-row flex-wrap items-center justify-center gap-2.5">
                <Button
                  href="/programs"
                  size="sm"
                  className="w-fit justify-center bg-white px-4 py-2 text-[13px] text-[#0B2A4A] shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:bg-white/90 hover:text-[#0B2A4A]"
                >
                  Explore Programs <ArrowRight size={15} />
                </Button>
                <Button
                  href="/contact"
                  size="sm"
                  variant="outline"
                  className="w-fit justify-center border-white/70 bg-white/10 px-4 py-2 text-[13px] text-white backdrop-blur-sm hover:border-white hover:bg-white/20 hover:text-white"
                >
                  Contact Us
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
