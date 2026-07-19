import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { WorkProjects } from "@/components/WorkProjects";
import { AcademicProjects } from "@/components/AcademicProjects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { FadeIn } from "@/components/FadeIn";
import { profile } from "@/data/profile";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: profile.email,
  url: profile.portfolio,
  birthDate: profile.birthDate,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kazan",
    addressCountry: "RU",
  },
  sameAs: [profile.github, profile.linkedin],
  worksFor: {
    "@type": "Organization",
    name: profile.company.name,
    url: profile.company.url,
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Brno University of Technology — Faculty of Information Technology",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Kazan National Research Technical University (KNRTU)",
    },
  ],
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "Redux",
    "REST APIs",
    "Vite",
    "Java",
    "Spring",
    "Flutter",
    "Figma handoff",
    "Frontend Development",
    "Full-Stack Development",
  ],
  description: profile.subtitle,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Experience />
      </FadeIn>
      <FadeIn>
        <Skills />
      </FadeIn>
      <FadeIn>
        <WorkProjects />
      </FadeIn>
      <FadeIn>
        <AcademicProjects />
      </FadeIn>
      <FadeIn>
        <Education />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
    </>
  );
}
