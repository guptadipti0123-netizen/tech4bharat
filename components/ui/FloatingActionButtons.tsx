"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "912200000000";
const PHONE_NUMBER = "+912200000000";
const EMAIL = "hello@tech4bharat.org";

const actions = [
  {
    key: "whatsapp",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    label: "Chat on WhatsApp",
    icon: <WhatsappIcon className="h-5 w-5" />,
    className: "bg-[#25D366] hover:bg-[#1ebe57]",
    external: true,
  },
  {
    key: "call",
    href: `tel:${PHONE_NUMBER}`,
    label: "Call us",
    icon: <Phone size={20} />,
    className: "bg-brand-700 hover:bg-brand-800",
    external: false,
  },
  {
    key: "email",
    href: `mailto:${EMAIL}`,
    label: "Email us",
    icon: <Mail size={20} />,
    className: "bg-secondary-600 hover:bg-secondary-700",
    external: false,
  },
];

/** Persistent floating action cluster — WhatsApp, Call, Email, plus a scroll-triggered Back to Top. */
export default function FloatingActionButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-90 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Back to top"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 text-white shadow-lg shadow-ink-900/30 transition-colors hover:bg-ink-800"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {actions.map((action) => (
        <a
          key={action.key}
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noopener noreferrer" : undefined}
          aria-label={action.label}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl",
            action.className
          )}
        >
          {action.icon}
        </a>
      ))}
    </div>
  );
}
