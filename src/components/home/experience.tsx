"use client";

import type { ExperienceItem } from "@/types";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

type ExperienceSectionProps = {
  items: ExperienceItem[];
};

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading label="My Journey" title="Professional Trajectory" />
        </Reveal>

        <ol className="relative space-y-0">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05} as="li">
              <div className="grid gap-4 border-l border-border py-8 pl-8 md:grid-cols-[140px_1fr] md:gap-10 md:border-l-0 md:pl-0">
                <div className="relative md:pt-1">
                  <span
                    className="absolute -left-[2.15rem] top-2 size-2.5 rounded-full bg-foreground md:hidden"
                    aria-hidden
                  />
                  <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    {item.start} — {item.end}
                  </p>
                </div>
                <div className="relative border-l border-border pl-8 md:border-l md:pl-10">
                  <span
                    className="absolute -left-[5px] top-2 hidden size-2.5 rounded-full bg-foreground md:block"
                    aria-hidden
                  />
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.company} | {item.location}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
