"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ProjectFrontmatter } from "@/types";
import { AmbientGlow } from "@/components/shared/ambient-glow";
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
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-console py-16 text-console-foreground sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint-console opacity-[0.04]"
      />
      <AmbientGlow className="right-0 top-10 size-[460px]" color="brand" />
      <AmbientGlow
        className="-left-32 bottom-0 size-[360px] opacity-35"
        color="indigo"
      />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand">
                Medallion Flow
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-console-foreground sm:text-3xl">
                The Multi-Hop Pipeline
              </h2>
              <p className="mt-4 text-base leading-relaxed text-console-muted">
                {pipeline.summary}
              </p>
              <ol className="relative mt-10 space-y-0">
                <div
                  aria-hidden
                  className="absolute bottom-3 left-[15px] top-3 w-px bg-gradient-to-b from-brand via-brand/40 to-transparent"
                />
                {pipeline.steps.map((step, index) => (
                  <motion.li
                    key={step.number}
                    initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      delay: index * 0.12,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative flex gap-4 pb-8 last:pb-0"
                  >
                    <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-md bg-brand text-sm font-bold text-brand-foreground shadow-[0_0_20px_-4px_rgba(6,182,212,0.8)]">
                      {step.number}
                    </span>
                    <div className="rounded-xl border border-console-border bg-white/[0.03] px-4 py-3 backdrop-blur-sm transition-colors hover:border-brand/40">
                      <h3 className="font-semibold text-console-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-console-muted">
                        {step.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <div className="relative">
                <AmbientGlow
                  className="left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 opacity-40"
                  color="brand"
                />
                <CodeBlock
                  code={pipeline.code.content}
                  language={pipeline.code.language}
                  filename={pipeline.code.filename}
                  highlightedHtml={highlightedCode}
                  className="relative border-console-border shadow-[0_0_60px_-20px_rgba(6,182,212,0.35)]"
                />
              </div>
              <blockquote className="rounded-xl border border-brand/20 bg-brand/5 p-5 text-sm leading-relaxed text-console-muted">
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-brand">
                  Engineering note
                </span>
                &ldquo;{pipeline.callout}&rdquo;
              </blockquote>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
