import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import BackToTop from "@/components/layout/BackToTop";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Blogs & Resources", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const programLinks = [
  { label: "Startup Programs", href: "/programs" },
  { label: "Startup Portfolio", href: "/portfolio" },
  { label: "Mentors & Advisors", href: "/mentors" },
  { label: "Success Stories", href: "/success-stories" },
];

const focusAreaLinks = [
  { label: "AgriTech", href: "/focus-areas" },
  { label: "HealthTech", href: "/focus-areas" },
  { label: "AI/ML", href: "/focus-areas" },
  { label: "Clean Energy", href: "/focus-areas" },
  { label: "Women Empowerment", href: "/focus-areas" },
];

const socials = [
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-50 pt-20 text-slate-600">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-14 w-full -translate-y-[calc(100%-1px)] text-brand-50 sm:h-20"
        aria-hidden="true"
      >
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="h-full w-full" fill="currentColor">
          <path d="M0,50 C240,0 480,90 720,60 C960,30 1200,80 1440,40 L1440,100 L0,100 Z" />
        </svg>
      </div>

      <Container className="grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Tech4Bharat" width={36} height={36} className="rounded-xl" />
            <span className="font-heading text-lg font-bold leading-none text-ink-900">
              Tech<span className="text-brand-500">4</span>Bharat
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
            Empowering India&apos;s next generation of founders through mentorship, capital
            access, and a thriving startup ecosystem.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <Mail size={14} />
              </span>
              <a href="mailto:hello@tech4bharat.org" className="-my-2 inline-block py-2 hover:text-brand-700">
                hello@tech4bharat.org
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <Phone size={14} />
              </span>
              <a href="tel:+912200000000" className="-my-2 inline-block py-2 hover:text-brand-700">
                +91 22 0000 0000
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <MapPin size={14} />
              </span>
              <span className="pt-1">IIT Bombay, Powai, Mumbai, India</span>
            </li>
          </ul>

          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:bg-brand-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-900">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="-my-2 inline-block py-2 text-sm text-slate-600 transition-colors hover:text-brand-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-900">
            Programs
          </h4>
          <ul className="mt-4 space-y-2.5">
            {programLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="-my-2 inline-block py-2 text-sm text-slate-600 transition-colors hover:text-brand-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-900">
            Focus Areas
          </h4>
          <ul className="mt-4 space-y-2.5">
            {focusAreaLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="-my-2 inline-block py-2 text-sm text-slate-600 transition-colors hover:text-brand-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-slate-200 py-5">
        <Container className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Tech4Bharat. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="-my-2 inline-block py-2 text-sm text-slate-600 transition-colors hover:text-brand-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>

      <BackToTop />
    </footer>
  );
}
