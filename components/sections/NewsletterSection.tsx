import { Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import NewsletterForm from "@/components/ui/NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-800 via-brand-700 to-brand-900 px-8 py-16 text-center shadow-2xl sm:px-16">
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" />

            <div className="relative mx-auto max-w-xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Mail size={28} />
              </div>
              <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Stay in the loop</h2>
              <p className="mt-4 text-lg text-white/70">
                Founder playbooks, event invites, and portfolio news — straight to your inbox.
              </p>
              <div className="mt-8">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
