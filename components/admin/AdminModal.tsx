"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export default function AdminModal({ isOpen, onClose, title, children, maxWidth = "max-w-xl" }: AdminModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-start justify-center overflow-y-auto p-4 py-10 sm:items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink-900/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="admin-modal-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={`relative z-10 w-full ${maxWidth} rounded-2xl bg-white p-6 shadow-2xl sm:p-8`}
          >
            <div className="flex items-center justify-between">
              <h2 id="admin-modal-title" className="text-xl font-bold text-ink-900">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-ink-900"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-6">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
