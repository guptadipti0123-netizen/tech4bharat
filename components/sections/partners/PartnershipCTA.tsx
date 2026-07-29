import { ArrowRight, Handshake } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function PartnershipCTA() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-800 via-brand-700 to-brand-900 px-8 py-16 text-center shadow-2xl sm:px-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Handshake size={28} />
              </div>
              <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                Interested in partnering with Tech4Bharat?
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Whether you&apos;re an institution, government body, or industry leader, let&apos;s
                explore how we can build India&apos;s startup ecosystem together.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact" size="lg" variant="secondary">
                  Become a Partner <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
