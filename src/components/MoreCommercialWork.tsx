import { getMoreCommercialProjects } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";
import { CommercialProjectCard } from "./projects/CommercialProjectCard";

export function MoreCommercialWork() {
  const projects = getMoreCommercialProjects();

  if (projects.length === 0) return null;

  return (
    <section id="more-work" className="scroll-mt-20 border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="More Commercial Work"
          title="Additional client projects"
          description="Breadth of real commercial development — corporate portals, e-commerce, CMS platforms, and sites in active development."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <CommercialProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
