"use client";

import type { ProjectFrontmatter } from "@/types";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { CodeBlock } from "@/components/mdx/code-block";

type PipelineSectionProps = {
  pipeline: ProjectFrontmatter["pipeline"];
  highlightedCode?: string;
};

export function PipelineSection({
  pipeline,
  highlightedCode,
}: PipelineSectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                The Multi-Hop Pipeline
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {pipeline.summary}
              </p>
              <ol className="mt-8 space-y-6">
                {pipeline.steps.map((step) => (
                  <li key={step.number} className="flex gap-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-foreground text-sm font-bold text-background">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <CodeBlock
                code={pipeline.code.content}
                language={pipeline.code.language}
                filename={pipeline.code.filename}
                highlightedHtml={highlightedCode}
              />
              <blockquote className="rounded-xl border border-border bg-muted/60 p-5 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{pipeline.callout}&rdquo;
              </blockquote>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
