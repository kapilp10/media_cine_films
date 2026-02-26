---
phase: 2
plan: 3
wave: 1
---

# Plan 2.3: Contact Page (Core Pages)

## Objective
Build out the Inquiry (\/contact\) page with a clean, high-end HTML form and subtle styling to match the brand.

## Context
- .gsd/SPEC.md
- .gsd/ROADMAP.md
- src/app/globals.css

## Tasks

<task type="auto">
  <name>Build Contact Page</name>
  <files>src/app/contact/page.tsx</files>
  <action>
    - Create the \src/app/contact\ directory and \page.tsx\.
    - Implement a luxurious contact form layout: Left side can feature an evocative statement or image, right side contains the form.
    - Fields needed: Name, Email, Phone, Event Date, Venue, Budget Range, message.
    - Style the form inputs minimally: e.g., only bottom borders (\order-b border-black\), no heavy boxes. Focus states should be elegant.
    - The submit button should mirror the "Magnetic Button" or elegant solid block style of the Nakula theme. (We don't need the actual magnetic logic right now, just the visual).
  </action>
  <verify>npm run build</verify>
  <done>Contact page form exists with minimalist styling and the specified fields.</done>
</task>

## Success Criteria
- [ ] \/contact\ exhibits a high-end lead capture form with minimal input designs.
