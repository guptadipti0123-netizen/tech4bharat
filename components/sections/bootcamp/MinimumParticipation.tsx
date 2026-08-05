import { Users } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

/** A single, visually prominent highlight card calling out the minimum startup
 *  participation threshold for the bootcamp to run. */
export default function MinimumParticipation() {
  return (
    <section className="bg-secondary-50 py-8 sm:py-12">
      <Container>
        <AnimatedSection animation="scale" className="mx-auto max-w-2xl">
          <div className="flex flex-col items-center gap-5 rounded-[28px] bg-linear-to-br from-brand-600 via-brand-500 to-secondary-600 p-10 text-center shadow-[0_20px_48px_rgba(76,175,141,0.3)] sm:flex-row sm:text-left">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md">
              <Users size={28} />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-white/80">
                Minimum Startup Participation
              </p>
              <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl">15+ Startups Required</p>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
