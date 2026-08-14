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
  linkLabel: string;
}

const homePrograms: HomeProgram[] = [
  {
    title: "Startup Portfolio",
    description: "The startups Tech4Bharat has backed and incubated.",
    image: "/images/programs/incubation.jpg",
    href: "/portfolio",
    linkLabel: "Discover the portfolio",
  },
  {
    title: "Startup Bootcamp",
    description: "A one-day intensive program for early-stage founders.",
    image: "/images/gallery/hackathons-1.jpg",
    href: "/startup-bootcamp",
    linkLabel: "Explore the bootcamp",
  },
];

/** How founders work with us — two uniform program cards (identical image height, padding,
 *  border, radius, and typography), held inside a soft panel to match the rest of the Home
 *  page's visual rhythm. */
export default function ProgramsPreview() {
  return (
    <section id="programs" className="bg-white py-10 sm:py-14 lg:py-20">
      <Container>
        <div className="rounded-[36px] bg-[linear-gradient(160deg,#F5FAFE_0%,#F5FAFE_100%)] p-4 sm:p-6 lg:p-8">
          <AnimatedSection>
            <HomeSectionHeading title="How founders work with us" />
          </AnimatedSection>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4">
            {homePrograms.map((program, i) => (
              <AnimatedSection key={program.title} delay={0.08 + i * 0.04}>
                <Link
                  href={program.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#D3E4F5] bg-white shadow-[0_6px_18px_rgba(6,26,44,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(6,26,44,0.1)]"
                >
                  <div className="relative h-32 shrink-0 overflow-hidden bg-[linear-gradient(135deg,#F5FAFE_0%,#F5FAFE_100%)] sm:h-40">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-4.5">
                    <h3 className="text-[15px] font-semibold text-ink-900 sm:text-[16px]">{program.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{program.description}</p>
                    <div className="mt-auto flex items-center gap-2 pt-3 text-[12px] font-semibold text-brand-500">
                      {program.linkLabel} <ArrowRight size={13} />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.18} className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-[13px] leading-relaxed text-slate-600">
              Practical support from mentors and operators, access to capital pathways, and a
              national network that compounds over time.
            </p>
            <Button href="/programs" variant="outline" size="sm" className="w-fit shrink-0">
              View All Programs <ArrowRight size={14} />
            </Button>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
