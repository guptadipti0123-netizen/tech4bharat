import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StartupLogo from "@/components/ui/StartupLogo";

interface SpotlightStartup {
  id: string;
  name: string;
  founder: string;
  domain: string;
  location: string;
  stage: string;
  tagline: string;
  primaryMetric: string;
  metricLabel: string;
  partnerLab: string;
  accentColor: string;
  slug: string;
}

const spotlightStartups: SpotlightStartup[] = [
  {
    id: "agrosense",
    name: "AgroSense",
    founder: "Ritika Deshmukh",
    domain: "AgriTech",
    location: "Nagpur, Maharashtra",
    stage: "Growth Stage",
    tagline: "AI-powered crop health monitoring and soil telemetry for smallholder farmers.",
    primaryMetric: "50,000+",
    metricLabel: "Farmers Empowered",
    partnerLab: "COEP Tech Lab",
    accentColor: "#059669",
    slug: "agrosense-ritika-deshmukh",
  },
  {
    id: "jalshuddhi",
    name: "JalShuddhi",
    founder: "Deepak Chawla",
    domain: "Water & Sanitation",
    location: "Indore, MP",
    stage: "Early Stage",
    tagline: "Solar-powered decentralized nano-filtration with IoT flow telemetry.",
    primaryMetric: "1.2M+ L",
    metricLabel: "Clean Water Delivered",
    partnerLab: "VJTI Water Lab",
    accentColor: "#0284C7",
    slug: "medlink-aditya-rao",
  },
  {
    id: "cardiobeat",
    name: "CardioBeat",
    founder: "Dr. Arvind Kulkarni",
    domain: "MedTech",
    location: "Bengaluru, KA",
    stage: "Growth Stage",
    tagline: "Portable AI-assisted 12-lead ECG device for rural point-of-care cardiac triage.",
    primaryMetric: "15,000+",
    metricLabel: "Rural Screenings",
    partnerLab: "IIT-B Health R&D",
    accentColor: "#4F46E5",
    slug: "medlink-aditya-rao",
  },
  {
    id: "medlink",
    name: "MedLink",
    founder: "Aditya Rao",
    domain: "HealthTech",
    location: "Pune, Maharashtra",
    stage: "Early Stage",
    tagline: "Vernacular telemedicine connecting Primary Health Centres with specialists.",
    primaryMetric: "28 PHCs",
    metricLabel: "Govt Clinics Connected",
    partnerLab: "C-DAC High-Perf AI",
    accentColor: "#E11D48",
    slug: "medlink-aditya-rao",
  },
];

export default function VentureSpotlight() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 bg-[#F8FAFC] border-t border-slate-200/80">
      <Container>
        {/* Header */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 border border-brand-200/80 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-[#155E9A]">
              <TrendingUp size={13} className="text-brand-600" /> Venture Spotlight
            </span>
            <h2 className="mt-2 text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold tracking-tight text-[#0B2A4A]">
              Ventures Solving for Bharat
            </h2>
            <p className="mt-1 text-xs sm:text-[13.5px] leading-relaxed text-slate-600 max-w-xl">
              Category-defining social enterprises incubated and scaled through Tech4Bharat.
            </p>
          </div>
          <Button href="/portfolio" variant="outline" size="sm" className="hidden sm:inline-flex text-xs shrink-0">
            View All Startups <ArrowRight size={13} />
          </Button>
        </AnimatedSection>

        {/* 4 Compact Venture Cards Grid (Direct, Space-Efficient, Distinct Pattern) */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
          {spotlightStartups.map((startup, i) => (
            <AnimatedSection key={startup.id} delay={i * 0.04} className="h-full">
              <Link
                href="/portfolio"
                className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <StartupLogo
                        name={startup.name}
                        domain={startup.domain}
                        size={36}
                        className="h-9 w-9 rounded-xl shrink-0 shadow-2xs group-hover:scale-105 transition-transform"
                      />
                      <div className="min-w-0">
                        <h3 className="text-[15px] font-bold text-[#0B2A4A] group-hover:text-brand-700 transition-colors leading-tight truncate">
                          {startup.name}
                        </h3>
                        <p className="text-[11px] text-slate-500 truncate mt-0.5">
                          {startup.founder}
                        </p>
                      </div>
                    </div>
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-bold text-white shrink-0"
                      style={{ backgroundColor: startup.accentColor }}
                    >
                      {startup.domain}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className="mt-3 text-[12px] sm:text-[12.5px] leading-relaxed text-slate-600 line-clamp-2">
                    {startup.tagline}
                  </p>
                </div>

                {/* Impact Metric Highlight Box */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-100 px-3 py-2">
                    <div>
                      <div className="font-heading text-sm sm:text-base font-black text-[#0B2A4A] leading-tight">
                        {startup.primaryMetric}
                      </div>
                      <div className="text-[10px] font-medium text-slate-500">
                        {startup.metricLabel}
                      </div>
                    </div>
                    <span className="text-[10.5px] font-semibold text-brand-600 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">
                      Explore <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-5 flex sm:hidden justify-center">
          <Button href="/portfolio" variant="outline" size="sm" className="w-full text-xs">
            View All Startups <ArrowRight size={13} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
