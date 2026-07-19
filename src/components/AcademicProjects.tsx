import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./Icons";
import { academicProjects } from "@/data/academic";
import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function AcademicProjects() {
  const featured = academicProjects.filter((p) => p.featured);
  const other = academicProjects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="University projects"
          title="Selected university projects"
          description="Java/Spring, REST, Docker, TypeScript, and CI/CD from completed VUT FIT degrees — plus more on GitHub."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {other.length > 0 && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-[#111827]/40 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Also relevant
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {other.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-3 rounded-xl border border-transparent px-3 py-3 transition hover:border-white/10 hover:bg-white/5"
                  >
                    <div>
                      <p className="font-medium text-slate-200 group-hover:text-white">
                        {project.name}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {project.course} · {project.tags.slice(0, 3).join(" · ")}
                      </p>
                    </div>
                    <GitHubIcon
                      size={16}
                      className="mt-1 shrink-0 text-slate-500 group-hover:text-violet-300"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10 text-center">
          <a
            href={`${profile.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5"
          >
            <GitHubIcon size={16} />
            Browse all repositories
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof academicProjects)[number];
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/50 transition hover:border-violet-500/30">
      <div className={`relative h-28 bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-white/70">
            {project.course}
          </p>
          <h3 className="text-lg font-bold text-white">{project.name}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-slate-300">
          {project.description}
        </p>

        <ul className="mt-3 space-y-1.5">
          {project.highlights.slice(0, 3).map((item) => (
            <li
              key={item}
              className="text-xs text-slate-400 before:mr-2 before:text-cyan-400 before:content-['•']"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-white/5 px-2 py-0.5 text-[11px] text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-violet-300 transition hover:text-violet-200"
        >
          <GitHubIcon size={15} />
          View on GitHub
          <ExternalLink size={13} />
        </a>
      </div>
    </article>
  );
}
