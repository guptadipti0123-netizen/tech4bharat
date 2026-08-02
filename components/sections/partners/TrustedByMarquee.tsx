import { getInitials } from "@/lib/utils";
import { allPartners } from "@/lib/partners";

/** Infinite logo slider — a compact, always-moving strip signalling ecosystem breadth
 *  before the reader even scrolls. Pauses on hover. */
export default function TrustedByMarquee() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-8">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
        Trusted by {allPartners.length}+ institutions across Bharat
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent sm:w-32" />
        <div className="flex w-max gap-10 animate-marquee hover:[animation-play-state:paused]">
          {[...allPartners, ...allPartners].map((partner, i) => (
            <span
              key={`${partner.name}-${i}`}
              className="flex shrink-0 items-center gap-2.5 text-sm font-semibold text-slate-500"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-600">
                {getInitials(partner.name)}
              </span>
              {partner.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
