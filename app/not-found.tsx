import { Home } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Blob from "@/components/ui/Blob";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-b from-brand-50 via-white to-secondary-50 py-32">
      <Blob tone="brand" className="-left-32 top-16 h-96 w-96" />
      <Blob tone="secondary" className="-right-24 bottom-10 h-80 w-80" />
      <Container className="relative text-center">
        <p className="font-heading text-8xl font-extrabold text-brand-100 sm:text-9xl">404</p>
        <h1 className="-mt-6 text-[32px] font-extrabold text-ink-900 sm:text-[44px]">This page wandered off the map</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get
          you back on track.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" size="lg">
            <Home size={18} /> Back to Homepage
          </Button>
          <Button href="/contact" size="lg" variant="outline">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
