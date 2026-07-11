import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ArchitectureDiagram } from "@/components/diagrams/architecture-diagrams";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { getAllProjects } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Deep-dive engineering case studies on Lakehouse architecture, streaming platforms, and cloud warehouse migrations.",
  alternates: { canonical: `${siteConfig.url}/projects` },
};

export default function ProjectsIndexPage() {
  const projects = getAllProjects();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          label="Portfolio"
          title="Architecture Case Studies"
          description="Production systems engineered for scale, reliability, and measurable business impact."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="aspect-[16/10] border-b border-border bg-[var(--surface)] p-4">
                <ArchitectureDiagram type={project.frontmatter.diagram} />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {project.frontmatter.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="muted">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-lg font-semibold tracking-tight text-foreground">
                  {project.frontmatter.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.frontmatter.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-foreground">
                  Explore Architecture
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
