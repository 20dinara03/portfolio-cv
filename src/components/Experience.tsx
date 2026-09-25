import { ExternalLink, Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience"
          description="Commercial frontend development at WebStead — building production React, Next.js and TypeScript applications for real client products since August 2025."
        />

        <article className="mt-10 overflow-hidden rounded-xl border border-border bg-surface">
          <div className="border-b border-border p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex gap-4">
                <div
                  className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent sm:flex"
                  aria-hidden
                >
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {experience.role}
                  </h3>
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-accent transition hover:text-accent/80"
                  >
                    {experience.company}
                    <ExternalLink size={14} aria-hidden />
                  </a>
                  <p className="mt-1 text-sm text-muted">{experience.location}</p>
                </div>
              </div>
              <time
                dateTime="2025-08"
                className="rounded-md border border-border bg-surface-elevated px-3 py-1.5 text-sm text-muted-foreground"
              >
                {experience.period}
              </time>
            </div>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {experience.summary}
            </p>
          </div>

          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr]">
            <ul className="space-y-3" aria-label="Responsibilities">
              {experience.bullets.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                Technologies used
              </h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {experience.stack.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-surface-elevated px-2.5 py-1 text-sm text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
