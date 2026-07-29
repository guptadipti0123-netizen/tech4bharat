import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ImpactStats from "@/components/sections/ImpactStats";
import EcosystemOverview from "@/components/sections/EcosystemOverview";
import IndiaPresenceMap from "@/components/sections/IndiaPresenceMap";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AboutPreview from "@/components/sections/AboutPreview";
import FocusAreas from "@/components/sections/FocusAreas";
import StartupJourney from "@/components/sections/StartupJourney";
import FeaturedStartups from "@/components/sections/FeaturedStartups";
import MentorsPreview from "@/components/sections/MentorsPreview";
import ProgramsPreview from "@/components/sections/ProgramsPreview";
import PartnersPreview from "@/components/sections/PartnersPreview";
import UpcomingEventsPreview from "@/components/sections/UpcomingEventsPreview";
import SuccessStoriesPreview from "@/components/sections/SuccessStoriesPreview";
import VideoSection from "@/components/sections/VideoSection";
import AwardsRecognition from "@/components/sections/AwardsRecognition";
import Testimonials from "@/components/sections/Testimonials";
import MediaNews from "@/components/sections/MediaNews";
import SocialMediaFeed from "@/components/sections/SocialMediaFeed";
import BlogPreview from "@/components/sections/BlogPreview";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Community from "@/components/sections/Community";
import ContactCTA from "@/components/sections/ContactCTA";

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
      <ImpactStats />
      <EcosystemOverview />
      <IndiaPresenceMap />
      <WhyChooseUs />
      <AboutPreview />
      <FocusAreas />
      <StartupJourney />
      <FeaturedStartups />
      <MentorsPreview />
      <ProgramsPreview />
      <PartnersPreview />
      <UpcomingEventsPreview />
      <SuccessStoriesPreview />
      <VideoSection />
      <AwardsRecognition />
      <Testimonials />
      <MediaNews />
      <SocialMediaFeed />
      <BlogPreview />
      <NewsletterSection />
      <Community />
      <ContactCTA />
    </>
  );
}
