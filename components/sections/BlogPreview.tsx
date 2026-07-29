import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { blogPosts } from "@/lib/data";
import { getBlogImage } from "@/lib/images";

export default function BlogPreview() {
  return (
    <section id="blog" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Insights"
            title="From the Tech4Bharat blog"
            description="Stories, playbooks, and lessons from founders and mentors across our ecosystem."
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <AnimatedSection key={post.title} delay={i * 0.1}>
              <Link href="/blog" className="block h-full">
                <Card className="flex flex-col overflow-hidden p-0">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={getBlogImage(post.category)}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink-900/70 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-block w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                      {post.category}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold leading-snug text-ink-900">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-slate-600">{post.excerpt}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} /> {post.readTime}
                      </span>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2.5">
                      Read More <ArrowRight size={16} />
                    </span>
                  </div>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
