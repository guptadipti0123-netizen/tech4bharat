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
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={`${title} at Tech4Bharat`}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-brand-700 shadow-md backdrop-blur-sm">
          <Icon size={20} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
        <Button href={learnMoreHref} variant="ghost" size="sm" className="-ml-4 mt-5 w-fit">
          Learn More <ArrowUpRight size={16} />
        </Button>
      </div>
    </Card>
  );
}
