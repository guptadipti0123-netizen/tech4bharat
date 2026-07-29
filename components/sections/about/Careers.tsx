"use client";

import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FilterTabs from "@/components/ui/FilterTabs";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { jobOpenings, internships, volunteerRoles, volunteerTracks, type JobOpening } from "@/lib/careers";

const tabs = ["Current Openings", "Internships", "Volunteer Opportunities"];

const roleMap: Record<string, JobOpening[]> = {
  "Current Openings": jobOpenings,
  Internships: internships,
};

function RoleCard({ role, delay }: { role: JobOpening; delay: number }) {
  return (
    <AnimatedSection delay={delay}>
      <Card className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-base font-semibold text-ink-900">{role.title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> {role.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} /> {role.type}
            </span>
          </div>
        </div>
        <Button href="/contact" variant="outline" size="sm" className="w-full sm:w-auto">
          Apply Now
        </Button>
      </Card>
    </AnimatedSection>
  );
}

export default function Careers() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const isVolunteerTab = activeTab === "Volunteer Opportunities";
  const roles = isVolunteerTab ? [] : roleMap[activeTab];

  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Careers"
            title="Help build Bharat's startup ecosystem"
            description="Join our team, intern with us, or volunteer your time and expertise."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10 flex justify-center">
          <FilterTabs options={tabs} active={activeTab} onChange={setActiveTab} />
        </AnimatedSection>

        <div className="mx-auto mt-12 max-w-3xl">
          {isVolunteerTab ? (
            <div className="space-y-10">
              {volunteerTracks.map((track, trackIndex) => (
                <div key={track}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                    {track}
                  </h3>
                  <div className="mt-4 space-y-4">
                    {volunteerRoles
                      .filter((role) => role.track === track)
                      .map((role, i) => (
                        <RoleCard key={role.title} role={role} delay={(trackIndex + i) * 0.06} />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {roles.map((role, i) => (
                <RoleCard key={role.title} role={role} delay={i * 0.06} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
