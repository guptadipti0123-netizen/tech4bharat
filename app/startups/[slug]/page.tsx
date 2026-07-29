import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, ExternalLink, MapPin, User } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactCTA from "@/components/sections/ContactCTA";
import { startupProfiles } from "@/lib/startups";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return startupProfiles.map((startup) => ({ slug: startup.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const startup = startupProfiles.find((s) => s.slug === slug);
  if (!startup) return {};

  return {
    title: `${startup.name} | Tech4Bharat Startup Portfolio`,
    description: startup.tagline,
    openGraph: {
      title: `${startup.name} | Tech4Bharat`,
      description: startup.tagline,
      type: "website",
      locale: "en_IN",
    },
  };
}

export default async function StartupDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const startup = startupProfiles.find((s) => s.slug === slug);

  if (!startup) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-b from-brand-950 via-brand-900 to-brand-950 pb-20 pt-40 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl" />
        </div>
        <Container className="relative">
          <AnimatedSection>
            <Link
              href="/startups"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"
            >
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
            <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-2xl font-bold backdrop-blur">
                {startup.logoInitial}
              </div>
              <div>
                <h1 className="text-3xl font-bold sm:text-4xl">{startup.name}</h1>
                <p className="mt-2 text-lg text-white/70">{startup.tagline}</p>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-ink-900">About {startup.name}</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">{startup.description}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="brand">{startup.domain}</Badge>
                  <Badge variant="neutral">{startup.stage}</Badge>
                </div>
                <dl className="mt-6 space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <User size={18} className="shrink-0 text-brand-600" />
                    <div>
                      <dt className="text-slate-500">Founder</dt>
                      <dd className="font-medium text-ink-900">{startup.founder}</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="shrink-0 text-brand-600" />
                    <div>
                      <dt className="text-slate-500">Location</dt>
                      <dd className="font-medium text-ink-900">{startup.location}</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="shrink-0 text-brand-600" />
                    <div>
                      <dt className="text-slate-500">Founded</dt>
                      <dd className="font-medium text-ink-900">{startup.foundedYear}</dd>
                    </div>
                  </div>
                </dl>
                <Button
                  href={startup.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full"
                >
                  Visit Website <ExternalLink size={16} />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
