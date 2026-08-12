import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HomeSectionHeading from "@/components/sections/HomeSectionHeading";

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

export default function ProgramsPreview() {
  return (
    <section id="programs" className="bg-white py-14 sm:py-16 lg:py-24">
      <Container>
        <AnimatedSection>
          <HomeSectionHeading title="How founders work with us" />
        </AnimatedSection>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-5">
          <AnimatedSection delay={0.08}>
            <Link
              href={homePrograms[0].href}
              className="group flex flex-col overflow-hidden rounded-[30px] border border-slate-200/80 bg-[linear-gradient(135deg,#f8fcf9_0%,#f1f7f2_100%)] shadow-[0_12px_30px_rgba(22,58,58,0.05)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <Image src={homePrograms[0].image} alt={homePrograms[0].title} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-col p-6 sm:p-7">
                <h3 className="text-[1.15rem] font-semibold text-ink-900 sm:text-[1.25rem]">{homePrograms[0].title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{homePrograms[0].description}</p>
                <div className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-[#1F4E3D]">
                  Discover the portfolio <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </AnimatedSection>

          <div className="flex flex-col gap-4">
            <AnimatedSection delay={0.12}>
              <Link
                href={homePrograms[1].href}
                className="group flex items-center gap-4 rounded-[24px] border border-slate-200/80 bg-[linear-gradient(135deg,#fcfdfc_0%,#f7fbf8_100%)] p-4 shadow-[0_10px_26px_rgba(22,58,58,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1F4E3D]/25"
              >
                <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-[18px] sm:h-20 sm:w-20">
                  <Image src={homePrograms[1].image} alt={homePrograms[1].title} fill sizes="80px" className="object-contain" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[1rem] font-semibold text-ink-900 sm:text-lg">{homePrograms[1].title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{homePrograms[1].description}</p>
                </div>
                <ArrowRight size={18} className="shrink-0 text-[#1F4E3D] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.16}>
              <div className="rounded-[24px] border border-slate-200/80 bg-[linear-gradient(135deg,#fffdf8_0%,#fff7e7_100%)] p-5 shadow-[0_10px_24px_rgba(22,58,58,0.04)] sm:p-6">
                <p className="text-sm leading-7 text-slate-600">
                  Practical support from mentors and operators, access to capital pathways, and a national network that compounds over time.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Button href="/programs" variant="outline" size="sm" className="w-fit">
                View All Programs <ArrowRight size={14} />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
