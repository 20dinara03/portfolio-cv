import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/types/project";
import { StatusBadge } from "@/components/ui/StatusBadge";

type FeaturedProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function FeaturedProjectCard({
  project,
  priority = false,
}: FeaturedProjectCardProps) {
  const detailHref = `/projects/${project.id}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent/30">
      <Link href={detailHref} className="relative block aspect-[16/10] overflow-hidden bg-surface-elevated">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.name}
            fill
            className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={priority}
          />
        ) : (
          <div className="absolute inset-0 bg-surface-elevated" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {project.status !== "Live" && (
              <StatusBadge status={project.status} />
            )}
          </div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            {project.role}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-foreground sm:text-2xl">
            {project.name}
          </h3>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <Link href={detailHref}>
          <p className="text-sm leading-relaxed text-muted transition group-hover:text-muted-foreground">
            {project.description}
          </p>
        </Link>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-surface-elevated px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <Link
            href={detailHref}
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent/10 px-3.5 py-2 text-sm font-medium text-accent transition hover:bg-accent/20"
          >
            View Details
            <ArrowUpRight size={14} aria-hidden />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-sm font-medium text-foreground transition hover:border-accent/30 hover:bg-surface-elevated"
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
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-sm font-medium text-foreground transition hover:border-accent/30 hover:bg-surface-elevated"
            >
              {project.secondaryUrlLabel ?? "More"}
              <ExternalLink size={14} aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
