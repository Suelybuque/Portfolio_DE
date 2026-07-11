"use client";

import Image from "next/image";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-y border-border bg-[var(--surface-elevated)] py-20 sm:py-24">
      <Container>
        <Reveal>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Who I Am
          </p>
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Portrait of Alex Rivera, Senior Data Engineer"
                  width={640}
                  height={800}
                  className="h-full w-full object-cover grayscale"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority={false}
                />
              </div>
              <div className="absolute -bottom-4 -right-2 rounded-lg bg-foreground px-4 py-3 text-background shadow-lg sm:right-4">
                <p className="text-xs font-semibold uppercase tracking-wider">
                  8+ Years Experience
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Who I Am
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Building the foundation for intelligent systems.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                I design and operate data platforms where reliability is a
                product feature — not an afterthought. From petabyte Lakehouses
                to exactly-once streaming backbones, my work sits at the
                intersection of distributed systems, cloud infrastructure, and
                the teams that depend on trustworthy data every day.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-2xl font-bold tracking-tight text-foreground">
                    50+
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Pipelines Built
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold tracking-tight text-foreground">
                    AWS
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Certified Architect
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
