# SlickBlinds — Promotional Landing Page

A self-contained, static promotional landing page for **SlickBlinds**, built as plain HTML/CSS/JS (no build step) so it can be deployed anywhere — GitHub Pages, Netlify, Vercel, or any static host.

## Brand reference

Built to match the real SlickBlinds brand (`slickblinds.com`), using the official brand reference sheet (verified 03 Sep 2026) plus real site screenshots:

**Colors** (exact hex from brand sheet)

| Token | Hex | Use |
|---|---|---|
| Logo orange | `#F18605` | Logo border, accent icons |
| Digital orange | `#F08605` | Announcement bar gradient end |
| Orange dark | `#DF6C07` | Announcement bar gradient start, hovers |
| Ink | `#202428` | Headings, primary CTA fill |
| Body slate | `#6D767E` | Body copy |
| On-dark | `#F9FAFB` | Text on dark/CTA fills |
| Warm surface | `#FFF7E0` | Stat card background, icon chips |
| Border | `#CED4DA` | Hairlines, input borders |

**Typography**

- Headings: **Neue Regrade** (ExtraBold 800) — this is a paid/commercial font not available via Google Fonts, so **Manrope** (ExtraBold 800, geometric, tight tracking) is used as the closest freely-licensed fallback. Swap in Neue Regrade via `@font-face` if you have a license.
- Body / navigation / buttons: **Montserrat** — matches the real brand exactly, loaded from Google Fonts.

**Logo** — recreated in CSS/HTML (not an image asset) per spec: `#F18605` border, `#212529` wordmark ("SLICK" regular + "BLINDS" ExtraBold), 10px radius. A dark variant (`.logo-dark`, wordmark `#DEE2E6` on `#202428`) is used in the footer.

**Primary CTA button** — exact spec: fill `#202428`, text `#F9FAFB`, 10px radius, 10×22px padding, shadow `0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1)`.

**Imagery treatment** — real site uses premium interior photography with a black 70%→0% fade behind white hero copy. No licensed photo is available here, so the hero uses an approximated warm-toned gradient with the same scrim treatment — replace `.hero` background in `css/style.css` with a real photo when available.

**Content** — real contact info (phone, email, Cypress TX address), the actual Google 4.9 rating, and real testimonials (Natarajan Srinivasan, Megan Khotko, Bruce White) pulled from the live site are used as-is.

## Structural approach

Page length/flow (lead form in hero, trust stats, process steps, testimonials, FAQ, final CTA) is informed by competitor research (3 Day Blinds, Stoneside, Gotcha Covered, a Minneapolis blinds company) — a proven pattern in the window-treatments lead-gen space:

- Lead-capture form embedded directly in the hero (2-step, matching the real site's "Fill Your Details Below" flow: product-type pills → address/zip → contact info).
- Phone number visible everywhere (announcement bar, header, contact strip, footer).
- Hard trust stats and a Google review badge for social proof.
- Consultation-first, no-obligation language throughout.

## Structure

```
index.html      Page markup
css/style.css   Full stylesheet (design tokens, layout, responsive)
js/script.js    Mobile nav, scroll reveal, FAQ accordion, 2-step form, cookie notice
```

## Running locally

No build tools required — just serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8080
```

Then open the printed local URL in your browser.

## Notes / before going live

- Swap the hero background for a real interior photo (see Imagery treatment above).
- If you have a Neue Regrade license, add it via `@font-face` and update `--font-head` in `css/style.css`.
- The lead form is client-side only (shows a success state on submit); wire it up to a real backend, CRM, or form service (e.g. Formspree, a serverless function) before launch.
- Pull exact hex values from DevTools against the live site if you want to double-check any of the estimates noted above.
