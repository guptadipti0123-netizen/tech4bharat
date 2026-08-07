import Image from "next/image";
import { Cpu, GraduationCap, Heart, Sparkles, Sprout, Venus, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface Persona {
  icon: LucideIcon;
  label: string;
  supportingLine: string;
}

const personas: Persona[] = [
  { icon: Sprout, label: "Early-Stage Startups", supportingLine: "Building your first company" },
  { icon: GraduationCap, label: "Student Founders", supportingLine: "Turning ideas into ventures" },
  { icon: Venus, label: "Women Entrepreneurs", supportingLine: "Empowering diverse leadership" },
  { icon: Heart, label: "Social Impact Startups", supportingLine: "Solving real-world problems" },
  { icon: Cpu, label: "Technology Innovators", supportingLine: "Creating the next breakthrough" },
  { icon: Sparkles, label: "First-Time Founders", supportingLine: "Starting your founder journey" },
];

/** Who should attend — a split layout: one real photograph on the left, and a plain
 *  vertical list of six audience rows on the right (icon, title, one-line description),
 *  separated only by hairline dividers. No cards, gradients, badges, or accent colors. */
export default function WhoShouldAttend() {
  return (
    <section className="bg-white py-10 sm:py-11">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Who Should Attend"
            description="This bootcamp is built for founders at every early stage of the journey."
            className="max-w-3xl"
            titleClassName="text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-[#163B2D] sm:text-[36px] lg:text-[42px]"
            descriptionClassName="mx-auto mt-3 max-w-175 text-[17px] leading-relaxed text-slate-600 sm:text-[18px]"
          />
        </AnimatedSection>

        <div className="mt-9 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <AnimatedSection className="relative h-80 w-full overflow-hidden rounded-[28px] sm:h-96 lg:h-full lg:min-h-125">
            <Image
              src="/images/gallery/bootcamps-1.jpg"
              alt="Founders and mentors at a Tech4Bharat Startup Bootcamp session"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </AnimatedSection>

          <div>
            {personas.map((persona, i) => {
              const Icon = persona.icon;
              return (
                <AnimatedSection key={persona.label} delay={i * 0.05}>
                  <div
                    className={cn(
                      "group flex items-center gap-4 py-4 transition-colors duration-200 hover:bg-slate-50",
                      i > 0 && "border-t border-slate-100"
                    )}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center text-slate-500 transition-colors duration-200 group-hover:text-[#1F4E3D]">
                      <Icon size={22} strokeWidth={1.5} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-ink-900 sm:text-lg">{persona.label}</h3>
                      <p className="mt-0.5 text-sm text-slate-500">{persona.supportingLine}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
