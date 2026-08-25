"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Send, Shield } from "lucide-react";
import { toast } from "sonner";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BackToTop from "@/components/layout/BackToTop";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Startup Portfolio", href: "/portfolio" },
  { label: "Startup Bootcamp 2026", href: "/startup-bootcamp" },
  { label: "Upcoming Events", href: "/events/upcoming" },
  { label: "Past Events & Workshops", href: "/events/past" },
];

const programLinks = [
  { label: "Incubation & Acceleration", href: "/incubation-acceleration" },
  { label: "Startup Support Programs", href: "/programs" },
  { label: "Funding Opportunities", href: "/funding-opportunities" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Advisors & Mentors", href: "/mentors" },
  { label: "Knowledge Partners", href: "/partners" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    setSubscribed(true);
    toast.success("Thank you for subscribing to Tech4Bharat ecosystem updates!");
    setEmail("");
  };

  return (
    <footer className="relative rounded-t-[36px] bg-[#071A2C] text-white/70 border-t border-white/10">
      <Container className="relative pb-10 pt-12 sm:pt-16">
        {/* CTA Top Bar */}
        <div className="grid gap-6 border-b border-white/10 pb-8 sm:gap-8 sm:pb-10 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-300 mb-2">
              <Shield size={13} />
              <span>Section 8 Non-Profit Organization</span>
            </div>
            <h2 className="text-[1.3rem] font-extrabold leading-snug tracking-tight text-white sm:text-[28px]">
              A National Platform for Social Entrepreneurship &amp; Innovation
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-xl">
              Partnering with premier academic hubs across India to scale science and technology for grassroots impact.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href="/incubation-acceleration" variant="secondary" size="md">
              Apply for Incubation <ArrowRight size={16} />
            </Button>
            <Button href="/contact" variant="outline" size="md" className="border-white/20 text-white hover:bg-white hover:text-[#071A2C]">
              Partner with Us
            </Button>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-8 pt-8 sm:grid-cols-2 sm:pt-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo1.png" alt="Tech4Bharat" width={38} height={38} className="rounded-xl" />
              <span className="font-heading text-lg font-bold leading-none text-white">
                Tech<span className="text-brand-400">4</span>Bharat
              </span>
            </Link>
            <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-slate-300">
              Tech4Bharat connects grassroots founders with premier academic institutions, deep-tech infrastructure, policy support, and catalytic funding across India.
            </p>

            {/* Newsletter form */}
            <div className="mt-5">
              <div className="text-xs font-bold uppercase tracking-wider text-white">Ecosystem Updates</div>
              <form onSubmit={handleSubscribe} className="mt-2 flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2 text-xs text-white placeholder:text-slate-400 focus:border-brand-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-xl bg-brand-500 px-3 py-2 text-white hover:bg-brand-600 transition-colors shrink-0"
                  aria-label="Subscribe"
                >
                  <Send size={14} />
                </button>
              </form>
              {subscribed && (
                <div className="mt-1.5 flex items-center gap-1 text-[11px] text-emerald-400">
                  <CheckCircle2 size={12} /> Subscribed to monthly cohort announcements!
                </div>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Explore Ecosystem</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-[13px] text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Pathways</h4>
            <ul className="mt-4 space-y-2.5">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-[13px] text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact &amp; Hub</h4>
            <ul className="mt-4 space-y-3 text-xs sm:text-[13px]">
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="shrink-0 text-brand-300" />
                <a href="mailto:hello@tech4bharat.org" className="text-slate-300 hover:text-white">
                  hello@tech4bharat.org
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="shrink-0 text-brand-300" />
                <a href="tel:+912200000000" className="text-slate-300 hover:text-white">
                  +91 22 0000 0000
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 shrink-0 text-brand-300" />
                <span className="text-slate-300">IIT Bombay, Powai, Mumbai, Maharashtra 400076</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/10 py-5">
        <Container className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Tech4Bharat (Proposed Section 8 Company). All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-slate-400 transition-colors hover:text-slate-200"
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
