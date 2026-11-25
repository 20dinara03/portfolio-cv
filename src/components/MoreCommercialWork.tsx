"use client";

import { useMemo, useState } from "react";
import {
  getMoreCommercialProjects,
  PROJECT_FILTERS,
} from "@/data/projects";
import type { ProjectCategory } from "@/types/project";
import { SectionHeading } from "./SectionHeading";
import { CommercialProjectCard } from "./projects/CommercialProjectCard";
import { cn } from "@/lib/utils";

type Filter = (typeof PROJECT_FILTERS)[number];

export function MoreCommercialWork() {
  const projects = getMoreCommercialProjects();
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) =>
      project.categories.includes(filter as ProjectCategory),
    );
  }, [filter, projects]);

  if (projects.length === 0) return null;

  return (
    <section
      id="more-work"
      className="scroll-mt-20 border-t border-border py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="More Projects"
          title="Additional portfolio projects"
          description="Commercial frontend work, in-development builds, and planned engineering projects — filter by category."
        />

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Project categories"
        >
          {PROJECT_FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              onClick={() => setFilter(item)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm transition",
                filter === item
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : "border-border bg-surface text-muted-foreground hover:border-accent/25 hover:text-foreground",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <CommercialProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-sm text-muted">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
