"use client";

import Link from "next/link";
import type { ProjectFrontmatter } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

type ProjectHeroProps = {
  project: ProjectFrontmatter;
  index: number;
};

export function ProjectHero({ project, index }: ProjectHeroProps) {
  const caseNumber = String(index).padStart(2, "0");

  return (
    <section className="border-b border-border py-16 sm:py-20">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Case Study // {caseNumber}
          </p>
        </Reveal>

        <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1fr_280px]">
          <Reveal delay={0.05}>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                {project.title}
              </h1>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="muted" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {project.description}
              </p>
              {(project.github || project.demo) && (
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  {project.github ? (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-foreground underline-offset-4 hover:underline"
                    >
                      GitHub Repository →
                    </Link>
                  ) : null}
                  {project.demo ? (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-foreground underline-offset-4 hover:underline"
                    >
                      Live Demo →
                    </Link>
                  ) : null}
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="rounded-2xl bg-navy p-6 text-navy-foreground shadow-xl">
              <p className="text-xs font-medium uppercase tracking-wider text-navy-foreground/70">
                The High Stakes Metrics
              </p>
              <dl className="mt-6 space-y-6">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt className="sr-only">{metric.label}</dt>
                    <dd>
                      <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-sm text-navy-foreground/70">
                        {metric.label}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
