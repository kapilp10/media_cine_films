---
phase: 1
plan: 1
wave: 1
---

# Plan 1.1: Project Setup & Theming (Foundation)

## Objective
Initialize the Next.js (App Router) project with Tailwind CSS and configure the global theme to match the Nakula aesthetic (typography, soft colors, ample whitespace).

## Context
- .gsd/SPEC.md
- .gsd/ROADMAP.md

## Tasks

<task type="auto">
  <name>Initialize Next.js</name>
  <files>package.json, tailwind.config.ts, src/app/layout.tsx, src/app/globals.css</files>
  <action>
    - Initialize a new Next.js project in the current directory (
px -y create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"). Note to use . because we are already in the 
ew_gsd_project directory.
    - Set up the global CSS (globals.css) with the core styling variables that match Nakula (e.g., sophisticated serif/sans-serif font pairing, cream/off-white background, dark grey/black text).
    - Configure 	ailwind.config.ts to use these custom colors and fonts.
    - Avoid adding unnecessary boilerplate components; keep pp/page.tsx minimal.
  </action>
  <verify>npm run build</verify>
  <done>Next.js app compiles successfully with the custom Tailwind theme applied.</done>
</task>

<task type="auto">
  <name>Create Shared Layout Components</name>
  <files>src/components/Header.tsx, src/components/Footer.tsx, src/app/layout.tsx</files>
  <action>
    - Create a minimal, elegant Header component with navigation links (Home, Works, About, Contact, Services).
    - Create a clean Footer component with copyright and basic links.
    - Integrate both components into the root layout.tsx so they appear on all child pages.
  </action>
  <verify>npm run lint</verify>
  <done>Header and Footer components exist, are integrated into the root layout, and pass linting.</done>
</task>

## Success Criteria
- [ ] Next.js + Tailwind project is fully scaffolded in the root folder.
- [ ] Nakula-inspired theme is configured in Tailwind.
- [ ] Global layout includes a functional nav Header and Footer.
