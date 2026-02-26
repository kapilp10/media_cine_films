---
phase: 3
plan: 2
wave: 1
---

# Plan 3.2: Booking Calendar Widget (Advanced Features)

## Objective
Build out the interactive Booking Calendar (\/booking\) so prospective clients can check availability and request a consultation or pre-book a package.

## Context
- .gsd/SPEC.md
- .gsd/ROADMAP.md

## Tasks

<task type="auto">
  <name>Build Booking Calendar UI</name>
  <files>src/app/booking/page.tsx, src/components/CalendarWidget.tsx</files>
  <action>
    - Create the \src/app/booking\ directory and \page.tsx\.
    - Create a \CalendarWidget.tsx\ component in \src/components\.
    - Implement a visual calendar (can be a custom grid using Native JS dates or a simple lightweight library if necessary, but native is preferred for MVP).
    - Styling: Crisp squares, light background \g-white\, subdued borders, disabled dates greyed out. Use the theme's serif font for the month/year header.
    - Implement a click-to-select interaction on available dates. 
  </action>
  <verify>npm run lint</verify>
  <done>Calendar widget displays correctly and allows date selection.</done>
</task>

<task type="auto">
  <name>Integrate Booking Form</name>
  <files>src/app/booking/page.tsx</files>
  <action>
    - Below or beside the calendar, add a brief form that appears or activates upon date selection.
    - Fields: Name, Email, Preferred Package (dropdown), Note.
    - Use the same minimalist form styling established in the Contact page.
    - Include a submission state (e.g., "Request Sent") for the MVP mock functionality.
  </action>
  <verify>npm run build</verify>
  <done>Booking page flow from date selection to mock form submission is fully functional.</done>
</task>

## Success Criteria
- [ ] \/booking\ contains an interactive calendar widget matching the brand aesthetic.
- [ ] Users can select a date and fill out an integrated pre-booking form.
