import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FeaturedArticle from "@/components/sections/blog/FeaturedArticle";
import BlogListingClient from "@/components/sections/blog/BlogListingClient";
import ContactCTA from "@/components/sections/ContactCTA";
import { blogArticles, blogCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog & Resources | Tech4Bharat",
  description:
    "Insights, playbooks, and lessons for Indian founders — from fundraising to product strategy to navigating government schemes.",
  openGraph: {
    title: "Blog & Resources | Tech4Bharat",
    description: "Insights and playbooks for Indian founders from the Tech4Bharat community.",
    type: "website",
    locale: "en_IN",
  },
};

export default function BlogPage() {
  const featured = blogArticles.find((article) => article.featured);
  const rest = blogArticles.filter((article) => !article.featured);

  return (
    <>
      <PageHero
        eyebrow="Blog & Resources"
        title="Insights for India's next generation of founders"
        description="Playbooks, lessons, and perspectives from our founders, mentors, and team."
      />

      {featured && (
        <section className="py-24 sm:py-32">
          <Container>
            <AnimatedSection>
              <FeaturedArticle article={featured} />
            </AnimatedSection>
          </Container>
        </section>
      )}

      <section className="bg-slate-50 py-24 sm:py-32">
        <Container>
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">Recent Articles</h2>
          </AnimatedSection>
          <div className="mt-10">
            <BlogListingClient articles={rest} categories={blogCategories} />
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
