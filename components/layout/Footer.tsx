import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Startup Portfolio", href: "/portfolio" },
  { label: "Mentors & Advisors", href: "/mentors" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Events", href: "/events" },
  { label: "Blogs & Resources", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
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
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-900">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-slate-600 transition-colors hover:text-brand-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-900">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <Mail size={14} />
              </span>
              <a href="mailto:hello@tech4bharat.org" className="hover:text-brand-700">
                hello@tech4bharat.org
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <Phone size={14} />
              </span>
              <a href="tel:+912200000000" className="hover:text-brand-700">
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
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-900">Follow Us</h4>
          <div className="mt-4 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:bg-brand-500 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-slate-200 py-5">
        <Container>
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Tech4Bharat. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
