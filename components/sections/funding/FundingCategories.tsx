import { Award, Building2, Handshake, Landmark, Rocket, Wallet, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import DotGrid from "@/components/ui/DotGrid";

interface FundingSource {
  icon: LucideIcon;
  title: string;
  description: string;
  fundingType: string;
  cardBg: string;
  border: string;
  borderHover: string;
  iconBg: string;
}

const sources: FundingSource[] = [
  {
    icon: Wallet,
    title: "Grants",
    description: "Government and institutional funding.",
    fundingType: "Government",
    cardBg: "#F5FAFE",
    border: "#155E9A",
    borderHover: "#124F82",
    iconBg: "#EAF4FB",
  },
  {
    icon: Building2,
    title: "Investors",
    description: "Angel investors and venture capital.",
    fundingType: "Private",
    cardBg: "#F5FAFE",
    border: "#2F80ED",
    borderHover: "#1565AE",
    iconBg: "#EAF4FB",
  },
  {
    icon: Rocket,
    title: "Accelerators",
    description: "Startup accelerator and incubation support.",
    fundingType: "Hybrid",
    cardBg: "#F5FAFE",
    border: "#1976D2",
    borderHover: "#1565AE",
    iconBg: "#EAF4FB",
  },
  {
    icon: Handshake,
    title: "CSR Programs",
    description: "Corporate social responsibility initiatives.",
    fundingType: "CSR",
    cardBg: "#F5FAFE",
    border: "#0B2A4A",
    borderHover: "#082038",
    iconBg: "#EAF4FB",
  },
  {
    icon: Landmark,
    title: "Govt Schemes",
    description: "Public sector startup support & DPIIT.",
    fundingType: "Public",
    cardBg: "#F5FAFE",
    border: "#124F82",
    borderHover: "#0B2A4A",
    iconBg: "#EAF4FB",
  },
  {
    icon: Award,
    title: "Innovation Challenges",
    description: "Competitions & problem-statement grants.",
    fundingType: "Prizes",
    cardBg: "#F5FAFE",
    border: "#7C3AED",
    borderHover: "#6D28D9",
    iconBg: "#F5F3FF",
  },
];

/** Funding Sources â€” five handcrafted cards, each with its own pastel background, accent
 *  border, icon tint, and a funding-type badge, so the row reads as five distinct funding
 *  categories rather than five repeats of the same white card. */
export default function FundingCategories() {
  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-12">
      <DotGrid className="left-0 top-0 h-full w-full text-brand-700/5" />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            title="Funding Sources"
            description="Where founders find capital and support."
            titleClassName="text-[22px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B2A4A] sm:text-[26px] lg:text-[30px]"
          />
        </AnimatedSection>

        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3">
          {sources.map((source, i) => {
            const Icon = source.icon;
            return (
              <AnimatedSection key={source.title} delay={i * 0.05} animation="scale" className="h-full">
                <div
                  style={
                    {
                      backgroundColor: source.cardBg,
                      borderColor: source.border,
                      "--hover-border": source.borderHover,
                    } as React.CSSProperties
                  }
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border-2 p-2.5 shadow-[0_1px_6px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.75 hover:border-(--hover-border) hover:shadow-md sm:rounded-2xl sm:p-4"
                >
                  <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1" style={{ backgroundColor: source.border }} />

                  <div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-6 sm:h-8 sm:w-8"
                        style={{ backgroundColor: source.iconBg, color: source.border }}
                      >
                        <Icon size={13} className="sm:hidden" />
                        <Icon size={15} className="hidden sm:block" />
                      </span>
                      <h3 className="min-w-0 flex-1 text-[15px] font-bold leading-tight text-[#0B2A4A] sm:text-[17px]">
                        {source.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-[14.5px]">
                      {source.description}
                    </p>
                  </div>

                  <div className="mt-3 border-t pt-2" style={{ borderColor: `${source.border}33` }}>
                    <span
                      className="inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-semibold sm:text-[12px]"
                      style={{ backgroundColor: source.iconBg, color: source.border }}
                    >
                      {source.fundingType}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
