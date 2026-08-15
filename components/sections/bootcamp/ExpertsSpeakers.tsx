import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface ExpertCategory {
  image: string;
  badge: string;
  title: string;
  description: string;
}

// No specific speaker lineup has been announced yet, so these stay category cards rather
// than named individuals — each paired with a real photo of that kind of moment from the
// Tech4Bharat gallery, not a stock placeholder or a fabricated name.
const categories: ExpertCategory[] = [
  {
    image: "/images/gallery/gallery-12.jpg",
    badge: "Mentor",
    title: "Startup Mentors",
    description: "Operators who have built & scaled companies.",
  },
  {
    image: "/images/programs/startup-pitching.jpg",
    badge: "Investor",
    title: "Investors",
    description: "Angels and VCs backing early-stage founders.",
  },
  {
    image: "/images/gallery/gallery-9.jpg",
    badge: "Industry Leader",
    title: "Industry Experts",
    description: "Specialists in product, growth & scale.",
  },
  {
    image: "/images/legacy/policy-workshop-2.png",
    badge: "Researcher",
    title: "Academic Leaders",
    description: "Faculty supporting deep-tech translation.",
  },
];

/** Who You'll Meet — 4 balanced cards where the photo is prominent (~80% height of the card)
 *  paired with a compact, clear caption area. */
export default function ExpertsSpeakers() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 bg-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30"
        style={{ background: "linear-gradient(180deg, #F5FAFE 0%, #FFFFFF 50%, #F5FAFE 100%)" }}
      />

      <Container className="relative">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[20px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B2A4A] sm:text-[24px] lg:text-[28px]">
              Experts &amp; Speakers
            </h2>
            <p className="mx-auto mt-2 max-w-175 text-[13px] leading-relaxed text-slate-600 sm:text-[15px]">
              Throughout the day, participants will interact directly with:
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {categories.map((category, i) => (
            <AnimatedSection key={category.title} delay={i * 0.05} animation="scale" className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#D3E4F5] bg-white shadow-[0_4px_16px_rgba(6,26,44,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#155E9A] hover:shadow-[0_16px_32px_rgba(6,26,44,0.12)]">
                {/* Photo Area */}
                <div className="relative aspect-3/4 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <span className="absolute top-2.5 left-2.5 inline-flex items-center rounded-full bg-white/95 px-2.5 py-0.5 text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wide text-[#155E9A] shadow-sm backdrop-blur-md">
                    {category.badge}
                  </span>
                </div>

                {/* Compact Caption Area */}
                <div className="flex flex-1 flex-col justify-center p-2.5 sm:p-3.5 bg-white">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-[12.5px] sm:text-[14px] font-bold leading-tight text-[#0B2A4A]">{category.title}</h3>
                    <ArrowUpRight
                      size={14}
                      className="shrink-0 text-[#155E9A] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </div>
                  <p className="mt-1 line-clamp-2 text-[10.5px] sm:text-[11.5px] leading-snug text-slate-500">
                    {category.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
