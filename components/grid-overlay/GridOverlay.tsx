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
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "30px 30px",
        maskImage: `radial-gradient(circle 290px at ${pos.x}px ${pos.y}px, black 0%, transparent 100%)`,
        WebkitMaskImage: `radial-gradient(circle 290px at ${pos.x}px ${pos.y}px, black 0%, transparent 100%)`,
      }}
    />
  );
}
