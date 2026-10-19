import Image from "next/image";
import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="About" title="A little about me" />

        <div className="mt-10 grid items-start gap-8 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)]">
          <figure className="mx-auto w-full max-w-[260px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-surface">
              <Image
                src="/portrait.jpg"
                alt="Dinara Garipova"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 260px, 260px"
              />
            </div>
          </figure>

          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
