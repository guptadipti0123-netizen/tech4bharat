import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BackToTop from "@/components/layout/BackToTop";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Startup Portfolio", href: "/portfolio" },
  { label: "Events", href: "/events" },
];

const programLinks = [
  { label: "Startup Bootcamp", href: "/startup-bootcamp" },
  { label: "Incubation & Acceleration", href: "/programs" },
  { label: "Funding Opportunities", href: "/funding-opportunities" },
  { label: "Advisors & Mentors", href: "/mentors" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

/**
 * The site's single, unified closing section — a call-to-action integrated directly into
 * the footer's dark band, instead of a separate CTA section followed by a separate footer.
 * Rendered once in the root layout, so every page ends the same way.
 */
export default function Footer() {
  return (
    <footer className="relative rounded-t-[36px] bg-brand-900 text-white/70">
      <Container className="relative pb-10 pt-12 sm:pt-16">
        {/* CTA */}
        <div className="grid gap-6 border-b border-white/10 pb-8 sm:gap-8 sm:pb-10 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-6">
          <div>
            <h2 className="text-[1.2rem] font-extrabold leading-snug tracking-tight text-white sm:text-[26px]">
              A National Platform for Social Entrepreneurship and Innovation
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us <ArrowRight size={18} />
            </Button>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-8 pt-8 sm:grid-cols-2 sm:pt-10 lg:grid-cols-4 lg:gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo1.png" alt="Tech4Bharat" width={36} height={36} className="rounded-xl" />
              <span className="font-heading text-base font-bold leading-none text-white">
                Tech<span className="text-brand-300">4</span>Bharat
              </span>
            </Link>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="-my-2 inline-block py-2 text-sm text-white/60 transition-colors hover:text-brand-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Programs</h4>
            <ul className="mt-4 space-y-2.5">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="-my-2 inline-block py-2 text-sm text-white/60 transition-colors hover:text-brand-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="shrink-0 text-brand-300" />
                <a href="mailto:hello@tech4bharat.org" className="-my-2 inline-block py-2 text-white/60 hover:text-brand-300">
                  hello@tech4bharat.org
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="shrink-0 text-brand-300" />
                <a href="tel:+912200000000" className="-my-2 inline-block py-2 text-white/60 hover:text-brand-300">
                  +91 22 0000 0000
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-1 shrink-0 text-brand-300" />
                <span className="text-white/60">IIT Bombay, Powai, Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10 py-5">
        <Container className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Tech4Bharat. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="-my-2 inline-block py-2 text-sm text-white/60 transition-colors hover:text-brand-300"
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
