import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { getEventImage } from "@/lib/images";
import type { EventItem } from "@/lib/events";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <Card className="flex flex-col overflow-hidden p-0">
      <div className="relative h-36 w-full overflow-hidden">
        <Image
          src={getEventImage(event.slug)}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-900/85 via-ink-900/20 to-transparent" />
        <span className="absolute bottom-3 left-4 text-lg font-bold text-white">{event.type}</span>
        <Badge
          variant={event.status === "Upcoming" ? "success" : "neutral"}
          className="absolute right-4 top-4"
        >
          {event.status}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-ink-900">{event.title}</h3>
        <div className="mt-3 space-y-1.5 text-sm text-slate-500">
          <p className="flex items-center gap-2">
            <Calendar size={14} /> {event.date}
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={14} /> {event.venue}
          </p>
        </div>
        <p className="mt-3 flex-1 text-slate-600">{event.description}</p>
        <Button href={`/events/${event.slug}`} variant="outline" size="sm" className="mt-6 w-fit">
          View Details
        </Button>
      </div>
    </Card>
  );
}
