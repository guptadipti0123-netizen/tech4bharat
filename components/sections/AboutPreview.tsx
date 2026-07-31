import Image from "next/image";
import { ArrowRight, FlaskConical, Globe2, Rocket, Users, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface Highlight {
  icon: LucideIcon;
  label: string;
}

const highlights: Highlight[] = [
  { icon: Rocket, label: "Startup Incubation" },
  { icon: Users, label: "Mentorship" },
  { icon: FlaskConical, label: "Innovation Labs" },
  { icon: Globe2, label: "National Network" },
];

const badges = [
  { emoji: "🚀", label: "Startup Support", className: "-left-4 top-10 sm:-left-9 sm:top-12", delay: "0s" },
  { emoji: "💡", label: "Innovation", className: "-right-2 top-0 sm:-right-7 sm:top-2", delay: "0.7s" },
  { emoji: "🤝", label: "Mentorship", className: "-left-6 bottom-24 sm:-left-11 sm:bottom-28", delay: "1.4s" },
  { emoji: "🏆", label: "Success", className: "-right-3 bottom-8 sm:-right-8 sm:bottom-10", delay: "2.1s" },
];

/** Organic, blob-shaped photo frame — an off-circle silhouette rather than a hard rectangle. */
const blobRadius = "63% 37% 54% 46% / 55% 48% 52% 45%";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-linear-to-b from-[#FFFDF7] via-[#FFF9ED] to-white py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(200,155,60,0.16), transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-125 w-125 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(200,155,60,0.14), transparent 70%)" }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[55fr_45fr] lg:gap-12">
          <AnimatedSection>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#C89B3C]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#C89B3C]">
                About Tech4Bharat
              </span>
            </div>

            <h2 className="mt-6 text-[34px] font-extrabold leading-[1.12] tracking-tight text-[#1F4E3D] sm:text-[46px] lg:text-[52px]">
              Building India&apos;s <span className="text-[#C89B3C]">Innovation Future</span>{" "}
              Through Technology &amp; Entrepreneurship
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
              We partner with early-stage founders to build durable companies — combining deep
              operating experience, access to capital, and a nationwide community that compounds
              over time.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                href="/about"
                className="bg-[#1F4E3D] text-white shadow-lg shadow-[#1F4E3D]/20 hover:bg-[#173d2f] hover:shadow-xl hover:shadow-[#1F4E3D]/25"
              >
                Explore About <ArrowRight size={18} />
              </Button>
              <Button
                href="/programs"
                variant="outline"
                className="border-[#1F4E3D]/25 text-[#1F4E3D] hover:border-[#1F4E3D] hover:bg-[#1F4E3D] hover:text-white"
              >
                Our Programs
              </Button>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-[#1F4E3D]/10 pt-8">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C89B3C]/10 text-[#C89B3C]">
                    <Icon size={18} />
                  </span>
                  <span className="text-sm font-semibold text-[#1F4E3D]">{label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
              <div
                className="absolute inset-0 scale-110 animate-blob bg-[#C89B3C]/25 blur-3xl"
                style={{ borderRadius: blobRadius }}
                aria-hidden="true"
              />

              <div className="group relative h-full w-full animate-float">
                <div
                  className="relative h-full w-full overflow-hidden border-[10px] border-white/85 shadow-2xl"
                  style={{ borderRadius: blobRadius }}
                >
                  <Image
                    src="/images/gallery/gallery-1.jpg"
                    alt="Students and founders across the Tech4Bharat innovation ecosystem"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {badges.map((badge) => (
                  <span
                    key={badge.label}
                    className={`absolute inline-flex animate-float items-center gap-1.5 rounded-full border border-[#C89B3C]/25 bg-white/95 px-3.5 py-2 text-xs font-semibold text-[#1F4E3D] shadow-lg backdrop-blur-sm ${badge.className}`}
                    style={{ animationDelay: badge.delay }}
                  >
                    <span aria-hidden="true">{badge.emoji}</span>
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
