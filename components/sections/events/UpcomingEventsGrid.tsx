import Image from "next/image";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { getEventImage } from "@/lib/images";
import type { EventItem } from "@/lib/events";

interface UpcomingEventsGridProps {
  events: EventItem[];
}

// A large first tile, then two smaller ones beside it — a real bento split, not three equal boxes.
const spans = ["lg:col-span-2 lg:row-span-2 h-72", "h-56", "h-56"];

/** Overlay-card grid — full-bleed photo with a gradient text overlay, mixed cell sizes. */
export default function UpcomingEventsGrid({ events }: UpcomingEventsGridProps) {
  if (events.length === 0) return null;

  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <AnimatedSection>
          <SectionTitle eyebrow="What's Next" title="Upcoming Events" align="left" />
        </AnimatedSection>

        <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {events.slice(0, 3).map((event, i) => (
            <AnimatedSection key={event.id} delay={i * 0.08} className={spans[i] ?? "h-56"}>
              <Link
                href={`/events/${event.slug}`}
                className="group relative block h-full w-full overflow-hidden rounded-3xl shadow-lg"
              >
                <Image
                  src={getEventImage(event.slug)}
                  alt={event.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink-900/85 via-ink-900/20 to-transparent" />
                <Badge variant="success" className="absolute right-4 top-4">
                  {event.status}
                </Badge>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/70">{event.type}</p>
                  <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">{event.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-white/80">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {event.date}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {event.venue}</span>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View Details <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
