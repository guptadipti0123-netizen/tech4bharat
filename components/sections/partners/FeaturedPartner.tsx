import { Landmark } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";
import { getInitials } from "@/lib/utils";
import { featuredPartner } from "@/lib/partners";

/** Featured-partner spotlight — a single, larger glass card anchoring the page before the
 *  category grids, so the page never opens on a wall of small identical logos. */
export default function FeaturedPartner() {
  return (
    <section className="relative overflow-hidden bg-brand-50 py-16 sm:py-20">
      <Blob tone="brand" className="-left-24 top-0 h-72 w-72" />
      <Blob tone="accent" className="-right-16 bottom-0 h-64 w-64" animate={false} />

      <Container className="relative">
        <AnimatedSection>
          <div className="mx-auto max-w-4xl rounded-[28px] bg-linear-to-br from-brand-300 via-secondary-300 to-accent-300 p-px shadow-[0_20px_50px_rgba(31,78,61,0.16)]">
            <div className="glass-surface flex flex-col items-center gap-8 rounded-[27px] p-8 text-center sm:p-12 lg:flex-row lg:text-left">
              <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-brand-700 text-2xl font-extrabold text-white shadow-lg shadow-brand-700/25">
                {getInitials(featuredPartner.name)}
              </span>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-700">
                  <Landmark size={13} /> {featuredPartner.category}
                </span>
                <h2 className="mt-3 text-2xl font-extrabold text-ink-900 sm:text-3xl">{featuredPartner.name}</h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
                  {featuredPartner.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-brand-700">{featuredPartner.stat}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
