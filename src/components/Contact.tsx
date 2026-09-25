import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Mail, MapPin, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Interested in working together?"
          description="Open to full-stack, React, and software developer roles in Bratislava and Slovakia."
          align="center"
        />

        <div className="mx-auto mt-10 max-w-lg rounded-xl border border-border bg-surface p-8 text-center">
          <p className="text-muted-foreground">
            Email or LinkedIn works best. I typically reply within 1–2 business
            days.
          </p>

          <div className="mt-7 flex flex-col gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90"
            >
              <Mail size={16} aria-hidden />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent/30"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
          </div>

          <div className="mt-8 space-y-3 text-sm text-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 transition hover:text-accent"
            >
              <GitHubIcon size={15} />
              github.com/20dinara03
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 transition hover:text-accent"
              >
                <Download size={15} aria-hidden />
                Download Resume
              </a>
            )}
            <p className="flex items-center justify-center gap-2">
              <MapPin size={15} className="text-accent" aria-hidden />
              {profile.relocationStatus}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
