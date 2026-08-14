import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

/** A rough, stylized India silhouette (not a geographically precise coastline) — blurred
 *  into a soft glow behind a scatter of bright "city" dots, evoking a glowing digital-network
 *  map without needing pixel-accurate borders. Built entirely in SVG, no image asset. */
function GlowingIndiaMap() {
  const indiaPath =
    "M35,0 L55,0 L60,10 L75,15 L70,25 L78,30 L65,35 L68,45 L72,55 L68,70 L55,85 L45,80 L40,65 L35,50 L25,35 L15,25 L20,15 L28,5 Z";
  const cities = [
    { x: 42, y: 20, r: 1.6 }, // Delhi
    { x: 30, y: 52, r: 1.3 }, // Mumbai
    { x: 45, y: 68, r: 1.3 }, // Bengaluru
    { x: 64, y: 38, r: 1.3 }, // Kolkata
    { x: 50, y: 76, r: 1.1 }, // Chennai
  ];

  return (
    <svg viewBox="0 0 90 90" className="h-full w-full" aria-hidden="true">
      <defs>
        <filter id="india-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="dot-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>
      <path d={indiaPath} fill="rgba(180,220,255,0.16)" stroke="rgba(200,230,255,0.35)" strokeWidth="0.4" filter="url(#india-glow)" />
      {cities.map((c, i) => (
        <g key={i}>
          <circle cx={c.x} cy={c.y} r={c.r * 2.2} fill="rgba(255,255,255,0.35)" filter="url(#dot-glow)" />
          <circle cx={c.x} cy={c.y} r={c.r} fill="#FFE08A" />
        </g>
      ))}
    </svg>
  );
}

/** Home hero — a full-bleed, full-viewport-height hero (no rounded panel, no side inset)
 *  with a deep-blue gradient, a faint starfield texture, and a glowing stylized India map on
 *  the right, styled after a reference "big bold title over a glowing tech map" hero. Content
 *  and copy are unchanged from the site's existing hero — only the background treatment,
 *  scale, and left-aligned layout are new. */
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
      {/* Lightens the hero on phones/tablets only — the full-strength dark gradient above is
          tuned for the full-screen desktop treatment and reads too dark/heavy at a shorter
          mobile height, so a soft light-blue wash sits on top of it below the lg breakpoint. */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          backgroundImage:
            "linear-gradient(160deg, rgba(78,140,255,0.55) 0%, rgba(70,165,255,0.4) 45%, rgba(120,195,255,0.25) 100%)",
        }}
      />

      {/* Faint starfield texture */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(1.5px 1.5px at 10% 20%, white, transparent), radial-gradient(1.5px 1.5px at 30% 70%, white, transparent), radial-gradient(1px 1px at 50% 15%, white, transparent), radial-gradient(1.5px 1.5px at 70% 45%, white, transparent), radial-gradient(1px 1px at 85% 80%, white, transparent), radial-gradient(1.5px 1.5px at 20% 90%, white, transparent), radial-gradient(1px 1px at 60% 60%, white, transparent), radial-gradient(1.5px 1.5px at 92% 30%, white, transparent)",
          backgroundSize: "600px 600px",
        }}
      />

      {/* Glowing India map, right side, hidden on small screens to avoid crowding the text */}
      <div className="pointer-events-none absolute -right-10 top-1/2 hidden h-[85%] w-[55%] -translate-y-1/2 opacity-90 md:block lg:right-0 lg:w-[48%]">
        <GlowingIndiaMap />
      </div>

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
