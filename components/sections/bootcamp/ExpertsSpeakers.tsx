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
    description: "Operators who've built and scaled companies of their own.",
  },
  {
    image: "/images/gallery/gallery-3.jpg",
    badge: "Investor",
    title: "Investors",
    description: "Angels and VCs actively backing early-stage Indian founders.",
  },
  {
    image: "/images/gallery/gallery-10.jpg",
    badge: "Industry Leader",
    title: "Industry Experts",
    description: "Specialists across product, growth, and go-to-market.",
  },
  {
    image: "/images/gallery/students-1.jpg",
    badge: "Researcher",
    title: "Academic Institutions",
    description: "Researchers and faculty supporting deep-tech translation.",
  },
  {
    image: "/images/gallery/gallery-2.jpg",
    badge: "Leader",
    title: "Incubation Leaders",
    description: "Leaders from India's incubation and accelerator ecosystem.",
  },
];

/** Who You'll Meet — five uniform cards (identical size, border, and accent color, so they
 *  read as one consistent set): a square photo with a badge chip overlaid on it, then title
 *  and description. Real photos standing in for each category — no lineup announced yet, so
 *  no fabricated names. */
export default function ExpertsSpeakers() {
  return (
    <section className="relative overflow-hidden pt-22.5 pb-22.5">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30"
        style={{ background: "linear-gradient(180deg, #F5FAFE 0%, #F5FAFE 45%, #F5FAFE 100%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -left-20 -top-20 -z-20 h-100 w-100 rounded-full opacity-[0.18] blur-[200px]"
        style={{ backgroundColor: "#EAF4FB" }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 -z-20 h-100 w-100 rounded-full opacity-[0.18] blur-[200px]"
        style={{ backgroundColor: "#E8F4FF" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-1/2 -z-20 h-100 w-100 -translate-x-1/2 rounded-full opacity-15 blur-[200px]"
        style={{ backgroundColor: "#EAF4FB" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, #0B2A4A 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <Container className="relative px-10 sm:px-10 lg:px-10">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[22px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B2A4A] sm:text-[26px] lg:text-[30px]">
              Experts &amp; Speakers
            </h2>
            <p className="mx-auto mt-3 max-w-175 text-[17px] leading-relaxed text-slate-600 sm:text-[18px]">
              Throughout the day, participants will interact directly with:
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category, i) => (
            <AnimatedSection key={category.title} delay={i * 0.06} animation="scale">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#D3E4F5] bg-white shadow-[0_6px_18px_rgba(6,26,44,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#155E9A]/50 hover:shadow-[0_16px_34px_rgba(6,26,44,0.12)]">
                <div className="relative h-28 w-full shrink-0 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 left-2 inline-flex items-center rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#155E9A] backdrop-blur-sm">
                    {category.badge}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-[15px] font-bold leading-tight text-[#0B2A4A]">{category.title}</h3>
                  <p className="mt-1.5 line-clamp-none text-[13px] leading-snug text-slate-600 sm:line-clamp-2">
                    {category.description}
                  </p>
                  <ArrowUpRight
                    size={15}
                    className="mt-auto ml-auto pt-2 text-[#155E9A] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
