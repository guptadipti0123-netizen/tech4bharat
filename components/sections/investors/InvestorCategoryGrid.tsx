import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import InvestorCard from "@/components/sections/investors/InvestorCard";
import { investorCategories, investors } from "@/lib/investors";

export default function InvestorCategoryGrid() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="space-y-16">
          {investorCategories.map((category, index) => {
            const categoryInvestors = investors.filter((i) => i.category === category);
            if (categoryInvestors.length === 0) return null;
            return (
              <AnimatedSection key={category} delay={index * 0.05}>
                <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">{category}</h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryInvestors.map((investor) => (
                    <InvestorCard key={investor.name} investor={investor} />
                  ))}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
