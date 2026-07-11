import type { Metadata } from "next";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technical Insights",
  description:
    "Engineering notes on Spark performance, Delta Lake compaction, Kafka exactly-once semantics, and data platform reliability.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          label="Writing"
          title="Technical Insights"
          description="Practical notes from building and operating data platforms at scale."
        />

        <ul className="divide-y divide-border border-y border-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-3 py-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex-row sm:items-start sm:justify-between sm:gap-10"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <time dateTime={post.frontmatter.date}>
                      {format(parseISO(post.frontmatter.date), "MMM d, yyyy")}
                    </time>
                    {post.frontmatter.readingTime ? (
                      <span>{post.frontmatter.readingTime}</span>
                    ) : null}
                  </div>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:underline sm:text-2xl">
                    {post.frontmatter.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {post.frontmatter.excerpt}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {post.frontmatter.tags.map((tag) => (
                      <Badge key={tag} variant="muted">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <span className="shrink-0 text-sm font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100 sm:pt-8">
                  Read →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
