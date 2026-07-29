import { Gift, Landmark, PiggyBank, Rocket, Star, TrendingUp, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { fundingOptions, type FundingOption } from "@/lib/funding";

const icons: Record<FundingOption["icon"], LucideIcon> = {
  PiggyBank,
  Star,
  Gift,
  Landmark,
  TrendingUp,
  Rocket,
};

export default function FundingOpportunities() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Funding Opportunities"
            title="Capital pathways for every stage"
            description="From seed grants to venture capital, structured access to funding across your startup's journey."
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fundingOptions.map((option, i) => {
            const Icon = icons[option.icon];
            return (
              <AnimatedSection key={option.title} delay={i * 0.06} animation="scale">
                <Card className="flex h-full flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-50 text-secondary-600">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink-900">{option.title}</h3>
                  <p className="mt-3 text-2xl font-bold text-brand-700">{option.amount}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{option.description}</p>
                  <p className="mt-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Eligibility: </span>
                    {option.eligibility}
                  </p>
                  <Button href="/contact" variant="outline" size="sm" className="mt-5 w-full justify-center">
                    Apply
                  </Button>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
