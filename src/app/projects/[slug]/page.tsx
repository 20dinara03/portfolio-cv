import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyContent } from "@/components/projects/CaseStudyContent";
import {
  getCommercialProjects,
  getProjectBySlug,
} from "@/data/projects";
import { profile } from "@/data/profile";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getCommercialProjects().map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.commercial) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.name} — Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.name} — Case Study | ${profile.name}`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.commercial) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-28">
      <CaseStudyContent project={project} />
    </div>
  );
}
