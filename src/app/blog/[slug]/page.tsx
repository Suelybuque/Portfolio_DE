import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { JsonLd, articleSchema } from "@/components/seo/json-ld";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import { renderMdx } from "@/lib/mdx";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const { frontmatter } = post;
  const url = `${siteConfig.url}/blog/${slug}`;

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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter, content } = post;
  const mdxContent = await renderMdx(content);
  const url = `${siteConfig.url}/blog/${slug}`;

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
      <article className="py-16 sm:py-20">
        <Container>
          <header className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              ← All articles
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <time dateTime={frontmatter.date}>
                {format(parseISO(frontmatter.date), "MMMM d, yyyy")}
              </time>
              {frontmatter.readingTime ? (
                <span>{frontmatter.readingTime}</span>
              ) : null}
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              {frontmatter.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {frontmatter.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {frontmatter.tags.map((tag) => (
                <Badge key={tag} variant="muted">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div className="mx-auto mt-12 max-w-3xl border-t border-border pt-10">
            {mdxContent}
          </div>
        </Container>
      </article>
    </>
  );
}
