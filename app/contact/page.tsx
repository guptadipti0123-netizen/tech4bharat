import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Handshake, Mail, MapPin, Megaphone, Phone, Rocket, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/ui/ContactForm";
import Accordion from "@/components/ui/Accordion";
import CTASection from "@/components/ui/CTASection";
import Blob from "@/components/ui/Blob";
import DotGrid from "@/components/ui/DotGrid";
import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { contactFaqs } from "@/lib/faqs";

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

const quickContacts = [
  {
    icon: Rocket,
    title: "For Founders",
    description: "Applying to a program or have a startup idea to discuss.",
    email: "programs@tech4bharat.org",
  },
  {
    icon: Handshake,
    title: "For Partners & Investors",
    description: "Exploring institutional, government, or funding partnerships.",
    email: "partnerships@tech4bharat.org",
  },
  {
    icon: Users,
    title: "For Mentors",
    description: "Interested in joining our mentor and advisor network.",
    email: "mentors@tech4bharat.org",
  },
  {
    icon: Megaphone,
    title: "For Media & Press",
    description: "Press inquiries, interviews, or event coverage requests.",
    email: "media@tech4bharat.org",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's start a conversation"
        description="Whether you're a founder, mentor, or partner, our team would love to hear from you."
        image="/images/gallery/gallery-3.jpg"
        icon={MapPin}
      />

      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <DotGrid className="left-0 top-0 h-full w-full text-brand-700/6" />

        <Container className="relative">
          <AnimatedSection>
            <SectionTitle eyebrow="Quick Contacts" title="Reach the right team, faster" align="center" />
          </AnimatedSection>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickContacts.map(({ icon: Icon, title, description, email }, i) => (
              <AnimatedSection key={title} delay={i * 0.08} animation="scale">
                <Card className="text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                  <a
                    href={`mailto:${email}`}
                    className="-mb-2 mt-4 inline-block py-2 text-sm font-semibold text-brand-700 hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
                  >
                    {email}
                  </a>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary-50 py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <AnimatedSection>
              <ContactForm />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                <div className="group relative aspect-video overflow-hidden rounded-3xl border-4 border-white shadow-lg">
                  <Image
                    src="/images/programs/incubation.jpg"
                    alt="Founders and mentors collaborating at the Tech4Bharat office"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-900/60 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 text-sm font-medium text-white">
                    Visit us at IIT Bombay, Powai
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">
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
                      <a
                        href="mailto:hello@tech4bharat.org"
                        className="-my-2 inline-block py-2 text-slate-700 hover:text-brand-700"
                      >
                        hello@tech4bharat.org
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone size={18} className="shrink-0 text-brand-600" />
                      <a href="tel:+912200000000" className="-my-2 inline-block py-2 text-slate-700 hover:text-brand-700">
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
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors hover:bg-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
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
                    className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-700 shadow-lg transition-colors hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
                  >
                    Get Directions <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <Blob tone="secondary" className="-right-24 top-10 h-72 w-72" animate={false} />

        <Container className="relative">
          <AnimatedSection>
            <SectionTitle eyebrow="FAQ" title="Frequently asked questions" />
          </AnimatedSection>
          <div className="mx-auto mt-14 max-w-2xl">
            <Accordion items={contactFaqs} />
          </div>
        </Container>
      </section>

      <section className="bg-brand-50 py-16 sm:py-24">
        <CTASection
          image="/images/gallery/gallery-9.jpg"
          eyebrow="Partnerships"
          title="Partner With Tech4Bharat"
          description="Universities, government bodies, corporates, and NGOs — join our ecosystem and help build India's next generation of founders."
          buttons={[
            { label: "Become a Partner", href: "mailto:partnerships@tech4bharat.org", variant: "secondary" },
            { label: "View Our Partners", href: "/partners", variant: "outline" },
          ]}
        />
      </section>
    </>
  );
}
