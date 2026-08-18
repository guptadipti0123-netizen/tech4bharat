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
    "Get in touch with Tech4Bharat â€” reach our team about programs, partnerships, mentorship, or media inquiries.",
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
  badge: string;
  title: string;
  description: string;
  email: string;
  iconBg: string;
  iconColor: string;
}

const quickContacts: QuickContact[] = [
  {
    icon: Lightbulb,
    badge: "Founders",
    title: "For Founders",
    description: "Applying to a program or exploring startup incubation.",
    email: "programs@tech4bharat.org",
    iconBg: "bg-blue-50 border-blue-100",
    iconColor: "text-[#155E9A]",
  },
  {
    icon: Handshake,
    badge: "Partners",
    title: "Partners & VCs",
    description: "Institutional, government, or capital partnerships.",
    email: "partnerships@tech4bharat.org",
    iconBg: "bg-emerald-50 border-emerald-100",
    iconColor: "text-emerald-700",
  },
  {
    icon: Users,
    badge: "Mentors",
    title: "For Mentors",
    description: "Join our distinguished mentor and advisor network.",
    email: "mentors@tech4bharat.org",
    iconBg: "bg-indigo-50 border-indigo-100",
    iconColor: "text-indigo-700",
  },
  {
    icon: Megaphone,
    badge: "Media",
    title: "Media & Press",
    description: "Press inquiries, interviews, or event coverage requests.",
    email: "media@tech4bharat.org",
    iconBg: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-700",
  },
];

export default function ContactPage() {
  return (
    <>
      <section
        className="relative w-full aspect-3/2 min-h-88 max-h-320 overflow-hidden rounded-b-[48px]"
        style={{ backgroundColor: "#0B2A4A" }}
      >
        <Image
          src="/images/gallery/gallery-15.jpg"
          alt="Contact Tech4Bharat team"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-105"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(11,42,74,0.32)" }} />
        <div className="relative flex h-full items-center justify-center">
          <Container>
            <AnimatedSection className="mx-auto max-w-2xl text-center">
              <h1 className="text-[22px] font-extrabold leading-tight tracking-tight text-white sm:text-[26px] lg:text-[30px]">
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
                  className="px-6 py-3 text-[13px] sm:px-8 sm:py-4 sm:text-[14px]"
                >
                  Contact Us
                </Button>
              </div>
            </AnimatedSection>
          </Container>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-7 sm:py-10"
        style={{ background: "linear-gradient(180deg, #F5FAFE, #FFFFFF, #F5FAFE)" }}
      >
        <DotGrid className="left-0 top-0 h-full w-full text-brand-700/6" />

        <Container className="relative">
          <AnimatedSection>
            <SectionTitle
              title="Reach the Right Team Faster"
              align="center"
              className="max-w-225"
              titleClassName="text-[20px] font-bold leading-[1.1] tracking-[-0.01em] text-[#0B2A4A] sm:text-[24px] lg:text-[28px]"
            />
          </AnimatedSection>
          
          {/* Responsive 1-col mobile, 2-col tablet & 4-column desktop directory */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
            {quickContacts.map((contact, i) => {
              const Icon = contact.icon;
              return (
                <AnimatedSection key={contact.title} delay={i * 0.05} animation="scale" className="h-full">
                  <div className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#155E9A]/40 hover:shadow-md">
                    <div>
                      {/* Top row: Icon badge & Channel tag */}
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-xl border shadow-2xs group-hover:scale-105 transition-transform ${contact.iconBg} ${contact.iconColor}`}
                        >
                          <Icon size={18} />
                        </span>
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 group-hover:bg-blue-50 group-hover:text-[#155E9A] transition-colors">
                          {contact.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-3 text-[15px] sm:text-[16px] font-bold text-[#0B2A4A] leading-snug group-hover:text-[#155E9A] transition-colors">
                        {contact.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-slate-500">
                        {contact.description}
                      </p>
                    </div>

                    {/* Email Action Bar */}
                    <a
                      href={`mailto:${contact.email}`}
                      className="mt-4 flex items-center justify-between rounded-xl bg-blue-50/80 px-3 py-2 text-xs font-semibold text-[#155E9A] transition-all group-hover:bg-[#155E9A] group-hover:text-white"
                    >
                      <span className="truncate">{contact.email}</span>
                      <span className="shrink-0 ml-1 font-bold">→</span>
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
                <div className="group relative aspect-video overflow-hidden rounded-2xl sm:rounded-3xl border-4 border-white shadow-md">
                  <Image
                    src="/images/gallery/gallery-6.jpg"
                    alt="Founders and mentors collaborating at the Tech4Bharat office"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0B2A4A]/80 via-[#0B2A4A]/20 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-xs sm:bottom-4 sm:left-4 sm:text-sm font-semibold text-white">
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
                    title="Tech4Bharat office location â€” IIT Bombay, Powai, Mumbai"
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
        style={{ background: "linear-gradient(180deg, #F5FAFE 0%, #FFFFFF 55%, #F5FAFE 100%)" }}
      >
        <DotGrid className="left-0 top-0 h-full w-full text-brand-700/6" />
        <Blob tone="secondary" className="-right-24 top-10 h-72 w-72" animate={false} />

        <Container className="relative">
          <AnimatedSection>
            <SectionTitle
              title="Frequently Asked Questions"
              description="Find quick answers to the most common questions about our programs, partnerships, mentorship, and application process."
              align="center"
              titleClassName="text-[22px] sm:text-[26px] lg:text-[30px] font-extrabold leading-tight tracking-tight"
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
