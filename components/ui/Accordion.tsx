"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemData {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

const closedBorder = "#DCEFE8";
const closedHoverBorder = "#A8D5C2";
const openBorder = "#1F5E4B";
const openHoverBorder = "#163F33";

export default function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("flex flex-col gap-5", className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.question}
            style={
              {
                backgroundColor: isOpen ? "#F4FBF8" : "#FFFFFF",
                borderColor: isOpen ? openBorder : closedBorder,
                "--hover-border": isOpen ? openHoverBorder : closedHoverBorder,
              } as React.CSSProperties
            }
            className={cn(
              "overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-0.75 hover:border-(--hover-border) hover:shadow-lg",
              isOpen ? "shadow-md" : "shadow-sm"
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-ink-900">{item.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "#E8F6F1" }}
              >
                {isOpen ? (
                  <Minus size={18} className="text-[#1F5E4B]" />
                ) : (
                  <Plus size={18} className="text-[#1F5E4B]" />
                )}
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-slate-600">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
