"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Cpu,
  GraduationCap,
  HeartPulse,
  Landmark,
  Leaf,
  Menu,
  Rocket,
  Search,
  Sparkles,
  TrendingUp,
  Lightbulb,
  X,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SearchModal from "@/components/layout/SearchModal";
import { cn } from "@/lib/utils";
import { focusAreas, programs } from "@/lib/data";

const focusAreaIcons: Record<string, LucideIcon> = {
  Cpu,
  Leaf,
  HeartPulse,
  GraduationCap,
  Landmark,
  Rocket,
};

const programIcons: LucideIcon[] = [Lightbulb, TrendingUp, Sparkles];

type MegaKey = "focus-areas" | "programs";

const navLinks: { label: string; href: string; mega?: MegaKey }[] = [
  { label: "About", href: "/about" },
  { label: "Focus Areas", href: "/focus-areas", mega: "focus-areas" },
  { label: "Programs", href: "/programs", mega: "programs" },
  { label: "Startups", href: "/startups" },
  { label: "Mentors", href: "/mentors" },
  { label: "Partners", href: "/partners" },
  { label: "Investors", href: "/investors" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MegaKey | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close any open menu when the route changes. Adjusted during render
  // (React's documented pattern for "reset state when a prop changes")
  // rather than in an effect, since no async work is involved.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function openWithHover(key: MegaKey) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(key);
  }

  function closeWithDelay() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  }

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname?.startsWith(href);
  }

  return (
    <>
      <header
        onMouseLeave={closeWithDelay}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || mobileOpen || openMenu
            ? "border-b border-slate-100 bg-white/80 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <Container className="flex items-center justify-between py-5">
          <Link href="/" className="group flex items-center gap-0.5 font-heading text-xl font-bold text-brand-900">
            <motion.span whileHover={{ rotate: -6, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              Tech<span className="text-accent-500">4</span>Bharat
            </motion.span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.mega && openWithHover(link.mega)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive(link.href) ? "text-brand-700" : "text-slate-700 hover:text-brand-700"
                  )}
                >
                  {link.label}
                  {link.mega && (
                    <ChevronDown
                      size={14}
                      className={cn("transition-transform duration-200", openMenu === link.mega && "rotate-180")}
                    />
                  )}
                </Link>
                {isActive(link.href) && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-700"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search the site"
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-brand-700"
            >
              <Search size={18} />
            </button>
            <Button href="/contact" size="sm">
              Join Tech4Bharat
            </Button>
          </div>

          <div className="flex items-center gap-1 xl:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search the site"
              className="flex h-10 w-10 items-center justify-center rounded-full text-brand-900"
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full p-2 text-brand-900"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>

        {/* Desktop mega menu panel */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="hidden border-t border-slate-100 bg-white shadow-xl xl:block"
              onMouseEnter={() => openMenu && openWithHover(openMenu)}
            >
              <Container className="py-8">
                {openMenu === "focus-areas" ? (
                  <div>
                    <div className="grid grid-cols-3 gap-2">
                      {focusAreas.map((area) => {
                        const Icon = focusAreaIcons[area.icon];
                        return (
                          <Link
                            key={area.title}
                            href="/focus-areas"
                            className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-brand-50"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                              <Icon size={20} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-ink-900">{area.title}</p>
                              <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">{area.description}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <Link
                      href="/focus-areas"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                    >
                      View All Focus Areas <ArrowUpRight size={16} />
                    </Link>
                  </div>
                ) : (
                  <div>
                    <div className="grid grid-cols-3 gap-4">
                      {programs.map((program, i) => {
                        const Icon = programIcons[i % programIcons.length];
                        return (
                          <Link
                            key={program.name}
                            href="/programs"
                            className="rounded-xl border border-slate-100 p-4 transition-colors hover:border-brand-200 hover:bg-brand-50"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                              <Icon size={20} />
                            </div>
                            <p className="mt-3 text-sm font-semibold text-ink-900">{program.name}</p>
                            <p className="text-xs font-medium text-slate-500">
                              {program.stage} · {program.duration}
                            </p>
                            <p className="mt-2 line-clamp-2 text-xs text-slate-500">{program.description}</p>
                          </Link>
                        );
                      })}
                    </div>
                    <Link
                      href="/programs"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                    >
                      View All Programs <ArrowUpRight size={16} />
                    </Link>
                  </div>
                )}
              </Container>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-slate-100 bg-white xl:hidden"
            >
              <nav className="flex flex-col gap-1 px-4 pb-6 pt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-3 text-base font-medium",
                      isActive(link.href)
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button href="/contact" className="mt-3" onClick={() => setMobileOpen(false)}>
                  Join Tech4Bharat
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
