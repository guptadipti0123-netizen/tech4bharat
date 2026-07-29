import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { aboutImages } from "@/lib/images";

const collaborationWays = [
  "Fund grant programs for social-impact and rural innovation startups",
  "Offer employee volunteering as mentors, judges, or workshop facilitators",
  "Provide pilot opportunities, infrastructure, or distribution access to portfolio startups",
  "Co-create themed innovation challenges aligned with your CSR focus areas",
];

export default function CSRCollaboration() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedSection animation="slide-right">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={aboutImages.meeting}
                alt="Corporate CSR team collaborating with Tech4Bharat"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-950/70 via-transparent to-transparent" />
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                CSR Collaboration
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                Put your CSR budget to work building Bharat&apos;s startup future
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                We partner with corporate CSR teams to channel funding, talent, and infrastructure
                toward founders solving India&apos;s biggest social and economic challenges — with
                full visibility into the outcomes your contribution creates.
              </p>
            </AnimatedSection>

            <ul className="mt-8 space-y-4">
              {collaborationWays.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-secondary-600" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <Button href="/contact" size="lg" className="mt-8">
              Become a CSR Partner <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
