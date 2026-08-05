import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

/** A focused, program-specific registration band — distinct from the site's global footer
 *  CTA, scoped to this one dated bootcamp cohort. */
export default function BootcampRegistrationCTA() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-brand-700 via-brand-600 to-secondary-700 py-8 sm:py-12">
      <Container className="relative">
        <AnimatedSection animation="scale" className="mx-auto max-w-3xl text-center">
          <h2
            className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.15)" }}
          >
            Seats are limited to this one cohort
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Reserve your spot for the One-Day Startup Bootcamp before the cohort fills.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
              <Calendar size={15} /> October 2026
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
              <MapPin size={15} /> Mumbai
            </span>
          </div>

          <div className="mt-8">
            <Button href="/contact" variant="secondary" size="lg">
              Register Now <ArrowRight size={18} />
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
