# Flowly — Brand & Asset Kit (v1)

Original assets prepared for a future Next.js + Tailwind CSS SaaS landing page. This is **not** a complete website and **not** the final HTML design specification.

## Contents
- `brand/`: original Flowly SVG logo, favicon, design tokens
- `icons/`: 32 original consistent line icons (SVG), dark stroke; CSS filter or edit SVG to recolor
- `illustrations/`: 4 original vector illustrations for teamwork, focus, analytics and collaboration
- `mockups/`: original desktop and mobile productivity dashboard SVG previews

## Usage
Copy these directories to `public/assets/` in your Next.js project. Use e.g. `<Image src="/assets/illustrations/teamwork.svg" ... />` or `<img src="/assets/icons/calendar.svg" alt="" />`. Use SVG assets as graphics; use `lucide-react` for application icons when possible.

## Design
White #FFFFFF, surface #F7F7F5, ink #191919, blue #087FE7. Typeface Inter (install via next/font/google). Responsive, ample whitespace, bold headlines, light borders, restrained accents.

## Sources and rights
All included SVGs are original programmatically drawn Flowly project assets, not scraped from Notion, Lucide, unDraw, Pexels, or third-party sites. No third-party fonts or photographs are bundled. External resources to explore independently: https://lucide.dev/ (ISC licensed), https://fonts.google.com/specimen/Inter (font license on site), https://undraw.co/ (license prohibits redistribution in asset packs), https://www.pexels.com/ (license restrictions on redistribution). The inspiration screenshot is not bundled.

## Notes for Codex
Do not replace brand tokens arbitrarily. Do not claim fictional testimonials or customer logos are real. Treat dashboard mockups as illustrative fictional UI. Prioritize mobile responsive layouts and semantic HTML.
