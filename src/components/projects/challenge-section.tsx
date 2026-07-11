"use client";

import type { ProjectFrontmatter } from "@/types";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

type ChallengeSectionProps = {
  challenge: ProjectFrontmatter["challenge"];
};

export function ChallengeSection({ challenge }: ChallengeSectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-16">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              The Challenge
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {challenge.summary}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {challenge.cards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-xl border border-border bg-card p-5 shadow-sm"
                  >
                    <h3 className="font-semibold text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
