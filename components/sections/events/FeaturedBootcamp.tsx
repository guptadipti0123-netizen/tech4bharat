import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { events } from "@/lib/events";
import { getEventImage } from "@/lib/images";

export default function FeaturedBootcamp() {
  const bootcamp = events.find((event) => event.featured);
  if (!bootcamp) return null;

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl text-white shadow-2xl">
            <div className="absolute inset-0">
              <Image
                src={getEventImage(bootcamp.slug)}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-br from-brand-950/95 via-brand-900/90 to-brand-950/80" />
            </div>
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />

            <div className="relative p-8 sm:p-12 lg:p-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-md">
                Flagship Event
              </span>
              <h2 className="mt-6 max-w-2xl text-3xl font-bold sm:text-4xl">{bootcamp.title}</h2>
              <p className="mt-4 max-w-2xl text-lg text-white/70">{bootcamp.description}</p>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">
                <span className="flex items-center gap-2">
                  <Calendar size={16} /> {bootcamp.date}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={16} /> {bootcamp.venue}
                </span>
                <span className="flex items-center gap-2">
                  <Users size={16} /> {bootcamp.speakers.length} Speakers
                </span>
              </div>

              <Button href={`/events/${bootcamp.slug}`} size="lg" variant="secondary" className="mt-8">
                Reserve Your Spot <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
