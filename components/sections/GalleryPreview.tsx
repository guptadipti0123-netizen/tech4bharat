import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface GalleryTile {
  src: string;
  alt: string;
  caption: string;
}

const tiles: GalleryTile[] = [
  {
    src: "/images/legacy/workshops/day1-i1-inaugural-session.png",
    alt: "Inaugural Session & Opening Ceremony at COEP",
    caption: "Opening Ceremony",
  },
  {
    src: "/images/legacy/workshops/day1-i2-intro-to-tech-policy.png",
    alt: "Introduction to Technology Policy Session",
    caption: "Policy Foundations",
  },
  {
    src: "/images/legacy/workshops/day2-i2-digital-public-infrastructure-ai.png",
    alt: "Digital Public Infrastructure & AI Session",
    caption: "DPI & AI Governance",
  },
  {
    src: "/images/legacy/workshops/day4-i2-uav-simulation-security-analysis.png",
    alt: "UAV Simulation & Security Analysis",
    caption: "Simulation & Security",
  },
  {
    src: "/images/legacy/workshops/day5-i1-earth-observation-strategic-tech.png",
    alt: "Cohort Field Visit — Earth Observation & Strategic Technologies",
    caption: "Earth Observation Visit",
  },
  {
    src: "/images/legacy/policy-workshop-3.jpg",
    alt: "Students and faculty at the closing session of the workshop",
    caption: "Closing Session",
  },
];

/** Gallery preview — authentic workshop photos, compact 2-column mobile / 3-column desktop
 *  photo grid styled with tech4bharat.com gradients and clean responsive cards. */
export default function GalleryPreview() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <Container>
        <div className="rounded-3xl bg-gradient-to-b from-[#edeef8] via-[#f8f9ff] to-[#c5d1ff] p-4 sm:p-7 shadow-lg border border-white/60">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 border border-brand-200/80 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-[#155E9A]">
              Workshop Highlights
            </span>
            <h2 className="mt-2 text-[22px] sm:text-[26px] lg:text-[28px] font-extrabold tracking-tight text-[#0B2A4A]">
              Moments From the Ecosystem
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-[13.5px] sm:text-[15px] leading-relaxed text-slate-600">
              Glimpses from our hands-on workshops, campus cohorts, and institutional field visits.
            </p>
          </AnimatedSection>

          <div className="mt-5 sm:mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3.5">
            {tiles.map((tile, i) => (
              <AnimatedSection key={tile.src} delay={i * 0.04}>
                <div className="group relative aspect-4/3 w-full overflow-hidden rounded-xl sm:rounded-2xl border border-white/80 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020024]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-2.5 sm:p-3">
                    <span className="text-xs sm:text-[13px] font-semibold text-white drop-shadow-sm">
                      {tile.caption}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2} className="mt-6 text-center">
            <Button href="/gallery" variant="outline" size="sm" className="text-xs sm:text-sm">
              View Full Gallery <ArrowRight size={13} />
            </Button>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
