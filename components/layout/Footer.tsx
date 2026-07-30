import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Focus Areas", href: "/focus-areas" },
  { label: "Programs", href: "/programs" },
  { label: "Partners", href: "/partners" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-slate-300">
      <Container className="grid gap-10 py-12 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="/" className="font-heading text-2xl font-bold text-white">
            Tech<span className="text-secondary-500">4</span>Bharat
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
            Empowering India&apos;s next generation of founders through mentorship, capital
            access, and a thriving startup ecosystem.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-secondary-500 hover:text-secondary-500"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Get in Touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-secondary-500" />
              IIT Bombay, Powai, Mumbai, India
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-secondary-500" />
              <a href="mailto:hello@tech4bharat.org" className="hover:text-white">
                hello@tech4bharat.org
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-secondary-500" />
              <a href="tel:+912200000000" className="hover:text-white">
                +91 22 0000 0000
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-slate-800 py-5">
        <Container className="flex flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Tech4Bharat. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Use
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
