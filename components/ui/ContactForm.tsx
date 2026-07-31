"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import Button from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState(initialForm);

  function handleChange(field: keyof typeof initialForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // No backend is wired up yet — this simulates a submission for the UI.
    setTimeout(() => setStatus("success"), 1200);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-4xl border border-slate-200 bg-white p-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-500">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="mt-6 text-2xl font-bold text-ink-900">Message sent!</h3>
        <p className="mt-2 max-w-sm text-slate-600">
          Thanks for reaching out. Our team will get back to you within 2 business days.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => {
            setStatus("idle");
            setForm(initialForm);
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-4xl border border-slate-200 bg-white p-8 shadow-[0_4px_20px_rgba(22,58,58,0.06)] sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Full Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-ink-900 transition-colors focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-ink-900 transition-colors focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="subject" className="text-sm font-medium text-slate-700">
          Subject
        </label>
        <input
          id="subject"
          required
          value={form.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-ink-900 transition-colors focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
          placeholder="How can we help?"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-ink-900 transition-colors focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
          placeholder="Tell us a bit about your startup or query..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-8 w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send size={18} />
          </>
        )}
      </Button>
    </form>
  );
}
