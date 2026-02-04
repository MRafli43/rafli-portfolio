# Portofolio

Live demo:  
[Porto Rafli](https://mraflisampurna.vercel.app/)

A personal portfolio website built to showcase my projects, experience, and background in data science and machine learning. The site is developed using Astro for performance-focused static rendering and deployed on Vercel

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
- **Deployment:** Vercel

---

## Project Structure

```txt
rafli-portfolio/
├── public/
│   ├── images/
│   │   ├── projects/
│   │   │   ├── batik/
│   │   │   ├── lstm-sentiment/
│   │   │   └── rfm-segmentation/
│   │   └── profile.png
│   ├── favicon.ico
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   └── ProjectCard.astro        # Reusable card component for project listing
│   │
│   ├── content/
│   │   ├── about/
│   │   │   └── index.md              # About page content (Markdown)
│   │   ├── experience/
│   │   │   └── index.md              # Experience page content (Markdown)
│   │   └── projects/
│   │       ├── batik-classification.md
│   │       ├── lstm-sentiment.md
│   │       └── rfm-segmentation.md   # Project detail contents
│   │
│   ├── layouts/
│   │   └── layout.astro              # Main layout wrapper
│   │
│   ├── pages/
│   │   ├── index.astro               # Homepage
│   │   ├── about.astro               # About page
│   │   ├── experience.astro          # Experience page
│   │   └── projects/
│   │       ├── index.astro            # Projects listing page
│   │       └── [slug].astro           # Dynamic project detail pages
│   │
│   └── config.ts                     # Content / site configuration
│
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md

```

---

## Getting Started

Follow these steps to run the project locally.

```txt
#Clone the repository
git clone https://github.com/MRafli43/rafli-portfolio.git

#Navigate into the project directory
cd rafli-portfolio

#Install dependencies
npm install

#Run the project
npm run dev
```

---

Try to impress the recruiters n get a job
npm run dev

