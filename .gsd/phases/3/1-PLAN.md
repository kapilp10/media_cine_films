---
phase: 3
plan: 1
wave: 1
---

# Plan 3.1: Client Portal App (Advanced Features)

## Objective
Build out the Client Portal MVP (\/portal\) to provide a gated dashboard for existing clients, utilizing Next.js layout structures and a mock authentication flow.

## Context
- .gsd/SPEC.md
- .gsd/ROADMAP.md

## Tasks

<task type="auto">
  <name>Scaffold Portal Layout and Login</name>
  <files>src/app/portal/layout.tsx, src/app/portal/login/page.tsx</files>
  <action>
    - Create a distinct layout for the \/portal\ route (without the public Header/Footer, perhaps a simplified sidebar or minimal top nav).
    - Build a \/portal/login\ page.
    - Implement a luxurious, minimal login form (Email, Password).
    - Add mock form submission logic that redirects to \/portal/dashboard\ upon clicking login.
  </action>
  <verify>npm run build</verify>
  <done>Portal layout exists and a login screen redirects to the dashboard.</done>
</task>

<task type="auto">
  <name>Build Client Dashboard MVP</name>
  <files>src/app/portal/dashboard/page.tsx</files>
  <action>
    - Create the \/portal/dashboard\ page.
    - Design a clean, personalized dashboard overview (e.g., "Welcome back, Elena & Marcus").
    - Include placeholder modules: "Your Film Status" (e.g., "In Post-Production"), "Documents" (e.g., Contract, Invoice links), and "Messages".
    - Adhere strictly to the Nakula aesthetic (typography, soft background \g-[#f9f8f6]\).
  </action>
  <verify>npm run lint</verify>
  <done>Client dashboard displays relevant mock modules with proper styling.</done>
</task>

## Success Criteria
- [ ] \/portal/login\ exists with a functional (mock) redirect.
- [ ] \/portal/dashboard\ is built out with MVP features.
