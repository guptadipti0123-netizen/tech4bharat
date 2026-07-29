import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactCTA from "@/components/sections/ContactCTA";
import { blogArticles } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | Tech4Bharat Blog`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      locale: "en_IN",
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-b from-brand-950 via-brand-900 to-brand-950 pb-20 pt-40 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl" />
        </div>
        <Container className="relative">
          <AnimatedSection className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <Badge variant="accent" className="mt-8 bg-white/10 text-accent-400">
              {article.category}
            </Badge>
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{article.title}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/70">
              <span>{article.author}</span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {article.readTime}
              </span>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <AnimatedSection className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-slate-600">
            {article.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </AnimatedSection>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
