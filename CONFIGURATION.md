# Configuration Guide

Everything on the site is read from **`src/config/portfolio.config.ts`**. This guide explains each block. Types live in `src/config/types.ts` — you get full autocomplete while editing.

> Tip: To **hide** an item without deleting it, set `hidden: true`. To hide a whole section, flip its toggle in `sections`.

## personal
Your identity and hero content.

| Field | What it does |
|---|---|
| `name`, `firstName` | Display name + short name used in nav/logo |
| `headline` | One-line role under your name |
| `typingRoles` | Strings cycled by the typing animation in the hero |
| `tagline`, `bio` | Hero subtitle + About paragraph |
| `email`, `phone`, `location` | Contact details (phone optional — leave `""` to hide) |
| `resumeUrl` | Path/URL to your CV (put `resume.pdf` in `/public`) |
| `profileImage` | Your photo (`/profile.jpg`); falls back to your initial if missing |
| `availableForWork` | Shows the green "available" pill in the hero |

## socials
Array of `{ icon, label, url, enabled }`. `icon` is any [lucide-react](https://lucide.dev/icons) name. Set `enabled: false` to hide. Links still containing `<...>` placeholders are auto-skipped.

## navigation
Nav menu items. A link automatically disappears if its target section is toggled off.

## sections
Master on/off switches for every section. Example: `experience: false` removes Experience from the page **and** the nav.

## skills & skillCategories
`skillCategories` defines the filter tabs. Each skill: `{ name, icon, category, level, proficiency (0–100), description }`. Reorder the array to reorder the grid; set `hidden: true` to hide one.

## projects
Each project supports image, title, subtitle, description, problem, solution, features, techStack, github, demo, status, difficulty, type, futurePlans, `featured` and `hidden`. Cards open a detail modal. Add unlimited projects by copying a block.

## experience / education / certifications / achievements
Timelines and cards. `experience`, `certifications` and `achievements` ship **empty** (and their sections are off) so nothing fake is shown — add real items, then flip the matching `sections` toggle. Empty sections auto-hide even if toggled on.

## blog
Future-ready. Add posts `{ title, excerpt, date, category, url, readTime }` and set `sections.blog: true`. Includes search + category filter.

## github
`username` enables the live section. `pinnedRepos` (array of repo names) overrides the auto "top by stars" selection. Toggle stats / pinned / languages / contribution graph individually.

## contact
`formEnabled`, EmailJS keys (or use env vars), `fallbackToMailto`, and `successMessage`. See DEPLOYMENT.md for EmailJS setup.

## theme
Colors (`background`, `surface`, `foreground`, `muted`, `primary`, `secondary`, `accent`, `border`), `radiusCard`, fonts, `defaultDark`, `enableThemeToggle`. Changing these re-themes the entire site.

## animations
Toggle: `enableLoadingScreen`, `enableCustomCursor`, `enableScrollProgress`, `enableParallax`, `enableTypingAnimation`, `enableFloatingShapes`.

## seo
`title`, `description`, `keywords`, `author`, `siteUrl`, `ogImage`, `twitterHandle`, `favicon`, `robots`. Used for metadata, Open Graph, Twitter cards, JSON-LD, sitemap and robots.

## footer
`note` text and `showBackToTop`.
