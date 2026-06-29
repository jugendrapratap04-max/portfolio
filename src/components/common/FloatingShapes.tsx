"use client";

import { config } from "@/config/portfolio.config";

/** Decorative animated gradient blobs for section/hero backgrounds. */
export function FloatingShapes() {
  if (!config.animations.enableFloatingShapes) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="blob left-[-10%] top-[-10%] h-72 w-72 animate-float bg-primary" />
      <div className="blob right-[-8%] top-[20%] h-80 w-80 animate-float bg-secondary" style={{ animationDelay: "1.5s" }} />
      <div className="blob bottom-[-10%] left-[30%] h-64 w-64 animate-float bg-accent" style={{ animationDelay: "3s" }} />
    </div>
  );
}
