"use client";

import { useRouter } from "next/navigation";
import { LogOut, Menu } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  const { user, logout } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.push("/admin/login");
  }

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-8">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 lg:hidden"
      >
        <Menu size={22} />
      </button>

      <div className="hidden lg:block" />

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-semibold text-ink-900">{user?.name}</p>
          <p className="text-xs text-slate-500">{user?.roleName}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
          {user?.name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>
        <button
          type="button"
          onClick={handleLogout}
          aria-label="Log out"
          className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-red-50 hover:text-red-600"
        >
          <LogOut size={18} />
        </button>
      </div>
    </header>
  );
}
