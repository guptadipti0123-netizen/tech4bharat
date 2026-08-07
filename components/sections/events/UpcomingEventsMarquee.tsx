"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import EventMarqueeCard from "@/components/sections/events/EventMarqueeCard";
import { useDragMarquee } from "@/lib/hooks/useDragMarquee";
import type { EventItem } from "@/lib/events";

interface UpcomingEventsMarqueeProps {
  events: EventItem[];
}

/** Premium horizontal marquee — a continuously auto-scrolling, infinitely looping strip of
 *  large landscape event cards. See `useDragMarquee` for the scroll mechanics. */
export default function UpcomingEventsMarquee({ events }: UpcomingEventsMarqueeProps) {
  const { trackProps } = useDragMarquee({ itemCount: events.length });
  const loopEvents = events.length > 0 ? [...events, ...events] : [];

  if (events.length === 0) return null;

  return (
    <section id="upcoming-events" className="relative overflow-hidden bg-sand-50 py-8 sm:py-12">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Upcoming Events"
            align="left"
            description="Discover workshops, bootcamps, networking sessions and innovation programs happening across India."
            titleClassName="text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-[#163B2D] sm:text-[38px] lg:text-[44px]"
            descriptionClassName="mt-3 text-[18px] sm:text-[18px] font-medium leading-relaxed text-[#5F6B68]"
          />
        </AnimatedSection>
      </Container>

      <div className="relative mt-9">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-sand-50 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-sand-50 to-transparent sm:w-24" />

        <div
          {...trackProps}
          className="flex cursor-grab gap-6 overflow-x-auto scroll-smooth px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] active:cursor-grabbing sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden"
        >
          {loopEvents.map((event, i) => (
            <EventMarqueeCard key={`${event.id}-${i}`} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
