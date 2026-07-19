export type AcademicProject = {
  id: string;
  name: string;
  course: string;
  github: string;
  gradient: string;
  accent: string;
  tags: string[];
  description: string;
  highlights: string[];
  /** Best match for ARTIN / Softec / SNP-adjacent skills */
  featured?: boolean;
};

export const academicProjects: AcademicProject[] = [
  {
    id: "pest",
    name: "PEST Evaluation Platform",
    course: "GJA — Enterprise Java",
    github: "https://github.com/20dinara03/pest-evaluation-platform-GJA-VUT-FIT",
    gradient: "from-orange-600 via-amber-600 to-yellow-600",
    accent: "#f59e0b",
    tags: ["Java", "Spring", "Wicket", "Maven", "Enterprise"],
    featured: true,
    description:
      "Enterprise web app for evaluation workflows — layered Spring architecture. Strong signal for Java/Kotlin fullstack roles (ARTIN, Softec).",
    highlights: [
      "Multi-tier Java patterns: service, repository, UI layers",
      "Spring + Apache Wicket component UI",
      "Maven-structured enterprise-style module layout",
    ],
  },
  {
    id: "java-api",
    name: "Java REST Web API",
    course: "MBA — Modern Web Applications",
    github: "https://github.com/20dinara03/java-web-api-MBA-VUT-FIT",
    gradient: "from-red-600 via-rose-700 to-pink-800",
    accent: "#f43f5e",
    tags: ["Java", "REST", "API"],
    featured: true,
    description:
      "Simple Java REST web API — backend fundamentals that pair with React frontend experience.",
    highlights: [
      "REST endpoints and basic API structure in Java",
      "Useful bridge toward Spring/Kotlin commercial backends",
    ],
  },
  {
    id: "grafita",
    name: "Grafita IoT Platform",
    course: "IIS — Intelligent Systems",
    github: "https://github.com/20dinara03/grafita-iot-platform-IIS-VUT-FIT",
    gradient: "from-cyan-600 via-sky-600 to-blue-700",
    accent: "#0ea5e9",
    tags: ["Django", "Docker", "PostgreSQL", "REST"],
    featured: true,
    description:
      "Full-stack IoT device management — REST backend, PostgreSQL, Docker Compose. Shows backend + DevOps basics.",
    highlights: [
      "Django REST + PostgreSQL persistence",
      "Docker Compose multi-service deployment",
      "Device lifecycle and telemetry-oriented features",
    ],
  },
  {
    id: "greenhouse",
    name: "Smart Greenhouse",
    course: "THE — Master's Thesis",
    github: "https://github.com/20dinara03/smart-greenhouse-mobile-THE-VUT-FIT",
    gradient: "from-green-600 via-emerald-600 to-teal-700",
    accent: "#10b981",
    tags: ["Node.js", "Express", "REST", "Flutter", "Firebase"],
    featured: true,
    description:
      "End-to-end IoT system — Node.js REST backend, Flutter app, ESP32 firmware. Fullstack ownership from UI to API.",
    highlights: [
      "Node.js/Express REST API with Firebase integration",
      "Flutter real-time dashboards and push notifications",
      "Three-repo architecture: mobile, backend, firmware",
    ],
  },
  {
    id: "quake",
    name: "Quake & Weather Dashboard",
    course: "WAP — Web Application Development",
    github: "https://github.com/20dinara03/quake-weather-WAP-VUT-FIT",
    gradient: "from-sky-600 via-blue-700 to-indigo-800",
    accent: "#38bdf8",
    tags: ["TypeScript", "Web APIs", "Dashboard"],
    featured: true,
    description:
      "TypeScript dashboard consuming external APIs — frontend fundamentals recruiters look for.",
    highlights: [
      "TypeScript UI integrating earthquake & weather data APIs",
      "Client-side data presentation and interaction",
    ],
  },
  {
    id: "ci-lib",
    name: "Prime Numbers Library + CI",
    course: "WAP — Web Application Development",
    github: "https://github.com/20dinara03/prime-numbers-library-WAP-VUT-FIT",
    gradient: "from-fuchsia-700 via-purple-700 to-violet-900",
    accent: "#d946ef",
    tags: ["CI/CD", "Shell", "Testing mindset"],
    featured: true,
    description:
      "Library project with CI/CD pipeline — aligns with SNP’s interest in basic CI/CD exposure.",
    highlights: [
      "Automated pipeline setup around a small library",
      "Shows comfort with quality gates beyond “just coding UI”",
    ],
  },
  {
    id: "ifj",
    name: "IFJ22 Compiler",
    course: "IFJ — Formal Languages",
    github: "https://github.com/20dinara03/compiler-IFJ-VUT-FIT",
    gradient: "from-indigo-700 via-violet-700 to-purple-800",
    accent: "#8b5cf6",
    tags: ["C", "Compiler", "Team project"],
    description:
      "Full compiler pipeline in C — strong CS signal (algorithms, architecture, teamwork).",
    highlights: [
      "Scanner → parser → semantics → code generation",
      "Documented team architecture and test mindset",
    ],
  },
  {
    id: "pacman",
    name: "Pac-Man (Java)",
    course: "IJA — Advanced Java",
    github: "https://github.com/20dinara03/pacman-game-IJA-VUT-FIT",
    gradient: "from-yellow-600 via-amber-700 to-orange-800",
    accent: "#fbbf24",
    tags: ["Java 17", "Maven", "OOP"],
    description:
      "Pac-Man in Java 17 with Maven — solid OOP and Java practice beyond Spring coursework.",
    highlights: [
      "Java 17 game architecture with Maven build",
      "Reinforces commercial-ready Java comfort",
    ],
  },
];
