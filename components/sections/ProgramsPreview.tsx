import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface HomeProgram {
  title: string;
  description: string;
  image: string;
  href: string;
}

const homePrograms: HomeProgram[] = [
  {
    title: "Startup Portfolio",
    description: "The startups Tech4Bharat has backed and incubated.",
    image: "/images/programs/incubation.jpg",
    href: "/portfolio",
  },
  {
    title: "Startup Bootcamp",
    description: "A one-day intensive program for early-stage founders.",
    image: "/images/gallery/hackathons-1.jpg",
    href: "/startup-bootcamp",
  },
];

/** Programs preview — exactly the two real programs that exist as dedicated pages, each a
 *  large horizontal split card instead of a small icon-grid tile. */
export default function ProgramsPreview() {
  return (
    <section id="programs" className="bg-slate-50 py-8 sm:py-12">
      <Container>
        <AnimatedSection className="text-center">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold leading-tight text-ink-900 md:text-4xl">
            How founders work with us
          </h2>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {homePrograms.map((program, i) => (
            <AnimatedSection key={program.title} delay={i * 0.08}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm sm:flex-row">
                <div className="relative h-48 w-full shrink-0 sm:h-auto sm:w-2/5">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6 sm:p-7">
                  <h3 className="text-2xl font-bold text-ink-900">{program.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">{program.description}</p>
                  <div className="mt-5">
                    <Button href={program.href} variant="outline" size="sm">
                      Learn More <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
