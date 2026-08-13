import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Sparkles, Target } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";
import { successStories } from "@/lib/data";

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
    title: `${story.startup} | Tech4Bharat Success Stories`,
    description: story.impact,
    openGraph: {
      title: `${story.startup} | Tech4Bharat`,
      description: story.impact,
      type: "website",
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
      <section className="relative overflow-hidden bg-linear-to-b from-brand-50 via-white to-white pb-8 pt-20">
        <Blob tone="secondary" className="-left-24 -top-24 h-72 w-72" />
        <Blob tone="accent" className="-right-16 top-10 h-64 w-64" animate={false} />
        <Container className="relative">
          <AnimatedSection>
            <Link
              href="/success-stories"
              className="-my-2 inline-flex items-center gap-2 py-2 text-sm font-medium text-slate-600 hover:text-brand-700"
            >
              <ArrowLeft size={16} /> Back to Success Stories
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Badge variant="success">{story.domain}</Badge>
              <span className="text-sm font-medium text-slate-600">Success Story</span>
            </div>
            <h1 className="mt-4 max-w-3xl text-[26px] font-extrabold text-ink-900 sm:text-[34px]">
              {story.startup}
            </h1>
            <p className="mt-3 text-base text-slate-600">Founded by {story.founder}</p>
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-white py-8 sm:py-12">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            <AnimatedSection>
              <div className="relative aspect-video overflow-hidden rounded-4xl border-4 border-white shadow-xl">
                <Image
                  src={story.photo}
                  alt={`${story.founder}, founder of ${story.startup}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="relative mt-10 grid gap-6 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
                <div className="p-6 sm:p-8">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                    <Target size={18} />
                  </span>
                  <h2 className="mt-4 text-xl font-bold text-ink-900">The Challenge</h2>
                  <p className="mt-2 leading-relaxed text-slate-600">{story.challenge}</p>
                </div>
                <div className="border-t border-slate-100 bg-brand-50/60 p-6 sm:p-8 lg:border-l lg:border-t-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-white">
                    <Sparkles size={18} />
                  </span>
                  <h2 className="mt-4 text-xl font-bold text-ink-900">The Impact</h2>
                  <p className="mt-2 leading-relaxed text-slate-600">{story.impact}</p>
                </div>

                <span
                  className="pointer-events-none absolute left-1/2 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-brand-700 text-white shadow-md lg:flex"
                  aria-hidden="true"
                >
                  <ArrowRight size={18} />
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-3xl border border-slate-200 bg-brand-50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                  About {story.startup}
                </h3>
                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="text-slate-600">Founder</dt>
                    <dd className="font-medium text-ink-900">{story.founder}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-600">Focus Area</dt>
                    <dd className="font-medium text-ink-900">{story.domain}</dd>
                  </div>
                </dl>
                <Button href="/portfolio" className="mt-6 w-full">
                  View Startup Portfolio <ArrowRight size={16} />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

    </>
  );
}
