"use client";

import { Cpu, Database, Radio, BarChart3, Brain } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

const nodes = [
  { id: "iot", label: "IoT Devices", icon: Radio, side: "left", top: "20%" },
  { id: "erp", label: "ERP Systems", icon: Database, side: "left", top: "65%" },
  { id: "bi", label: "BI Tools", icon: BarChart3, side: "right", top: "20%" },
  { id: "ml", label: "ML Models", icon: Brain, side: "right", top: "65%" },
] as const;

export function TopologySection() {
  return (
    <section className="border-y border-border bg-[var(--surface-elevated)] py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            High-Level Cloud Topology
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-[var(--surface)] p-6 sm:p-10">
            {/* Desktop topology */}
            <div className="relative mx-auto hidden h-[320px] max-w-3xl md:block">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 600 320"
                fill="none"
                aria-hidden
              >
                <path
                  d="M140 80 L300 160 M140 240 L300 160 M460 80 L300 160 M460 240 L300 160"
                  className="stroke-border"
                  strokeWidth="1.5"
                />
              </svg>

              {nodes.map((node) => {
                const Icon = node.icon;
                return (
                  <div
                    key={node.id}
                    className="absolute flex w-36 -translate-y-1/2 items-center gap-2 rounded-xl border border-border bg-card px-3 py-3 shadow-sm"
                    style={{
                      top: node.top,
                      left: node.side === "left" ? "0" : undefined,
                      right: node.side === "right" ? "0" : undefined,
                    }}
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <Icon className="size-4" aria-hidden />
                    </div>
                    <span className="text-xs font-medium text-foreground">
                      {node.label}
                    </span>
                  </div>
                );
              })}

              <div className="absolute left-1/2 top-1/2 flex w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
                <div className="flex size-20 items-center justify-center rounded-full bg-foreground text-background shadow-lg">
                  <Cpu className="size-8" aria-hidden />
                </div>
                <p className="text-center text-xs font-semibold text-foreground">
                  Spark Core
                  <span className="block font-normal text-muted-foreground">
                    (Execution Engine)
                  </span>
                </p>
              </div>
            </div>

            {/* Mobile topology */}
            <div className="flex flex-col items-center gap-4 md:hidden">
              <div className="grid w-full grid-cols-2 gap-3">
                {nodes.slice(0, 2).map((node) => {
                  const Icon = node.icon;
                  return (
                    <div
                      key={node.id}
                      className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-3"
                    >
                      <Icon className="size-4 shrink-0" aria-hidden />
                      <span className="text-xs font-medium">{node.label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col items-center gap-2 py-2">
                <div className="flex size-16 items-center justify-center rounded-full bg-foreground text-background">
                  <Cpu className="size-7" aria-hidden />
                </div>
                <p className="text-center text-xs font-semibold">
                  Spark Core (Execution Engine)
                </p>
              </div>
              <div className="grid w-full grid-cols-2 gap-3">
                {nodes.slice(2).map((node) => {
                  const Icon = node.icon;
                  return (
                    <div
                      key={node.id}
                      className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-3"
                    >
                      <Icon className="size-4 shrink-0" aria-hidden />
                      <span className="text-xs font-medium">{node.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
