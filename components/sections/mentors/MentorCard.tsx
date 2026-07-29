"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { CalendarCheck } from "lucide-react";
import Card from "@/components/ui/Card";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import { getHeadshot } from "@/lib/images";
import type { MentorProfile } from "@/lib/mentors";

export default function MentorCard({ mentor, index = 0 }: { mentor: MentorProfile; index?: number }) {
  return (
    <Card className="flex flex-col items-center text-center">
      <div className="relative h-20 w-20 overflow-hidden rounded-full ring-4 ring-brand-50 transition-transform duration-300 group-hover:scale-105">
        <Image src={getHeadshot(index)} alt={mentor.name} fill sizes="80px" className="object-cover" />
      </div>
      <Link
        href={`/mentors/${mentor.slug}`}
        className="mt-4 text-lg font-semibold text-ink-900 hover:text-brand-700"
      >
        {mentor.name}
      </Link>
      <p className="mt-1 text-sm text-slate-500">{mentor.designation}</p>
      <p className="text-sm font-medium text-brand-700">{mentor.organization}</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {mentor.expertise.slice(0, 2).map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-2">
        <a
          href={mentor.linkedin}
          aria-label={`${mentor.name} on LinkedIn`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors hover:bg-brand-100"
        >
          <LinkedinIcon className="h-4 w-4" />
        </a>
        <button
          type="button"
          onClick={() =>
            toast.success("Request sent", {
              description: `We'll reach out to coordinate a session with ${mentor.name}.`,
            })
          }
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-100"
        >
          <CalendarCheck size={14} /> Book Mentorship
        </button>
      </div>
    </Card>
  );
}
