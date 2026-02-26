---
phase: 2
plan: 1
wave: 1
---

# Plan 2.1: Home and About Pages (Core Pages)

## Objective
Build out the \Home\ (\/\) and \About\ (\/about\) pages with semantic HTML, the Nakula Tailwind aesthetic, and placeholder images to establish the basic portfolio structure.

## Context
- .gsd/SPEC.md
- .gsd/ROADMAP.md
- src/app/globals.css
- tailwind.config.ts

## Tasks

<task type="auto">
  <name>Build Home Page</name>
  <files>src/app/page.tsx</files>
  <action>
    - Overhaul \src/app/page.tsx\ to act as the landing page.
    - Create a stunning Hero section introducing "MediaCine Films" with a large, sophisticated serif headline (using \ont-serif\).
    - Include a "View Our Work" Call to Action (CTA) linking to \/works\.
    - Create a "Featured Work" preview section using staggered grid layouts typical of Nakula (placeholder \div\ blocks with muted background colors like \g-stone-200\ simulate images).
    - Ensure copious whitespace (\py-20\, \py-32\) and clean typography.
  </action>
  <verify>npm run lint</verify>
  <done>Home page is built with Hero and Featured Work sections, matching the aesthetic.</done>
</task>

<task type="auto">
  <name>Build About Page</name>
  <files>src/app/about/page.tsx</files>
  <action>
    - Create the \src/app/about\ directory and \page.tsx\.
    - Implement a "Our Story" layout: a split design with a large placeholder image on one side and typographic storytelling on the other.
    - Use the established text colors (\	ext-[#1a1a1a]\, \	ext-[#666]\) and fonts.
    - Add a "Meet the Team" or similar aesthetic block with name and role.
  </action>
  <verify>npm run build</verify>
  <done>About page compiles and contains the split-layout story section.</done>
</task>

## Success Criteria
- [ ] \/\ (Home) has a Hero and Featured Work section.
- [ ] \/about\ exists with a typographic "Our Story" layout.
