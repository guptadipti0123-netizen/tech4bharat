import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { aboutImages } from "@/lib/images";

const highlights = [
  "Founder-first mentorship from operators who've built at scale",
  "Access to a curated network of investors and enterprise partners",
  "Hands-on support across product, growth, and fundraising",
];

export default function AboutPreview() {
  return (
    <section id="about" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedSection>
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={aboutImages.team}
                alt="The Tech4Bharat team collaborating with founders"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-950/85 via-brand-900/15 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/10 p-6 backdrop-blur-md">
                <p className="text-3xl font-bold text-white">150+</p>
                <p className="text-sm text-white/70">Startups incubated since inception</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              Who We Are
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              A launchpad for founders solving India&apos;s biggest opportunities
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              We partner with early-stage founders to build durable companies — combining
              deep operating experience, access to capital, and a community that compounds
              over time.
            </p>
            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-brand-600" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/about" variant="outline" className="mt-8">
              Read More
            </Button>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
