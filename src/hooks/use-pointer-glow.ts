"use client";

import {
  useCallback,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";

type PointerGlowState = {
  x: number;
  y: number;
  opacity: number;
};

const initial: PointerGlowState = { x: 50, y: 50, opacity: 0 };

export function usePointerGlow() {
  const ref = useRef<HTMLElement | null>(null);
  const [glow, setGlow] = useState<PointerGlowState>(initial);

  const onPointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setGlow({ x, y, opacity: 1 });
  }, []);

  const onPointerLeave = useCallback(() => {
    setGlow((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  const style = {
    "--glow-x": `${glow.x}%`,
    "--glow-y": `${glow.y}%`,
    "--glow-opacity": glow.opacity,
  } as CSSProperties;

  return {
    ref,
    style,
    onPointerMove,
    onPointerLeave,
    glow,
  };
}
