import { workSkills, universitySkills, languages } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Work stack vs university stack"
          description="Production tools I use at WebStead, plus skills from completed VUT FIT and KNRTU degrees."
        />

        <div className="mt-12 space-y-10">
          <SkillBlock
            label="From work — WebStead"
            hint="What I use shipping client products"
            groups={workSkills}
            accent="cyan"
          />
          <SkillBlock
            label="From university — VUT FIT / KNRTU (completed)"
            hint="Stack from finished degrees and thesis work"
            groups={universitySkills}
            accent="violet"
          />
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-[#111827]/60 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-white">Languages</h3>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4"
              >
                <p className="font-medium text-slate-100">{lang.name}</p>
                <p className="mt-2 text-sm leading-snug text-slate-400">
                  {lang.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBlock({
  label,
  hint,
  groups,
  accent,
}: {
  label: string;
  hint: string;
  groups: typeof workSkills;
  accent: "cyan" | "violet";
}) {
  const border =
    accent === "cyan" ? "border-cyan-500/20" : "border-violet-500/20";
  const chip =
    accent === "cyan"
      ? "border-cyan-500/20 bg-cyan-500/5 text-cyan-100"
      : "border-violet-500/20 bg-violet-500/5 text-violet-100";

  return (
    <div>
      <div className="mb-5">
        <h3 className="text-xl font-semibold text-white">{label}</h3>
        <p className="mt-1 text-sm text-slate-400">{hint}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.name}
            className={`rounded-2xl border ${border} bg-[#111827]/60 p-5`}
          >
            <h4 className="font-semibold text-white">{group.name}</h4>
            {group.subtitle && (
              <p className="mt-1 text-xs text-slate-500">{group.subtitle}</p>
            )}
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className={`rounded-lg border px-2.5 py-1 text-xs sm:text-sm ${chip}`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
