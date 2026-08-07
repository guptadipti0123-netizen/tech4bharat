import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Handshake, Lightbulb, Mail, MapPin, Megaphone, Phone, Users, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/ui/ContactForm";
import Accordion from "@/components/ui/Accordion";
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

interface QuickContact {
  icon: LucideIcon;
  title: string;
  description: string;
  email: string;
  cardBg: string;
  border: string;
  hoverBorder: string;
  iconBg: string;
}

const quickContacts: QuickContact[] = [
  {
    icon: Lightbulb,
    title: "For Founders",
    description: "Applying to a program or have a startup idea to discuss.",
    email: "programs@tech4bharat.org",
    cardBg: "#F4FBF8",
    border: "#A8D5C2",
    hoverBorder: "#4CAF82",
    iconBg: "#2E8B57",
  },
  {
    icon: Handshake,
    title: "For Partners & Investors",
    description: "Exploring institutional, government, or funding partnerships.",
    email: "partnerships@tech4bharat.org",
    cardBg: "#F8FAFF",
    border: "#BFD6FF",
    hoverBorder: "#5B9EF5",
    iconBg: "#2563EB",
  },
  {
    icon: Users,
    title: "For Mentors",
    description: "Interested in joining our mentor and advisor network.",
    email: "mentors@tech4bharat.org",
    cardBg: "#FFF8EC",
    border: "#FFD68A",
    hoverBorder: "#E0A83D",
    iconBg: "#D4A017",
  },
  {
    icon: Megaphone,
    title: "For Media & Press",
    description: "Press inquiries, interviews, or event coverage requests.",
    email: "media@tech4bharat.org",
    cardBg: "#F8F5FF",
    border: "#D9C8FF",
    hoverBorder: "#9B7EF0",
    iconBg: "#7C5CFC",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative h-105 overflow-hidden rounded-b-[48px] sm:h-120">
        <Image
          src="/images/gallery/gallery-3.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,52,43,0.55)" }} />
        <div className="relative flex h-full items-center justify-center">
          <Container>
            <AnimatedSection className="mx-auto max-w-2xl text-center">
              <h1 className="text-[32px] font-extrabold leading-tight tracking-tight text-white sm:text-[44px]">
                Let&apos;s Start a Conversation
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
                Whether you&apos;re a founder, mentor or partner, our team would love to hear from you.
              </p>
              <div className="mt-8">
                <Button href="#contact-form" variant="secondary" size="lg">
                  Contact Us
                </Button>
              </div>
            </AnimatedSection>
          </Container>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-8 sm:py-12"
        style={{ background: "linear-gradient(180deg, #F7FFFD, #FFFFFF, #F8FBFF)" }}
      >
        <DotGrid className="left-0 top-0 h-full w-full text-brand-700/6" />

        <Container className="relative">
          <AnimatedSection>
            <SectionTitle
              title="Reach the Right Team Faster"
              align="center"
              className="max-w-225"
              titleClassName="text-[30px] font-bold leading-[1.1] text-[#163B2D] sm:text-[42px] lg:text-[52px]"
            />
          </AnimatedSection>
          <div className="mt-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickContacts.map((contact, i) => {
              const Icon = contact.icon;
              return (
                <AnimatedSection key={contact.title} delay={i * 0.08} animation="scale">
                  <div
                    style={
                      {
                        backgroundColor: contact.cardBg,
                        borderColor: contact.border,
                        "--hover-border": contact.hoverBorder,
                      } as React.CSSProperties
                    }
                    className="group flex h-67.5 flex-col items-center rounded-[28px] border p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-(--hover-border) hover:shadow-lg"
                  >
                    <span
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: contact.iconBg }}
                    >
                      <Icon size={26} />
                    </span>
                    <h3 className="mt-3 text-base font-bold text-ink-900">{contact.title}</h3>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-600">
                      {contact.description}
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="mt-3 inline-flex items-center justify-center rounded-full border-2 bg-white px-5 py-3 text-[13px] font-bold text-ink-900 shadow-sm transition-colors duration-200 hover:text-brand-700"
                      style={{ borderColor: "#D7E9E2" }}
                    >
                      {contact.email}
                    </a>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="contact-form" className="scroll-mt-24 bg-secondary-50 py-8 sm:py-12">
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

      <section
        className="relative overflow-hidden py-12 sm:py-16"
        style={{ background: "linear-gradient(180deg, #F8FFFD 0%, #FFFFFF 55%, #F7FBFF 100%)" }}
      >
        <DotGrid className="left-0 top-0 h-full w-full text-brand-700/6" />
        <Blob tone="secondary" className="-right-24 top-10 h-72 w-72" animate={false} />

        <Container className="relative">
          <AnimatedSection>
            <SectionTitle
              title="Frequently Asked Questions"
              description="Find quick answers to the most common questions about our programs, partnerships, mentorship, and application process."
              align="center"
              titleClassName="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight"
              descriptionClassName="mx-auto mt-4 max-w-175 text-gray-600"
            />
          </AnimatedSection>
          <div className="mx-auto mt-12 max-w-225">
            <Accordion items={contactFaqs} />
          </div>
        </Container>
      </section>
    </>
  );
}
