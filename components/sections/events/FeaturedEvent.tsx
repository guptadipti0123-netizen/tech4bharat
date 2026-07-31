import Link from "next/link";
import Image from "next/image";
import { Calendar, ImageIcon, MapPin, Sparkles } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { getEventImage } from "@/lib/images";
import type { EventItem } from "@/lib/events";

/** Large split banner for the flagship event — a 60/40 image-to-info layout instead of another grid tile. */
export default function FeaturedEvent({ event }: { event: EventItem }) {
  return (
    <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-xl">
      <div className="grid lg:grid-cols-5">
        <Link
          href={`/events/${event.slug}`}
          className="group relative block h-72 overflow-hidden sm:h-96 lg:col-span-3 lg:h-full lg:min-h-125"
        >
          <Image
            src={getEventImage(event.slug)}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-900/60 via-brand-900/5 to-transparent" />
          <Badge
            variant={event.status === "Upcoming" ? "success" : "neutral"}
            className="absolute right-5 top-5"
          >
            {event.status}
          </Badge>
          <span className="absolute bottom-5 left-6 text-xl font-bold text-white">{event.type}</span>
        </Link>

        <div className="flex flex-col justify-center p-8 lg:col-span-2 lg:p-12">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-linear-to-r from-accent-100 to-accent-50 px-4 py-1.5 text-sm font-semibold text-accent-700">
            <Sparkles size={14} /> Featured Event
          </span>
          <h3 className="mt-5 text-2xl font-extrabold leading-tight text-ink-900 sm:text-3xl">
            {event.title}
          </h3>

          <div className="mt-5 space-y-2.5 text-sm text-slate-600">
            <p className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Calendar size={15} />
              </span>
              {event.date}
            </p>
            <p className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <MapPin size={15} />
              </span>
              {event.venue}
            </p>
          </div>

          <p className="mt-5 leading-relaxed text-slate-600">{event.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`/events/${event.slug}`}>View Event Details</Button>
            <Button href="/gallery" variant="outline">
              <ImageIcon size={16} /> View Gallery
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
