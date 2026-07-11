import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
  id?: string;
};

export function Container({
  children,
  className,
  as: Comp = "div",
  id,
}: ContainerProps) {
  return (
    <Comp
      id={id}
      className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)}
    >
      {children}
    </Comp>
  );
}
