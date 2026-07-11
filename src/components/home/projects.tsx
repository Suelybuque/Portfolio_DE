"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProjectFrontmatter } from "@/types";
import { ArchitectureDiagram } from "@/components/diagrams/architecture-diagrams";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

type ProjectsSectionProps = {
  projects: ProjectFrontmatter[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading label="Case Studies" title="Selected Architecture" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="aspect-[16/10] border-b border-border bg-[var(--surface)] p-4">
                  <ArchitectureDiagram type={project.diagram} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="muted">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-foreground">
                    Explore Architecture
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
