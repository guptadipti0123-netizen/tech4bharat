"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Building2,
  Calendar,
  FileText,
  Handshake,
  Image as ImageIcon,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Quote,
  Sparkles,
  Sprout,
  Users,
  UserSquare2,
  X,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, resource: "dashboard" },
  { href: "/admin/startups", label: "Startups", icon: Sprout, resource: "startups" },
  { href: "/admin/mentors", label: "Mentors", icon: Users, resource: "mentors" },
  { href: "/admin/advisors", label: "Advisors", icon: UserSquare2, resource: "advisors" },
  { href: "/admin/partners", label: "Partners", icon: Handshake, resource: "partners" },
  { href: "/admin/events", label: "Events", icon: Calendar, resource: "events" },
  { href: "/admin/blogs", label: "Blogs", icon: FileText, resource: "blogs" },
  { href: "/admin/gallery", label: "Gallery", icon: ImageIcon, resource: "gallery" },
  { href: "/admin/testimonials", label: "Testimonials", icon: Quote, resource: "testimonials" },
  { href: "/admin/success-stories", label: "Success Stories", icon: Sparkles, resource: "success-stories" },
  { href: "/admin/homepage-content", label: "Homepage Content", icon: Building2, resource: "settings" },
  { href: "/admin/messages", label: "Messages", icon: MessageSquare, resource: "contact" },
  { href: "/admin/newsletter", label: "Newsletter", icon: Mail, resource: "newsletter" },
  { href: "/admin/users", label: "Users", icon: Users, resource: "users" },
];

interface SidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

export default function Sidebar({ mobileOpen = false, onMobileClose }: SidebarProps) {
  const pathname = usePathname();
  const { hasPermission } = useAuth();

  const visibleItems = NAV_ITEMS.filter(
    (item) => hasPermission(item.resource, "read") || hasPermission(item.resource, "view")
  );

  const nav = (
    <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-6">
      {visibleItems.map((item) => {
        const isActive = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onMobileClose}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
              isActive ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-slate-50 hover:text-ink-900"
            )}
          >
            <Icon size={18} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
        <div className="flex h-20 items-center border-b border-slate-100 px-6">
          <Link href="/admin" className="flex items-center gap-2.5 font-heading text-lg font-bold text-brand-900">
            <Image src="/logo-icon.png" alt="Tech4Bharat" width={32} height={32} className="h-8 w-8 object-contain" />
            <span>
              Tech<span className="text-[#F15A24]">4</span>Bharat
              <span className="ml-1.5 text-xs font-semibold text-slate-400">Admin</span>
            </span>
          </Link>
        </div>
        {nav}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-100 lg:hidden">
          <div className="fixed inset-0 bg-ink-900/60" onClick={onMobileClose} aria-hidden="true" />
          <aside className="fixed inset-y-0 left-0 flex w-72 flex-col bg-white shadow-2xl">
            <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6">
              <Link href="/admin" onClick={onMobileClose} className="flex items-center gap-2.5 font-heading text-lg font-bold text-brand-900">
                <Image src="/logo-icon.png" alt="Tech4Bharat" width={32} height={32} className="h-8 w-8 object-contain" />
                <span>
                  Tech<span className="text-[#F15A24]">4</span>Bharat
                  <span className="ml-1.5 text-xs font-semibold text-slate-400">Admin</span>
                </span>
              </Link>
              <button
                type="button"
                onClick={onMobileClose}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>
            {nav}
          </aside>
        </div>
      )}
    </>
  );
}
