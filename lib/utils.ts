import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Up to two initials from a name, ignoring parenthetical suffixes — used for monogram/logo placeholders. */
export function getInitials(name: string): string {
  const words = name.replace(/\(.*?\)/g, "").trim().split(/\s+/);
  const letters = words
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase());
  return letters.join("") || name.slice(0, 2).toUpperCase();
}
