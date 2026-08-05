import Image from "next/image";
import { ArrowUpRight, Handshake, Presentation, Sprout, Users, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface ProgramItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

// `id` gives each card a real anchor target — the Navbar's Programs dropdown links to
// /programs#incubation and /programs#workshops directly.
const programs: ProgramItem[] = [
  {
    id: "incubation",
    icon: Sprout,
    title: "Startup Incubation",
    description: "Structured, cohort-based support from first idea to a working, fundable company.",
    image: "/images/programs/incubation.jpg",
  },
  {
    id: "mentorship",
    icon: Users,
    title: "Mentorship",
    description: "One-on-one guidance from experienced operators and industry mentors.",
    image: "/images/programs/mentoring.jpg",
  },
  {
    id: "workshops",
    icon: Presentation,
    title: "Workshops & Training",
    description: "Hands-on sessions covering fundraising, product, and go-to-market fundamentals.",
    image: "/images/gallery/hackathons-1.jpg",
  },
  {
    id: "funding-networking",
    icon: Handshake,
    title: "Funding & Networking Support",
    description: "Grant facilitation and curated introductions to our investor and partner network.",
    image: "/images/gallery/gallery-3.jpg",
  },
];

const learnMoreHref = "/contact";

/** One consistent premium card, repeated for every program — replaces four previously
 *  bespoke one-off layouts so every card reads the same and stretches to equal height. */
function ProgramCard({ id, icon: Icon, title, description, image }: ProgramItem) {
  return (
    <div
      id={id}
      className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(22,58,58,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_18px_44px_rgba(22,58,58,0.14)]"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={`${title} at Tech4Bharat`}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-900/50 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-white bg-brand-700 text-white shadow-md">
          <Icon size={22} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-bold text-ink-900">{title}</h3>
        <p className="mt-2.5 flex-1 leading-relaxed text-slate-600">{description}</p>
        <Button href={learnMoreHref} variant="outline" size="sm" className="mt-5 w-fit">
          Learn More <ArrowUpRight size={16} />
        </Button>
      </div>
    </div>
  );
}

export default function ProgramGrid() {
  return (
    <section className="relative overflow-hidden bg-brand-50 pb-8 pt-4 sm:pb-12 sm:pt-6">
      <Container className="relative">
        <div className="grid gap-6 sm:grid-cols-2">
          {programs.map((program, i) => (
            <AnimatedSection key={program.title} delay={i * 0.08} animation="scale" className="h-full">
              <ProgramCard {...program} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
