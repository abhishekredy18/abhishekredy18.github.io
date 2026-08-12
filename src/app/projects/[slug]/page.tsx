import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MdxContent } from "@/components/mdx-content";
import { ProjectMeta } from "@/components/project-meta";
import { TechChip } from "@/components/badge";
import { getAllProjects, getProjectBySlug } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.image ?? "/og.png"],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article>
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 font-mono text-[13px] text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft className="size-3.5" aria-hidden /> All projects
      </Link>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <TechChip key={t}>{t}</TechChip>
        ))}
      </div>
      <h1 className="mt-3 text-[26px] font-semibold leading-tight tracking-tight sm:text-3xl">
        {project.title}
      </h1>
      <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed text-muted">
        {project.summary}
      </p>

      <div className="mt-7">
        <ProjectMeta project={project} />
      </div>

      {project.heroVideo ? (
        <div className="mt-8 overflow-hidden rounded border border-line">
          <video
            src={project.heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="h-auto w-full"
            aria-label={`${project.title} demo loop`}
          />
        </div>
      ) : project.image ? (
        <div className="mt-8 overflow-hidden rounded border border-line">
          <Image
            src={project.image}
            alt={`${project.title} illustration`}
            width={840}
            height={840}
            className="h-auto w-full"
          />
        </div>
      ) : null}

      <div className="mt-10">
        <MdxContent source={project.body} />
      </div>
    </article>
  );
}
