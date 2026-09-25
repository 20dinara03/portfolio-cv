import fs from "fs";
import { createRequire } from "module";

// Load projects via strip-types by spawning... simpler: eval from reading TS after strip
import { pathToFileURL } from "url";
import { register } from "node:module";

const { projects } = await import("../src/data/projects.ts");

const byId = Object.fromEntries(projects.map((p) => [p.id, { ...p }]));
const featuredOrder = [
  "moonera",
  "cantexniki",
  "poseidon-doors",
  "paradim",
  "goodhouse",
  "konstanta",
  "velesstroy",
  "interbuilding",
  "spinny",
];
const featuredSet = new Set(featuredOrder);

const featured = featuredOrder.map((id) => {
  if (!byId[id]) throw new Error("missing " + id);
  return { ...byId[id], featured: true };
});

const restIds = projects.map((p) => p.id).filter((id) => !featuredSet.has(id));
const rest = restIds.map((id) => ({ ...byId[id], featured: false }));
const next = [...featured, ...rest];

function serialize(value, indent = 0) {
  const pad = "  ".repeat(indent);
  const pad2 = "  ".repeat(indent + 1);
  if (value === null) return "null";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "boolean" || typeof value === "number") return String(value);
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    if (value.every((v) => typeof v === "string")) {
      if (value.length <= 3)
        return `[${value.map((v) => JSON.stringify(v)).join(", ")}]`;
      return `[\n${value.map((v) => pad2 + JSON.stringify(v)).join(",\n")},\n${pad}]`;
    }
    return `[\n${value.map((v) => pad2 + serialize(v, indent + 1)).join(",\n")},\n${pad}]`;
  }
  if (typeof value === "object") {
    const keys = Object.keys(value).filter((k) => value[k] !== undefined);
    return `{\n${keys
      .map((k) => pad2 + k + ": " + serialize(value[k], indent + 1))
      .join(",\n")},\n${pad}}`;
  }
  return String(value);
}

const header = `import type { Project } from "@/types/project";

/**
 * Commercial project data verified against local Work repositories and Git history.
 * No commercial source code or private repository URLs are published.
 *
 * Status rule: public domains (not *.webstead.ru) → Live / Completed.
 * Staging/preview on webstead.ru → In Development.
 *
 * Featured order: Moonera first … Spinny last.
 */
export const projects: Project[] = `;

const footer = `;

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured && p.commercial);
}

export function getMoreCommercialProjects(): Project[] {
  return projects.filter((p) => !p.featured && p.commercial);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug);
}

export function getCaseStudyProjects(): Project[] {
  return projects.filter((p) => p.caseStudy);
}
`;

fs.writeFileSync(
  new URL("../src/data/projects.ts", import.meta.url),
  header + serialize(next) + footer,
  "utf8",
);

console.log(
  "Featured:",
  next.filter((p) => p.featured).map((p) => p.id).join(" → "),
);
console.log(
  "More:",
  next.filter((p) => !p.featured).map((p) => p.id).join(", "),
);
