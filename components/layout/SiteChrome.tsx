"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import QuickActionDock from "@/components/layout/QuickActionDock";

/** Admin routes render their own shell (Sidebar/Topbar) — skip the public Navbar/Footer there. */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    return (
      <main id="main-content" className="contents">
        {children}
      </main>
    );
  }

  return (
    <>
      <Navbar />
      <main id="main-content">{children}</main>
      <QuickActionDock />
      <Footer />
    </>
  );
}
