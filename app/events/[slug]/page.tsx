import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactCTA from "@/components/sections/ContactCTA";
import { events } from "@/lib/events";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};

  return {
    title: `${event.title} | Tech4Bharat Events`,
    description: event.description,
    openGraph: {
      title: `${event.title} | Tech4Bharat`,
      description: event.description,
      type: "website",
      locale: "en_IN",
    },
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-brand-950 pb-20 pt-40 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl" />
        </div>
        <Container className="relative">
          <AnimatedSection>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"
            >
              <ArrowLeft size={16} /> Back to Events
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Badge variant={event.status === "Upcoming" ? "success" : "neutral"}>
                {event.status}
              </Badge>
              <span className="text-sm font-medium text-white/60">{event.type}</span>
            </div>
            <h1 className="mt-4 max-w-3xl text-[30px] font-bold sm:text-[42px]">{event.title}</h1>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <Calendar size={16} /> {event.date}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} /> {event.venue}
              </span>
              <span className="flex items-center gap-2">
                <Users size={16} /> {event.speakers.length} Speakers
              </span>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-10 sm:py-17.5">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-ink-900">About this Event</h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{event.longDescription}</p>

              <h3 className="mt-10 text-xl font-semibold text-ink-900">Speakers</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {event.speakers.map((speaker) => (
                  <div
                    key={speaker.name}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                      {speaker.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-ink-900">{speaker.name}</p>
                      <p className="text-sm text-slate-500">{speaker.designation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Event Details
                </h3>
                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="text-slate-500">Date</dt>
                    <dd className="font-medium text-ink-900">{event.date}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Venue</dt>
                    <dd className="font-medium text-ink-900">{event.venue}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Format</dt>
                    <dd className="font-medium text-ink-900">{event.type}</dd>
                  </div>
                </dl>
                {event.status === "Upcoming" ? (
                  <Button href="/contact" className="mt-6 w-full">
                    Register Now
                  </Button>
                ) : (
                  <Button href="/events" variant="outline" className="mt-6 w-full">
                    Explore Upcoming Events
                  </Button>
                )}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
