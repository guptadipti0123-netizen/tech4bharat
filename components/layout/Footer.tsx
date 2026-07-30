import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white/70">
      <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Tech4Bharat" width={32} height={32} className="rounded-lg" />
            <span className="font-heading text-lg font-bold leading-none text-white">
              Tech<span className="text-secondary-500">4</span>Bharat
            </span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
            Empowering India&apos;s next generation of founders through mentorship, capital
            access, and a thriving startup ecosystem.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-secondary-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
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
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-secondary-500" />
              IIT Bombay, Powai, Mumbai, India
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Follow Us</h4>
          <div className="mt-4 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-secondary-500 hover:text-secondary-500"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-5">
        <Container>
          <p className="text-center text-sm text-white/50">
            © {new Date().getFullYear()} Tech4Bharat. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
