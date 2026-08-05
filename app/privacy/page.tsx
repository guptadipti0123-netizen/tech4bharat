import type { Metadata } from "next";
import {
  Cookie,
  FileText,
  Handshake,
  History,
  Lock,
  Mail,
  Settings2,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import LegalHighlights from "@/components/sections/legal/LegalHighlights";
import LegalTOC from "@/components/sections/legal/LegalTOC";
import LegalSectionList from "@/components/sections/legal/LegalSectionList";

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

const highlights = [
  { icon: Lock, label: "We never sell your data" },
  { icon: UserCheck, label: "You control your data" },
  { icon: Cookie, label: "Cookies are optional" },
  { icon: Handshake, label: "Shared only with vetted partners" },
];

const sections = [
  {
    icon: FileText,
    id: "information-we-collect",
    title: "Information We Collect",
    body: "When you apply to a program, submit our contact form, or subscribe to updates, we collect information such as your name, email address, phone number, startup or organization details, and any message you choose to share with us. We also collect standard technical data — like browser type and pages visited — through cookies and analytics tools to understand how our site is used.",
  },
  {
    icon: Settings2,
    id: "how-we-use-your-information",
    title: "How We Use Your Information",
    body: "We use the information you share to respond to inquiries, evaluate program applications, connect founders with mentors and partners, send relevant updates about events and programs, and improve our website and services. We do not sell your personal information to third parties.",
  },
  {
    icon: Handshake,
    id: "sharing-with-partners",
    title: "Sharing With Partners",
    body: "As part of our mentorship and funding-support programs, we may share relevant application details with vetted mentors, investors, or partner institutions — always with the goal of advancing your application, and never without a legitimate programmatic reason.",
  },
  {
    icon: Cookie,
    id: "cookies-analytics",
    title: "Cookies & Analytics",
    body: "We use cookies and similar technologies to keep the site functional and to understand aggregate usage patterns. You can control or disable cookies through your browser settings; some site features may not function as intended if cookies are disabled.",
  },
  {
    icon: ShieldCheck,
    id: "data-security",
    title: "Data Security",
    body: "We take reasonable technical and organizational measures to protect the information you share with us from unauthorized access, alteration, or disclosure. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
  },
  {
    icon: UserCheck,
    id: "your-rights",
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information at any time by writing to us at hello@tech4bharat.org. We will respond to verified requests within a reasonable timeframe.",
  },
  {
    icon: History,
    id: "changes-to-this-policy",
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. Material changes will be reflected by an updated revision date on this page.",
  },
  {
    icon: Mail,
    id: "contact-us",
    title: "Contact Us",
    body: (
      <>
        If you have questions about this Privacy Policy, reach us at{" "}
        <a href="mailto:hello@tech4bharat.org" className="font-medium text-brand-700 hover:text-brand-800">
          hello@tech4bharat.org
        </a>{" "}
        or visit our{" "}
        <a href="/contact" className="font-medium text-brand-700 hover:text-brand-800">
          Contact page
        </a>
        .
      </>
    ),
  },
];

const tocEntries = sections.map(({ icon, title, id }) => ({ icon, title, id }));

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="Last updated: January 2026. This policy explains how Tech4Bharat handles your information."
      />

      <section className="bg-sand-50 py-8 sm:py-12">
        <Container>
          <LegalHighlights points={highlights} />

          <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-10">
            <LegalTOC sections={tocEntries} />
            <LegalSectionList sections={sections} />
          </div>
        </Container>
      </section>
    </>
  );
}
