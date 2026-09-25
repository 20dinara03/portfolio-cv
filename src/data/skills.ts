export type SkillGroup = {
  name: string;
  subtitle?: string;
  items: string[];
};

export const skillCategories: SkillGroup[] = [
  {
    name: "Core / Commercial",
    subtitle: "Daily production stack at WebStead",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "REST APIs",
      "HTML",
      "CSS / SCSS",
      "Git",
    ],
  },
  {
    name: "Backend / Full-stack",
    subtitle: "University projects and coursework — not commercial employment",
    items: [
      "Java",
      "Spring Boot",
      "SQL",
      "PostgreSQL",
      "REST / backend development",
      "Node.js / Express",
      "Docker / Docker Compose",
    ],
  },
  {
    name: "Additional Engineering",
    subtitle: "VUT FIT / KNRTU coursework and projects",
    items: [
      "C# / .NET",
      "Python",
      "C / C++",
      "Django",
      "Algorithms & data structures",
      "Flutter / Dart",
      "Firebase",
    ],
  },
  {
    name: "Tools / Workflow",
    items: [
      "Git / GitLab CI",
      "Figma",
      "Vite",
      "React Hook Form",
      "Axios",
      "Framer Motion",
      "WordPress / Joomla",
      "Docker",
    ],
  },
];

export const languages = [
  { name: "English", level: "B2 — professional working proficiency" },
  { name: "Russian", level: "Native" },
  { name: "Czech", level: "B2 — professional working proficiency" },
  { name: "Slovak", level: "Good passive comprehension" },
];
