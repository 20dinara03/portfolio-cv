export type SkillGroup = {
  name: string;
  subtitle?: string;
  items: string[];
};

/** Stacks used on commercial WebStead projects */
export const workSkills: SkillGroup[] = [
  {
    name: "Frontend (production)",
    subtitle: "Daily at WebStead",
    items: [
      "React 19",
      "Next.js 15–16",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "React Hook Form",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "SCSS / Sass",
      "Framer Motion",
      "Swiper",
      "Axios",
      "Responsive / mobile-first UI",
    ],
  },
  {
    name: "APIs, auth & delivery",
    items: [
      "REST APIs",
      "JWT / OAuth flows",
      "Loading & error states",
      "Basic unit / component testing (Jest, Vitest — growing)",
      "Docker (deploy contexts)",
      "Git / GitLab CI",
      "WordPress",
      "Joomla",
    ],
  },
  {
    name: "Design & productivity",
    items: [
      "Figma (implement ready designs → production)",
      "Cursor",
      "Claude",
      "ChatGPT",
      "AI-assisted coding & review",
    ],
  },
];

/** Stacks from VUT FIT / KNRTU coursework and thesis */
export const universitySkills: SkillGroup[] = [
  {
    name: "Backend & Java (university)",
    subtitle: "Relevant for fullstack / Java roles",
    items: [
      "Java",
      "Spring",
      "Maven",
      "Apache Wicket",
      "Node.js / Express",
      "Django",
      "REST API design",
      "PostgreSQL",
      "Oracle DB",
      "Firebase",
      "Docker / Docker Compose",
    ],
  },
  {
    name: "Systems & CS foundation",
    items: [
      "C / C++",
      "Python",
      "Algorithms & data structures",
      "Compilers (IFJ)",
      "Networks / sockets",
      "Parallel computing (OpenMP, MPI)",
      "CI/CD basics",
    ],
  },
  {
    name: "Mobile & other",
    items: ["Flutter / Dart", "C# / .NET (coursework)", "UML / system design"],
  },
];

export const languages = [
  { name: "English", level: "B2 — professional working proficiency" },
  { name: "Russian", level: "Native" },
  { name: "Czech", level: "B1 — intermediate" },
  {
    name: "Slovak",
    level: "Good passive comprehension — not speaking yet",
  },
];
