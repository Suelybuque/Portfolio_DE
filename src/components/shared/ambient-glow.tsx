import { cn } from "@/lib/utils";

type AmbientGlowProps = {
  className?: string;
  color?: "brand" | "indigo" | "slate";
};

const colorMap = {
  brand: "bg-brand/30",
  indigo: "bg-indigo-500/25",
  slate: "bg-slate-400/20",
} as const;

export function AmbientGlow({
  className,
  color = "brand",
}: AmbientGlowProps) {
  return (
    <div
      aria-hidden
      className={cn("ambient-glow", colorMap[color], className)}
    />
  );
}
