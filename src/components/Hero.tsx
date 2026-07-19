"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_40%,_#070b12_100%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            {profile.availability}
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name.split(" ")[0]}{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-teal-200 bg-clip-text text-transparent">
              {profile.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="mt-4 text-xl font-medium text-slate-200 sm:text-2xl">
            {profile.title}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.subtitle}
          </p>

          <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={15} className="text-cyan-400" />
            {profile.location} · open to Bratislava relocation
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="inline-flex items-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Experience & work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Contact for hiring
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition hover:text-cyan-300"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-cyan-300"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-cyan-300"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
        >
          {profile.highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition hover:border-cyan-500/25"
            >
              <p className="text-2xl font-bold text-white sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        <a
          href="#about"
          aria-label="Scroll to about section"
          className="mt-14 inline-flex animate-bounce text-slate-500 transition hover:text-cyan-400"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
