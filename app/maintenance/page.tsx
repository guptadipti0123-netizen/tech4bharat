import type { Metadata } from "next";
import { Wrench } from "lucide-react";
import Container from "@/components/ui/Container";
import Blob from "@/components/ui/Blob";

export const metadata: Metadata = {
  title: "Under Maintenance | Tech4Bharat",
  description: "Tech4Bharat is undergoing scheduled maintenance. We'll be back shortly.",
};

export default function MaintenancePage() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-b from-brand-50 via-white to-secondary-50 py-32">
      <Blob tone="brand" className="-left-32 top-16 h-96 w-96" />
      <Blob tone="accent" className="-right-24 bottom-10 h-80 w-80" animate={false} />
      <Container className="relative text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-100 text-accent-600">
          <Wrench size={32} />
        </div>
        <h1 className="mt-6 text-[26px] font-extrabold text-ink-900 sm:text-[34px]">We&apos;ll be right back</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-600">
          Tech4Bharat is undergoing scheduled maintenance to bring you a better experience.
          Please check back shortly.
        </p>
        <p className="mt-8 text-sm text-slate-600">
          Need something urgent? Email us at{" "}
          <a href="mailto:hello@tech4bharat.org" className="font-medium text-brand-700 hover:text-brand-800">
            hello@tech4bharat.org
          </a>
        </p>
      </Container>
    </section>
  );
}
