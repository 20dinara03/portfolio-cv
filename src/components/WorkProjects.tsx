"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { workProjects } from "@/data/work";
import { SectionHeading } from "./SectionHeading";

export function WorkProjects() {
  const featured = workProjects.filter((p) => p.featured);
  const other = workProjects.filter((p) => !p.featured);

  return (
    <section id="work" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Production Work"
          title="Largest client projects first"
          description="Biggest deliveries by scope: SaaS, e-commerce, corporate portals, and multi-site work. More projects below — including ones still in development."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} large />
          ))}
        </div>

        {other.length > 0 && (
          <>
            <h3 className="mt-14 text-lg font-semibold text-white">
              More production work
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              Additional live sites, plus projects still in development.
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {other.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

type ProjectCardProps = {
  project: (typeof workProjects)[number];
  large?: boolean;
};

function ProjectCard({ project, large }: ProjectCardProps) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/50 transition hover:border-cyan-500/30 hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.25)] ${
        large ? "lg:min-h-[400px]" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          project.image
            ? large
              ? "h-52 sm:h-60"
              : "h-40"
            : `bg-gradient-to-br ${project.gradient} ${large ? "h-40 sm:h-48" : "h-28"}`
        }`}
      >
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.imageAlt ?? project.name}
              fill
              className="object-cover object-top brightness-[0.72] transition duration-500 group-hover:scale-[1.03] group-hover:brightness-[0.78]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={large}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />
          </>
        ) : (
          <div className="absolute inset-0 bg-black/20" />
        )}
        <div className="absolute inset-0 flex items-end p-5 sm:p-6">
          <div className="w-full">
            {project.status && (
              <span className="mb-2 inline-flex rounded-full border border-amber-400/40 bg-amber-500/25 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-100">
                {project.status}
              </span>
            )}
            <p className="text-xs font-medium uppercase tracking-wider text-white/85 drop-shadow">
              {project.role}
            </p>
            <h3
              className={`font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] ${large ? "text-2xl" : "text-lg"}`}
            >
              {project.name}
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-slate-300">
          {project.description}
        </p>

        <ul className="mt-4 space-y-2">
          {(large ? project.highlights : project.highlights.slice(0, 2)).map(
            (item) => (
              <li
                key={item}
                className="flex gap-2 text-sm text-slate-400 before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-cyan-400 before:content-['']"
              >
                {item}
              </li>
            ),
          )}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/15 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/25"
            >
              {project.urlLabel ?? "Live site"}
              <ExternalLink size={14} />
            </a>
          ) : (
            <span className="inline-flex items-center rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-500">
              Client project
            </span>
          )}
          {project.secondaryUrl && (
            <a
              href={project.secondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5"
            >
              {project.secondaryUrlLabel ?? "More"}
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
