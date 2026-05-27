# Etrolley — Premium Agency Website

A production-ready Next.js website for **Etrolley**, an advertising and merchandising agency. Built with the App Router, Tailwind CSS v4, and GSAP ScrollTrigger animations.

## Features

- **Hero** — Cinematic entrance animations and parallax typography
- **Our Creatives** — Horizontal scroll gallery (PS Studios–style pin + scrub)
- **What You Will Experience** — Stacked sticky cards with scroll reveals
- **Services We Provide** — Interactive tabbed service panel (Lunchbox–style)
- **Footer Parallax** — Reveal parallax footer (Lunchbox–style)
- Fully responsive: mobile, tablet, laptop, large desktop
- Semantic HTML and accessible navigation

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [GSAP 3](https://greensock.com/gsap/) + ScrollTrigger
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) by connecting this repository. No extra environment variables required.

## Project Structure

```
src/
├── app/              # Layout, globals, page
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Page sections
│   ├── ui/           # Button, SectionHeading
│   └── providers/    # GSAP ScrollTrigger setup
├── hooks/            # useGsapContext
└── lib/              # Data, GSAP helpers
```

## Customization

- **Content**: Edit `src/lib/data.ts`
- **Colors**: Update CSS variables in `src/app/globals.css`
- **Images**: Replace Unsplash URLs or add assets to `public/`

## Figma Design

Match spacing and assets from the [Etrolley Figma file](https://www.figma.com/design/WexLQwaKjrmjFlP3jb6HwI/Etrolley-Test) by updating tokens in `globals.css` and section components.
