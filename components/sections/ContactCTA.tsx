import { ArrowRight, Mail } from "lucide-react";
import CTASection from "@/components/ui/CTASection";
import { ctaBackgroundImage } from "@/lib/images";

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-slate-50 py-12 sm:py-16">
      <CTASection
        image={ctaBackgroundImage}
        eyebrow="Get Started"
        title="Have a bold idea? Let's build it together."
        description="Whether you're a founder, mentor, or partner — we'd love to hear from you."
        buttons={[
          {
            label: (
              <>
                Get In Touch <ArrowRight size={18} />
              </>
            ),
            href: "mailto:hello@tech4bharat.org",
            variant: "secondary",
          },
          {
            label: (
              <>
                <Mail size={18} /> hello@tech4bharat.org
              </>
            ),
            href: "mailto:hello@tech4bharat.org",
            variant: "outline",
          },
        ]}
      />
    </section>
  );
}
