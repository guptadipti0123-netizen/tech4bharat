import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { aboutImages } from "@/lib/images";

const gallery = [
  { src: aboutImages.innovationCenter, caption: "Where founders build, test, and iterate" },
  { src: aboutImages.meeting, caption: "Mentorship conversations that shape company strategy" },
];

export default function InnovationGallery() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2">
          {gallery.map((item, i) => (
            <AnimatedSection key={item.caption} delay={i * 0.1}>
              <div className="group relative aspect-4/3 overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink-900/75 via-ink-900/10 to-transparent" />
                <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white">{item.caption}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
