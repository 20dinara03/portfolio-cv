import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import type { Project } from "@/types/project";
import { resolveCaseStudy } from "@/data/projects";
import { StatusBadge } from "@/components/ui/StatusBadge";

type CaseStudyContentProps = {
  project: Project;
};

export function CaseStudyContent({ project }: CaseStudyContentProps) {
  const cs = resolveCaseStudy(project);

  return (
    <article>
      <div className="mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
        >
          <ArrowLeft size={16} aria-hidden />
          Back to projects
        </Link>
      </div>

      {project.image && (
        <div className="relative mb-10 aspect-[16/8] overflow-hidden rounded-xl border border-border bg-surface-elevated">
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.name}
            fill
            className="object-cover object-top"
            sizes="100vw"
            priority
          />
        </div>
      )}

      <header className="max-w-3xl">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
          <span className="text-sm text-muted">{project.role}</span>
          {project.year && (
            <span className="text-sm text-muted">{project.year}</span>
          )}
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {project.description}
        </p>
      </header>

      <div className="mt-10 max-w-3xl space-y-10">
        <Section title="My Role">
          <p className="leading-relaxed text-muted-foreground">{cs.myRole}</p>
        </Section>

        <Section title="The Product / Context">
          <p className="leading-relaxed text-muted-foreground">
            {cs.productContext}
          </p>
        </Section>

        <Section title="What I Built">
          <ul className="space-y-2">
            {cs.whatIBuilt.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ul>
        </Section>

        <Section title="Technical Implementation">
          <ul className="space-y-2">
            {cs.technicalImplementation.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ul>
        </Section>

        {cs.challenges && cs.challenges.length > 0 && (
          <Section title="Technical Challenges">
            <ul className="space-y-2">
              {cs.challenges.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </ul>
          </Section>
        )}

        <Section title="Tech Stack">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-surface-elevated px-3 py-1.5 text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Result / Current Status">
          <p className="leading-relaxed text-muted-foreground">{cs.result}</p>
        </Section>

        {(project.liveUrl || project.secondaryUrl) && (
          <Section title="Links">
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition hover:bg-accent/90"
                >
                  {project.liveUrlLabel ?? "Live Project"}
                  <ExternalLink size={14} aria-hidden />
                </a>
              )}
              {project.secondaryUrl && (
                <a
                  href={project.secondaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-accent/30"
                >
                  {project.secondaryUrlLabel ?? "Secondary link"}
                  <ExternalLink size={14} aria-hidden />
                </a>
              )}
            </div>
          </Section>
        )}
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}

function ListItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
      <span
        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
        aria-hidden
      />
      {children}
    </li>
  );
}
