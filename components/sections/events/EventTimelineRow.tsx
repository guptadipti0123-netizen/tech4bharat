import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { getEventImage } from "@/lib/images";
import type { EventItem } from "@/lib/events";

interface EventTimelineRowProps {
  event: EventItem;
  reverse?: boolean;
}

/** One row of the events timeline — image and info alternate sides, with a dot marking the row on the connecting line. */
export default function EventTimelineRow({ event, reverse = false }: EventTimelineRowProps) {
  return (
    <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <span className="absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-brand-500 shadow-md lg:block" />

      <Link
        href={`/events/${event.slug}`}
        className={cn(
          "group relative block h-64 overflow-hidden rounded-4xl border-4 border-white shadow-lg sm:h-80",
          reverse && "lg:order-2"
        )}
      >
        <Image
          src={getEventImage(event.slug)}
          alt=""
          fill
          loading="lazy"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-900/55 via-transparent to-transparent" />
        <Badge
          variant={event.status === "Upcoming" ? "success" : "neutral"}
          className="absolute right-4 top-4"
        >
          {event.status}
        </Badge>
        <span className="absolute bottom-4 left-5 text-lg font-bold text-white">{event.type}</span>
      </Link>

      <div className={cn(reverse && "lg:order-1 lg:text-right")}>
        <div
          className={cn(
            "flex flex-wrap items-center gap-3 text-sm text-slate-500",
            reverse && "lg:justify-end"
          )}
        >
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-brand-600" /> {event.date}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-brand-600" /> {event.venue}
          </span>
        </div>
        <h3 className="mt-3 text-2xl font-bold text-ink-900">{event.title}</h3>
        <p className="mt-3 leading-relaxed text-slate-600">{event.description}</p>
        <Button
          href={`/events/${event.slug}`}
          variant="ghost"
          size="sm"
          className={cn("mt-5 w-fit", reverse && "lg:ml-auto")}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
