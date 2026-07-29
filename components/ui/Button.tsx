"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
  disabled?: boolean;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

let rippleSeed = 0;

const baseStyles =
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:hover:translate-y-0";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-linear-to-r from-brand-700 to-brand-600 text-white hover:from-brand-800 hover:to-brand-700 shadow-lg shadow-brand-700/20",
  secondary:
    "bg-linear-to-r from-accent-500 to-accent-400 text-white hover:from-accent-600 hover:to-accent-500 shadow-lg shadow-accent-500/25",
  outline: "border border-brand-200 text-brand-900 hover:bg-brand-50",
  ghost: "text-brand-900 hover:bg-brand-50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  target,
  rel,
  disabled,
}: ButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const styles = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  function handleClick(e: MouseEvent<HTMLElement>) {
    if (!disabled) {
      const rect = e.currentTarget.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.8;
      const id = rippleSeed++;
      setRipples((prev) => [
        ...prev,
        { id, x: e.clientX - rect.left - size / 2, y: e.clientY - rect.top - size / 2, size },
      ]);
      setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
    }
    onClick?.();
  }

  const rippleLayer = (
    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.35 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute rounded-full bg-current"
            style={{ left: ripple.x, top: ripple.y, width: ripple.size, height: ripple.size }}
          />
        ))}
      </AnimatePresence>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={styles} onClick={handleClick} target={target} rel={rel}>
        {children}
        {rippleLayer}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} onClick={handleClick} disabled={disabled}>
      {children}
      {rippleLayer}
    </button>
  );
}
