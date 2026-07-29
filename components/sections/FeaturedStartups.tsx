import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { startups } from "@/lib/data";
import { getStartupImage } from "@/lib/images";

export default function FeaturedStartups() {
  return (
    <section id="startups" className="bg-white py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Portfolio"
            title="Founders building the future, today"
            description="A glimpse at startups from our incubation portfolio."
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {startups.map((startup, i) => (
            <AnimatedSection key={startup.name} delay={i * 0.06}>
              <Card className="flex flex-col overflow-hidden p-0">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={getStartupImage(startup.domain)}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-brand-900 shadow-lg">
                    {startup.logoInitial}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-ink-900">{startup.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">Founded by {startup.founder}</p>
                  <span className="mt-2 inline-block w-fit text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {startup.domain}
                  </span>
                  <p className="mt-3 flex-1 text-slate-600">{startup.tagline}</p>
                  <Button href="/startups" variant="ghost" size="sm" className="-ml-4 mt-4 w-fit">
                    Learn More <ArrowUpRight size={16} />
                  </Button>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
