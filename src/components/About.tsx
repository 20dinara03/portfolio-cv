import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { MapPin, Cake, Plane } from "lucide-react";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="Frontend engineer focused on shipping"
          description="React / TypeScript in production, completed VUT FIT + KNRTU degrees, open to relocate to Bratislava."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <div className="space-y-5 text-base leading-relaxed text-slate-300">
            {profile.summary.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}

            <div className="flex flex-col gap-3 pt-2 text-sm text-slate-400">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0 text-cyan-400" />
                {profile.location}
              </p>
              <p className="flex items-start gap-2">
                <Plane size={16} className="mt-0.5 shrink-0 text-cyan-400" />
                <span>{profile.relocation}</span>
              </p>
              <p className="flex items-center gap-2">
                <Cake size={16} className="shrink-0 text-cyan-400" />
                Born {profile.birthDateLabel} · age {profile.age}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white">
              Why hire me for React / fullstack junior–medior roles?
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {profile.whyHire.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
