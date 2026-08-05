import Image from "next/image";
import { Building2, Calendar, MapPin, Target } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { getEventImage } from "@/lib/images";

const metaCards = [
  { icon: Calendar, label: "Date", value: "March 21, 2025" },
  { icon: MapPin, label: "Venue", value: "Cognizant Lab, COEP, Pune" },
  { icon: Building2, label: "Organizer", value: "BharatGen" },
];

const agendaTopics = [
  { title: "LangChain", description: "Building AI applications with the LangChain framework." },
  { title: "Hugging Face Transformers", description: "Working hands-on with pretrained transformer models." },
  { title: "Neural Networks & LLMs", description: "Core concepts behind neural networks and large language models." },
  { title: "AI Career Pathways", description: "A look at career opportunities in applied AI." },
];

/** A single curated past-event spotlight (deliberately mirrored — image left instead of
 *  right — from the Recent Event section above) instead of a generic marquee of every past
 *  event; the AI Workshop by BharatGen is the one past event with rich enough real content
 *  (a named agenda's worth of topics) to support this treatment. */
export default function PastEventSpotlight() {
  return (
    <section className="bg-sand-50 py-8 sm:py-12">
      <Container>
        <AnimatedSection>
          <SectionTitle eyebrow="Past Event" title="Past Event" align="left" />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-8">
          <div className="grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl lg:grid-cols-2">
            <div className="relative h-64 lg:h-full">
              <Image
                src={getEventImage("ai-workshop-bharatgen-2025")}
                alt="AI Workshop by BharatGen session at Cognizant Lab, COEP"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <Badge variant="neutral">Workshop • Past</Badge>
              <h3 className="mt-4 text-2xl font-bold text-ink-900 sm:text-[28px]">AI Workshop by BharatGen</h3>

              <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
                {metaCards.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                      <Icon size={12} /> {label}
                    </span>
                    <p className="mt-1 text-sm font-semibold text-ink-900">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-brand-50 p-3">
                <Target size={16} className="mt-0.5 shrink-0 text-brand-600" />
                <p className="text-sm text-ink-900">
                  <span className="font-semibold">Goal:</span> &ldquo;GenAI for Everyone, by Everyone&rdquo; —
                  hands-on generative AI development.
                </p>
              </div>

              <h4 className="mt-6 text-sm font-bold uppercase tracking-wide text-slate-500">Agenda</h4>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {agendaTopics.map((topic) => (
                  <div key={topic.title} className="rounded-xl border border-slate-200 p-3.5">
                    <p className="text-sm font-bold text-ink-900">{topic.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{topic.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
