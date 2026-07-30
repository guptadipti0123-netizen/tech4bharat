import { Building, GraduationCap, Lightbulb, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { icon: Users, value: "500+", label: "Startups Supported" },
  { icon: GraduationCap, value: "200+", label: "Expert Mentors" },
  { icon: Lightbulb, value: "50+", label: "Programs Conducted" },
  { icon: Building, value: "25+", label: "Partners & Collaborators" },
];

export default function HeroStats() {
  return (
    <section className="bg-white">
      <div className="mx-auto mt-[60px] max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-2 gap-10 rounded-[20px] p-[50px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex flex-col items-center text-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#124734]/10 text-[#124734]">
                    <Icon size={16} />
                  </div>
                  <p className="mt-4 text-2xl font-bold text-[#124734] sm:text-3xl">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-slate-500">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
