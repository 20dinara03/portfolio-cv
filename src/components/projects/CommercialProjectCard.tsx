import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/types/project";
import { StatusBadge } from "@/components/ui/StatusBadge";

type CommercialProjectCardProps = {
  project: Project;
};

export function CommercialProjectCard({ project }: CommercialProjectCardProps) {
  const detailHref = `/projects/${project.id}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent/25">
      <Link
        href={detailHref}
        className="relative block aspect-[16/9] overflow-hidden bg-surface-elevated"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.name}
            fill
            className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-surface-elevated" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        {project.status !== "Live" && (
          <div className="absolute left-3 top-3">
            <StatusBadge status={project.status} />
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link href={detailHref}>
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted">
            {project.role}
          </p>
          <h3 className="mt-1 text-base font-semibold text-foreground transition group-hover:text-accent">
            {project.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
        </Link>

        <div className="mt-3 flex flex-wrap gap-1">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded bg-surface-elevated px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-4">
          <Link
            href={detailHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition hover:text-accent/80"
          >
            View Details
            <ArrowUpRight size={13} aria-hidden />
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-foreground"
            >
              Live site
              <ExternalLink size={13} aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
