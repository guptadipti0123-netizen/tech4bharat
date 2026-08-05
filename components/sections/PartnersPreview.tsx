import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { partners } from "@/lib/data";

const loopedPartners = [...partners, ...partners];

/** Partners preview — a slow, continuous marquee of plain institution wordmarks. No avatar
 *  circles, no initials, no fabricated logos — the codebase has no real logo assets for
 *  these institutions, so a clean typographic treatment is the honest choice. */
export default function PartnersPreview() {
  return (
    <section id="partners" className="bg-white py-8 sm:py-12">
      <Container>
        <AnimatedSection className="text-center">
          <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
            <span className="h-px w-8 bg-current opacity-50" aria-hidden="true" />
            Ecosystem
          </span>
          <h2 className="mt-4 text-balance text-[32px] font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-[40px]">
            Partners
          </h2>
        </AnimatedSection>
      </Container>

      <AnimatedSection delay={0.1} className="relative mt-8">
        <div
          className="relative overflow-hidden border-y border-slate-100 py-2"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
            {loopedPartners.map((partner, i) => (
              <div
                key={partner.name + i}
                className="flex h-20 w-56 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 text-center"
              >
                <span className="text-base font-bold text-ink-900">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
