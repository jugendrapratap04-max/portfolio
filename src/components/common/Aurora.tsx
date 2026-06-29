"use client";

import { config } from "@/config/portfolio.config";

/**
 * Premium animated aurora gradient + grid texture for section backgrounds.
 * Respects the animations.enableFloatingShapes toggle.
 */
export function Aurora({ withGrid = true }: { withGrid?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {config.animations.enableFloatingShapes && <div className="aurora" />}
      {withGrid && <div className="absolute inset-0 bg-grid" />}
    </div>
  );
}
