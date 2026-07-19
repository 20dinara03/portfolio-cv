import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Completed degrees — VUT FIT Brno + KNRTU Kazan"
          description="All university programs finished: BSc + MSc at VUT FIT (Czech), and a parallel BSc in Information Systems and Technologies at KNRTU (Kazan)."
        />

        <div className="mt-12 space-y-6">
          {profile.education.map((item) => (
            <div
              key={`${item.degree}-${item.school}`}
              className="flex gap-5 rounded-2xl border border-white/10 bg-[#111827]/50 p-6 sm:p-8"
            >
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400 sm:flex">
                <GraduationCap size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-xl font-semibold text-white">
                    {item.degree}
                  </h3>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-400">
                    {item.period}
                  </span>
                </div>
                <p className="mt-2 text-slate-300">{item.school}</p>
                <p className="mt-2 text-sm text-slate-400">Focus: {item.focus}</p>
                {"note" in item && item.note && (
                  <p className="mt-2 text-sm text-cyan-300/90">{item.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          MSc specialty: web &amp; mobile applications. Relevant coursework:
          enterprise Java / Spring (GJA), modern web APIs (MBA), IoT &amp; Docker
          (IIS), mobile (Flutter), commercial React work alongside the degree.
        </p>
      </div>
    </section>
  );
}
