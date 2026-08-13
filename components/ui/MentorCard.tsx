import Image from "next/image";
import { LinkedinIcon } from "@/components/ui/SocialIcons";

interface MentorCardProps {
  photo: string;
  name: string;
  designation: string;
  institution: string;
  expertise: string;
  bio: string;
  linkedinUrl?: string;
}

/** Compact profile card — photo sits beside the name/role/institution block instead of
 *  above it, so identity reads in one glance rather than requiring a scan down the card. */
export default function MentorCard({
  photo,
  name,
  designation,
  institution,
  expertise,
  bio,
  linkedinUrl,
}: MentorCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-brand-500/15 bg-white p-4 shadow-[0_4px_14px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5">
      <div className="flex items-center gap-3">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm">
          <Image src={photo} alt={name} fill sizes="56px" className="object-cover object-top" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[15px] font-bold leading-tight text-ink-900">{name}</h3>
          <p className="mt-0.5 truncate text-[12.5px] text-slate-500">
            {designation} · {institution}
          </p>
        </div>
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors duration-200 hover:bg-brand-600 hover:text-white"
          >
            <LinkedinIcon className="h-3.5 w-3.5" />
          </a>
        )}
      </div>

      <span className="inline-flex w-fit items-center rounded-full bg-accent-50 px-2.5 py-1 text-[11px] font-semibold text-accent-700">
        {expertise}
      </span>

      <p className="line-clamp-2 text-[13px] leading-relaxed text-slate-600">{bio}</p>
    </div>
  );
}
