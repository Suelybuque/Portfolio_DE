"use client";

import { CheckCircle2, Lightbulb } from "lucide-react";
import type { ProjectFrontmatter } from "@/types";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

type ResultsSectionProps = {
  results: ProjectFrontmatter["results"];
};

export function ResultsSection({ results }: ResultsSectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Results & Lessons Learned
          </h2>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <div>
              <h3 className="mb-5 text-lg font-semibold text-foreground">
                Infrastructure Success
              </h3>
              <ul className="space-y-4">
                {results.successes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-emerald-600 dark:text-emerald-400"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <h3 className="mb-5 text-lg font-semibold text-foreground">
                Engineering Insights
              </h3>
              <ul className="space-y-4">
                {results.insights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Lightbulb
                      className="mt-0.5 size-5 shrink-0 text-amber-500"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
