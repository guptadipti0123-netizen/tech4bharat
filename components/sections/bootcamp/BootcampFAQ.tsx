import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Accordion from "@/components/ui/Accordion";

const faqs = [
  {
    question: "Who can attend the Startup Bootcamp?",
    answer:
      "The bootcamp is built for early-stage and social impact founders, student entrepreneurs, women-led ventures, technology innovators, and first-time founders — anyone validating an idea or building toward their first product.",
  },
  {
    question: "When and where is it held?",
    answer:
      "This edition runs in October 2026, in Mumbai, from 9:00 AM to 6:00 PM — a single, intensive day rather than a multi-day program.",
  },
  {
    question: "Is there a minimum number of startups required?",
    answer:
      "Yes — the cohort needs at least 15+ registered startups for the bootcamp to run, so we can guarantee the mentor density and networking quality the day is built around.",
  },
  {
    question: "What does the day actually cover?",
    answer:
      "Expert sessions, mentorship, investor connect, product validation, fundraising, business model development, and government schemes — closing with founders pitching live on Demo Day.",
  },
  {
    question: "How do I register my startup?",
    answer:
      "Reach out through our contact page — our team will confirm your seat and share full logistics ahead of the day.",
  },
  {
    question: "Is pricing and sponsorship information available?",
    answer:
      "Pricing and any partner-sponsored seats are confirmed directly when you register — get in touch via the contact page for current details.",
  },
];

export default function BootcampFAQ() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <SectionTitle eyebrow="FAQ" title="Common questions about the bootcamp" />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mx-auto mt-10 max-w-2xl">
          <Accordion items={faqs} />
        </AnimatedSection>
      </Container>
    </section>
  );
}
