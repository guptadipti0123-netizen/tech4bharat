import { Handshake, Landmark, Building2, Rocket, Wallet, type LucideIcon } from "lucide-react";
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
    cardBg: "#F4FBF6",
    border: "#2E8B57",
    borderHover: "#256E46",
    iconBg: "#DCF3E3",
  },
  {
    icon: Building2,
    title: "Investors",
    description: "Angel investors and venture capital.",
    fundingType: "Private",
    cardBg: "#FFF8F0",
    border: "#F59E0B",
    borderHover: "#C17F09",
    iconBg: "#FDECC8",
  },
  {
    icon: Rocket,
    title: "Accelerators",
    description: "Startup accelerator and incubation support.",
    fundingType: "Hybrid",
    cardBg: "#F5F8FF",
    border: "#2563EB",
    borderHover: "#1E4FC2",
    iconBg: "#DCE8FF",
  },
  {
    icon: Handshake,
    title: "CSR Programs",
    description: "Corporate social responsibility initiatives.",
    fundingType: "CSR",
    cardBg: "#FFF5F7",
    border: "#DB2777",
    borderHover: "#B31F63",
    iconBg: "#FCE0EA",
  },
  {
    icon: Landmark,
    title: "Government Schemes",
    description: "Public sector startup support.",
    fundingType: "Public",
    cardBg: "#F4F8FB",
    border: "#0F766E",
    borderHover: "#0C5F59",
    iconBg: "#DCEEEC",
  },
];

/** Funding Sources — five handcrafted cards, each with its own pastel background, accent
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
            titleClassName="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-[#163B2D] sm:text-[34px] lg:text-[40px]"
          />
        </AnimatedSection>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {sources.map((source, i) => {
            const Icon = source.icon;
            return (
              <AnimatedSection key={source.title} delay={i * 0.06} animation="scale">
                <div
                  style={
                    {
                      backgroundColor: source.cardBg,
                      borderColor: source.border,
                      "--hover-border": source.borderHover,
                    } as React.CSSProperties
                  }
                  className="group relative flex h-44 flex-col overflow-hidden rounded-2xl border-2 p-5.5 shadow-[0_1px_6px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.75 hover:border-(--hover-border)"
                >
                  <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1" style={{ backgroundColor: source.border }} />

                  <div className="flex items-center gap-2">
                    <span
                      className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-6"
                      style={{ backgroundColor: source.iconBg, color: source.border }}
                    >
                      <Icon size={15} />
                    </span>
                    <h3 className="min-w-0 flex-1 whitespace-nowrap break-normal text-[16px] font-bold leading-tight text-[#173D35]">
                      {source.title}
                    </h3>
                  </div>

                  <p className="mt-2 line-clamp-2 flex-1 text-[14px] leading-snug text-[#5B6470]">
                    {source.description}
                  </p>

                  <div className="mt-2 border-t pt-2" style={{ borderColor: `${source.border}33` }}>
                    <span
                      className="inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold"
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
