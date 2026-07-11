"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Cpu, Database, Radio, BarChart3, Brain } from "lucide-react";
import { AmbientGlow } from "@/components/shared/ambient-glow";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

type TopologyNode = {
  id: string;
  label: string;
  icon: typeof Radio;
  side: "left" | "right";
  top: string;
  detail: string;
  specs: string[];
};

const nodes: TopologyNode[] = [
  {
    id: "iot",
    label: "IoT Devices",
    icon: Radio,
    side: "left",
    top: "18%",
    detail: "Edge telemetry ingest",
    specs: ["MQTT + Kinesis", "120k msgs/sec peak", "Partition by device_id"],
  },
  {
    id: "erp",
    label: "ERP Systems",
    icon: Database,
    side: "left",
    top: "68%",
    detail: "CDC change streams",
    specs: ["Debezium → Kafka", "Exactly-once offsets", "Schema Registry"],
  },
  {
    id: "bi",
    label: "BI Tools",
    icon: BarChart3,
    side: "right",
    top: "18%",
    detail: "Gold layer consumers",
    specs: ["Looker / Tableau", "p95 < 5s dashboards", "Row-level security"],
  },
  {
    id: "ml",
    label: "ML Models",
    icon: Brain,
    side: "right",
    top: "68%",
    detail: "Feature store reads",
    specs: ["Online + offline FS", "Sub-minute freshness", "Point-in-time joins"],
  },
];

const coreSpecs = [
  "EMR on EKS · Spark 3.5",
  "512 vCPU pool · autoscaled",
  "AQE + Z-ORDER enabled",
  "Driver 16GB · Executor 8GB×64",
];

const flowPaths = [
  "M140 70 L280 150",
  "M140 250 L280 170",
  "M460 70 L320 150",
  "M460 250 L320 170",
];

export function TopologySection() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);
  const activeNode =
    active === "core"
      ? {
          label: "Spark Core",
          detail: "Central execution engine",
          specs: coreSpecs,
        }
      : nodes.find((n) => n.id === active) ?? null;

  return (
    <section className="relative overflow-hidden border-y border-console-border bg-console py-16 text-console-foreground sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint-console opacity-[0.045]"
      />
      <AmbientGlow className="-left-24 top-1/4 size-[420px]" color="brand" />
      <AmbientGlow
        className="-right-20 bottom-0 size-[380px] opacity-40"
        color="indigo"
      />

      <Container className="relative">
        <Reveal>
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand">
              System Blueprint
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-console-foreground sm:text-3xl">
              High-Level Cloud Topology
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-console-muted sm:text-base">
              Hover a node to inspect runtime contracts, throughput envelopes,
              and cluster configuration.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative overflow-hidden rounded-2xl border border-console-border bg-white/[0.02] p-6 backdrop-blur-sm sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-blueprint-console opacity-[0.06]"
            />

            {/* Desktop topology */}
            <div className="relative mx-auto hidden h-[340px] max-w-3xl md:block">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 600 320"
                fill="none"
                aria-hidden
              >
                {flowPaths.map((d, i) => (
                  <motion.path
                    key={d}
                    d={d}
                    stroke="currentColor"
                    className="text-brand/40"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                    initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.1,
                      delay: 0.15 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                ))}
              </svg>

              {nodes.map((node, index) => {
                const Icon = node.icon;
                const isActive = active === node.id;
                return (
                  <motion.button
                    key={node.id}
                    type="button"
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.08, duration: 0.45 }}
                    onMouseEnter={() => setActive(node.id)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(node.id)}
                    onBlur={() => setActive(null)}
                    className={cn(
                      "absolute flex w-40 -translate-y-1/2 items-center gap-2 rounded-xl border px-3 py-3 text-left transition-all duration-300",
                      "bg-console/80 backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
                      isActive
                        ? "border-brand/60 shadow-[0_0_30px_-8px_rgba(6,182,212,0.65)]"
                        : "border-console-border hover:border-brand/40"
                    )}
                    style={{
                      top: node.top,
                      left: node.side === "left" ? "0" : undefined,
                      right: node.side === "right" ? "0" : undefined,
                    }}
                  >
                    <div
                      className={cn(
                        "flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors",
                        isActive ? "bg-brand/20 text-brand" : "bg-white/5 text-console-muted"
                      )}
                    >
                      <Icon className="size-4" aria-hidden />
                    </div>
                    <span className="text-xs font-medium text-console-foreground">
                      {node.label}
                    </span>
                  </motion.button>
                );
              })}

              <motion.button
                type="button"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5 }}
                onMouseEnter={() => setActive("core")}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive("core")}
                onBlur={() => setActive(null)}
                className={cn(
                  "absolute left-1/2 top-1/2 flex w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-2xl p-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
                  active === "core" && "scale-[1.03]"
                )}
              >
                <div
                  className={cn(
                    "relative flex size-20 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-[0_0_40px_-6px_rgba(6,182,212,0.8)] transition-shadow",
                    active === "core" && "shadow-[0_0_55px_-4px_rgba(6,182,212,1)]"
                  )}
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 animate-pulse rounded-full bg-brand/30 blur-md"
                  />
                  <Cpu className="relative size-8" aria-hidden />
                </div>
                <p className="text-center text-xs font-semibold text-console-foreground">
                  Spark Core
                  <span className="block font-normal text-console-muted">
                    (Execution Engine)
                  </span>
                </p>
              </motion.button>

              <AnimatePresence>
                {activeNode ? (
                  <motion.div
                    key={activeNode.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                    className="pointer-events-none absolute bottom-0 left-1/2 z-20 w-[min(100%,320px)] -translate-x-1/2 rounded-xl border border-brand/30 bg-console/95 p-4 shadow-2xl backdrop-blur-md"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                      {activeNode.label}
                    </p>
                    <p className="mt-1 text-sm text-console-muted">
                      {activeNode.detail}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {activeNode.specs.map((spec) => (
                        <li
                          key={spec}
                          className="flex items-center gap-2 font-mono text-[11px] text-console-foreground/90"
                        >
                          <span className="size-1 shrink-0 rounded-full bg-brand" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {/* Mobile topology — same nodes, stacked */}
            <div className="flex flex-col gap-3 md:hidden">
              <button
                type="button"
                onClick={() =>
                  setActive((v) => (v === "core" ? null : "core"))
                }
                className="flex flex-col items-center gap-2 rounded-xl border border-brand/40 bg-brand/10 px-4 py-5"
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-[0_0_30px_-4px_rgba(6,182,212,0.7)]">
                  <Cpu className="size-6" aria-hidden />
                </div>
                <p className="text-center text-xs font-semibold">
                  Spark Core (Execution Engine)
                </p>
              </button>
              <div className="grid grid-cols-2 gap-3">
                {nodes.map((node) => {
                  const Icon = node.icon;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() =>
                        setActive((v) => (v === node.id ? null : node.id))
                      }
                      className={cn(
                        "flex items-center gap-2 rounded-xl border px-3 py-3 text-left",
                        active === node.id
                          ? "border-brand/50 bg-brand/10"
                          : "border-console-border bg-white/[0.03]"
                      )}
                    >
                      <Icon className="size-4 shrink-0 text-brand" aria-hidden />
                      <span className="text-xs font-medium">{node.label}</span>
                    </button>
                  );
                })}
              </div>
              {activeNode ? (
                <div className="rounded-xl border border-brand/30 bg-white/[0.04] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {activeNode.label}
                  </p>
                  <p className="mt-1 text-sm text-console-muted">
                    {activeNode.detail}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {activeNode.specs.map((spec) => (
                      <li
                        key={spec}
                        className="font-mono text-[11px] text-console-foreground/90"
                      >
                        · {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
