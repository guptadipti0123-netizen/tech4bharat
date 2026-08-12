import Image from "next/image";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";
import DotGrid from "@/components/ui/DotGrid";

const infoChips = [
  { icon: Calendar, label: "October 2026" },
  { icon: MapPin, label: "Mumbai" },
  { icon: Clock, label: "One-Day Program" },
];

/** Premium split hero — copy and event details on the left, the complete campus photo on
 *  the right in its own rounded, floating frame. Replaces the previous full-bleed banner
 *  treatment, which forced a landscape photo into a very wide/short box and cropped most of
 *  it away on wide screens; here the image is never cropped to fill an unrelated ratio. */
export default function BootcampHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-brand-50 via-white to-secondary-50 pb-10 pt-24 sm:pb-14 sm:pt-28">
      <DotGrid className="left-0 top-0 h-full w-full text-brand-700/4" />
      <Blob tone="brand" className="-left-32 top-10 h-96 w-96" />
      <Blob tone="accent" className="-right-24 bottom-0 h-80 w-80" animate={false} />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <AnimatedSection>
            <h1 className="text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-[#163B2D] sm:text-[36px] lg:text-[42px]">
              One-Day Startup Bootcamp 2026
            </h1>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-slate-600">
              A one-day intensive startup bootcamp designed to help early-stage founders
              validate ideas, build sustainable businesses, connect with experts, and prepare
              for funding opportunities.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {infoChips.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700"
                >
                  <Icon size={15} /> {label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Register Now <ArrowRight size={18} />
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} animation="scale">
            <div className="relative mx-auto w-full max-w-xl">
              <div
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] opacity-70"
                style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(76,175,141,0.16), transparent 70%)" }}
                aria-hidden="true"
              />
              <div className="relative h-95 w-full animate-float overflow-hidden rounded-[28px] border-4 border-white bg-white shadow-2xl sm:h-115 lg:h-140">
                <Image
                  src="/images/gallery/hackathons-3.jpg"
                  alt="Founders collaborating around a laptop at the Tech4Bharat Startup Bootcamp"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
