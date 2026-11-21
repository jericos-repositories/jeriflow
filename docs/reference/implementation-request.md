# CODEX MASTER PROMPT
## Jerico Studio — JeriFlow SaaS Marketing Website
### Complete Autonomous Design, Asset Integration, Development, and Quality Assurance

You are acting as a **Senior Product Designer, UI/UX Engineer, Frontend Architect, and Senior Next.js Developer**.

Your assignment is to autonomously design, develop, integrate, test, and refine a production-quality, fully responsive SaaS marketing website for **Jerico Studio**, featuring its flagship product, **JeriFlow**.

This is a real portfolio development project based on an approved product concept and design specification.

**Do not deliver a generic SaaS template.** The final website must feel like a professionally designed, distinctive, modern software company's website.

You are responsible for the complete implementation, including organizing the downloaded assets before starting development.

---

# 1. PROJECT CONTEXT

## Company Identity

**Company:** Jerico Studio  
**Flagship Product:** JeriFlow  
**Product Tagline:** Make room for better work.  
**Industry:** SaaS / Productivity / Project Management  
**Business Type:** Independent software and digital product studio

Jerico Studio is a fictional, founder-led software company developing thoughtful digital products.

JeriFlow is its proposed productivity and project-management SaaS platform.

## Product Description

JeriFlow helps freelancers, UI/UX designers, developers, and small creative teams manage projects, organize tasks, collaborate, document important information, and monitor progress from one centralized workspace.

Its primary value proposition is:

**A beautifully simple workspace that brings projects, tasks, notes, and team collaboration together.**

## Target Audiences

1. Freelancers managing multiple client projects.
2. UI/UX designers organizing creative workflows.
3. Developers managing development tasks and milestones.
4. Small creative and software teams coordinating projects.

## Product Capabilities

The marketing website must communicate these six proposed capabilities:

- Task Management
- Project Boards
- Team Collaboration
- Progress Tracking
- Project Notes
- Focused Workflows

These are product concepts, not existing production features.

**Important:** This project is Phase 1: the SaaS marketing website. Do not build a real authentication system, payment gateway, database, or complete SaaS backend.

All product previews must be clearly understood as demonstrations using fictional data.

---

# 2. MANDATORY FIRST STEP — REPOSITORY AND ASSET ORGANIZATION

**Do not begin building UI components until this step has been completed or any access blockers have been reported.**

## Step 2.1 — Inspect the Repository

Inspect the currently opened VS Code workspace.

Determine:

- Whether the repository is empty or already contains a project.
- Whether Next.js is already installed.
- Which package manager is being used.
- The existing folder structure.
- Existing dependencies and configuration.
- Whether there are uncommitted changes or user-created files.

Preserve existing work.

Do not overwrite unrelated files or destructively modify the repository.

If no application exists, initialize the project using the approved technology stack.

## Step 2.2 — Locate the Downloaded Assets

The user previously downloaded the following files:

**Primary asset archive:**

`Flowly_Brand_Asset_Kit.zip`

**Approved design specification:**

`Jerico_Studio_JeriFlow_Design_Blueprint.html`

Search the Windows Downloads directory:

`%USERPROFILE%\Downloads`

Use the Windows user profile path resolved by the local environment rather than assuming a particular username.

If these files are not found, inspect accessible workspace folders and reasonable alternative download locations.

If multiple copies exist, identify the correct files using their contents and modification details.

If the files cannot be accessed because of sandbox restrictions or permissions, request the necessary permission or exact path.

Do not falsely claim that the assets have been located.

Do not search arbitrary private directories.

## Step 2.3 — Inspect and Audit the Assets

Extract the asset ZIP into a temporary working location.

Inspect the actual contents before integration.

The existing kit is expected to include:

- Brand assets and SVG logos
- Design tokens
- Icons
- Illustrations
- Desktop dashboard mockup
- Mobile dashboard mockup
- Asset manifest
- README

The ZIP was originally created for a product called Flowly.

**Our approved product is JeriFlow, under Jerico Studio.**

Therefore:

1. Reuse generic assets that fit the approved design direction.
2. Do not reuse Flowly wordmarks as JeriFlow branding.
3. Replace Flowly-specific logos with original JeriFlow and Jerico Studio branding.
4. Inspect mockups for outdated product names and update or recreate them.
5. Preserve useful generic SVG icons and illustrations.
6. Review image quality, consistency, dimensions, and suitability.
7. Preserve relevant license notices and attribution requirements.
8. Do not blindly copy every file into the production project.

If any assets are missing or unsuitable, create original SVG alternatives.

Do not depend on random external image URLs.

## Step 2.4 — Organize the Assets

Use a maintainable structure similar to:

```text
public/
└── assets/
    ├── brand/
    │   ├── jerico-studio-logo.svg
    │   ├── jeriflow-logo.svg
    │   ├── jeriflow-mark.svg
    │   └── favicon.svg
    ├── icons/
    ├── illustrations/
    └── mockups/
```

Use descriptive, lowercase, kebab-case filenames.

Avoid duplicate assets and unnecessary files.

Keep a record of which assets were reused, modified, replaced, or newly created.

Preserve the original ZIP in Downloads.

Do not delete the downloaded archive.

## Step 2.5 — Integrate the Assets

Ensure all asset references resolve correctly.

Use Next.js image optimization where appropriate.

Use SVGs for logos, icons, and illustrations where suitable.

Avoid blurry images, stretched illustrations, broken paths, or mismatched aspect ratios.

The final website must not contain missing-image placeholders.

---

# 3. PRIMARY DESIGN REFERENCE

Locate and thoroughly inspect:

`Jerico_Studio_JeriFlow_Design_Blueprint.html`

This is the approved design specification.

Treat it as the primary source of truth for:

- Branding
- Visual direction
- Colors
- Typography
- Layouts
- Component appearance
- Website architecture
- Product messaging
- Page structure
- Responsive behavior
- Interaction patterns

Inspect both its visible design and the specification content.

Do not merely copy its source code into Next.js.

Recreate and refine it using maintainable, reusable React components.

The HTML blueprint is the baseline, not a limit on quality.

Improve the implementation where necessary without changing the approved product identity.

If the HTML file is unavailable, request it rather than inventing a replacement design direction.

---

# 4. DESIGN PHILOSOPHY

## Primary Inspiration

The approved visual reference is the minimalist, approachable, typography-focused aesthetic of Notion's marketing website.

Use the following design principles:

- Clean white backgrounds
- Bold, expressive typography
- Generous whitespace
- Simple navigation
- Friendly original illustrations
- Large, realistic product mockups
- Subtle borders
- Restrained shadows
- Strong visual hierarchy
- Minimal visual noise
- Carefully designed responsive layouts

**Do not directly copy Notion's website, illustrations, logos, proprietary graphics, or written content.**

Create an original JeriFlow identity.

## Visual Quality

The website must feel:

- Modern
- Premium
- Professional
- Friendly
- Trustworthy
- Minimalist
- Carefully art-directed
- Consistent across all pages

Avoid:

- Generic gradient-heavy SaaS templates
- Excessive glassmorphism
- Random decorative elements
- Overly rounded components
- Excessive shadows
- Inconsistent typography
- Repetitive card layouts
- Generic stock photography
- Emoji as substitutes for professional icons
- Empty sections with large unused space
- Decorative animations without purpose

Every section should have a clear purpose and intentional composition.

---

# 5. DESIGN SYSTEM

## Color Palette

Use these approved primary design tokens:

| Token | Hex |
|---|---|
| Canvas | #FFFFFF |
| Primary Text | #171717 |
| Primary Blue | #087FE7 |
| Soft Blue | #EAF5FF |
| Surface | #F7F7F5 |
| Border | #E7E7E4 |
| Lavender | #E9E5FF |
| Mint | #DBF3DF |
| Warm Accent | #FFB46E |

Create reusable Tailwind theme tokens or CSS custom properties.

Do not scatter unrelated hardcoded colors throughout the codebase.

Use the accent colors sparingly for illustrations, badges, and supporting visual elements.

## Typography

Primary font: **Inter**

Use `next/font` where appropriate.

Typography requirements:

- Large, bold hero headlines
- Clear heading hierarchy
- Comfortable paragraph line height
- Consistent letter spacing
- Readable UI labels
- Balanced line lengths
- Responsive font scaling

Suggested sizes:

| Element | Desktop | Mobile |
|---|---|---|
| Hero H1 | 64–88px | 40–48px |
| Section H2 | 40–54px | 30–36px |
| Card H3 | 20–24px | 18–22px |
| Body | 16–18px | 15–16px |
| Supporting Text | 13–14px | 13–14px |

Use fluid typography when appropriate.

Do not blindly force desktop sizes onto mobile.

## Layout

Maximum main content width: approximately 1160px.

Use consistent horizontal padding and spacing.

Suggested breakpoints to verify:

- 360px
- 390px
- 768px
- 1024px
- 1440px

Use mobile-first layouts.

Ensure that all sections reflow naturally without horizontal page overflow.

## Buttons

Create reusable button variants:

- Primary
- Secondary
- Outline
- Text link

Use accessible hover, focus, active, and disabled states.

Buttons should be visually consistent across the website.

## Icons

Use **Lucide React** as the primary icon library.

Maintain consistent icon sizing and stroke widths.

Prefer 1.75–2px strokes.

Use appropriate icons for:

- Navigation
- Projects
- Tasks
- Collaboration
- Analytics
- Calendar
- Notes
- Search
- Status
- Pricing
- Contact

Do not mix unrelated icon styles.

## Animations

Use subtle, purposeful motion:

- Button hover feedback
- Smooth accordion expansion
- Mobile navigation transitions
- Tab switching
- Gentle section reveals
- Restrained product-preview interactions

Respect `prefers-reduced-motion`.

Avoid excessive parallax, constant movement, or unnecessary animation libraries.

---

# 6. WEBSITE INFORMATION ARCHITECTURE

Implement the following routes using the Next.js App Router.

## Page 1 — Homepage

Route: `/`

The homepage is the primary conversion-focused landing page.

Required sections:

1. Navigation
2. Hero
3. Product Dashboard Preview
4. Core Features
5. Product Benefits
6. How JeriFlow Works
7. Target Audience / Solutions
8. Pricing Preview
9. Frequently Asked Questions
10. Final Call to Action
11. Footer

### Hero

Use the approved product tagline:

**Make room for better work.**

Supporting copy should clearly communicate JeriFlow's purpose.

Include two meaningful calls to action.

The hero must feature an original, friendly illustration or visual composition consistent with the design reference.

The dashboard preview should appear prominently below the hero.

Do not overcrowd the first viewport.

### Product Preview

Create a convincing demonstration of the proposed JeriFlow workspace.

It should visually communicate:

- Project navigation
- Task organization
- Progress summaries
- Project status
- Kanban workflow
- Team collaboration

Use realistic fictional data.

Make the preview visually polished and detailed.

Do not use generic placeholder rectangles in place of an actual interface.

---

## Page 2 — Product

Route: `/product`

Purpose: Explain how JeriFlow works.

Required sections:

- Product introduction
- Workspace overview
- Project creation concept
- Task organization
- Kanban board
- Project notes
- Team collaboration
- Progress tracking
- Final CTA

Use product mockups and illustrative workflows to communicate functionality.

---

## Page 3 — Features

Route: `/features`

Present the six primary capabilities:

1. Task Management
2. Project Boards
3. Team Collaboration
4. Progress Tracking
5. Project Notes
6. Focused Workflows

Each feature should include:

- Clear heading
- Concise benefit-oriented description
- Supporting illustration or product UI
- Practical use case

Avoid making every feature section look identical.

Use a balanced mixture of bento grids, split layouts, and product previews.

---

## Page 4 — Solutions

Route: `/solutions`

Create audience-specific sections for:

- Freelancers
- UI/UX Designers
- Developers
- Small Creative Teams

Explain the problems each audience faces and how JeriFlow is intended to help.

Use realistic scenarios rather than unsupported marketing claims.

---

## Page 5 — Pricing

Route: `/pricing`

Present three proposed plans:

**Starter**
- $0
- Intended for individuals
- Basic project organization

**Creator**
- $12 per user/month
- Intended for freelancers and creative professionals
- More advanced project workflows

**Team**
- $24 per user/month
- Intended for small teams
- Shared collaboration and management capabilities

These prices are illustrative.

Implement a functional monthly/yearly pricing toggle.

The design blueprint proposes an illustrative 20% yearly discount.

Make the billing interval and discount assumptions clear.

Include a comparison section and pricing FAQ.

Clearly label the pricing as proposed or illustrative.

Do not implement payment collection.

Do not claim subscriptions are available.

---

## Page 6 — About

Route: `/about`

Introduce Jerico Studio as the company behind JeriFlow.

Include:

- Company introduction
- Product vision
- Design philosophy
- Why JeriFlow was conceptualized
- Mission
- Long-term direction

Position Jerico Studio as a founder-led independent software and digital product studio.

Do not invent the founder's biography, employment history, credentials, company registration, or team members.

Avoid fake awards, partnerships, company statistics, or achievements.

---

## Page 7 — Contact

Route: `/contact`

Create a polished, accessible contact page.

Include:

- Contact introduction
- Name field
- Email field
- Subject
- Message field
- Form validation
- Helpful error messages

Because no backend has been approved, the form must not pretend to send real messages.

Provide an explicit demo-only state or disable submission with a clear explanation.

Do not fabricate a contact email.

Keep the form implementation structured so a real endpoint can be connected later.

---

# 7. NAVIGATION AND FOOTER

## Desktop Navigation

Include:

- Jerico Studio / JeriFlow branding
- Product
- Features
- Solutions
- Pricing
- About
- Contact
- Primary CTA

Keep the navbar clean and well-spaced.

Use active navigation states.

## Mobile Navigation

Implement a fully functional responsive menu.

Requirements:

- Accessible menu button
- Proper expanded state
- Keyboard navigation
- Escape-key closing
- Correct focus behavior
- Menu closes after navigation
- No content overflow

## Footer

Include:

- Company identity
- Short brand description
- Product navigation
- Company navigation
- Contact link
- Appropriate copyright notice

Do not create fake social profiles.

Do not publish fabricated privacy policies or terms of service.

If legal pages are not approved, do not expose misleading legal links.

---

# 8. FUNCTIONAL INTERACTIONS

The website must not be a collection of static screenshots.

Implement appropriate functional interactions, including:

- Mobile navigation
- Internal page navigation
- Pricing interval toggle
- FAQ accordion
- Product tabs where useful
- Keyboard-accessible controls
- Hover and focus states
- Responsive interactive elements

All buttons must have meaningful behavior.

Do not create dead buttons.

If a CTA refers to an unavailable future product capability, use an honest destination or clearly explain that the product is a concept.

Do not implement fake signup success screens.

Do not imply real accounts are being created.

Optional enhancement:

Create a lightweight interactive product demonstration using fictional data.

This may include switching project views or showing sample task states.

Keep the demonstration separate from actual SaaS functionality.

---

# 9. TECHNOLOGY STACK

Use:

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Lucide React
- React functional components
- CSS transitions and lightweight animations

Prefer stable, compatible package versions.

Use the existing package manager when possible.

Do not introduce unnecessary dependencies.

Use Server Components by default.

Use Client Components only when interactivity requires them.

Do not mark the entire application as a Client Component.

Follow current Next.js and React best practices compatible with the installed versions.

---

# 10. PROJECT ARCHITECTURE

Use a scalable, maintainable structure similar to:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── product/
│   │   └── page.tsx
│   ├── features/
│   │   └── page.tsx
│   ├── solutions/
│   │   └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── layout/
│   ├── marketing/
│   ├── product-preview/
│   └── ui/
├── lib/
│   ├── site-config.ts
│   ├── content.ts
│   └── pricing.ts
└── public/
    └── assets/
        ├── brand/
        ├── icons/
        ├── illustrations/
        └── mockups/
```

Adapt this structure if the existing repository requires it.

## Architecture Requirements

- Reusable components
- Shared design tokens
- Centralized navigation configuration
- Centralized product content
- Typed component props
- Consistent naming conventions
- Minimal code duplication
- Semantic HTML
- Clear separation of content and presentation

Avoid oversized components containing entire pages.

Avoid unnecessary abstraction.

Keep the code readable and easy to maintain.

---

# 11. RESPONSIVE DESIGN REQUIREMENTS

The website must be genuinely responsive.

Do not simply shrink desktop layouts.

For mobile:

- Stack multi-column sections appropriately.
- Reduce heading sizes.
- Maintain comfortable spacing.
- Adapt product previews intelligently.
- Ensure buttons remain easy to tap.
- Prevent text overflow.
- Preserve visual hierarchy.
- Keep navigation usable.
- Avoid horizontal page scrolling.

For tablets:

- Use balanced intermediate layouts.
- Avoid awkward empty columns.
- Adapt feature grids appropriately.

For desktops:

- Use intentional whitespace.
- Maintain consistent content alignment.
- Avoid excessively stretched sections.
- Present product visuals at appropriate sizes.

Verify the site at multiple viewport widths.

---

# 12. CONTENT QUALITY

Write professional, natural SaaS marketing copy.

Content should be:

- Clear
- Concise
- Benefit-oriented
- Human
- Consistent
- Specific to JeriFlow

Avoid generic filler such as:

"Revolutionize your workflow with cutting-edge solutions."

Prefer concrete descriptions of how users organize work and manage projects.

Do not use lorem ipsum.

Do not fabricate:

- Customer testimonials
- Customer logos
- User counts
- Revenue
- Awards
- Security certifications
- Integrations
- Enterprise partnerships
- Product availability

Clearly distinguish conceptual features from operational services.

---

# 13. ACCESSIBILITY AND PERFORMANCE

Implement:

- Semantic heading hierarchy
- Keyboard-accessible navigation
- Visible focus indicators
- Appropriate ARIA attributes
- Accessible form labels
- Meaningful image alt text
- Sufficient color contrast
- Reduced-motion support
- Responsive images
- Optimized font loading
- Appropriate image dimensions

Avoid unnecessary client-side JavaScript.

Keep layouts stable during loading.

Aim for strong Core Web Vitals and Lighthouse results, but do not claim measured scores unless actual tests were run.

---

# 14. SEO AND METADATA

Implement appropriate metadata for every page.

Include:

- Unique page titles
- Meta descriptions
- Open Graph metadata
- Appropriate social preview imagery
- Semantic page structure
- Sitemap where appropriate
- Robots configuration where appropriate

Do not invent a production domain.

Use environment configuration when a canonical URL is needed.

Avoid indexing internal design documents or unfinished demonstration pages unintentionally.

---

# 15. DESIGN QUALITY ASSURANCE

After implementing the pages, perform a deliberate visual review.

Evaluate:

### Visual Consistency
- Are colors consistent?
- Are fonts and weights consistent?
- Are card radii consistent?
- Are shadows restrained?
- Are icons visually coherent?

### Layout Quality
- Are sections aligned?
- Is spacing consistent?
- Is there sufficient whitespace?
- Are headings balanced?
- Are product previews properly sized?

### Responsive Quality
- Does mobile navigation work?
- Are cards readable on narrow screens?
- Are there overflowing elements?
- Are buttons accessible?
- Do images retain proper proportions?

### Product Authenticity
- Does the site look like a real software product website?
- Do the dashboard mockups communicate JeriFlow's purpose?
- Is the product identity consistent across pages?
- Are there outdated Flowly references?

### Content Integrity
- Is the copy clear?
- Are product claims truthful?
- Are illustrative prices labeled?
- Are there any fake testimonials or unsupported claims?

Do not consider the website complete until these checks have been addressed.

---

# 16. DEVELOPMENT AND VALIDATION

Work through the following sequence.

## Stage 1 — Discovery
Inspect the repository, design blueprint, and asset archive.

## Stage 2 — Asset Preparation
Extract, audit, rename where appropriate, organize, and integrate the assets.

## Stage 3 — Foundation
Set up the Next.js application, Tailwind configuration, typography, design tokens, and shared layout.

## Stage 4 — Component System
Build reusable buttons, containers, cards, headings, navigation, and footer.

## Stage 5 — Homepage
Implement and visually refine the complete homepage.

## Stage 6 — Remaining Pages
Implement Product, Features, Solutions, Pricing, About, and Contact.

## Stage 7 — Interactions
Implement and verify navigation, pricing controls, accordions, and other approved interactions.

## Stage 8 — Responsive Refinement
Review desktop, tablet, and mobile layouts.

## Stage 9 — Technical Validation
Run the available checks, including:

- Linting
- Type checking
- Production build
- Route verification
- Asset reference verification
- Browser-based checks if browser tooling is available

Fix errors introduced by the implementation.

If a test cannot be executed, explain why.

Do not claim tests passed without running them.

## Stage 10 — Final Review
Check the implementation against the HTML design blueprint and the requirements in this prompt.

---

# 17. AUTONOMOUS EXECUTION RULES

You have permission to make routine design and implementation decisions within the approved project scope.

Do not repeatedly ask for approval for ordinary component choices, spacing adjustments, or implementation details.

Use professional judgment to produce the strongest result.

However:

- Do not delete unrelated user files.
- Do not overwrite uncommitted work without permission.
- Do not modify the original Downloads ZIP.
- Do not introduce paid services.
- Do not deploy publicly without explicit approval.
- Do not create real payment or authentication infrastructure.
- Do not fabricate unavailable business information.
- Do not claim to have tested functionality that was not tested.

If you encounter a genuine blocker requiring user action, explain the issue and request only the necessary information.

Otherwise, continue working autonomously.

Do not stop after generating a plan.

**Execute the implementation, inspect the result, correct issues, and finish with a working project.**

---

# 18. DEFINITION OF DONE

The project is complete when:

- [ ] The asset archive has been inspected.
- [ ] Appropriate assets are organized in the repository.
- [ ] Outdated Flowly branding has been replaced.
- [ ] Jerico Studio and JeriFlow branding is consistent.
- [ ] The approved design blueprint has been followed.
- [ ] All seven marketing routes are implemented.
- [ ] Navigation works on desktop and mobile.
- [ ] Pricing interactions work correctly.
- [ ] FAQ interactions work correctly.
- [ ] Product previews are visually polished.
- [ ] The website is responsive.
- [ ] Accessibility requirements have been addressed.
- [ ] No broken asset references remain.
- [ ] No misleading production claims are present.
- [ ] Linting, type checking, and build checks pass where available.
- [ ] The website can be started locally.
- [ ] A final implementation report is provided.

---

# 19. FINAL REPORT

After implementation, provide a concise but complete report containing:

1. **Implementation Summary:** What was built.
2. **Pages Completed:** List all implemented routes.
3. **Assets:** Which files were reused, modified, or created.
4. **Design System:** Main styling decisions.
5. **Functional Features:** What actually works.
6. **Validation:** Commands executed and results.
7. **Known Limitations:** Features that remain demonstrations.
8. **Local Setup:** Commands to run the website.
9. **Recommended Next Steps:** Improvements for a future release.

Be transparent about anything that could not be completed.

---

# 20. FINAL QUALITY DIRECTIVE

Treat this project as if it were being prepared for presentation in a professional UI/UX and frontend development portfolio.

The final website should demonstrate strong visual judgment, clean architecture, responsive design, and attention to detail.

The expected result is not merely a functioning website.

It is a **cohesive, carefully designed, premium-quality SaaS marketing experience** for Jerico Studio and JeriFlow.

Prioritize quality over unnecessary complexity.

Follow the approved branding.

Use the provided assets intelligently.

Maintain consistency across every page.

Make thoughtful decisions autonomously.

**Begin by inspecting the current repository and locating the downloaded design blueprint and asset kit. Then proceed through implementation and validation until the website is complete.**
