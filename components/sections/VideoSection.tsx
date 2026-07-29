"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import VideoModal from "@/components/ui/VideoModal";
import { aboutImages } from "@/lib/images";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Watch Our Story"
            title="Watch the Tech4Bharat journey"
            description="A short film on the founders, mentors, and moments building India's startup ecosystem."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} animation="scale" className="mt-14">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Play the Tech4Bharat journey video"
            className="group relative mx-auto block aspect-video w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-4"
          >
            <Image
              src={aboutImages.team}
              alt="Tech4Bharat team and founders"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink-900/70 via-ink-900/20 to-ink-900/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur-sm sm:h-24 sm:w-24"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
                <Play size={30} className="relative ml-1 text-brand-700" fill="currentColor" />
              </motion.span>
            </div>
            <p className="absolute bottom-6 left-6 text-lg font-semibold text-white sm:text-xl">
              Watch Tech4Bharat Journey
            </p>
          </button>
        </AnimatedSection>
      </Container>

      <VideoModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Watch Tech4Bharat Journey" />
    </section>
  );
}
