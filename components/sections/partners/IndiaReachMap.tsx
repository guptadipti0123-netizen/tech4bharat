"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface CityNode {
  name: string;
  /** Loose relative position within the panel — a stylised footprint, not a surveyed map. */
  top: string;
  left: string;
}

const hub: CityNode = { name: "Mumbai HQ", top: "58%", left: "28%" };

const cities: CityNode[] = [
  { name: "Delhi NCR", top: "16%", left: "42%" },
  { name: "Ahmedabad", top: "36%", left: "22%" },
  { name: "Pune", top: "64%", left: "34%" },
  { name: "Nagpur", top: "52%", left: "48%" },
  { name: "Hyderabad", top: "70%", left: "50%" },
  { name: "Bengaluru", top: "84%", left: "42%" },
  { name: "Kolkata", top: "42%", left: "76%" },
];

/** A stylised "reach across India" network — city nodes fanned out from the Mumbai hub and
 *  joined by connecting lines. Deliberately abstract rather than a literal geographic map,
 *  so it reads as premium data-viz (Stripe/Linear style) rather than an inaccurate outline. */
export default function IndiaReachMap() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <SectionTitle
              align="left"
              eyebrow="Our Footprint"
              title="Partnerships spanning every corner of Bharat"
              description="From our founding campus in Mumbai to institutions across the country, our partner network reaches founders well beyond the metros."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1} animation="scale">
            <div className="relative mx-auto aspect-square w-full max-w-md rounded-[32px] bg-linear-to-br from-brand-50 via-secondary-50/60 to-sand-50 p-4">
              <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
                {cities.map((city) => (
                  <line
                    key={city.name}
                    x1={hub.left}
                    y1={hub.top}
                    x2={city.left}
                    y2={city.top}
                    stroke="#4CAF8D"
                    strokeOpacity="0.35"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                ))}
              </svg>

              <span
                className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-brand-700 px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-brand-700/30"
                style={{ top: hub.top, left: hub.left }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" /> {hub.name}
              </span>

              {cities.map((city, i) => (
                <motion.span
                  key={city.name}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-white bg-white/95 px-3 py-1.5 text-xs font-semibold text-ink-900 shadow-md"
                  style={{ top: city.top, left: city.left }}
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-500" /> {city.name}
                </motion.span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
