import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { aboutImages } from "@/lib/images";

/** About preview — tech4bharat.com inspired layout with authentic workshop photo,
 *  sleek gradient container, compact typography, and responsive grid. */
export default function AboutPreview() {
  return (
    <section id="about" className="bg-white py-8 sm:py-14">
      <Container>
        <div className="rounded-3xl bg-gradient-to-b from-[#edeef8] via-[#f8f9ff] to-[#c5d1ff] p-4 sm:p-8 shadow-lg border border-white/60">
          <div className="grid gap-6 items-center lg:grid-cols-2 lg:gap-8">
            <AnimatedSection>
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-md border-2 border-white">
                <Image
                  src="/images/legacy/policy-workshop-1.png"
                  alt="Tech4Bharat workshop cohort at COEP University"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover brightness-105"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="flex flex-col justify-center rounded-2xl bg-white/75 p-5 sm:p-7 shadow-sm backdrop-blur-md border border-white/70">
                <span className="inline-flex w-fit items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#1e3a8a]">
                  About Tech4Bharat
                </span>
                <h2 className="mt-2.5 text-[20px] sm:text-[26px] font-extrabold leading-tight text-[#020024] tracking-tight">
                  National Platform for Social Entrepreneurship
                </h2>

                <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-600">
                  Tech4Bharat is dedicated to empowering India&apos;s youth with cutting-edge skills and supporting social impact startups across critical national domains.
                </p>
                <p className="mt-2.5 text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-600">
                  Through mentorship, research translation with leading academic institutions, and ecosystem partnerships, we help founders build sustainable ventures for Bharat.
                </p>

                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <Button href="/about" size="sm">
                    Learn More <ArrowRight size={14} />
                  </Button>
                  <Button href="/contact" variant="outline" size="sm">
                    Contact Team
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
