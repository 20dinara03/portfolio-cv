export type SkillGroup = {
  name: string;
  subtitle?: string;
  items: string[];
};

export const skillCategories: SkillGroup[] = [
  {
    name: "Programming Languages",
    items: [
      "Java",
      "Python",
      "TypeScript",
      "JavaScript",
      "C",
      "C++",
      "C#",
      "PHP",
      "Dart",
      "Bash",
    ],
  },
  {
    name: "Frontend Development",
    subtitle: "Primary commercial production experience",
    items: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "Zustand",
      "HTML5",
      "CSS3",
      "SCSS",
    ],
  },
  {
    name: "Backend Development",
    subtitle: "University projects, coursework, and active development",
    items: ["Spring Boot", "Node.js", "REST APIs"],
  },
  {
    name: "Databases",
    items: ["SQL", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    name: "Testing & Quality Assurance",
    items: ["Playwright", "E2E Testing", "Manual Testing", "Debugging"],
  },
  {
    name: "DevOps & Development Tools",
    items: ["Git", "GitHub", "GitLab", "CI/CD", "Docker", "Linux"],
  },
  {
    name: "Software Engineering",
    items: [
      "OOP",
      "UML",
      "Software Architecture",
      "System Integration",
      "Design Patterns",
    ],
  },
  {
    name: "Additional Technologies",
    items: ["Flutter", "WordPress", "WooCommerce", "Joomla", "Figma"],
  },
];

export const languages = [
  { name: "Russian", level: "Native" },
  { name: "Czech", level: "B2" },
  { name: "English", level: "B2" },
  { name: "Slovak", level: "Beginner (currently learning)" },
];
