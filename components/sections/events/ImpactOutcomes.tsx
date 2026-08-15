import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

const outcomes = [
  {
    num: "01",
    tag: "Ecosystem",
    title: "Strong Startup Ecosystem",
    description: "Connecting founders with active mentors, investors, and industry leaders across the network.",
    accent: "#155E9A",
  },
  {
    num: "02",
    tag: "Workshops",
    title: "Practical & Hands-on Learning",
    description: "Intensive deep-dives, real-world case simulations, and actionable startup guidance.",
    accent: "#2F80ED",
  },
  {
    num: "03",
    tag: "Alliances",
    title: "Strategic Multi-Sector Networking",
    description: "Meaningful bridges across top academia, industry partners, and government bodies.",
    accent: "#0D9488",
  },
];

const kpis = [
  { value: "8+", label: "Startups" },
  { value: "6+", label: "Mentors" },
  { value: "4+", label: "Workshops" },
];

export default function ImpactOutcomes() {
  return (
    <section id="impact-outcomes" className="bg-sand-50 py-6 sm:py-9">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Impact & Outcomes"
            description="Key outcomes, learnings, and ecosystem reach from Tech4Bharat programs."
            titleClassName="text-[19px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B2A4A] sm:text-[23px] lg:text-[27px]"
            descriptionClassName="mt-1 text-[12px] sm:mt-1.5 sm:text-[14px] font-medium leading-relaxed text-[#526777]"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-5 sm:mt-7">
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm sm:rounded-3xl">
            <div className="grid lg:grid-cols-[44fr_56fr]">
              {/* Left Column: Workshop Photo with Embedded Stats Glass Bar */}
              <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-full bg-slate-900 overflow-hidden flex flex-col justify-end">
                <Image
                  src="/images/legacy/policy-workshop-3.jpg"
                  alt="Students and faculty at the closing session of a Tech4Bharat workshop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover object-center opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                {/* Embedded Stats Bar over Photo */}
                <div className="relative z-10 grid grid-cols-3 divide-x divide-white/15 bg-slate-950/70 p-2.5 sm:p-3.5 backdrop-blur-md border-t border-white/15">
                  {kpis.map((kpi) => (
                    <div key={kpi.label} className="text-center px-1">
                      <p className="text-[16px] sm:text-[19px] font-extrabold text-white leading-none tracking-tight">
                        {kpi.value}
                      </p>
                      <p className="mt-0.5 text-[9.5px] sm:text-[11px] font-medium text-slate-300">
                        {kpi.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Clean Connected Outcomes Stream */}
              <div className="flex flex-col justify-between p-3.5 sm:p-6 lg:p-7 divide-y divide-slate-100">
                {outcomes.map((item) => (
                  <div
                    key={item.num}
                    className="group relative flex gap-3 py-3 first:pt-0 last:pb-0 transition-all"
                  >
                    {/* Number index indicator */}
                    <div className="flex flex-col items-center">
                      <span className="flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[10.5px] sm:text-[12px] font-bold text-[#155E9A] group-hover:bg-[#155E9A] group-hover:text-white transition-colors">
                        {item.num}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-[12.5px] sm:text-[14.5px] font-bold text-[#0B2A4A] group-hover:text-[#155E9A] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <span className="rounded-full bg-slate-100 px-1.5 py-0.2 text-[8px] sm:text-[9px] font-semibold text-slate-600">
                          {item.tag}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[10.5px] sm:text-[12px] leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
