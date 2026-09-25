import fs from "fs";
import { projects } from "../src/data/projects.ts";

const map = {
  moonera: "/projects/moonera.jpg",
  cantexniki: "/projects/cantexniki.jpg",
  "poseidon-doors": "/projects/poseidon-doors.jpg",
  paradim: "/projects/paradim.jpg",
  goodhouse: "/projects/goodhouse.jpg",
  konstanta: "/projects/konstanta.jpg",
  velesstroy: "/projects/velesstroy.jpg",
  interbuilding: "/projects/interbuilding.jpg",
  spinny: "/projects/spinny.jpg",
  "doors-russia": "/projects/doors-russia.jpg",
  abpetrov: "/projects/abpetrov.jpg",
  "st-doors": "/projects/st-doors.jpg",
  lauhtin: "/projects/lauhtin.jpg",
  "bc-sites": "/projects/kuptsov.jpg",
  etrans: "/projects/etrans.jpg",
  daikin: "/projects/daikin.jpg",
  aura: "/projects/aura.jpg",
  vector: "/projects/vektor.jpg",
};

const next = projects.map((p) =>
  map[p.id] ? { ...p, image: map[p.id] } : p,
);

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
 * Project images are site photography/assets (not full-page screenshots).
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
);
console.log(next.map((p) => `${p.id} -> ${p.image}`).join("\n"));
