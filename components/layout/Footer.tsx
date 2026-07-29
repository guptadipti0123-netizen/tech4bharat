import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { focusAreas, programs } from "@/lib/data";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Startups", href: "/startups" },
  { label: "Mentors", href: "/mentors" },
  { label: "Partners", href: "/partners" },
  { label: "Investors", href: "/investors" },
  { label: "Events", href: "/events" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
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
    <footer className="relative overflow-hidden bg-ink-900 text-slate-300">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-secondary-600/10 blur-3xl" />

      <div className="relative border-b border-white/10">
        <Container className="flex flex-col items-center gap-6 py-12 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h3 className="text-xl font-bold text-white">Stay in the loop</h3>
            <p className="mt-1 text-sm text-slate-400">
              Founder playbooks, event invites, and portfolio news — straight to your inbox.
            </p>
          </div>
          <div className="w-full max-w-md">
            <NewsletterForm />
          </div>
        </Container>
      </div>

      <Container className="relative grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.1fr]">
        <div>
          <Link href="/" className="font-heading text-2xl font-bold text-white">
            Tech<span className="text-accent-500">4</span>Bharat
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Empowering India&apos;s next generation of founders through mentorship, capital
            access, and a thriving startup ecosystem.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-500"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-3">
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
            Programs
          </h4>
          <ul className="mt-4 space-y-3">
            {programs.map((program) => (
              <li key={program.name}>
                <Link
                  href="/programs"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {program.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/programs"
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent-500 transition-colors hover:text-accent-400"
              >
                View All <ArrowUpRight size={14} />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Focus Areas
          </h4>
          <ul className="mt-4 space-y-3">
            {focusAreas.map((area) => (
              <li key={area.title}>
                <Link
                  href="/focus-areas"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {area.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/focus-areas"
                className="inline-flex items-center gap-1 text-sm font-semibold text-secondary-400 transition-colors hover:text-secondary-300"
              >
                View All <ArrowUpRight size={14} />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Get in Touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-secondary-400" />
              IIT Bombay, Powai, Mumbai, India
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-accent-500" />
              <a href="mailto:hello@tech4bharat.org" className="hover:text-white">
                hello@tech4bharat.org
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-secondary-400" />
              <a href="tel:+912200000000" className="hover:text-white">
                +91 22 0000 0000
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="relative border-t border-slate-800 py-6">
        <Container className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
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
