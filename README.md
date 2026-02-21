# Xai – Intelligence Workspace

An interactive, single-page product experience that shows how **Xai** turns raw, fragmented data into **structured intelligence**, **actionable insight**, and **AI-driven automations**.

This was built as part of a frontend coding challenge to demonstrate:

- Product-quality UI
- Purposeful motion & interaction
- 3D / geometry-based visualizations
- Clean, modular engineering

---

## 1. Live Demo & Design

- **Live demo:** https://xai-workspace.vercel.app/  
- **Figma (lightweight structure):** https://www.figma.com/file/XXXXXXXX  
- **Product documentation (PDF):** attached with the submission / [Google Drive link]

> Note: I’m primarily a frontend engineer. The Figma file is a lightweight structural representation of the interface; most of my effort went into the live interactive prototype, motion, and code quality.

---

## 2. Core Concept

Xai is imagined as a **calm intelligence workspace** for decision-makers.

Narrative:

> **Raw data → Structured intelligence → Actionable insight → AI automations**

The page is structured as a scrolly, single-screen experience where a user can “feel” how Xai behaves:

1. **Hero** – raw signals compress into an intelligence layer  
2. **Flow** – ingest → analyze → generate insight  
3. **Dashboard** – a realistic intelligence workspace UI  
4. **Signature interaction** – automations as a living graph

---

## 3. Tech Stack

**Framework & tooling**

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

**Animation & motion**

- [Framer Motion](https://www.framer.com/motion/) – UI transitions, entrance, tab changes
- [GSAP + ScrollTrigger](https://greensock.com/scrolltrigger/) – scroll-based geometry & 3D motion
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) (+ Drei) – 3D data visual & automation graph

**Structure**

- `src/app`
  - `layout.jsx` – root layout
  - `page.jsx` – single-page experience entry
- `src/components/layout`
  - `Layout.jsx`, `Navbar.jsx`
- `src/components/sections`
  - `Hero.jsx`
  - `Flow.jsx`
  - `Dashboard.jsx`
  - `Signature.jsx`
- `src/lib`
  - `animations.js` – GSAP + ScrollTrigger setup

---

## 4. How to Run Locally

```bash
git clone https://github.com/YOUR-USERNAME/xai-workspace.git
cd xai-workspace

# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:3000 in your browser