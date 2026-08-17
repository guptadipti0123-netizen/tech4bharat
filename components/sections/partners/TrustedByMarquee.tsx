import Image from "next/image";
import type { CSSProperties } from "react";

// Only the 4 institutes already named publicly on the Home page Partners section —
// keeps this strip consistent with what's already live rather than naming any
// institution whose MoU hasn't been signed yet.
const marqueePartners = [
  { name: "COEP Tech University", logo: "/images/partners/coep.jpg", accent: "#155E9A" },
  { name: "VJTI Mumbai", logo: "/images/partners/vjti.jpg", accent: "#2F80ED" },
  { name: "CDTIES IIT Bombay", logo: "/images/partners/iit-bombay.png", accent: "#4338CA" },
  { name: "C-DAC Pune", logo: "/images/partners/cdac.png", accent: "#0284C7" },
];

// Two semicircular notches (8px radius, left-center and right-center) — same mask
// technique as the Home page's ticket-stub Partners cards, so the notch shape stays
// consistent across the site. Each mask layer covers only its own half of the card, so
// no mask-composite is needed.
const ticketNotchStyle: CSSProperties = {
  WebkitMask:
    "radial-gradient(circle 8px at 0 50%, transparent 8px, black 8.5px) 0 0 / 50% 100% no-repeat, radial-gradient(circle 8px at 100% 50%, transparent 8px, black 8.5px) 100% 0 / 50% 100% no-repeat",
  mask: "radial-gradient(circle 8px at 0 50%, transparent 8px, black 8.5px) 0 0 / 50% 100% no-repeat, radial-gradient(circle 8px at 100% 50%, transparent 8px, black 8.5px) 100% 0 / 50% 100% no-repeat",
};

/** Infinite ticket-card slider — a compact, always-moving strip signalling ecosystem
 *  breadth before the reader even scrolls. Pauses on hover. */
export default function TrustedByMarquee() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-3">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent sm:w-32" />
        <div className="flex w-max items-center gap-4 animate-marquee hover:[animation-play-state:paused] sm:gap-6">
          {[...marqueePartners, ...marqueePartners].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              style={ticketNotchStyle}
              className="relative flex h-14 w-38 shrink-0 items-center gap-2 overflow-hidden rounded-[18px] border border-slate-200 bg-white px-3 shadow-[0_4px_14px_rgba(15,23,42,0.08)] sm:h-19 sm:w-50 sm:gap-3 sm:px-4"
            >
              <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1" style={{ backgroundColor: partner.accent }} />
              <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_2px_6px_rgba(15,23,42,0.08)] sm:h-10.5 sm:w-10.5">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={30}
                  height={30}
                  className="h-5.5 w-5.5 object-contain sm:h-7.5 sm:w-7.5"
                />
              </span>
              <span className="min-w-0 truncate text-[13px] font-semibold text-[#1F2937] sm:text-[16px]">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
