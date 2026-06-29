"use client";

import type { ComponentType } from "react";
import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";

/**
 * Renders a lucide icon by string name. If the name isn't a lucide icon it is
 * treated as plain text/emoji (so you can use "🚀" in the config too).
 */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = (Icons as unknown as Record<string, ComponentType<LucideProps>>)[name];
  if (Cmp) return <Cmp {...props} />;
  return <span style={{ fontSize: props.size ?? 20, lineHeight: 1 }}>{name}</span>;
}
