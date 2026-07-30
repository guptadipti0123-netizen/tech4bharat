"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Tech4Bharat", href: "/about" },
      { label: "Vision & Mission", href: "/about#vision-mission" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Focus Areas", href: "/focus-areas" },
      { label: "Programs", href: "/programs" },
    ],
  },
  {
    label: "Network",
    href: "/partners",
    children: [
      { label: "Partners", href: "/partners" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  { label: "Events", href: "/events" },
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
    const hrefs = [item.href, ...(item.children?.map((c) => c.href.split("#")[0]) ?? [])];
    return hrefs.some((href) => (href === "/" ? pathname === "/" : pathname?.startsWith(href)));
  }

  return (
    <>
      <header
        onMouseLeave={closeWithDelay}
        className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white shadow-sm"
      >
        <Container className="flex h-17.5 items-center justify-between">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5">
            <Image src="/logo.png" alt="Tech4Bharat" width={36} height={36} className="rounded-lg" />
            <span className="font-heading text-lg font-bold leading-none text-brand-900">
              Tech<span className="text-secondary-500">4</span>Bharat
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && openWithHover(link.label)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 font-heading text-sm font-medium transition-colors",
                    isActive(link) ? "text-brand-700" : "text-slate-700 hover:text-brand-700"
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      size={14}
                      className={cn("transition-transform duration-200", openMenu === link.label && "rotate-180")}
                    />
                  )}
                </Link>
                {isActive(link) && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-700"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {link.children && (
                  <AnimatePresence>
                    {openMenu === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute left-0 top-full mt-1 w-56 overflow-hidden rounded-xl border border-slate-100 bg-white py-2 shadow-lg"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 font-heading text-sm text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-1 xl:hidden">
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
                  <div key={link.href}>
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        onClick={() => !link.children && setMobileOpen(false)}
                        className={cn(
                          "flex-1 rounded-lg px-3 py-3 font-heading text-base font-medium",
                          isActive(link)
                            ? "bg-brand-50 text-brand-700"
                            : "text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                        )}
                      >
                        {link.label}
                      </Link>
                      {link.children && (
                        <button
                          type="button"
                          onClick={() =>
                            setMobileExpanded((current) => (current === link.label ? null : link.label))
                          }
                          aria-label={`Toggle ${link.label} submenu`}
                          aria-expanded={mobileExpanded === link.label}
                          className="p-3 text-slate-500"
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
                            className="rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
