"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { usePointerGlow } from "@/hooks/use-pointer-glow";
import { cn } from "@/lib/utils";

type ShimmerCardProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function ShimmerCard({ href, children, className }: ShimmerCardProps) {
  const { style, onPointerMove, onPointerLeave } = usePointerGlow();

  return (
    <Link
      href={href}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={style}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300",
        "hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_50px_-24px_rgba(6,182,212,0.45)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: "var(--glow-opacity, 0)",
          background:
            "radial-gradient(420px circle at var(--glow-x) var(--glow-y), rgba(6,182,212,0.16), transparent 55%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: "var(--glow-opacity, 0)",
          padding: 1,
          background:
            "radial-gradient(280px circle at var(--glow-x) var(--glow-y), rgba(6,182,212,0.7), transparent 50%)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
        }}
      />
      <div className="relative z-0 flex h-full flex-col">{children}</div>
    </Link>
  );
}
