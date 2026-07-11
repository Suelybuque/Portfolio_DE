"use client";

import { ArrowUpRight } from "lucide-react";
import type { ProjectFrontmatter } from "@/types";
import { ArchitectureDiagram } from "@/components/diagrams/architecture-diagrams";
import { Badge } from "@/components/ui/badge";
import { AmbientGlow } from "@/components/shared/ambient-glow";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ShimmerCard } from "@/components/shared/shimmer-card";

type ProjectsGridProps = {
  projects: ProjectFrontmatter[];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.035]"
      />
      <AmbientGlow className="-right-16 top-10 size-[400px] opacity-30" />

      <Container className="relative">
        <SectionHeading
          label="Portfolio"
          title="Architecture Case Studies"
          description="Production systems engineered for scale, reliability, and measurable business impact."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ShimmerCard key={project.slug} href={`/projects/${project.slug}`}>
              <div className="relative aspect-[16/10] border-b border-border bg-surface p-4">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-blueprint-fine opacity-[0.06]"
                />
                <ArchitectureDiagram
                  type={project.diagram}
                  className="relative"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="muted">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-lg font-semibold tracking-tight text-foreground">
                  {project.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors group-hover:text-brand">
                  Explore Architecture
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </ShimmerCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
