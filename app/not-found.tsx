import { Home } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-brand-950 py-32 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-150 w-150 -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-accent-500/20 blur-3xl" />
      </div>
      <Container className="relative text-center">
        <p className="font-heading text-8xl font-bold text-white/10 sm:text-9xl">404</p>
        <h1 className="-mt-6 text-[30px] font-bold sm:text-[42px]">This page wandered off the map</h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get
          you back on track.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" size="lg">
            <Home size={18} /> Back to Homepage
          </Button>
          <Button
            href="/contact"
            size="lg"
            variant="outline"
            className="border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10"
          >
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
