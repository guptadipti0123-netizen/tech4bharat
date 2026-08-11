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
    cardBg: "#EAF6EE",
    border: "#1F5E4B66",
    hoverBorder: "#1F5E4B",
    iconBg: "#1F5E4B",
  },
  {
    icon: Handshake,
    title: "For Partners & Investors",
    description: "Exploring institutional, government, or funding partnerships.",
    email: "partnerships@tech4bharat.org",
    cardBg: "#F0F7F1",
    border: "#3B7A5766",
    hoverBorder: "#3B7A57",
    iconBg: "#3B7A57",
  },
  {
    icon: Users,
    title: "For Mentors",
    description: "Interested in joining our mentor and advisor network.",
    email: "mentors@tech4bharat.org",
    cardBg: "#FFF7E8",
    border: "#B8860B66",
    hoverBorder: "#B8860B",
    iconBg: "#B8860B",
  },
  {
    icon: Megaphone,
    title: "For Media & Press",
    description: "Press inquiries, interviews, or event coverage requests.",
    email: "media@tech4bharat.org",
    cardBg: "#F7F2E7",
    border: "#163B2D66",
    hoverBorder: "#163B2D",
    iconBg: "#163B2D",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* `aspect-2/1` (or any ratio other than the photo's own) forces `object-contain` to
          letterbox — visible bars — at every width, and forces `object-cover` to crop at
          every width. The only way to show the complete, uncropped photo edge-to-edge with
          no bars is to make the container's own ratio match the photo's native ratio
          (1600x1067 = 3:2), so cover/contain become identical no-ops. `max-h` is set high
          enough (1280px) that it only engages on ultrawide monitors, never on normal desktop
          widths — the earlier bug was this cap kicking in around 840px and re-cropping the
          top/bottom on ordinary screens. `min-h` is a floor purely so the centered text/button
          still clears the fixed navbar on short/narrow phones. */}
      <section
        className="relative w-full aspect-3/2 min-h-88 max-h-320 overflow-hidden rounded-b-[48px]"
        style={{ backgroundColor: "#12342B" }}
      >
        <Image
          src="/images/gallery/gallery-3.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(18,52,43,0.35)" }} />
        <div className="relative flex h-full items-center justify-center">
          <Container>
            <AnimatedSection className="mx-auto max-w-2xl text-center">
              <h1 className="text-[22px] font-extrabold leading-tight tracking-tight text-white sm:text-[30px] lg:text-[34px]">
                Let&apos;s Start a Conversation
              </h1>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-white/85 sm:mt-4 sm:text-base">
                Whether you&apos;re a founder, mentor or partner, our team would love to hear from you.
              </p>
              <div className="mt-6 sm:mt-8">
                <Button
                  href="#contact-form"
                  variant="secondary"
                  size="lg"
                  className="px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg"
                >
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
              titleClassName="text-[32px] font-bold leading-[1.1] tracking-[-0.01em] text-[#163B2D] sm:text-[38px] lg:text-[44px]"
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
                    className="group flex h-full min-h-67.5 flex-col items-center rounded-[28px] border-2 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-(--hover-border) hover:shadow-lg"
                  >
                    <span
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: contact.iconBg }}
                    >
                      <Icon size={26} />
                    </span>
                    <h3 className="mt-3 text-base font-bold text-ink-900">{contact.title}</h3>
                    <p className="mt-1.5 line-clamp-none text-sm leading-relaxed text-slate-600 sm:line-clamp-2">
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
