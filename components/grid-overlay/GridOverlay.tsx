"use client";

import { useEffect, useState } from "react";

export function GridOverlay() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!pos) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 opacity-70 motion-reduce:hidden"
      style={{
        background: `radial-gradient(circle 340px at ${pos.x}px ${pos.y}px, rgba(34, 211, 238, 0.09), rgba(217, 70, 239, 0.035) 42%, transparent 72%)`,
      }}
    />
  );
}
