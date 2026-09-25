import { getFeaturedProjects } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";
import { FeaturedProjectCard } from "./projects/FeaturedProjectCard";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Production applications I built"
          description="Selected commercial projects with the strongest engineering depth — SaaS dashboards, e-commerce with state management and checkout, product configurators, and REST API integration."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featured.map((project, i) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              priority={i < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
