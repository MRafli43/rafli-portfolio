# Portofolio

Live demo:  
mraflisampurna.vercel.app/

Personal portfolio website showcasing projects, experience, and background in data science and machine learning. Built with Astro for fast performance and clean content-driven architecture.

---

## Features

- Multi-page portfolio (Home, Projects, Experience, About)
- Project showcase with detailed case-study pages
- Markdown-based content for easy project documentation
- Reusable UI components (ProjectCard, layout sections)
- Responsive design for desktop and mobile
- Optimized static site generation using Astro

---

## Tech Stack

- **Framework:** Astro
- **Language:** JavaScript / TypeScript
- **Styling:** CSS (Astro scoped styles)
- **Content:** Markdown (`.md`)
- **Deployment:** Vercel

---

## Project Structure

```txt
.
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   ├── components/         # Reusable Astro components
│   │   └── ProjectCard.astro
│   ├── layouts/            # Page layouts
│   ├── pages/              # Route-based pages
│   │   ├── index.astro     # Home page
│   │   ├── about.astro
│   │   ├── experience.astro
│   │   ├── projects/
│   │   │   ├── [slug].astro
│   │   │   ├── batik-classification.astro
│   │   │   ├── rfm-segmentation.astro
│   │   │   └── lstm-sentiment.astro
│   └── content/            # Markdown project content
│       ├── batik-classification.md
│       ├── rfm-segmentation.md
│       └── lstm-sentiment.md
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
