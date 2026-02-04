# Project description (portfolio-2025)

This project is a personal portfolio built with Next.js. The home page is structured into editorial-style sections with a bold hero, marquee stack, service cards, case studies, process, FAQ, contact, and a final CTA. Core content and microcopy live in `data/site.ts` and the section components in `components/sections/*`.

## Overall structure

- Framework: Next.js (app router).
- Global layout: `app/layout.tsx` includes `Header`, `Footer`, and `GoodVibesToggle`.
- Home page: `app/page.tsx` mounts sections in this order:
  1. `HeroVisuvate`
  2. `TechStack`
  3. `Intro`
  4. `Projects`
  5. `Services`
  6. `Platforms`
  7. `Process`
  8. `Faq`
  9. `Contact`
  10. `Cta`

## Navigation and header

Data source: `data/site.ts` (`siteConfig.navigation`, `siteConfig.name`).

- Desktop nav: centered links for Projects, Services, Process, FAQ, Contact.
- Logo: monogram circle + name.
- Right CTA: "Booking open" badge + "Let's talk" button.
- Mobile: hamburger menu with links and CTA.

## Sections and copy

### 1) Hero
File: `components/sections/HeroVisuvate.tsx`

- Badge: "Digital studio"
- Headline: uses `siteConfig.tagline`
- Body: uses `siteConfig.description`
- CTA buttons: "Start a project", "View work"
- Right panel: "Live preview", "Tech Stack", "Delivery", "Weeks 4-6"
- Availability: "Available for new projects in Q2."

### 2) Tech Stack
File: `components/sections/TechStack.tsx`

- Heading: "Stack and tools"
- Subheading: "Everything you need to launch fast"
- Content: list from `data/site.ts` (Next.js, React, TypeScript, Tailwind, Figma, Framer, Sanity, Stripe, Vercel, Notion).

### 3) Intro
File: `components/sections/Intro.tsx`

- Label: "Design that speaks, delivery that converts"
- Headline: "We craft premium digital experiences with clarity and purpose."
- Body: "We blend strategy, visual identity, and development..."
- Pills: Strategy, UX, Identity, Performance
- Cards: Narrative, Aesthetics, Interaction, System

### 4) Projects
File: `components/sections/Projects.tsx`

- Label: "Selected projects"
- Headline: "Recent work with real impact."
- Link: "View all projects"
- Cards from `data/site.ts`:
  - Aurora Health (Healthcare, 2025)
  - Lumora Studio (Creative, 2025)
  - North Commerce (Ecommerce, 2024)
  - Atelier One (Branding, 2024)
- CTA per card: "View project"

### 5) Services
File: `components/sections/Services.tsx`

- Label: "Services"
- Headline: "Elevate your digital presence without losing focus."
- CTA: "Start now"
- Services from `data/site.ts`:
  - Custom websites
  - UX and conversion
  - Ecommerce
  - CMS and content
  - Visual identity
  - Continuous evolution

### 6) Platforms
File: `components/sections/Platforms.tsx`

- Label: "Flexible platforms"
- Headline: "We adapt to your stack without losing quality."
- Body: "We work with modern platforms and your current CMS when needed."
- Platforms from `data/site.ts`: Webflow, WordPress, Shopify, Wix Studio, Squarespace, Framer, Sanity, Notion.

### 7) Process
File: `components/sections/Process.tsx`

- Label: "Process"
- Headline: "A clear system to deliver fast and with precision."
- Badge: "Delivery in 4-6 weeks"
- Steps from `data/site.ts`:
  - Discovery first
  - Strategy and narrative
  - Visual design
  - Precise build
  - Launch and support

### 8) FAQ
File: `components/sections/Faq.tsx`

- Label: "FAQ"
- Headline: "Clear answers before we start."
- Body: "If you need more detail, write to us and we will solve it on the first call."
- Items from `data/site.ts`.

### 9) Contact
File: `components/sections/Contact.tsx`

- Label: "Contact"
- Headline: "Let's talk about your next launch."
- Body: "Share your idea, goals, and timeline. We reply within 24-48 hours."
- Form fields: First name, Last name, Email, Company, Budget, Project details
- CTA: "Send inquiry"

### 10) Final CTA
File: `components/sections/Cta.tsx`

- Label: "Ready to build?"
- Headline: "Create bold. Deliver better."
- CTA: "Book a call"

## Footer

File: `components/layout/Footer.tsx`

- Left: "Creative Developer" + "Building digital experiences that matter."
- Center: Navigation list
- Right: "Ready to start?" + "Let's build something great together."
- CTA: "Get in touch"
- Bottom: copyright and "Designed & Built with care"

## Base content

File: `data/site.ts`

- name: "gissoler"
- title: "Creative digital product studio"
- description: "We design and build web experiences focused on clarity, conversion, and performance"
- tagline: "Premium sites that convert and feel alive"
- email: "hello@gissoler.studio"
- location: "Remote worldwide"
