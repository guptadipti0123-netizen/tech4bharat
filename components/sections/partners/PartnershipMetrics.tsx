import { Building2, Globe2, Handshake, Layers } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CountUp from "@/components/ui/CountUp";
import { allPartners, partnerCategories } from "@/lib/partners";

/** Success-metrics strip — every number computed live from the partner dataset. */
export default function PartnershipMetrics() {
  const totalPartners = allPartners.length;
  const totalCategories = partnerCategories.length;
  const international = partnerCategories.find((c) => c.badge === "Global")?.partners.length ?? 0;
  const government = partnerCategories.find((c) => c.badge === "Government")?.partners.length ?? 0;

  const stats = [
    { icon: Handshake, value: totalPartners, suffix: "+", label: "Active Partners" },
    { icon: Layers, value: totalCategories, suffix: "", label: "Partner Categories" },
    { icon: Building2, value: government, suffix: "", label: "Government Bodies" },
    { icon: Globe2, value: international, suffix: "", label: "International Ties" },
  ];

  return (
    <section className="bg-brand-50 py-8 sm:py-10">
      <Container>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <AnimatedSection key={label} delay={i * 0.08} animation="scale">
              <div className="flex flex-col items-center text-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-white shadow-md shadow-brand-700/25">
                  <Icon size={16} />
                </span>
                <p className="mt-2 text-2xl font-extrabold text-ink-900 sm:text-3xl">
                  <CountUp value={value} suffix={suffix} />
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600">{label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
