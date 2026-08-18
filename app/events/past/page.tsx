import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  History,
  Images,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import EventGalleryMarquee from "@/components/sections/events/EventGalleryMarquee";
import { events, getDateParts } from "@/lib/events";
import { getEventImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Past Events & Recaps | Tech4Bharat",
  description:
    "Explore highlights and retrospectives of past Tech4Bharat summits, policy workshops, AI hackathons, and founder bootcamps across India.",
  openGraph: {
    title: "Past Events | Tech4Bharat",
    description: "Retrospective of Tech4Bharat summits, workshops, and ecosystem gatherings.",
    type: "website",
    locale: "en_IN",
  },
};

const pastStats = [
  { value: "500+", label: "Founders & Researchers Engaged" },
  { value: "40+", label: "Industry & Academic Mentors" },
  { value: "6+", label: "Premier Partner Institutions" },
  { value: "15+", label: "Pilot Problem Statements Tackled" },
];

export default function PastEventsPage() {
  const pastEvents = events.filter((e) => e.status === "Past");
  const spotlightEvent = pastEvents[0]; // HealthTech Summit or Product Validation Bootcamp
  const remainingPast = pastEvents.slice(1);

  return (
    <>
      <PageHero
        title="Past Events"
        description="Highlights, outcomes, and retrospectives from our previous ecosystem summits, workshops, and cohort bootcamps."
        icon={History}
      />

      {/* Impact Numbers */}
      <section className="border-b border-slate-200/80 bg-white py-6 sm:py-9">
        <Container>
          <div className="rounded-3xl bg-gradient-to-r from-[#0B2A4A] via-[#103E6B] to-[#155E9A] p-6 sm:p-8 text-white shadow-md">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:divide-x sm:divide-white/20">
              {pastStats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 0.05} className={`text-center ${i > 0 ? "sm:pl-6" : ""}`}>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-amber-300">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium text-white/85 leading-snug">{stat.label}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Spotlight Past Event */}
      {spotlightEvent && (
        <section className="bg-slate-50 py-8 sm:py-14">
          <Container>
            <AnimatedSection>
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                        Event Completed
                      </span>
                      <span className="text-xs text-slate-500 font-medium">{spotlightEvent.date}</span>
                    </div>

                    <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0B2A4A]">
                      {spotlightEvent.title}
                    </h2>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {spotlightEvent.longDescription}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-brand-600" /> {spotlightEvent.venue}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Award size={14} className="text-brand-600" /> {spotlightEvent.type}
                      </span>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href={`/events/${spotlightEvent.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:underline"
                      >
                        Read Event Summary <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                  <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-slate-100 shadow-xs">
                    <Image
                      src={getEventImage(spotlightEvent.slug)}
                      alt={spotlightEvent.title}
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

      {/* Grid of All Past Events */}
      <section className="bg-white py-8 sm:py-14">
        <Container>
          <AnimatedSection className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
              Event Archive
            </span>
            <h2 className="mt-1 text-xl sm:text-2xl font-bold text-[#0B2A4A]">
              Previous Summits &amp; Sprints ({pastEvents.length})
            </h2>
          </AnimatedSection>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {pastEvents.map((event, i) => {
              const { day, month } = getDateParts(event.date);
              return (
                <AnimatedSection key={event.id} delay={i * 0.05} className="h-full">
                  <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-md">
                    <div className="relative aspect-16/9 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={getEventImage(event.slug)}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 flex flex-col items-center rounded-xl bg-white/95 px-2.5 py-1 text-center shadow-md backdrop-blur-xs">
                        <span className="text-[10px] font-bold uppercase tracking-wide text-slate-600">
                          {month}
                        </span>
                        <span className="text-base font-black leading-none text-[#0B2A4A]">
                          {day}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-slate-800/80 text-white backdrop-blur-xs text-[10px]">
                          {event.type}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <MapPin size={13} className="text-brand-600" />
                        <span className="truncate">{event.venue}</span>
                      </div>

                      <h3 className="mt-2 text-base font-bold text-[#0B2A4A] group-hover:text-brand-700 transition-colors">
                        {event.title}
                      </h3>

                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600 line-clamp-3 flex-1">
                        {event.description}
                      </p>

                      {event.speakers.length > 0 && (
                        <div className="mt-3 border-t border-slate-100 pt-2.5 text-[11px] text-slate-600">
                          <span className="font-semibold">Speaker: </span>
                          {event.speakers[0].name} ({event.speakers[0].designation})
                        </div>
                      )}

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          href={`/events/${event.slug}`}
                          className="text-xs font-bold text-brand-700 group-hover:underline inline-flex items-center gap-1"
                        >
                          View Recap <ArrowRight size={13} />
                        </Link>
                        <Link
                          href="/gallery"
                          className="text-xs font-semibold text-slate-500 hover:text-brand-700 inline-flex items-center gap-1"
                        >
                          <Images size={13} /> Photos
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Visual Photo Stream */}
      <EventGalleryMarquee />
    </>
  );
}
