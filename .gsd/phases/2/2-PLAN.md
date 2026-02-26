---
phase: 2
plan: 2
wave: 1
---

# Plan 2.2: Works and Services Pages (Core Pages)

## Objective
Build out the Portfolio showcase (\/works\) and the Pricing & Services structure (\/services\) pages, making heavy use of grids, whitespace, and clean, readable typography.

## Context
- .gsd/SPEC.md
- .gsd/ROADMAP.md
- src/app/globals.css

## Tasks

<task type="auto">
  <name>Build Works Page</name>
  <files>src/app/works/page.tsx</files>
  <action>
    - Create the \src/app/works\ directory and \page.tsx\.
    - Implement a "Selected Works" gallery grid. Nakula typically alternates grid sizes (e.g., one large column spanning two, followed by two smaller ones) for a masonry-like feel.
    - Use \spect-video\ placeholders (\g-stone-200\ or similar) to represent cinematic reels.
    - Add hover effects on the placeholders to simulate interactivity (e.g., \hover:opacity-80 transition-opacity\).
    - Add cinematic titles underneath each placeholder (e.g., "M & D / Lake Como").
  </action>
  <verify>npm run lint</verify>
  <done>Works page exhibits a masonry-style visual portfolio grid.</done>
</task>

<task type="auto">
  <name>Build Services Page</name>
  <files>src/app/services/page.tsx</files>
  <action>
    - Create the \src/app/services\ directory and \page.tsx\.
    - Present the Pricing Packages. Avoid traditional boxy pricing cards; instead, use a minimalist text-driven list or accordion-like structure.
    - Each package (e.g., "The Essential", "The Cinematic", "The Director's Cut") should have a clear title, a brief evocative description, a bulleted list of deliverables, and a starting price.
    - Emphasize whitespace between different service offerings.
  </action>
  <verify>npm run build</verify>
  <done>Services page lists at least 3 distinct pricing packages in a minimalist style.</done>
</task>

## Success Criteria
- [ ] \/works\ contains a visually stunning grid for cinematic portfolios.
- [ ] \/services\ contains a clean, non-boxy presentation of pricing packages.
