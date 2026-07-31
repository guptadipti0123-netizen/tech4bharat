import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/ui/ContactForm";
import Accordion from "@/components/ui/Accordion";
import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { contactFaqs } from "@/lib/faqs";
import { aboutImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Us | Tech4Bharat",
  description:
    "Get in touch with Tech4Bharat — reach our team about programs, partnerships, mentorship, or media inquiries.",
  openGraph: {
    title: "Contact Us | Tech4Bharat",
    description: "Get in touch with the Tech4Bharat team.",
    type: "website",
    locale: "en_IN",
  },
};

const socials = [
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's start a conversation"
        description="Whether you're a founder, mentor, or partner, our team would love to hear from you."
      />

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <AnimatedSection>
              <ContactForm />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                <div className="group relative aspect-video overflow-hidden rounded-3xl border-4 border-white shadow-lg">
                  <Image
                    src={aboutImages.office}
                    alt="Tech4Bharat office at IIT Bombay"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-900/60 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 text-sm font-medium text-white">
                    Visit us at IIT Bombay, Powai
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Get in Touch
                  </h3>
                  <ul className="mt-5 space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <MapPin size={18} className="mt-0.5 shrink-0 text-brand-600" />
                      <span className="text-slate-700">
                        IIT Bombay, Powai, Mumbai, Maharashtra 400076, India
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail size={18} className="shrink-0 text-brand-600" />
                      <a href="mailto:hello@tech4bharat.org" className="text-slate-700 hover:text-brand-700">
                        hello@tech4bharat.org
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone size={18} className="shrink-0 text-brand-600" />
                      <a href="tel:+912200000000" className="text-slate-700 hover:text-brand-700">
                        +91 22 0000 0000
                      </a>
                    </li>
                  </ul>
                  <div className="mt-6 flex gap-3">
                    {socials.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors hover:bg-brand-100"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="relative h-64 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                  <iframe
                    title="Tech4Bharat office location — IIT Bombay, Powai, Mumbai"
                    src="https://www.google.com/maps?q=IIT+Bombay,+Powai,+Mumbai,+Maharashtra+400076&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full grayscale-15"
                  />
                  <a
                    href="https://maps.google.com/?q=IIT+Bombay+Powai+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-700 shadow-lg transition-colors hover:bg-brand-50"
                  >
                    Get Directions <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="bg-secondary-50 py-16 sm:py-24">
        <Container>
          <AnimatedSection>
            <SectionTitle eyebrow="FAQ" title="Frequently asked questions" />
          </AnimatedSection>
          <div className="mx-auto mt-14 max-w-2xl">
            <Accordion items={contactFaqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
