"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Loader2, Mail, Send } from "lucide-react";
import { subscribeToNewsletter } from "@/lib/api/newsletter";
import { ApiError } from "@/lib/api/client";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await subscribeToNewsletter(email);
      toast.success("You're subscribed! Watch your inbox for updates.");
      setEmail("");
    } catch (error) {
      toast.error(error instanceof ApiError ? error.message : "Couldn't subscribe right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <div className="relative flex-1">
        <Mail size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-label="Email address"
          className="w-full rounded-full border border-white/15 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-600 disabled:opacity-50"
      >
        {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        Subscribe
      </button>
    </form>
  );
}
