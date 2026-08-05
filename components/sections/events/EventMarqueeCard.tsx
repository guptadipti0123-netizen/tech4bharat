import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { getEventImage } from "@/lib/images";
import type { EventItem } from "@/lib/events";

/** Large landscape event card — dark gradient overlay with title/date/venue bottom-left and
 *  a category badge top-right. Shared by the Upcoming and Past events marquees. */
export default function EventMarqueeCard({ event }: { event: EventItem }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group relative block aspect-video w-95 shrink-0 overflow-hidden rounded-3xl border border-[#DDEEE5] bg-white shadow-[0_12px_36px_rgba(22,58,58,0.14)] transition-all duration-[400ms] ease-out hover:-translate-y-2 hover:shadow-[0_26px_60px_rgba(22,58,58,0.28)] sm:w-120 lg:w-140"
    >
      <Image
        src={getEventImage(event.slug)}
        alt={event.title}
        fill
        loading="lazy"
        sizes="(max-width: 640px) 380px, (max-width: 1024px) 480px, 560px"
        className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-105"
      />

      {/* Base gradient — always present, keeps overlay text legible at rest */}
      <div className="absolute inset-0 bg-linear-to-t from-ink-900/85 via-ink-900/15 to-transparent" />
      {/* Hover wash — deepens the overlay on hover */}
      <div className="absolute inset-0 bg-ink-900/0 transition-colors duration-[400ms] ease-out group-hover:bg-ink-900/25" />

      <span className="absolute right-4 top-4 rounded-full bg-accent-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink-900 shadow-md">
        {event.type}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">{event.title}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-white/85 sm:text-sm">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} className="shrink-0 text-brand-300" /> {event.date}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="shrink-0 text-brand-300" /> {event.venue}
          </span>
        </div>
      </div>
    </Link>
  );
}
