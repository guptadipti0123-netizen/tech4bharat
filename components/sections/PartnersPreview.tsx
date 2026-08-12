import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

// The 7 real Knowledge Partners already established for the site (same list used on the
// About page), each paired with its real official logo asset — no initials, no generic
// icons, no fabricated names.
const partners = [
  { name: "COEP Tech", logo: "/images/partners/coep.jpg" },
  { name: "IIT Bombay", logo: "/images/partners/iit-bombay.png" },
  { name: "VJTI Mumbai", logo: "/images/partners/vjti.jpg" },
  { name: "Startup India", logo: "/images/partners/startup-india.png" },
  { name: "MSME", logo: "/images/partners/msme.png" },
  { name: "NITI Aayog", logo: "/images/partners/niti-aayog.png" },
  { name: "Atal Innovation Mission", logo: "/images/partners/atal-innovation-mission.png" },
];

const loopedPartners = [...partners, ...partners];

// Four soft premium gradients, cycled by index (not Math.random, so server and client
// render identically and there's no hydration mismatch).
const gradients = [
  "linear-gradient(135deg, #F7FBF8 0%, #EAF6EE 100%)",
  "linear-gradient(135deg, #FFFDF8 0%, #FFF3D6 100%)",
  "linear-gradient(135deg, #F6F9FF 0%, #EAF2FF 100%)",
  "linear-gradient(135deg, #FAFAFA 0%, #F0F0F0 100%)",
];

// Left accent-strip colors, cycled independently of the gradients so combinations vary
// more across the 7 partners.
const accentColors = [
  "#163B2D", // Dark Green
  "#D4A017", // Gold
  "#1B2E4A", // Navy
  "#2F5A56", // Teal
  "#2D5A45", // Forest Green
];

// Two semicircular notches (16px diameter, left-center and right-center) — each mask layer
// covers only its own half of the card, so no mask-composite is needed and the technique
// stays broadly compatible. Combined with `overflow-hidden` + rounded corners on the same
// element, the result is a rounded rectangle with a clean notch cut from each side edge —
// the mask also clips the border and the accent strip, so both show the notch correctly.
const ticketNotchStyle: React.CSSProperties = {
  WebkitMask:
    "radial-gradient(circle 8px at 0 50%, transparent 8px, black 8.5px) 0 0 / 50% 100% no-repeat, radial-gradient(circle 8px at 100% 50%, transparent 8px, black 8.5px) 100% 0 / 50% 100% no-repeat",
  mask: "radial-gradient(circle 8px at 0 50%, transparent 8px, black 8.5px) 0 0 / 50% 100% no-repeat, radial-gradient(circle 8px at 100% 50%, transparent 8px, black 8.5px) 100% 0 / 50% 100% no-repeat",
};

/** Partners — a continuous right-to-left marquee of premium ticket-stub cards. Same shape
 *  and scroll behavior as before; this pass only strengthens the visual presence (gradient,
 *  border, shadow, left accent strip) so the cards read as real cards against the page. */
export default function PartnersPreview() {
  return (
    <section id="partners" className="bg-[#F8FAF9] py-6 sm:py-8">
      <Container>
        <AnimatedSection className="text-center">
          <h2 className="mx-auto max-w-2xl text-balance text-[24px] font-bold leading-[1.2] text-ink-900 sm:text-[30px] lg:text-[34px]">
            Partners
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-balance text-base leading-relaxed text-slate-600">
            Institutions and organizations supporting the Tech4Bharat ecosystem.
          </p>
        </AnimatedSection>
      </Container>

      <AnimatedSection delay={0.1} className="relative mt-10">
        <div
          className="relative overflow-hidden py-2"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee gap-5.5 hover:[animation-play-state:paused]">
            {loopedPartners.map((partner, i) => (
              <div
                key={partner.name + i}
                style={{ ...ticketNotchStyle, background: gradients[i % gradients.length] }}
                className={cn(
                  "group relative flex min-h-20 w-44 shrink-0 items-center gap-2 overflow-hidden rounded-[18px] border-[1.5px] border-[rgba(22,59,45,0.15)] px-4 py-2.5 shadow-[0_10px_28px_rgba(15,23,42,0.10)] transition-all duration-250 hover:-translate-y-1.5 hover:border-[#1F4E3D] hover:shadow-[0_18px_40px_rgba(15,23,42,0.18)] hover:brightness-105 sm:min-h-22.5 sm:w-47.75 lg:min-h-25 lg:w-51.5"
                )}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-1"
                  style={{ backgroundColor: accentColors[i % accentColors.length] }}
                />
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-[rgba(22,59,45,0.15)] sm:h-9 sm:w-9">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={26}
                    height={26}
                    className="h-5.5 w-5.5 object-contain sm:h-6.5 sm:w-6.5"
                  />
                </span>
                <span className="font-(family-name:--font-poppins) min-w-0 flex-1 text-[13px] font-bold leading-tight tracking-[0.2px] text-[#163B2D] sm:text-[14px]">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
