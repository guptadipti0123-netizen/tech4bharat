import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import FocusAreas from "@/components/sections/FocusAreas";
import FounderJourney from "@/components/sections/FounderJourney";
import VentureSpotlight from "@/components/sections/VentureSpotlight";
import ProgramsPreview from "@/components/sections/ProgramsPreview";
import PartnersPreview from "@/components/sections/PartnersPreview";
import GalleryPreview from "@/components/sections/GalleryPreview";

export const metadata: Metadata = {
  title: "Tech4Bharat | National Platform for Social Entrepreneurship & Innovation",
  description:
    "Tech4Bharat is a premier national social innovation platform helping ambitious Indian founders build category-defining ventures across 13 critical socio-economic sectors through academic lab access, mentorship, and catalytic capital.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tech4Bharat | National Platform for Social Entrepreneurship & Innovation",
    description:
      "A national platform helping ambitious Indian founders build category-defining ventures through academic lab access, mentorship, and community across Bharat.",
    type: "website",
    locale: "en_IN",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech4Bharat | National Platform for Social Entrepreneurship & Innovation",
    description:
      "A national platform helping ambitious Indian founders build category-defining social enterprises.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tech4Bharat",
  description:
    "A national platform helping ambitious Indian founders build category-defining companies through mentorship, capital access, and community.",
  url: "https://tech4bharat.org",
  logo: "https://tech4bharat.org/favicon.ico",
  sameAs: [],
  address: {
    "@type": "PostalAddress",
    streetAddress: "IIT Bombay, Powai",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400076",
    addressCountry: "IN",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <AboutPreview />
      <FocusAreas />
      <FounderJourney />
      <VentureSpotlight />
      <ProgramsPreview />
      <PartnersPreview />
      <GalleryPreview />
    </>
  );
}
