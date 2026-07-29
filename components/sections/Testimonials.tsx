import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Testimonials"
            title="What our founders and partners say"
            description="Real feedback from the people building alongside Tech4Bharat."
          />
        </AnimatedSection>

        <div className="mt-16">
          <TestimonialCarousel items={testimonials} />
        </div>
      </Container>
    </section>
  );
}
