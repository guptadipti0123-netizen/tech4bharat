"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, Lock, Mail } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import Button from "@/components/ui/Button";
import { ApiError } from "@/lib/api/client";

export default function AdminLoginPage() {
  const { login, user } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (user) {
    router.replace("/admin");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      await login(email, password);
      router.replace("/admin");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Unable to sign in. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-brand-950 via-brand-900 to-brand-950 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
        <Link href="/" className="font-heading text-xl font-bold text-brand-900">
          Tech<span className="text-accent-500">4</span>Bharat
        </Link>
        <h1 className="mt-6 text-2xl font-bold text-ink-900">Admin Sign In</h1>
        <p className="mt-1 text-sm text-slate-500">Sign in with your admin-issued credentials.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email Address
            </label>
            <div className="relative mt-2">
              <Mail size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm text-ink-900 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                placeholder="you@tech4bharat.org"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-slate-700">
              Password
            </label>
            <div className="relative mt-2">
              <Lock size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm text-ink-900 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
