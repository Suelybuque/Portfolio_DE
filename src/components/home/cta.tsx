"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

export function CtaSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-foreground text-background">
      <Container className="py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to scale?
            </h2>
            <p className="mt-4 text-base text-background/70 sm:text-lg">
              Currently open to select consulting projects and full-time roles
              building data platforms at architectural scale.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="inverted" size="lg">
                <a href={`mailto:${siteConfig.links.email}`}>
                  {siteConfig.links.email}
                </a>
              </Button>
              <Button asChild variant="inverted-outline" size="lg">
                <Link href="#contact-form">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
