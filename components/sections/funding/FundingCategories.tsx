import { Handshake, Landmark, Building2, Rocket, Wallet, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import DotGrid from "@/components/ui/DotGrid";

interface FundingSource {
  icon: LucideIcon;
  title: string;
  description: string;
}

const sources: FundingSource[] = [
  { icon: Wallet, title: "Grants", description: "Government and institutional funding." },
  { icon: Building2, title: "Investors", description: "Angel investors and venture capital." },
  { icon: Rocket, title: "Accelerators", description: "Startup accelerator and incubation support." },
  { icon: Handshake, title: "CSR Programs", description: "Corporate social responsibility initiatives." },
  { icon: Landmark, title: "Government Schemes", description: "Public sector startup support." },
];

/** Funding Sources — five compact icon-top cards, one line each, in a single row on
 *  desktop. */
export default function FundingCategories() {
  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-12">
      <DotGrid className="left-0 top-0 h-full w-full text-brand-700/5" />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle eyebrow="Sources" title="Funding Sources" description="Where founders find capital and support." />
        </AnimatedSection>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {sources.map(({ icon: Icon, title, description }, i) => (
            <AnimatedSection key={title} delay={i * 0.06} animation="scale">
              <div className="group flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-700 group-hover:text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-3 text-base font-bold text-ink-900">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
