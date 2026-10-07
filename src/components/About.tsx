import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="Professional background"
          description="Commercial Frontend Developer specializing in React, Next.js and TypeScript — with production SaaS and e-commerce experience."
        />

        <div className="mt-10 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
