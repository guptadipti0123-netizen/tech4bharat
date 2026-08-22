import { ArrowRight, Building2, GraduationCap, Landmark, University } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const partners = [
  {
    name: "COEP Tech University",
    monogram: "COEP",
    location: "Pune",
    type: "Academic & Incubation",
    badge: "Academic",
    icon: University,
    gradient: "from-[#0B2A4A] to-[#155E9A]",
    accent: "#155E9A",
  },
  {
    name: "VJTI Mumbai",
    monogram: "VJTI",
    location: "Mumbai",
    type: "Technology & Research",
    badge: "Research",
    icon: Landmark,
    gradient: "from-[#155E9A] to-[#2F80ED]",
    accent: "#2F80ED",
  },
  {
    name: "CDTIES IIT Bombay",
    monogram: "IIT-B",
    location: "Mumbai",
    type: "Deep-Tech & Policy",
    badge: "Deep-Tech",
    icon: GraduationCap,
    gradient: "from-[#1E3A8A] to-[#4338CA]",
    accent: "#4338CA",
  },
  {
    name: "C-DAC Pune",
    monogram: "C-DAC",
    location: "Pune",
    type: "Advanced Computing & HPC",
    badge: "HPC",
    icon: Building2,
    gradient: "from-[#0369A1] to-[#0284C7]",
    accent: "#0284C7",
  },
];

export default function PartnersPreview() {
  return (
    <section id="partners" className="bg-white py-6 sm:py-10">
      <Container>
        <div className="rounded-2xl sm:rounded-3xl bg-linear-to-b from-[#edeef8] via-[#f8f9ff] to-[#c5d1ff] p-3.5 sm:p-6 lg:p-8 shadow-md border border-white/80">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50/90 border border-blue-100 px-2.5 py-0.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#1e3a8a]">
              Collaborators
            </span>
            <h2 className="mt-2 text-[22px] sm:text-[28px] lg:text-[32px] font-extrabold tracking-tight bg-linear-to-r from-[#020024] via-[#090979] to-[#00D4FF] bg-clip-text text-transparent">
              Knowledge &amp; Ecosystem Partners
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-[13.5px] sm:text-[15px] leading-relaxed text-slate-600">
              Collaborating with premier technical institutes, research bodies, and industry leaders.
            </p>
          </AnimatedSection>

          {/* Distinct Institutional Bar Cards: 1-col on mobile, 2-col on tablet, 4-col on desktop */}
          <div className="mt-5 sm:mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-3">
            {partners.map((partner, i) => (
              <AnimatedSection key={partner.name} delay={i * 0.04} className="h-full">
                <div className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200/90 bg-white/95 p-3 shadow-2xs backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#155E9A]/40 hover:shadow-md">
                  {/* Left accent strip */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1"
                    style={{ backgroundColor: partner.accent }}
                  />

                  {/* Institutional Crest Monogram */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br ${partner.gradient} text-white font-extrabold text-xs tracking-wider shadow-xs group-hover:scale-105 transition-transform`}
                  >
                    {partner.monogram}
                  </div>

                  {/* Partner info */}
                  <div className="min-w-0 flex-1 pl-0.5">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="truncate text-[13.5px] sm:text-[14.5px] font-bold text-[#0B2A4A] group-hover:text-[#155E9A] transition-colors">
                        {partner.name}
                      </h3>
                      <span className="shrink-0 text-[10.5px] font-medium text-slate-400">
                        {partner.location}
                      </span>
                    </div>
                    <p className="truncate text-[11.5px] sm:text-xs font-medium text-slate-500 mt-0.5">
                      {partner.type}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.15} className="mt-5 sm:mt-6 text-center">
            <Button href="/partners" variant="outline" size="sm" className="text-xs sm:text-sm">
              View All Partnerships <ArrowRight size={13} />
            </Button>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
