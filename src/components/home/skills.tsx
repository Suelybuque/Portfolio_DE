"use client";

import { Code2, Database, Cloud, Layers } from "lucide-react";
import type { SkillCategory } from "@/types";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const icons = {
  code: Code2,
  database: Database,
  cloud: Cloud,
  layers: Layers,
} as const;

type SkillsSectionProps = {
  categories: SkillCategory[];
};

export function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <section id="stack" className="scroll-mt-20 border-y border-border bg-[var(--surface-elevated)] py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading label="Capabilities" title="Technical Stack" />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = icons[category.icon];
            return (
              <Reveal key={category.id} delay={index * 0.06}>
                <article className="h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/20">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-muted">
                    <Icon className="size-5 text-foreground" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-muted-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
