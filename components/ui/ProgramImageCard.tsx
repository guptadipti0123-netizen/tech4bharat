import Image from "next/image";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface ProgramImageCardProps {
  image: string;
  icon: LucideIcon;
  title: string;
  description: string;
  learnMoreHref?: string;
}

/** Large-image program card: top photo, icon badge, title/description, and a Learn More CTA. */
export default function ProgramImageCard({
  image,
  icon: Icon,
  title,
  description,
  learnMoreHref = "/contact",
}: ProgramImageCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      <div className="relative h-60 w-full overflow-hidden sm:h-64">
        <Image
          src={image}
          alt={`${title} at Tech4Bharat`}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-900/25 via-transparent to-transparent" />
        <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-brand-600 shadow-md backdrop-blur-sm">
          <Icon size={22} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-[19px] font-bold text-ink-900">{title}</h3>
        <p className="mt-3 flex-1 text-[14px] leading-relaxed text-slate-600">{description}</p>
        <Button href={learnMoreHref} variant="outline" size="sm" className="mt-6 w-fit">
          Learn More <ArrowUpRight size={16} />
        </Button>
      </div>
    </Card>
  );
}
