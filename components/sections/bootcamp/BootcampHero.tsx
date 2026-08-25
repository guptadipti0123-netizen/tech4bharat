import Image from "next/image";
import { ArrowRight, Calendar, Clock, MapPin, ShieldCheck, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const infoChips = [
  { icon: Calendar, label: "October 2026" },
  { icon: MapPin, label: "Mumbai" },
  { icon: Clock, label: "One-Day Intensive" },
  { icon: Users, label: "Min. 15 Startups" },
  { icon: ShieldCheck, label: "Social Impact Focus" },
];

export default function BootcampHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF3FA] via-[#F8FAFC] to-white pb-10 pt-20 sm:pb-14 sm:pt-26 border-b border-slate-200/50">
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <AnimatedSection>
            <h1 className="text-[26px] font-extrabold leading-[1.15] tracking-tight text-[#0B2A4A] sm:text-[34px] lg:text-[40px]">
              One-Day Startup Bootcamp 2026
            </h1>
            <p className="mt-3 max-w-xl text-[14px] sm:text-[15px] leading-relaxed text-slate-600">
              An intensive one-day bootcamp organized in Mumbai to equip social impact entrepreneurs with actionable business frameworks, investor readiness, and ecosystem connections.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 sm:gap-2.5">
              {infoChips.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs"
                >
                  <Icon size={14} className="text-brand-600" /> {label}
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
            <div className="relative mx-auto w-full max-w-md">
              <div
                className="pointer-events-none absolute -inset-4 -z-10 rounded-[28px] opacity-70"
                style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(21,94,154,0.16), transparent 70%)" }}
                aria-hidden="true"
              />
              <div className="relative aspect-4/3 max-h-[320px] w-full animate-float overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl">
                <Image
                  src="/images/gallery/gallery-8.jpg"
                  alt="Founders collaborating at the Tech4Bharat Startup Bootcamp"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
