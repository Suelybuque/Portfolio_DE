import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectHero } from "@/components/projects/project-hero";
import { ChallengeSection } from "@/components/projects/challenge-section";
import { TopologySection } from "@/components/projects/topology-section";
import { PipelineSection } from "@/components/projects/pipeline-section";
import { GallerySection } from "@/components/projects/gallery-section";
import { ResultsSection } from "@/components/projects/results-section";
import { ProjectCta } from "@/components/projects/project-cta";
import { Container } from "@/components/shared/container";
import { JsonLd, articleSchema } from "@/components/seo/json-ld";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { highlightCode, renderMdx } from "@/lib/mdx";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const { frontmatter } = project;
  const url = `${siteConfig.url}/projects/${slug}`;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
      url,
      publishedTime: frontmatter.date,
      tags: frontmatter.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
    },
    alternates: { canonical: url },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { frontmatter, content } = project;
  const allProjects = getAllProjects();
  const index = allProjects.findIndex((p) => p.slug === slug) + 1;

  const [mdxContent, highlightedCode] = await Promise.all([
    renderMdx(content),
    highlightCode(
      frontmatter.pipeline.code.content,
      frontmatter.pipeline.code.language
    ),
  ]);

  const url = `${siteConfig.url}/projects/${slug}`;

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: frontmatter.title,
          description: frontmatter.description,
          date: frontmatter.date,
          url,
          tags: frontmatter.tags,
        })}
      />
      <ProjectHero project={frontmatter} index={index} />
      <ChallengeSection challenge={frontmatter.challenge} />
      <TopologySection />
      <PipelineSection
        pipeline={frontmatter.pipeline}
        highlightedCode={highlightedCode}
      />
      <GallerySection
        images={frontmatter.gallery ?? []}
        title={frontmatter.title}
      />
      <ResultsSection results={frontmatter.results} />

      {content.trim() ? (
        <section className="border-t border-border py-16 sm:py-20">
          <Container>
            <article className="mx-auto max-w-3xl">{mdxContent}</article>
          </Container>
        </section>
      ) : null}

      <ProjectCta />

      <nav
        aria-label="Project pagination"
        className="border-t border-border py-8"
      >
        <Container className="flex flex-wrap items-center justify-between gap-4 text-sm">
          <Link
            href="/#projects"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            ← All case studies
          </Link>
          <div className="flex gap-4">
            {allProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className={
                  p.slug === slug
                    ? "font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }
                aria-current={p.slug === slug ? "page" : undefined}
              >
                {p.frontmatter.title.split(" ").slice(0, 2).join(" ")}
              </Link>
            ))}
          </div>
        </Container>
      </nav>
    </>
  );
}
