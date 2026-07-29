import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactCTA from "@/components/sections/ContactCTA";
import { successStories } from "@/lib/stories";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return successStories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = successStories.find((s) => s.slug === slug);
  if (!story) return {};

  return {
    title: `${story.headline} | Tech4Bharat Success Stories`,
    description: story.excerpt,
    openGraph: {
      title: story.headline,
      description: story.excerpt,
      type: "article",
      locale: "en_IN",
    },
  };
}

export default async function SuccessStoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const story = successStories.find((s) => s.slug === slug);

  if (!story) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-b from-brand-950 via-brand-900 to-brand-950 pb-20 pt-40 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl" />
        </div>
        <Container className="relative">
          <AnimatedSection>
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"
            >
              <ArrowLeft size={16} /> Back to Success Stories
            </Link>
            <span className="mt-8 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur">
              {story.domain}
            </span>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">{story.headline}</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/70">
              {story.startupName} — founded by {story.founderName}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            <AnimatedSection>
              <div className="space-y-5 text-lg leading-relaxed text-slate-600">
                {story.story.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Impact at a Glance
                </h3>
                <div className="mt-5 space-y-5">
                  {story.impactMetrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-2xl font-bold text-brand-700">{metric.value}</p>
                      <p className="text-sm text-slate-500">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
