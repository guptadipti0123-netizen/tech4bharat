"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clapperboard, X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

/** Lightbox-style modal for the "Watch Our Journey" video — no video file is wired up yet, so it shows an honest coming-soon state rather than a broken player. */
export default function VideoModal({ isOpen, onClose, title }: VideoModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink-900/90 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex aspect-video w-full max-w-3xl flex-col items-center justify-center gap-4 rounded-2xl bg-ink-800 text-center text-white shadow-2xl"
          >
            <Clapperboard size={40} className="text-accent-400" />
            <div>
              <p className="text-lg font-semibold">Our story video is coming soon</p>
              <p className="mt-1 text-sm text-white/60">
                We&apos;re putting the finishing touches on this film — check back shortly.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
