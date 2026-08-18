import {
  Coins,
  Globe2,
  Handshake,
  Landmark,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

const sessions = [
  {
    icon: Coins,
    title: "Fundraising",
    description:
      "Understanding investor expectations, cap-table structures, seed grant readiness, and structuring an effective pitch narrative.",
  },
  {
    icon: TrendingUp,
    title: "Business Model Development",
    description:
      "Crafting sustainable revenue streams, pricing models, and viable unit economics tailored for social impact ventures.",
  },
  {
    icon: Lightbulb,
    title: "Product Validation",
    description:
      "Structured methodologies to test hypotheses, validate product-market fit, and iterate MVPs with real customer feedback.",
  },
  {
    icon: Globe2,
    title: "Market Access",
    description:
      "Strategies to unlock enterprise channels, B2B procurement, rural supply chains, and pilot deployment opportunities.",
  },
  {
    icon: Landmark,
    title: "Government Schemes",
    description:
      "Navigating Startup India benefits, DPIIT recognition, BIRAC grants, and state-level innovation incentives.",
  },
  {
    icon: Handshake,
    title: "Investor Readiness & Networking",
    description:
      "Data room preparation, one-on-one pitch feedback, and direct networking with venture funds, angels, and mentors.",
  },
];

export default function BootcampSessions() {
  return (
    <section className="bg-white py-10 sm:py-14 border-t border-slate-100">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Core Bootcamp Sessions"
            description="Six intensive session tracks designed to accelerate early-stage social impact ventures."
            className="max-w-3xl"
            titleClassName="text-[22px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B2A4A] sm:text-[26px] lg:text-[30px]"
            descriptionClassName="mx-auto mt-3 max-w-175 text-[15px] leading-relaxed text-slate-600 sm:text-[16px]"
          />
        </AnimatedSection>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {sessions.map((session, i) => {
            const Icon = session.icon;
            return (
              <AnimatedSection key={session.title} delay={i * 0.05} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 shadow-2xs transition-all hover:-translate-y-1 hover:border-brand-300 hover:bg-white hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon size={20} />
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-3.5 text-base font-bold text-[#0B2A4A]">
                    {session.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    {session.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
