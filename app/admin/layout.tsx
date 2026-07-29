"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import Spinner from "@/components/ui/Spinner";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isLoading } = useAuth();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (!isLoading && !user && !isLoginPage) {
      router.replace("/admin/login");
    }
  }, [isLoading, user, isLoginPage, router]);

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (isLoading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <Spinner size={32} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar mobileOpen={mobileNavOpen} onMobileClose={() => setMobileNavOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar onMenuClick={() => setMobileNavOpen(true)} />
        <main className="flex-1 overflow-x-hidden p-4 sm:p-8">{children}</main>
      </div>
    </div>
  );
}
