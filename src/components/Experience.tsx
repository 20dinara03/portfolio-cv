import { ExternalLink, Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Lead Frontend at WebStead"
          description="Commercial frontend ownership since August 2025 — architecture, implementing designer Figma files, and shipping client products."
        />

        <article className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent">
          <div className="border-b border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex gap-4">
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400 sm:flex">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {experience.role}
                  </h3>
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-cyan-300 transition hover:text-cyan-200"
                  >
                    {experience.company}
                    <ExternalLink size={14} />
                  </a>
                  <p className="mt-1 text-sm text-slate-400">
                    {experience.location}
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300">
                {experience.period}
              </span>
            </div>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300">
              {experience.summary}
            </p>
          </div>

          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr]">
            <ul className="space-y-3">
              {experience.bullets.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-slate-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Stack on the job
              </h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {experience.stack.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
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
