import { Building2, GraduationCap, Landmark, Sparkles, University } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const partners = [
  {
    name: "COEP Tech University Pune",
    type: "Academic & Incubation Partner",
    icon: University,
  },
  {
    name: "VJTI Mumbai",
    type: "Technology & Research Partner",
    icon: Landmark,
  },
  {
    name: "CDTIES IIT Bombay",
    type: "Deep-Tech & Policy Translation",
    icon: GraduationCap,
  },
  {
    name: "C-DAC Pune",
    type: "Advanced Computing & HPC",
    icon: Building2,
  },
];

export default function PartnersPreview() {
  return (
    <section id="partners" className="bg-white py-8 sm:py-12">
      <Container>
        <div className="rounded-3xl bg-gradient-to-b from-[#edeef8] via-[#f8f9ff] to-[#c5d1ff] p-4 sm:p-7 shadow-lg border border-white/60">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#1e3a8a]">
              Collaborators
            </span>
            <h2 className="mt-2 text-[20px] sm:text-[26px] font-extrabold tracking-tight bg-gradient-to-r from-[#020024] via-[#090979] to-[#00D4FF] bg-clip-text text-transparent">
              Knowledge &amp; Ecosystem Partners
            </h2>
            <p className="mx-auto mt-1.5 max-w-lg text-[12px] sm:text-[14px] leading-relaxed text-gray-600">
              Collaborating with premier technical institutes, research bodies, and industry leaders.
            </p>
          </AnimatedSection>

          <div className="mt-5 sm:mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-3.5">
            {partners.map((partner, i) => {
              const Icon = partner.icon;
              return (
                <AnimatedSection key={partner.name} delay={i * 0.04} className="h-full">
                  <div className="group flex h-full flex-col justify-between rounded-xl sm:rounded-2xl border border-white/80 bg-white/80 p-3.5 sm:p-4.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4f6ff2] hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#4f6ff2] group-hover:bg-[#4f6ff2] group-hover:text-white transition-all">
                          <Icon size={18} />
                        </span>
                        <span className="rounded-full bg-[#1e3a8a]/5 px-2 py-0.5 text-[8.5px] sm:text-[9.5px] font-semibold text-[#1e3a8a]">
                          Partner
                        </span>
                      </div>
                      <h3 className="mt-3 text-[13px] sm:text-[14.5px] font-bold text-[#020024] leading-snug">
                        {partner.name}
                      </h3>
                      <p className="mt-1 text-[10.5px] sm:text-[11.5px] font-medium text-gray-500">
                        {partner.type}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={0.2} className="mt-6 text-center">
            <Button href="/partners" variant="outline" size="sm" className="text-xs">
              View All Partnerships
            </Button>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
