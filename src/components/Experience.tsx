import { ExternalLink, Briefcase } from "lucide-react";
import { experienceList } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience"
          description="Commercial software experience — Frontend Developer at WebStead and Junior Backend Developer at Meridian LLC."
        />

        <div className="mt-10 space-y-6">
          {experienceList.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="overflow-hidden rounded-xl border border-border bg-surface"
            >
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
                        {item.role}
                      </h3>
                      {item.companyUrl ? (
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1.5 text-accent transition hover:text-accent/80"
                        >
                          {item.company}
                          <ExternalLink size={14} aria-hidden />
                        </a>
                      ) : (
                        <p className="mt-1 text-accent">{item.company}</p>
                      )}
                      <p className="mt-1 text-sm text-muted">{item.location}</p>
                    </div>
                  </div>
                  <time
                    dateTime={item.dateTime}
                    className="rounded-md border border-border bg-surface-elevated px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {item.period}
                  </time>
                </div>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
              </div>

              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr]">
                <ul className="space-y-3" aria-label="Responsibilities">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Technologies used
                  </h4>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.stack.map((skill) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
