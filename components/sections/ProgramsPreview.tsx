import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface HomeProgram {
  title: string;
  badge: string;
  description: string;
  image: string;
  href: string;
  linkLabel: string;
}

const homePrograms: HomeProgram[] = [
  {
    title: "Startup Portfolio",
    badge: "Incubation",
    description: "Startups incubated and supported across critical sectors in India.",
    image: "/images/gallery/innovation-labs-1.jpg",
    href: "/portfolio",
    linkLabel: "Discover portfolio",
  },
  {
    title: "Startup Bootcamp",
    badge: "Intensive",
    description: "Intensive 1-day validation and investor readiness bootcamp.",
    image: "/images/gallery/bootcamps-1.jpg",
    href: "/startup-bootcamp",
    linkLabel: "Explore bootcamp",
  },
];

/** How founders work with us — two compact program cards in a 2-column row on both
 *  mobile and desktop, with tech4bharat.com styling and authentic workshop photos. */
export default function ProgramsPreview() {
  return (
    <section id="programs" className="bg-white py-8 sm:py-12">
      <Container>
        <div className="rounded-3xl bg-gradient-to-b from-[#edeef8] via-[#f8f9ff] to-[#c5d1ff] p-4 sm:p-7 shadow-lg border border-white/60">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#1e3a8a]">
                  Founder Pathways
                </span>
                <h2 className="mt-2 text-[20px] sm:text-[26px] font-extrabold tracking-tight bg-gradient-to-r from-[#020024] via-[#090979] to-[#00D4FF] bg-clip-text text-transparent">
                  How Founders Work With Us
                </h2>
              </div>
              <Button href="/programs" variant="outline" size="sm" className="hidden sm:inline-flex text-xs">
                View All Programs <ArrowRight size={13} />
              </Button>
            </div>
          </AnimatedSection>

          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-4">
            {homePrograms.map((program, i) => (
              <AnimatedSection key={program.title} delay={0.05 + i * 0.04} className="h-full">
                <Link
                  href={program.href}
                  className="group flex h-full flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-white/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4f6ff2] hover:shadow-md"
                >
                  <div className="relative h-24 sm:h-36 lg:h-44 w-full shrink-0 overflow-hidden bg-slate-100">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-width: 640px) 50vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-105"
                    />
                    <span className="absolute top-2 left-2 inline-flex items-center rounded-full bg-white/95 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase text-[#1e3a8a] shadow-xs">
                      {program.badge}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-2.5 sm:p-4">
                    <h3 className="text-[12.5px] sm:text-[15px] font-bold text-[#020024] leading-snug">
                      {program.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-[10.5px] sm:text-[12px] leading-snug text-gray-600">
                      {program.description}
                    </p>
                    <div className="mt-auto flex items-center gap-1 pt-2.5 text-[10.5px] sm:text-[12px] font-semibold text-[#1e3a8a] group-hover:text-[#4f6ff2]">
                      {program.linkLabel} <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.15} className="mt-4 flex sm:hidden justify-center pt-2">
            <Button href="/programs" variant="outline" size="sm" className="w-full text-xs">
              View All Programs <ArrowRight size={13} />
            </Button>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
