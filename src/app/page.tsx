import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Experience } from "@/components/Experience";
import { MoreCommercialWork } from "@/components/MoreCommercialWork";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FadeIn } from "@/components/FadeIn";
import { profile } from "@/data/profile";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.professionalTitle,
  email: profile.email,
  url: profile.portfolio,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.targetLocation,
    addressCountry: "SK",
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
      url: profile.university,
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Kazan National Research Technical University",
    },
  ],
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "Java",
    "Spring",
    "REST APIs",
    "Redux",
    "Full-Stack Development",
    "Software Development",
  ],
  description: profile.tagline,
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
        <FeaturedProjects />
      </FadeIn>
      <FadeIn>
        <Experience />
      </FadeIn>
      <FadeIn>
        <MoreCommercialWork />
      </FadeIn>
      <FadeIn>
        <Skills />
      </FadeIn>
      <FadeIn>
        <Education />
      </FadeIn>
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
    </>
  );
}
