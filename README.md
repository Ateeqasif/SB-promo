# SlickBlinds — Promotional Landing Page

A self-contained, static promotional landing page for **SlickBlinds**, a custom window blinds & shades brand. Built as plain HTML/CSS/JS (no build step) so it can be deployed anywhere — GitHub Pages, Netlify, Vercel, or any static host.

## Design approach

The layout follows patterns proven in the window-treatments/home-services lead-gen space (reviewed against competitors like 3 Day Blinds, Stoneside, Gotcha Covered, and a local Minneapolis blinds company):

- **Lead-capture form embedded directly in the hero**, not buried below the fold.
- **Phone number visible everywhere** (top bar, header, footer) — many customers in this category convert by calling.
- **Hard trust stats** (years in business, customers served, warranty) in a dedicated stats bar.
- **Consultation-first, no-obligation language** rather than an e-commerce checkout flow.
- **Financing callout** — common in this vertical for higher-ticket home improvement purchases.
- Review badge, certification/authority badges, and a testimonials section for social proof.

## Structure

```
index.html      Page markup
css/style.css   Full stylesheet (design tokens, layout, responsive)
js/script.js    Mobile nav, scroll reveal, FAQ accordion, form handling, cookie notice
```

## Running locally

No build tools required — just serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8080
```

Then open the printed local URL in your browser.

## Notes

- The brand, phone number, email, and testimonials are placeholder content for demo purposes — swap in real business details before going live.
- The lead form is client-side only (shows a success state on submit); wire it up to a real backend, CRM, or form service (e.g. Formspree, a serverless function) before launch.
