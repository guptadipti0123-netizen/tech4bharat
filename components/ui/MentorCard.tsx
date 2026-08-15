import Image from "next/image";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import { Sparkles } from "lucide-react";

interface MentorCardProps {
  photo?: string;
  name: string;
  designation: string;
  institution: string;
  expertise: string;
  bio: string;
  linkedinUrl?: string;
}

/** Sleek, compact profile card inspired by tech4bharat.com design language
 *  featuring compact typography, subtle glassmorphism, and responsive padding. */
export default function MentorCard({
  photo,
  name,
  designation,
  institution,
  expertise,
  bio,
  linkedinUrl,
}: MentorCardProps) {
  // Extract initials if photo isn't provided or fallback
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-3.5 sm:p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#4f6ff2] hover:shadow-lg">
      {/* Top subtle gradient accent line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#020024] via-[#090979] to-[#00D4FF] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        <div className="flex items-start justify-between gap-2.5">
          <div className="flex items-center gap-3">
            {photo ? (
              <div className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm ring-1 ring-blue-100">
                <Image
                  src={photo}
                  alt={name}
                  fill
                  sizes="48px"
                  className="object-cover object-top brightness-105"
                />
              </div>
            ) : (
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#4f6ff2] text-xs font-bold text-white shadow-sm">
                {initials}
              </div>
            )}
            <div className="min-w-0">
              <h3 className="truncate text-[13.5px] sm:text-[15px] font-bold leading-tight text-[#020024]">
                {name}
              </h3>
              <p className="mt-0.5 truncate text-[11px] sm:text-[12px] font-medium text-slate-500">
                {designation}
              </p>
              <p className="truncate text-[10.5px] sm:text-[11.5px] font-semibold text-[#1e3a8a]">
                {institution}
              </p>
            </div>
          </div>

          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn`}
              className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#4f6ff2] transition-colors duration-200 hover:bg-[#4f6ff2] hover:text-white"
            >
              <LinkedinIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </a>
          )}
        </div>

        <div className="mt-3 flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50/90 px-2.5 py-0.5 text-[9.5px] sm:text-[10.5px] font-semibold text-[#090979]">
            <Sparkles size={10} className="text-[#4f6ff2]" />
            {expertise}
          </span>
        </div>

        <p className="mt-2.5 line-clamp-3 text-[11px] sm:text-[12px] leading-relaxed text-gray-600">
          {bio}
        </p>
      </div>
    </div>
  );
}
