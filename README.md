# DataEngine Portfolio

Production-ready personal portfolio for a Senior Data Engineer — built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and MDX.

## Features

- Premium light/minimalist design with persisting light/dark mode
- Homepage sections: hero, case studies, about, experience, stack, insights, certifications, CTA, contact
- Deep-dive project case studies (challenge, topology, pipeline, results)
- MDX-powered projects and blog posts with Shiki syntax highlighting
- Contact form with React Hook Form + Zod (API stub ready for Resend/Formspree)
- SEO: metadata, Open Graph, sitemap, robots.txt, JSON-LD schema
- Accessibility: semantic HTML, skip link, focus states, reduced-motion support

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Turbopack dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Content

Add case studies and articles without touching application code:

- `content/projects/*.mdx` — engineering case studies (frontmatter drives metrics, pipeline, results)
- `content/blog/*.mdx` — technical insights

## Deploy

Ready for Vercel. Set `NEXT_PUBLIC_SITE_URL` to your production URL.

Optional: drop a PDF at `public/resume.pdf` for the Resume download button.
