import type { Config } from "tailwindcss";

/**
 * Tailwind is driven by CSS variables that are defined in globals.css and
 * fed from src/config/portfolio.config.ts (the THEME block). This means you
 * can re-theme the whole site from the config without touching this file.
 */
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        card: "var(--radius-card)",
      },
      boxShadow: {
        glow: "0 0 40px -10px var(--color-primary)",
        soft: "0 8px 30px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
        "brand-radial":
          "radial-gradient(circle at 50% 0%, var(--color-primary), transparent 60%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 1.8s infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
