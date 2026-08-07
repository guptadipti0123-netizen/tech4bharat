import Image from "next/image";
import { allPartners } from "@/lib/partners";

// Only partners with a real, verified official logo (sourced from each institution's own
// Wikipedia page) are shown — no initials, no generic icons, no placeholders.
const logoPartners = allPartners.filter((partner) => partner.logo);

// Explicit accent color for the institutions the redesign named specifically. Every other
// logo partner cycles through the same palette so the strip never looks monotonous.
const accentMap: Record<string, string> = {
  "BITS Pilani": "#D4A017", // Gold
  "COEP Technological University": "#1F4E3D", // Green
  "VJTI Mumbai": "#1B2E4A", // Navy
  "Startup India": "#1F4E3D", // Green
  "Atal Innovation Mission": "#6D28D9", // Purple
  "NITI Aayog": "#EA580C", // Orange
  MSME: "#059669", // Emerald
};

const accentCycle = Object.values(accentMap);

// Two semicircular notches (8px radius, left-center and right-center) — same mask
// technique as the Home page's ticket-stub Partners cards, so the notch shape stays
// consistent across the site. Each mask layer covers only its own half of the card, so
// no mask-composite is needed.
const ticketNotchStyle: React.CSSProperties = {
  WebkitMask:
    "radial-gradient(circle 8px at 0 50%, transparent 8px, black 8.5px) 0 0 / 50% 100% no-repeat, radial-gradient(circle 8px at 100% 50%, transparent 8px, black 8.5px) 100% 0 / 50% 100% no-repeat",
  mask: "radial-gradient(circle 8px at 0 50%, transparent 8px, black 8.5px) 0 0 / 50% 100% no-repeat, radial-gradient(circle 8px at 100% 50%, transparent 8px, black 8.5px) 100% 0 / 50% 100% no-repeat",
};

/** Infinite ticket-card slider — a compact, always-moving strip signalling ecosystem
 *  breadth before the reader even scrolls. Pauses on hover. Same scroll mechanics as
 *  before; each card's circular badge now shows the institution's real official logo
 *  instead of initials. */
export default function TrustedByMarquee() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-3">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent sm:w-32" />
        <div className="flex w-max items-center gap-6 animate-marquee hover:[animation-play-state:paused]">
          {[...logoPartners, ...logoPartners].map((partner, i) => {
            const accent = accentMap[partner.name] ?? accentCycle[i % accentCycle.length];
            return (
              <div
                key={`${partner.name}-${i}`}
                style={ticketNotchStyle}
                className="relative flex h-19 w-50 shrink-0 items-center gap-3 overflow-hidden rounded-[18px] border border-slate-200 bg-white px-4 shadow-[0_4px_14px_rgba(15,23,42,0.08)]"
              >
                <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1" style={{ backgroundColor: accent }} />
                <span className="relative flex h-10.5 w-10.5 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_2px_6px_rgba(15,23,42,0.08)]">
                  <Image
                    src={partner.logo!}
                    alt={`${partner.name} logo`}
                    width={30}
                    height={30}
                    className="h-7.5 w-7.5 object-contain"
                  />
                </span>
                <span className="min-w-0 truncate text-[16px] font-semibold text-[#1F2937]">{partner.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
