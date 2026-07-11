# DataEngine Portfolio

A production-ready personal portfolio for a Senior Data Engineer. Premium light/minimalist design with dark mode, MDX-driven case studies and blog posts, and a focus on performance, accessibility, and SEO.

**Live stack:** Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion · MDX · Shiki

---

## Features

- **Design system** — High-contrast black/white aesthetic with sticky navigation, active section highlighting, and a persisting light/dark theme
- **Homepage** — Hero, featured case studies, about, experience timeline, technical stack, insights + certifications, CTA, and contact form
- **Case studies** — Deep-dive project pages covering challenge, cloud topology, multi-hop pipeline, code samples, results, and lessons learned
- **MDX content** — Projects and blog posts live in `content/`; add new work without changing application code
- **Syntax highlighting** — Shiki + rehype-pretty-code for SQL, Python, Bash, YAML, and more
- **Contact form** — React Hook Form + Zod validation with an abstracted API route ready for Resend or Formspree
- **SEO & discovery** — Dynamic metadata, Open Graph images, sitemap, robots.txt, web manifest, and JSON-LD schema
- **Accessibility** — Semantic HTML, skip link, keyboard focus states, WCAG-minded contrast, and reduced-motion support

---

## Getting started

**Requirements:** Node.js 20+

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Dev server (Turbopack)     |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint                 |

---

## Project structure

```
├── content/
│   ├── blog/              # Technical articles (MDX)
│   └── projects/          # Architecture case studies (MDX)
├── public/                # Static assets (e.g. resume.pdf)
├── src/
│   ├── app/               # App Router pages, API, SEO routes
│   ├── components/
│   │   ├── diagrams/      # SVG architecture illustrations
│   │   ├── home/          # Homepage sections
│   │   ├── layout/        # Header, footer, theme
│   │   ├── mdx/           # MDX components & code blocks
│   │   ├── projects/      # Case study sections
│   │   ├── seo/           # JSON-LD helpers
│   │   ├── shared/        # Container, reveal, headings
│   │   └── ui/            # shadcn/ui primitives
│   ├── lib/               # Content loaders, site config, contact
│   └── types/             # Shared TypeScript types
└── package.json
```

### Key routes

| Route                    | Description              |
| ------------------------ | ------------------------ |
| `/`                      | Homepage                 |
| `/projects`              | All case studies         |
| `/projects/[slug]`       | Individual case study    |
| `/blog`                  | All articles             |
| `/blog/[slug]`           | Individual article       |
| `/api/contact`           | Contact form submission  |
| `/sitemap.xml`           | Generated sitemap        |
| `/robots.txt`            | Crawler rules            |

---

## Content

### Blog posts

Create a file in `content/blog/`:

```mdx
---
title: "Optimizing Spark Shuffle Performance at Scale"
slug: "spark-shuffle-performance"
description: "Practical techniques for diagnosing Spark shuffle bottlenecks."
excerpt: "How we cut a 4-hour Spark job to 38 minutes."
date: "2024-09-14"
tags:
  - "Spark"
  - "Performance"
---

Your article body in Markdown / MDX…
```

### Case studies

Create a file in `content/projects/`. Frontmatter drives the structured UI (metrics, challenge cards, pipeline steps, results). The MDX body renders as additional narrative below.

Required fields include `title`, `slug`, `description`, `excerpt`, `date`, `technologies`, `tags`, `featured`, `order`, `diagram` (`data-lake` | `streaming` | `warehouse`), `metrics`, `challenge`, `pipeline`, and `results`.

See `content/projects/petabyte-data-lake.mdx` for a complete example.

### Site identity

Edit `src/lib/site.ts` for name, author, nav links, social URLs, and resume path.

Experience, skills, and certifications live in `src/lib/data.ts`.

---

## Environment

| Variable                 | Description                                      |
| ------------------------ | ------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`   | Canonical site URL (used for SEO & sitemap)      |

Example `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Contact form

The UI posts to `/api/contact` via `src/lib/contact.ts`. Validation lives in `src/lib/validations/contact.ts`.

To wire a real provider, update only `src/app/api/contact/route.ts` — the form component stays unchanged. A Resend example is commented in that file.

---

## Customization checklist

1. Update author details and links in `src/lib/site.ts`
2. Replace experience / skills / certifications in `src/lib/data.ts`
3. Swap MDX case studies and blog posts under `content/`
4. Add `public/resume.pdf` for the Resume download button
5. Set `NEXT_PUBLIC_SITE_URL` before deploying
6. Connect the contact API to your email provider

---

## Deploy on Vercel

1. Push the repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain
4. Deploy

The app is statically optimized where possible; contact submissions remain on-demand via the API route.

---


