import { ArrowRight, Building2, GraduationCap, Landmark, University, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const partners = [
  {
    name: "COEP Tech University",
    monogram: "COEP",
    location: "Pune, Maharashtra",
    type: "Academic & Incubation Hub",
    collaboration: "Joint Startup Cohorts & Tech Policy Workshops",
    badge: "Academic Lead",
    icon: University,
    gradient: "from-[#0B2A4A] to-[#155E9A]",
    accent: "#155E9A",
  },
  {
    name: "CDTIES, IIT Bombay",
    monogram: "IIT-B",
    location: "Powai, Mumbai",
    type: "Deep-Tech & Policy Translation",
    collaboration: "Research Commercialization & Technology Assessment",
    badge: "Research & Policy",
    icon: GraduationCap,
    gradient: "from-[#1E3A8A] to-[#4338CA]",
    accent: "#4338CA",
  },
  {
    name: "VJTI Mumbai",
    monogram: "VJTI",
    location: "Matunga, Mumbai",
    type: "Technology & Engineering R&D",
    collaboration: "Hardware Prototyping, IoT & CleanTech Labs",
    badge: "Engineering Partner",
    icon: Landmark,
    gradient: "from-[#155E9A] to-[#2F80ED]",
    accent: "#2F80ED",
  },
  {
    name: "C-DAC Pune",
    monogram: "C-DAC",
    location: "Pashan, Pune",
    type: "Advanced Computing & Supercomputing",
    collaboration: "High-Performance Computing & Earth Observation AI",
    badge: "Supercomputing",
    icon: Building2,
    gradient: "from-[#0369A1] to-[#0284C7]",
    accent: "#0284C7",
  },
];

export default function PartnersPreview() {
  return (
    <section id="partners" className="bg-[#F8FAFC] py-10 sm:py-16 border-t border-slate-200/80">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 border border-brand-200/80 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-[#155E9A]">
            <ShieldCheck size={13} className="text-brand-600" /> Institutional Alliances
          </span>
          <h2 className="mt-2 text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold tracking-tight text-[#0B2A4A]">
            Knowledge &amp; Technology Partners
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-[14px] sm:text-[15.5px] leading-relaxed text-slate-600">
            Tech4Bharat collaborates with India&apos;s leading technical universities and national research institutions to support science-backed social ventures.
          </p>
        </AnimatedSection>

        {/* Institutional Alliance Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, i) => (
            <AnimatedSection key={partner.name} delay={i * 0.04} className="h-full">
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
                {/* Left accent strip */}
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-1 transition-all group-hover:w-1.5"
                  style={{ backgroundColor: partner.accent }}
                />

                <div>
                  <div className="flex items-center justify-between gap-2">
                    {/* Monogram */}
                    <div
                      className={`flex h-10 min-w-11 px-2 shrink-0 items-center justify-center rounded-lg bg-linear-to-br ${partner.gradient} text-white font-extrabold text-xs tracking-tight shadow-xs group-hover:scale-105 transition-transform`}
                    >
                      {partner.monogram}
                    </div>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10.5px] font-semibold text-slate-600 border border-slate-200">
                      {partner.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[16px] font-bold text-[#0B2A4A] group-hover:text-brand-700 transition-colors leading-snug">
                    {partner.name}
                  </h3>
                  <div className="text-[12px] font-medium text-slate-500 mt-0.5">
                    {partner.location}
                  </div>

                  <p className="mt-2.5 text-[12.5px] text-slate-600 leading-relaxed">
                    {partner.type}
                  </p>

                  <div className="mt-3.5 border-t border-slate-100 pt-2.5 text-[11.5px] text-slate-500">
                    <span className="font-semibold text-slate-800">Joint Scope: </span>
                    {partner.collaboration}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.15} className="mt-8 text-center">
          <Button href="/partners" variant="outline" size="sm" className="text-xs sm:text-sm">
            View All Institutional Alliances <ArrowRight size={13} />
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}

