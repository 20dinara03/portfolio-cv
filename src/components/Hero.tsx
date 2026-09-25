"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { Download, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative border-b border-border pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          className="max-w-3xl"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1
            id="hero-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            {profile.name}
          </h1>

          <p className="mt-3 text-xl font-medium text-foreground sm:text-2xl">
            {profile.professionalTitle}
          </p>

          <p className="mt-2 font-mono text-sm text-accent sm:text-base">
            {profile.primaryStack.join(" · ")}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>

          <p className="mt-4 flex items-start gap-2 text-sm text-muted">
            <MapPin size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden />
            {profile.relocationStatus}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90"
            >
              View Projects
            </a>
            {profile.resumeUrl ? (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-accent/30 hover:bg-surface-elevated"
              >
                <Download size={16} aria-hidden />
                Download Resume
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-2 rounded-lg border border-border/50 px-5 py-2.5 text-sm text-muted"
                title="Resume PDF not yet added"
              >
                <Download size={16} aria-hidden />
                Resume (PDF pending)
              </span>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted transition hover:text-accent"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted transition hover:text-accent"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
            <a
              href="#contact"
              className="text-muted transition hover:text-accent"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
