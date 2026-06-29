# Deployment Guide

## 1. Add your assets
Drop these into `/public`:
- `profile.jpg` — your photo
- `resume.pdf` — your CV (Hero "Resume" button)
- `og-image.png` — 1200×630 social-share image
- `favicon.ico` — optional (a gradient default is included)

## 2. Fill in the config
Replace every `<placeholder>` in `src/config/portfolio.config.ts`, especially:
- `github.username` (enables the live GitHub section)
- `socials[].url` for GitHub / LinkedIn
- `seo.siteUrl` (your real domain)

## 3. Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<you>/portfolio.git
git push -u origin main
```

## 4. Deploy to Vercel (recommended)
1. Go to https://vercel.com → **New Project** → import your repo.
2. Framework preset: **Next.js** (auto-detected). No build settings needed.
3. (Optional) add Environment Variables (see below).
4. **Deploy**. You get a live URL in ~1 minute.

To use a custom domain: Vercel → Project → Settings → Domains.

## 5. Environment variables (all optional)
Copy `.env.example` → `.env.local` (locally) or add these in Vercel:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO/sitemap |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Contact form (EmailJS) |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Contact form (EmailJS) |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Contact form (EmailJS) |
| `GITHUB_TOKEN` | Raises GitHub API limit (60→5000/hr). Optional. |

## 6. EmailJS setup (contact form)
1. Create a free account at https://www.emailjs.com/
2. Add an email **service** and a **template** with variables `name`, `email`, `subject`, `message`.
3. Copy the Service ID, Template ID and Public Key into env vars (or `contact` in the config).
4. If you skip this, the form falls back to opening the visitor's email app (`mailto`).

## 7. SEO checklist
- Set `seo.siteUrl` / `NEXT_PUBLIC_SITE_URL` to your domain.
- Add `og-image.png` (1200×630) to `/public`.
- `sitemap.xml` and `robots.txt` are generated automatically at `/sitemap.xml` and `/robots.txt`.
- Submit your site to [Google Search Console](https://search.google.com/search-console).

## 8. Build locally before shipping
```bash
npm run build   # production build
npm run start   # serve the production build
npm run typecheck   # optional: TS check
```
