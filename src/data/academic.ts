export type AcademicProject = {
  id: string;
  name: string;
  course: string;
  github: string;
  tags: string[];
  description: string;
  highlight?: boolean;
};

/** University projects supporting backend/full-stack positioning — shown in Education */
export const academicProjects: AcademicProject[] = [
  {
    id: "pest",
    name: "PEST Evaluation Platform",
    course: "GJA — Enterprise Java",
    github: "https://github.com/20dinara03/pest-evaluation-platform-GJA-VUT-FIT",
    tags: ["Java", "Spring", "Wicket", "Maven"],
    description:
      "Enterprise web app with layered Spring architecture — service, repository, and UI layers.",
    highlight: true,
  },
  {
    id: "java-api",
    name: "Java REST Web API",
    course: "MBA — Modern Web Applications",
    github: "https://github.com/20dinara03/java-web-api-MBA-VUT-FIT",
    tags: ["Java", "REST", "API"],
    description: "Java REST web API — backend fundamentals with REST endpoints.",
    highlight: true,
  },
  {
    id: "grafita",
    name: "Grafita IoT Platform",
    course: "IIS — Intelligent Systems",
    github: "https://github.com/20dinara03/grafita-iot-platform-IIS-VUT-FIT",
    tags: ["Django", "Docker", "PostgreSQL", "REST"],
    description:
      "Full-stack IoT device management — Django REST, PostgreSQL, Docker Compose.",
    highlight: true,
  },
  {
    id: "greenhouse",
    name: "Smart Greenhouse",
    course: "THE — Master's Thesis",
    github: "https://github.com/20dinara03/smart-greenhouse-mobile-THE-VUT-FIT",
    tags: ["Node.js", "Express", "Flutter", "Firebase"],
    description:
      "End-to-end IoT system — Node.js REST backend, Flutter app, ESP32 firmware.",
    highlight: true,
  },
  {
    id: "quake",
    name: "Quake & Weather Dashboard",
    course: "WAP — Web Application Development",
    github: "https://github.com/20dinara03/quake-weather-WAP-VUT-FIT",
    tags: ["TypeScript", "Web APIs"],
    description: "TypeScript dashboard consuming external earthquake and weather APIs.",
  },
  {
    id: "ifj",
    name: "IFJ22 Compiler",
    course: "IFJ — Formal Languages",
    github: "https://github.com/20dinara03/compiler-IFJ-VUT-FIT",
    tags: ["C", "Compiler"],
    description: "Full compiler pipeline in C — team project.",
  },
  {
    id: "pacman",
    name: "Pac-Man (Java)",
    course: "IJA — Advanced Java",
    github: "https://github.com/20dinara03/pacman-game-IJA-VUT-FIT",
    tags: ["Java", "Maven", "OOP"],
    description: "Pac-Man game in Java 17 with Maven build system.",
  },
];
