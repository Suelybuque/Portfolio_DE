"use client";

import Image from "next/image";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

type GallerySectionProps = {
  images: string[];
  title: string;
};

export function GallerySection({ images, title }: GallerySectionProps) {
  if (!images.length) return null;

  return (
    <section className="border-y border-border bg-[var(--surface-elevated)] py-12 sm:py-16">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {images.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted"
              >
                <Image
                  src={src}
                  alt={`${title} infrastructure visual ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
