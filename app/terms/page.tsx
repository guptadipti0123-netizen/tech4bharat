import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Terms & Conditions | Tech4Bharat",
  description: "The terms governing your use of the Tech4Bharat website and programs.",
  openGraph: {
    title: "Terms & Conditions | Tech4Bharat",
    description: "The terms governing your use of the Tech4Bharat website and programs.",
    type: "website",
    locale: "en_IN",
  },
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using the Tech4Bharat website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of the site.",
  },
  {
    title: "Use of the Website",
    body: "You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the site. Attempting to gain unauthorized access to our systems or interfering with the site's normal operation is strictly prohibited.",
  },
  {
    title: "Program Applications",
    body: "Submitting an application to a Tech4Bharat program does not guarantee acceptance. All applications are reviewed at our discretion based on program-specific criteria. Selected participants may be asked to agree to additional, program-specific terms before onboarding.",
  },
  {
    title: "Intellectual Property",
    body: "All content on this website — including text, graphics, logos, and design — is the property of Tech4Bharat or its licensors and is protected by applicable intellectual property laws, unless otherwise credited. You may not reproduce or redistribute this content without prior written permission.",
  },
  {
    title: "Third-Party Links",
    body: "Our website may contain links to third-party websites, including partner and mentor organizations. We are not responsible for the content, accuracy, or practices of any linked external sites.",
  },
  {
    title: "Limitation of Liability",
    body: "Tech4Bharat provides mentorship, incubation support, and ecosystem connections in good faith, but does not guarantee specific business outcomes, funding, or success for any founder or startup. Tech4Bharat shall not be liable for any indirect or consequential loss arising from use of this website or participation in our programs.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of India. Any disputes arising from use of this website or participation in Tech4Bharat programs shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.",
  },
  {
    title: "Changes to These Terms",
    body: "We may revise these Terms & Conditions from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Last updated: January 2026. Please read these terms carefully before using our website."
      />

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-12">
            {sections.map((section, i) => (
              <AnimatedSection key={section.title} delay={i * 0.05}>
                <h2 className="text-xl font-bold text-ink-900">{section.title}</h2>
                <p className="mt-3 leading-relaxed text-slate-600">{section.body}</p>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={sections.length * 0.05}>
              <h2 className="text-xl font-bold text-ink-900">Contact Us</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                Questions about these terms can be sent to{" "}
                <a href="mailto:hello@tech4bharat.org" className="font-medium text-brand-700 hover:text-brand-800">
                  hello@tech4bharat.org
                </a>{" "}
                or via our{" "}
                <a href="/contact" className="font-medium text-brand-700 hover:text-brand-800">
                  Contact page
                </a>
                .
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
