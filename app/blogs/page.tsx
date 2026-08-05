import type { Metadata } from "next";
import { FileText } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import BlogGrid from "@/components/sections/blogs/BlogGrid";
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
        title="Guides for building in India"
        description="Latest articles, startup guides, government scheme breakdowns, and innovation resources — written for founders, by founders."
        icon={FileText}
      />
      <section className="relative overflow-hidden bg-white pb-8 pt-4 sm:pb-12 sm:pt-6">
        <GeometricPattern className="-right-32 top-0 h-96 w-96 text-brand-700/6" />

        <Container className="relative">
          <BlogGrid />
        </Container>
      </section>
    </>
  );
}
