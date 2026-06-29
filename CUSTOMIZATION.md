# Customization Guide

You never edit component code. Everything below is done in `src/config/portfolio.config.ts`.

## Add a skill
```ts
// inside skills: [ ... ]
{ name: "TensorFlow", icon: "Brain", category: "Machine Learning",
  level: "Beginner", proficiency: 35, description: "Building neural nets." },
```
`icon` is any name from https://lucide.dev/icons — or just use an emoji string like `"🔥"`.

## Add a project
```ts
// inside projects: [ ... ]
{
  id: "house-price-predictor",
  title: "House Price Predictor",
  subtitle: "Regression model",
  description: "Predicts prices from housing features.",
  problem: "Estimating fair market value.",
  solution: "Trained a gradient-boosting model on cleaned data.",
  features: ["EDA", "Feature engineering", "Model comparison"],
  techStack: ["Python", "scikit-learn", "Pandas"],
  github: "https://github.com/you/house-price-predictor",
  demo: "",                 // leave empty to hide the Live Demo button
  status: "Completed",      // Completed | In Progress | Planned | Archived
  difficulty: "Intermediate",
  type: "Machine Learning",
  featured: true,
}
```

## Reorder anything
Just reorder items in the array — skills, projects, education, etc.

## Hide vs delete
- Hide one item: add `hidden: true`.
- Hide a whole section: set it to `false` in `sections`.

## Re-theme the site
Edit the `theme` block. For example, a green/emerald brand:
```ts
theme: { ...,
  primary: "#10b981",
  secondary: "#14b8a6",
  accent: "#34d399",
}
```

## Change fonts
Set `theme.fontSans` / `fontHeading` / `fontMono`. The project loads **Inter** and **JetBrains Mono** via `next/font` in `src/app/layout.tsx`. To use a different Google font, import it there too:
```ts
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400","600","700"], variable: "--font-inter" });
```
(Reuse the `--font-inter` variable name and the config will pick it up.)

## Light/Dark
`theme.defaultDark` sets the starting mode; `theme.enableThemeToggle` shows/hides the toggle button.

## Turn on the Blog / Experience / Certifications / Achievements
Add real data to the matching array, then set the section to `true` in `sections`.
