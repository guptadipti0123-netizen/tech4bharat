"use client";

import { useEffect } from "react";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Blob from "@/components/ui/Blob";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-b from-brand-50 via-white to-sand-50 py-32">
      <Blob tone="accent" className="-top-24 left-1/2 h-96 w-96 -translate-x-1/2" />
      <Container className="relative text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-100 text-accent-600">
          <AlertTriangle size={32} />
        </div>
        <h1 className="mt-6 text-[26px] font-extrabold text-ink-900 sm:text-[34px]">Something went wrong</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-600">
          An unexpected error occurred while loading this page. Please try again, or head back
          to the homepage.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button onClick={reset} size="lg">
            <RotateCcw size={18} /> Try Again
          </Button>
          <Button href="/" size="lg" variant="outline">
            <Home size={18} /> Back to Homepage
          </Button>
        </div>
      </Container>
    </section>
  );
}
