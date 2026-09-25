import { ExternalLink, GraduationCap } from "lucide-react";
import { profile } from "@/data/profile";
import { academicProjects } from "@/data/academic";
import { SectionHeading } from "./SectionHeading";
import { GitHubIcon } from "./Icons";

export function Education() {
  const highlighted = academicProjects.filter((p) => p.highlight);
  const other = academicProjects.filter((p) => !p.highlight);

  return (
    <section id="education" className="scroll-mt-20 border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Computer Science foundation"
          description="MSc from FIT VUT Brno, plus BSc degrees from VUT FIT and KNRTU — supporting backend, Java/Spring, and software engineering depth."
        />

        <div className="mt-10 space-y-4">
          {profile.education.map((item) => (
            <div
              key={`${item.degree}-${item.school}`}
              className={`rounded-xl border p-6 sm:p-7 ${
                item.highlight
                  ? "border-accent/20 bg-accent/[0.03]"
                  : "border-border bg-surface"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex gap-4">
                  <div
                    className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent sm:flex"
                    aria-hidden
                  >
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-muted-foreground">{item.school}</p>
                    <p className="mt-2 text-sm text-muted">
                      Focus: {item.focus}
                    </p>
                    {item.note && (
                      <p className="mt-2 text-sm text-accent/90">{item.note}</p>
                    )}
                  </div>
                </div>
                <span className="rounded-md border border-border bg-surface-elevated px-3 py-1 text-sm text-muted">
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground">
            Relevant university projects
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Selected coursework projects supporting Java, Spring, REST backends,
            databases, and full-stack development.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {highlighted.map((project) => (
              <a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-border bg-surface p-5 transition hover:border-accent/25"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  {project.course}
                </p>
                <h4 className="mt-1 font-semibold text-foreground group-hover:text-accent">
                  {project.name}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-surface-elevated px-2 py-0.5 text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent">
                  <GitHubIcon size={14} />
                  View on GitHub
                  <ExternalLink size={12} aria-hidden />
                </span>
              </a>
            ))}
          </div>

          {other.length > 0 && (
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {other.map((project) => (
                <li key={project.id}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-lg border border-transparent px-3 py-3 text-sm transition hover:border-border hover:bg-surface"
                  >
                    <span>
                      <span className="font-medium text-foreground">
                        {project.name}
                      </span>
                      <span className="ml-2 text-muted">
                        · {project.course}
                      </span>
                    </span>
                    <GitHubIcon size={14} className="shrink-0 text-muted" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
