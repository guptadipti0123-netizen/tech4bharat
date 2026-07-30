"use client";

import { useEffect } from "react";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

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
    <section className="relative flex min-h-screen items-center overflow-hidden bg-brand-950 py-32 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-red-600/20 blur-3xl" />
      </div>
      <Container className="relative text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
          <AlertTriangle size={32} />
        </div>
        <h1 className="mt-6 text-[30px] font-bold sm:text-[42px]">Something went wrong</h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          An unexpected error occurred while loading this page. Please try again, or head back
          to the homepage.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button onClick={reset} size="lg">
            <RotateCcw size={18} /> Try Again
          </Button>
          <Button
            href="/"
            size="lg"
            variant="outline"
            className="border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10"
          >
            <Home size={18} /> Back to Homepage
          </Button>
        </div>
      </Container>
    </section>
  );
}
