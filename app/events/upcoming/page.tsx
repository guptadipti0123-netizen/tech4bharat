import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  Flame,
  MapPin,
  Users,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { events, getDateParts } from "@/lib/events";
import { getEventImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Upcoming Events | Tech4Bharat",
  description:
    "Explore upcoming Tech4Bharat bootcamps, workshops, challenges, hackathons, and founder sessions across India.",
  openGraph: {
    title: "Upcoming Events | Tech4Bharat",
    description: "Upcoming startup bootcamps and founder workshops across India.",
    type: "website",
    locale: "en_IN",
  },
};

export default function UpcomingEventsPage() {
  const upcomingEvents = events.filter((e) => e.status === "Upcoming");
  const featuredBootcamp = upcomingEvents.find((e) => e.type === "Bootcamp");
  const otherUpcomingEvents = upcomingEvents.filter((e) => e.id !== featuredBootcamp?.id);

  return (
    <>
      <PageHero
        title="Upcoming Events"
        description="Explore scheduled startup bootcamps, workshops, and founder sessions across India."
        icon={CalendarCheck}
      />

      {/* Featured Upcoming Event: Startup Bootcamp */}
      {featuredBootcamp && (
        <section className="bg-white pt-8 pb-4 sm:pt-12 sm:pb-6">
          <Container>
            <AnimatedSection>
              <div className="overflow-hidden rounded-3xl border-2 border-brand-200 bg-gradient-to-r from-[#0B2A4A] via-[#103E6B] to-[#155E9A] p-6 text-white shadow-xl sm:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
                        <Flame size={14} className="text-amber-400" /> Featured Event
                      </span>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                        {featuredBootcamp.date}
                      </span>
                    </div>

                    <h2 className="mt-4 text-2xl font-black sm:text-3xl lg:text-4xl text-white">
                      {featuredBootcamp.title}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/85 max-w-xl">
                      {featuredBootcamp.longDescription}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-4 text-xs sm:text-sm text-white/90">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={15} className="text-brand-300" /> {featuredBootcamp.venue}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={15} className="text-brand-300" /> {featuredBootcamp.time || "Full Day"}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users size={15} className="text-brand-300" /> 15+ Selected Startups
                      </span>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <Button
                        href="/startup-bootcamp"
                        variant="primary"
                        className="bg-white text-[#0B2A4A] hover:bg-brand-50"
                      >
                        View Full Bootcamp Details <ArrowRight size={15} />
                      </Button>
                      <Button
                        href="/contact"
                        variant="ghost"
                        className="border-2 border-white/80 bg-white/10 text-white hover:bg-white/25 hover:text-white"
                      >
                        Register Interest
                      </Button>
                    </div>
                  </div>

                  <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/20 shadow-lg hidden lg:block">
                    <Image
                      src={getEventImage(featuredBootcamp.slug)}
                      alt={featuredBootcamp.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>
      )}

      {/* Grid of Other Upcoming Sessions */}
      {otherUpcomingEvents.length > 0 && (
        <section className="bg-slate-50/60 py-8 sm:py-14">
          <Container>
            <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                  Scheduled Workshops &amp; Sprints
                </span>
                <h2 className="mt-1 text-xl sm:text-2xl font-bold text-[#0B2A4A]">
                  Upcoming Workshops &amp; Sprints ({otherUpcomingEvents.length})
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                Participate in specialized sprints led by active investors, operators, and sector specialists.
              </p>
            </AnimatedSection>

            <div className="mx-auto max-w-4xl space-y-4">
              {otherUpcomingEvents.map((event, i) => {
              const { day, month } = getDateParts(event.date);
              return (
                <AnimatedSection key={event.id} delay={i * 0.05} className="h-full">
                  <div className="group flex flex-col md:flex-row overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md">
                    <div className="relative aspect-16/9 md:aspect-auto md:w-5/12 shrink-0 overflow-hidden bg-slate-100 min-h-[190px]">
                      <Image
                        src={getEventImage(event.slug)}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 flex flex-col items-center rounded-xl bg-white/95 px-2.5 py-1 text-center shadow-md backdrop-blur-xs">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-brand-700">
                          {month}
                        </span>
                        <span className="text-base font-black leading-none text-[#0B2A4A]">
                          {day}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        <Badge className="bg-brand-900/80 text-white backdrop-blur-xs text-[10px]">
                          {event.type}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                      <div>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <MapPin size={13} className="text-brand-600" /> {event.venue}
                          </span>
                          {event.time && (
                            <span className="flex items-center gap-1">
                              <Clock size={13} className="text-brand-600" /> {event.time}
                            </span>
                          )}
                        </div>

                        <h3 className="mt-2 text-base sm:text-lg font-bold text-[#0B2A4A] group-hover:text-brand-700 transition-colors">
                          {event.title}
                        </h3>

                        <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                          {event.description}
                        </p>

                        {event.speakers.length > 0 && (
                          <div className="mt-3 border-t border-slate-100 pt-2.5">
                            <p className="text-xs font-semibold text-slate-800">
                              Speaker: {event.speakers[0].name}
                            </p>
                            <p className="text-[11px] text-slate-500">
                              {event.speakers[0].designation}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          href={`/events/${event.slug}`}
                          className="text-xs font-bold text-brand-700 group-hover:underline inline-flex items-center gap-1"
                        >
                          View Details <ArrowRight size={13} />
                        </Link>
                        <Button href="/contact" size="sm" variant="outline" className="text-xs py-1 px-3.5">
                          RSVP
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>
      )}

      {/* Host / Collaborate CTA */}
      <section className="bg-white py-10 sm:py-16">
        <Container>
          <div className="rounded-3xl bg-gradient-to-b from-[#edeef8] to-[#c5d1ff] p-6 sm:p-10 text-center shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B2A4A]">
              Want to Host a Workshop or Hackathon With Tech4Bharat?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-slate-600">
              We collaborate with premier academic institutes, incubators, and corporations to organize domain-specific sprints across India.
            </p>
            <div className="mt-5">
              <Button href="/contact" variant="primary">
                Partner for an Event <ArrowRight size={15} />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
