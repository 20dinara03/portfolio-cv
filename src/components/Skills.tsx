import { skillCategories, languages } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Technology foundation"
          description="Commercial production stack from WebStead, plus backend and software engineering skills from university coursework and projects."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skillCategories.map((group) => (
            <div
              key={group.name}
              className="rounded-xl border border-border bg-surface p-5 sm:p-6"
            >
              <h3 className="font-semibold text-foreground">{group.name}</h3>
              {group.subtitle && (
                <p className="mt-1 text-xs text-muted">{group.subtitle}</p>
              )}
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border bg-surface-elevated px-2.5 py-1 text-sm text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-border bg-surface p-5 sm:p-6">
          <h3 className="font-semibold text-foreground">Languages</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="rounded-lg border border-border bg-surface-elevated px-4 py-3"
              >
                <p className="font-medium text-foreground">{lang.name}</p>
                <p className="mt-1 text-sm text-muted">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
