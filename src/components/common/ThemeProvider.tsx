"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { config } from "@/config/portfolio.config";

type ThemeCtx = { dark: boolean; toggle: () => void };
const Ctx = createContext<ThemeCtx>({ dark: true, toggle: () => {} });
export const useTheme = () => useContext(Ctx);

/**
 * Injects the THEME block from the config into CSS variables at runtime and
 * manages light/dark mode. Re-theme the whole site from portfolio.config.ts.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(config.theme.defaultDark);

  useEffect(() => {
    const t = config.theme;
    const root = document.documentElement;
    const set = (k: string, v: string) => root.style.setProperty(k, v);
    set("--color-primary", t.primary);
    set("--color-secondary", t.secondary);
    set("--color-accent", t.accent);
    set("--radius-card", t.radiusCard);
    // var(--font-inter)/var(--font-jbmono) are the actual web fonts loaded by
    // next/font in layout.tsx. Listing the config name first lets you swap to
    // any system/installed font from the config without touching code.
    set("--font-sans", `"${t.fontSans}", var(--font-inter), system-ui, sans-serif`);
    set("--font-heading", `"${t.fontHeading}", var(--font-inter), system-ui, sans-serif`);
    set("--font-mono", `"${t.fontMono}", var(--font-jbmono), monospace`);
    if (dark) {
      set("--color-background", t.background);
      set("--color-surface", t.surface);
      set("--color-foreground", t.foreground);
      set("--color-muted", t.muted);
      set("--color-border", t.border);
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      // Light mode values MUST be set inline too, otherwise the dark inline
      // styles set above would override the CSS .light rule and the toggle
      // would appear to do nothing.
      set("--color-background", "#f6f7fb");
      set("--color-surface", "#ffffff");
      set("--color-foreground", "#0b1023");
      set("--color-muted", "#566077");
      set("--color-border", "rgba(0,0,0,0.10)");
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [dark]);

  return <Ctx.Provider value={{ dark, toggle: () => setDark((d) => !d) }}>{children}</Ctx.Provider>;
}
