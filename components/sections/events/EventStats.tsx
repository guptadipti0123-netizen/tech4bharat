import { Calendar, MapPin, Mic2, Rocket } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CountUp from "@/components/ui/CountUp";
import { events } from "@/lib/events";

/** Event statistics strip — every number is computed live from the event dataset, so it
 *  can never drift out of sync as events are added or removed. */
export default function EventStats() {
  const totalEvents = events.length;
  const uniqueSpeakers = new Set(events.flatMap((e) => e.speakers.map((s) => s.name))).size;
  const uniqueCities = new Set(events.map((e) => e.venue)).size;
  const upcoming = events.filter((e) => e.status === "Upcoming").length;

  const stats = [
    { icon: Calendar, value: totalEvents, suffix: "", label: "Events Hosted" },
    { icon: Rocket, value: upcoming, suffix: "", label: "Upcoming" },
    { icon: Mic2, value: uniqueSpeakers, suffix: "+", label: "Speakers" },
    { icon: MapPin, value: uniqueCities, suffix: "+", label: "Venues & Cities" },
  ];

  return (
    <section className="bg-brand-50 py-12 sm:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <AnimatedSection key={label} delay={i * 0.08} animation="scale">
              <div className="flex flex-col items-center text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-700 text-white shadow-md shadow-brand-700/25">
                  <Icon size={20} />
                </span>
                <p className="mt-3 text-3xl font-extrabold text-ink-900 sm:text-4xl">
                  <CountUp value={value} suffix={suffix} />
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600">{label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
