import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import FocusAreas from "@/components/sections/FocusAreas";
import ProgramsPreview from "@/components/sections/ProgramsPreview";
import PartnersPreview from "@/components/sections/PartnersPreview";
import GalleryPreview from "@/components/sections/GalleryPreview";

export const metadata: Metadata = {
  title: "Tech4Bharat | Empowering India's Next-Generation Startups",
  description:
    "Tech4Bharat is a premier national startup incubator helping ambitious Indian founders build category-defining companies through mentorship, capital access, and a thriving startup ecosystem across 10+ states.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tech4Bharat | Empowering India's Next-Generation Startups",
    description:
      "A premier national startup incubator helping ambitious Indian founders build category-defining companies through mentorship, capital access, and community.",
    type: "website",
    locale: "en_IN",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech4Bharat | Empowering India's Next-Generation Startups",
    description:
      "A premier national startup incubator helping ambitious Indian founders build category-defining companies.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tech4Bharat",
  description:
    "A national startup incubator helping ambitious Indian founders build category-defining companies through mentorship, capital access, and community.",
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
      <ProgramsPreview />
      <PartnersPreview />
      <GalleryPreview />
    </>
  );
}
