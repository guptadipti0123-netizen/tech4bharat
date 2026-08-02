import type { Metadata } from "next";
import { FileText } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import BlogGrid from "@/components/sections/blogs/BlogGrid";
import ContactCTA from "@/components/sections/ContactCTA";
import GeometricPattern from "@/components/ui/GeometricPattern";

export const metadata: Metadata = {
  title: "Blogs & Resources | Tech4Bharat",
  description:
    "Startup guides, government scheme breakdowns, and innovation resources for Indian founders — from the Tech4Bharat team and ecosystem.",
  openGraph: {
    title: "Blogs & Resources | Tech4Bharat",
    description: "Startup guides, government schemes, and innovation resources for Indian founders.",
    type: "website",
    locale: "en_IN",
  },
};

export default function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blogs & Resources"
        title="Guides for building in India"
        description="Latest articles, startup guides, government scheme breakdowns, and innovation resources — written for founders, by founders."
        icon={FileText}
      />
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <GeometricPattern className="-right-32 top-0 h-96 w-96 text-brand-700/6" />

        <Container className="relative">
          <BlogGrid />
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
