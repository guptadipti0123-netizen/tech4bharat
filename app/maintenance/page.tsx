import type { Metadata } from "next";
import { Wrench } from "lucide-react";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Under Maintenance | Tech4Bharat",
  description: "Tech4Bharat is undergoing scheduled maintenance. We'll be back shortly.",
};

export default function MaintenancePage() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-brand-950 py-32 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-accent-500/20 blur-3xl" />
      </div>
      <Container className="relative text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-accent-400">
          <Wrench size={32} />
        </div>
        <h1 className="mt-6 text-[30px] font-bold sm:text-[42px]">We&apos;ll be right back</h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          Tech4Bharat is undergoing scheduled maintenance to bring you a better experience.
          Please check back shortly.
        </p>
        <p className="mt-8 text-sm text-white/50">
          Need something urgent? Email us at{" "}
          <a href="mailto:hello@tech4bharat.org" className="text-accent-400 hover:text-accent-300">
            hello@tech4bharat.org
          </a>
        </p>
      </Container>
    </section>
  );
}
