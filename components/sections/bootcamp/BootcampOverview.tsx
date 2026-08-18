import Image from "next/image";
import { Clock, ListChecks, Mic2, Sprout, Target, TrendingUp, UserCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";
import DotGrid from "@/components/ui/DotGrid";

// The same real intro copy the section always had â€” "Tech4Bharat is organizing this
// One-Day Startup Bootcamp to support early-stage startups and social impact entrepreneurs
// through expert-led sessions, mentoring, networking, and investor readiness â€” all in a
// single, focused day" â€” just broken into scannable parts instead of one paragraph.
const infoBlocks = [
  {
    icon: Target,
    label: "Purpose",
    body: "Support early-stage startups and social impact entrepreneurs through expert guidance.",
  },
  {
    icon: ListChecks,
    label: "What You'll Gain",
    list: ["Expert-led sessions", "Mentorship", "Networking", "Investor readiness", "Product validation"],
  },
  {
    icon: Clock,
    label: "Format",
    body: "One intensive day designed for maximum learning and collaboration.",
  },
];

const highlights = [
  { icon: Mic2, label: "Expert Sessions" },
  { icon: UserCheck, label: "Mentorship" },
  { icon: TrendingUp, label: "Investor Readiness" },
  { icon: Sprout, label: "Startup Growth" },
];

/** Bootcamp Overview, redesigned from a single paragraph into a premium two-column
 *  container: a real photo on the left, the same intro copy broken into three scannable
 *  parts on the right, and four compact highlight chips along the bottom. */
export default function BootcampOverview() {
  return (
    <section className="relative overflow-hidden bg-brand-50 py-10 sm:py-11">
      <DotGrid className="left-0 top-0 h-full w-full text-brand-700/4" />
      <Blob tone="brand" className="-left-24 top-0 h-72 w-72" />
      <Blob tone="secondary" className="-right-20 bottom-0 h-64 w-64" animate={false} />

      <Container className="relative">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[22px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B2A4A] sm:text-[26px] lg:text-[30px]">
              Bootcamp Overview
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-9">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
              <div className="group relative aspect-4/3 overflow-hidden rounded-3xl shadow-[0_8px_24px_rgba(6,26,44,0.1)] lg:col-span-2">
                <Image
                  src="/images/gallery/gallery-6.jpg"
                  alt="Founders working through a plan together at Bootcamp"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-105"
                />
              </div>

              <div className="lg:col-span-3">
                {infoBlocks.map((block, i) => {
                  const Icon = block.icon;
                  return (
                    <div
                      key={block.label}
                      className={i > 0 ? "mt-5 border-t border-slate-100 pt-5" : ""}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                          <Icon size={16} />
                        </span>
                        <h3 className="text-sm font-bold uppercase tracking-wide text-ink-900">
                          {block.label}
                        </h3>
                      </div>
                      {block.body && (
                        <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{block.body}</p>
                      )}
                      {block.list && (
                        <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-[15px] text-slate-600">
                          {block.list.map((item) => (
                            <li key={item} className="flex items-center gap-1.5">
                              <span className="h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 border-t border-slate-100 pt-6 sm:grid-cols-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50/60 px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-md"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-white">
                    <Icon size={16} />
                  </span>
                  <span className="text-xs font-bold leading-tight text-ink-900">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
