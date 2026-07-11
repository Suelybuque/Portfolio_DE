import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { getAllProjects } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Deep-dive engineering case studies on Lakehouse architecture, streaming platforms, and cloud warehouse migrations.",
  alternates: { canonical: `${siteConfig.url}/projects` },
};

export default function ProjectsIndexPage() {
  const projects = getAllProjects().map((p) => p.frontmatter);

  return <ProjectsGrid projects={projects} />;
}
