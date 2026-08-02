import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Images, MapPin, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";
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
      <section className="relative overflow-hidden bg-linear-to-b from-brand-50 via-white to-white pb-16 pt-36">
        <Blob tone="secondary" className="-left-24 -top-24 h-72 w-72" />
        <Blob tone="accent" className="-right-16 top-10 h-64 w-64" animate={false} />
        <Container className="relative">
          <AnimatedSection>
            <Link
              href="/events"
              className="-my-2 inline-flex items-center gap-2 py-2 text-sm font-medium text-slate-600 hover:text-brand-700"
            >
              <ArrowLeft size={16} /> Back to Events
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Badge variant={event.status === "Upcoming" ? "success" : "neutral"}>
                {event.status}
              </Badge>
              <span className="text-sm font-medium text-slate-600">{event.type}</span>
            </div>
            <h1 className="mt-4 max-w-3xl text-[32px] font-extrabold text-ink-900 sm:text-[44px]">{event.title}</h1>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-brand-600" /> {event.date}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-600" /> {event.venue}
              </span>
              <span className="flex items-center gap-2">
                <Users size={16} className="text-brand-600" /> {event.speakers.length} Speakers
              </span>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-ink-900">About this Event</h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{event.longDescription}</p>

              {event.agenda && event.agenda.length > 0 && (
                <>
                  <h3 className="mt-10 text-xl font-semibold text-ink-900">Agenda &amp; Timeline</h3>
                  <div className="relative mt-5 space-y-5 border-l-2 border-brand-100 pl-6">
                    {event.agenda.map((session) => (
                      <div key={session.time + session.title} className="relative">
                        <span className="absolute -left-7.25 top-1 h-3 w-3 rounded-full border-2 border-white bg-brand-500 shadow-[0_0_0_3px_rgba(76,175,141,0.2)]" />
                        <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
                          <Clock size={12} /> {session.time}
                        </span>
                        <p className="mt-1 font-semibold text-ink-900">{session.title}</p>
                        {session.speaker && <p className="text-sm text-slate-600">{session.speaker}</p>}
                      </div>
                    ))}
                  </div>
                </>
              )}

              <h3 className="mt-10 text-xl font-semibold text-ink-900">Speakers</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {event.speakers.map((speaker) => (
                  <div
                    key={speaker.name}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
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
                      <p className="text-sm text-slate-600">{speaker.designation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-3xl border border-slate-200 bg-brand-50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                  Event Details
                </h3>
                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="text-slate-600">Date</dt>
                    <dd className="font-medium text-ink-900">{event.date}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-600">Venue</dt>
                    <dd className="font-medium text-ink-900">{event.venue}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-600">Format</dt>
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
                <Button href="/gallery" variant="ghost" className="mt-3 w-full">
                  <Images size={16} /> View Gallery
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
