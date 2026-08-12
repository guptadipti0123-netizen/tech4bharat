import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

/** Closing CTA — one bold, solid-green premium banner instead of another white card
 *  section, so the page ends with a clear visual full stop. */
export default function FundingCTA() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <Container>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-[28px] bg-linear-to-br from-brand-700 to-brand-900 px-6 py-12 text-center shadow-xl sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(ellipse 60% 60% at 80% 0%, rgba(212,160,23,0.25), transparent 60%)" }}
              aria-hidden="true"
            />
            <h2 className="relative text-[24px] font-extrabold text-white sm:text-[30px] lg:text-[34px]">
              Ready to Raise Funding?
            </h2>
            <p className="relative mx-auto mt-3 max-w-lg text-lg leading-relaxed text-white/80">
              Get connected with mentors, investors, and funding opportunities through
              Tech4Bharat.
            </p>
            <div className="relative mt-7">
              <Button href="/contact" size="lg" variant="secondary">
                Explore Opportunities <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
