# Jugendra Pratap — Portfolio

A premium, production-ready personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and **Framer Motion**. Dark-mode-first, fully responsive, SEO-optimised, and driven entirely by **one configuration file** — you never edit component code to customise it.

![Tech](https://img.shields.io/badge/Next.js-14-black) ![TS](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/TailwindCSS-3-38bdf8)

---

## ✨ Features

- **One config to rule it all** — every section, color, link, skill and project lives in `src/config/portfolio.config.ts`.
- **Section toggles** — show/hide Hero, About, Skills, Projects, Experience, Education, Certifications, Achievements, GitHub, Blog, Contact with a single boolean.
- **Live GitHub integration** — repos, stars, followers, top languages, pinned projects and contribution graph, fetched server-side and cached.
- **Theme manager** — colors, fonts, radius, dark/light toggle, all from config.
- **Rich animations** — typing effect, magnetic buttons, 3D tilt cards, custom cursor, scroll progress, loading screen, parallax, floating gradient blobs (each individually toggleable).
- **Contact form** — validation + spam honeypot, EmailJS or `mailto` fallback.
- **SEO built-in** — metadata, Open Graph, Twitter cards, JSON-LD, sitemap, robots.
- **Accessible & fast** — semantic HTML, reduced-motion support, lazy images, font optimisation.
- **Future-ready** — Blog, Experience, Certifications and Achievements are wired up and waiting; just add data and flip a toggle.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

Then open **`src/config/portfolio.config.ts`** and make it yours.

---

## 📁 Project Structure

```
portfolio/
├── public/                      # your images: profile.jpg, resume.pdf, og-image.png
├── src/
│   ├── app/
│   │   ├── layout.tsx           # root layout, fonts, SEO metadata, JSON-LD
│   │   ├── page.tsx             # assembles the page from section toggles
│   │   ├── globals.css          # base styles + theme CSS variables
│   │   ├── sitemap.ts / robots.ts
│   │   └── icon.svg             # default gradient favicon
│   ├── config/
│   │   ├── portfolio.config.ts  # ⭐ THE ONLY FILE YOU EDIT
│   │   └── types.ts             # type definitions (autocomplete + safety)
│   ├── lib/
│   │   ├── github.ts            # GitHub API helper
│   │   └── icon.tsx             # render any lucide icon (or emoji) by name
│   └── components/
│       ├── common/              # reusable: cards, cursor, counters, etc.
│       ├── layout/              # Navbar, Footer
│       └── sections/            # Hero, About, Skills, Projects, ... Contact
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## 📚 Guides

- **[CONFIGURATION.md](./CONFIGURATION.md)** — every field in the config explained.
- **[CUSTOMIZATION.md](./CUSTOMIZATION.md)** — add a skill/project, re-theme, toggle sections, change fonts.
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** — ship to Vercel in minutes + GitHub/EmailJS/SEO setup.

---

## 🧰 Tech Stack

Next.js · React 18 · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons · React Hook Form · GitHub API · EmailJS · Vercel-ready.

---

## 📝 Notes on content

This portfolio ships with your **verified** details (name, degree, university, skills) and **clearly-marked placeholders** (e.g. `<your GitHub profile URL>`, sample projects) for anything not yet provided. Nothing — no internships, certifications, or achievements — has been invented. Replace placeholders as your career grows.

---

© Jugendra Pratap. Built with Next.js, TypeScript & Tailwind CSS.
