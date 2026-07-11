"use client";

import Link from "next/link";
import { format, parseISO } from "date-fns";
import {
  Award,
  Cloud,
  Database,
  Snowflake,
} from "lucide-react";
import type { BlogFrontmatter, Certification } from "@/types";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

const certIcons = {
  aws: Cloud,
  databricks: Database,
  snowflake: Snowflake,
  gcp: Award,
} as const;

type InsightsSectionProps = {
  posts: BlogFrontmatter[];
  certifications: Certification[];
};

export function InsightsSection({
  posts,
  certifications,
}: InsightsSectionProps) {
  return (
    <section id="insights" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Features
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Technical Insights
              </h2>
              <ul className="mt-8 space-y-6">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <time
                        dateTime={post.date}
                        className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                      >
                        {format(parseISO(post.date), "MMM d, yyyy")}
                      </time>
                      <h3 className="mt-1 text-base font-semibold text-foreground transition-colors group-hover:underline sm:text-lg">
                        {post.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/blog"
                className="mt-8 inline-flex text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                View all articles →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Recognition
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Certifications
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {certifications.map((cert) => {
                  const Icon = certIcons[cert.icon];
                  return (
                    <article
                      key={cert.id}
                      className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-foreground/20"
                    >
                      <div className="mb-3 flex size-8 items-center justify-center rounded-md bg-muted">
                        <Icon className="size-4 text-foreground" aria-hidden />
                      </div>
                      <h3 className="text-sm font-semibold leading-snug text-foreground">
                        {cert.name}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {cert.issuer} · {cert.date}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
