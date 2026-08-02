import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Privacy Policy | Tech4Bharat",
  description: "How Tech4Bharat collects, uses, and protects your information.",
  openGraph: {
    title: "Privacy Policy | Tech4Bharat",
    description: "How Tech4Bharat collects, uses, and protects your information.",
    type: "website",
    locale: "en_IN",
  },
};

const sections = [
  {
    title: "Information We Collect",
    body: "When you apply to a program, submit our contact form, or subscribe to updates, we collect information such as your name, email address, phone number, startup or organization details, and any message you choose to share with us. We also collect standard technical data — like browser type and pages visited — through cookies and analytics tools to understand how our site is used.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information you share to respond to inquiries, evaluate program applications, connect founders with mentors and partners, send relevant updates about events and programs, and improve our website and services. We do not sell your personal information to third parties.",
  },
  {
    title: "Sharing With Partners",
    body: "As part of our mentorship and funding-support programs, we may share relevant application details with vetted mentors, investors, or partner institutions — always with the goal of advancing your application, and never without a legitimate programmatic reason.",
  },
  {
    title: "Cookies & Analytics",
    body: "We use cookies and similar technologies to keep the site functional and to understand aggregate usage patterns. You can control or disable cookies through your browser settings; some site features may not function as intended if cookies are disabled.",
  },
  {
    title: "Data Security",
    body: "We take reasonable technical and organizational measures to protect the information you share with us from unauthorized access, alteration, or disclosure. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information at any time by writing to us at hello@tech4bharat.org. We will respond to verified requests within a reasonable timeframe.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. Material changes will be reflected by an updated revision date on this page.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: January 2026. This policy explains how Tech4Bharat handles your information."
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
                If you have questions about this Privacy Policy, reach us at{" "}
                <a href="mailto:hello@tech4bharat.org" className="font-medium text-brand-700 hover:text-brand-800">
                  hello@tech4bharat.org
                </a>{" "}
                or visit our{" "}
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
