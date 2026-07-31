import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import BlogGrid from "@/components/sections/blogs/BlogGrid";
import ContactCTA from "@/components/sections/ContactCTA";

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
      />
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <BlogGrid />
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
