import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Mail, MapPin, Plane } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/5 bg-gradient-to-b from-transparent to-cyan-950/20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about the role"
          description="Open to Frontend (React/TypeScript) and Junior Fullstack roles in Bratislava — ready to relocate and start quickly."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-white/10 bg-[#111827]/70 p-8 text-center">
          <p className="text-lg text-slate-200">
            Email or LinkedIn works best. I usually reply within 1–2 business
            days.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
          </div>

          <div className="mt-8 space-y-3 text-sm text-slate-400">
            <p className="inline-flex items-center justify-center gap-2">
              <MapPin size={15} className="text-cyan-400" />
              {profile.location}
            </p>
            <p className="mx-auto flex max-w-md items-start justify-center gap-2 text-left sm:text-center">
              <Plane size={15} className="mt-0.5 shrink-0 text-cyan-400" />
              <span>{profile.relocation}</span>
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-cyan-300"
            >
              <GitHubIcon size={15} />
              github.com/20dinara03
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
