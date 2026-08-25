"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Briefcase,
  CalendarCheck,
  ChevronDown,
  Compass,
  Flame,
  Handshake,
  History,
  Menu,
  Rocket,
  Users,
  Wallet,
  X,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface NavChild {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface NavItem {
  label: string;
  /** Omitted for items that should act as a dropdown trigger only (e.g. Social Impact, Resources, Network, Events) —
   *  no page of their own, clicking/tapping just opens the submenu. */
  href?: string;
  children?: NavChild[];
}

// Each dropdown only contains pages that genuinely belong to that category — no page is
// duplicated across dropdowns.
const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Social Impact",
    children: [
      { label: "Startup Portfolio", href: "/portfolio", icon: Briefcase },
      { label: "Startup Support Programs", href: "/programs", icon: Compass },
      { label: "Incubation & Acceleration", href: "/incubation-acceleration", icon: Rocket },
    ],
  },
  {
    label: "Network",
    children: [
      { label: "Partners", href: "/partners", icon: Handshake },
      { label: "Advisors & Mentors", href: "/mentors", icon: Users },
    ],
  },
  {
    label: "Events",
    children: [
      { label: "Upcoming Events", href: "/events/upcoming", icon: CalendarCheck },
      { label: "Past Events", href: "/events/past", icon: History },
      { label: "Startup Bootcamp", href: "/startup-bootcamp", icon: Flame },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Funding Opportunities", href: "/funding-opportunities", icon: Wallet },
      { label: "Success Stories", href: "/success-stories", icon: Award },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
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
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function openWithHover(key: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(key);
  }

  function closeWithDelay() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  }

  function isActive(item: NavItem) {
    const hrefs = [item.href, ...(item.children?.map((c) => c.href.split("#")[0]) ?? [])].filter(
      (href): href is string => Boolean(href)
    );
    return hrefs.some((href) => (href === "/" ? pathname === "/" : pathname?.startsWith(href)));
  }

  return (
    <>
      <header
        onMouseLeave={closeWithDelay}
        className="glass-surface fixed inset-x-0 top-0 z-50 rounded-b-3xl shadow-[0_8px_30px_rgba(6,26,44,0.08)]"
      >
        <Container className="flex h-14 items-center justify-between md:h-17.5">
          <Link href="/" className="group flex min-w-0 shrink items-center gap-2.5">
            <Image src="/logo1.png" alt="Tech4Bharat" width={36} height={36} className="h-9 w-9 rounded-xl md:h-10 md:w-10" />
            <span className="font-heading text-[16px] font-semibold leading-none text-ink-900 md:text-lg">
              Tech<span className="text-brand-500">4</span>Bharat
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => {
              const triggerClassName = cn(
                "relative flex items-center gap-1 rounded-full px-4 py-2 font-heading text-sm font-medium transition-colors",
                isActive(link) ? "text-white" : "text-slate-700 hover:text-brand-700"
              );
              const triggerContent = (
                <>
                  {isActive(link) && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-brand-700 shadow-md shadow-brand-700/25"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1">
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        size={14}
                        className={cn("transition-transform duration-200", openMenu === link.label && "rotate-180")}
                      />
                    )}
                  </span>
                </>
              );

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && openWithHover(link.label)}
                >
                  {link.href ? (
                    <Link href={link.href} className={triggerClassName}>
                      {triggerContent}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className={triggerClassName}
                      aria-haspopup="menu"
                      aria-expanded={openMenu === link.label}
                      onClick={() => setOpenMenu((current) => (current === link.label ? null : link.label))}
                    >
                      {triggerContent}
                    </button>
                  )}

                  {link.children && (
                    <AnimatePresence>
                      {openMenu === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-0 top-full mt-2 w-72 overflow-hidden rounded-xl border border-slate-100 bg-white py-3 shadow-[0_20px_50px_rgba(6,26,44,0.18)]"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group/item flex items-center gap-3 px-4 py-3 font-heading text-sm text-slate-700 transition-all duration-200 hover:translate-x-0.5 hover:bg-brand-50 hover:text-brand-700"
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors duration-200 group-hover/item:bg-brand-700 group-hover/item:text-white">
                                <child.icon size={16} />
                              </span>
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}

            {/* High-contrast Apply Now CTA */}
            <Link
              href="/incubation-acceleration"
              className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-[#0B2A4A] px-4 py-2 font-heading text-xs font-bold text-white shadow-md shadow-[#0B2A4A]/20 transition-all hover:bg-brand-600 hover:scale-105"
            >
              <Rocket size={13} />
              <span>Apply Now</span>
            </Link>
          </nav>

          <div className="flex items-center gap-1 xl:hidden">
            <Link
              href="/incubation-acceleration"
              className="mr-1 inline-flex items-center gap-1 rounded-full bg-[#0B2A4A] px-3 py-1.5 text-xs font-bold text-white shadow-xs"
            >
              <span>Apply</span>
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-brand-50 p-2 text-brand-700"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="glass-surface max-h-[calc(100vh-4rem)] overflow-y-auto rounded-b-3xl border-t border-slate-100 xl:hidden"
            >
              <nav className="flex flex-col gap-1 px-3 pb-6 pt-2 sm:px-4">
                {navLinks.map((link) => {
                  const toggleMobileSubmenu = () =>
                    setMobileExpanded((current) => (current === link.label ? null : link.label));
                  const labelClassName = cn(
                    "flex-1 rounded-lg px-3 py-3 font-heading text-sm font-medium",
                    isActive(link)
                      ? "bg-brand-50 text-brand-700"
                      : "text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                  );

                  return (
                    <div key={link.label}>
                      <div className="flex items-center">
                        {link.href ? (
                          <Link
                            href={link.href}
                            onClick={() => !link.children && setMobileOpen(false)}
                            className={labelClassName}
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <button
                            type="button"
                            onClick={toggleMobileSubmenu}
                            aria-haspopup="menu"
                            aria-expanded={mobileExpanded === link.label}
                            className={cn(labelClassName, "text-left")}
                          >
                            {link.label}
                          </button>
                        )}
                        {link.children && (
                          <button
                            type="button"
                            onClick={toggleMobileSubmenu}
                            aria-label={`Toggle ${link.label} submenu`}
                            aria-expanded={mobileExpanded === link.label}
                            className="p-3 text-slate-600"
                          >
                            <ChevronDown
                              size={16}
                              className={cn(
                                "transition-transform duration-200",
                                mobileExpanded === link.label && "rotate-180"
                              )}
                            />
                          </button>
                        )}
                      </div>
                      {link.children && mobileExpanded === link.label && (
                        <div className="ml-3 flex flex-col gap-1 border-l border-slate-100 pl-3">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                            >
                              <child.icon size={15} className="shrink-0 text-brand-500" />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
