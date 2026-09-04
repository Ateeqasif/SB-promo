# SlickBlinds — Katy & Cinco Ranch Landing Page

A self-contained, static lead-generation landing page for **SlickBlinds**, built as plain HTML/CSS/JS (no build step) so it can be deployed anywhere — GitHub Pages, Netlify, Vercel, or any static host.

## Content

Built from the "landing_pages_paid_ads.docx" brief (which specs six geo-targeted paid-ads pages: Katy/Cinco Ranch, Richmond/Rosenberg, Cypress/Bridgeland, each with a base + motorization variant). Only the Katy/Cinco Ranch base page is built — ask if you want the other five added. Sections, in order, all copy verbatim from the brief:

1. **Hero** — "Custom Blinds & Shades in Katy & Cinco Ranch" / "Window Treatments Made for Your Home, Your Light, Your Life"
2. **Custom Blinds & Shades for Katy Homes** — the 9 listed product types
3. **Designed Around Katy's Light** — glare/heat/privacy editorial
4. **Custom Means More Than Choosing a Color** — "Measure. Understand. Recommend." process framing
5. **Motorization for Hard-to-Reach Windows and Everyday Comfort** — Gamana Tech callout
6. **Final CTA** — "Your Katy Home. Your Windows. A More Thoughtful Fit." + "Book Your Free In-Home Consultation"
7. **Local FAQs: Katy & Cinco Ranch** — 10-question accordion

The lead-capture form behind both CTAs (2-step: product type + zip → contact info) is a functional/UX element, not page copy.

## `short.html` — condensed paid-ads landing page

A second, much shorter page for driving paid traffic straight to a quote, modeled on high-converting competitor patterns (3 Day Blinds, Stoneside): no navigation distractions, tight benefit-led copy, and a CTA in every section aligned to what that section just said. Three sections total:

1. **Hero** — headline + one-line trust statement + the same 2-step quote form, CTA: "Get My Free Quote"
2. **Why Katy Homeowners Choose SlickBlinds** — a 4-icon benefit strip (custom fit, in-home consultation, motorization, warranty), CTA: "See what fits your windows"
3. **Final CTA** — urgency close over the journey video background, CTA: "Book My Free Consultation" + a phone fallback

Shares `css/style.css`, `js/script.js`, and both video assets with `index.html`; header/footer are the same chrome, with footer category links pointing back into `index.html`'s fuller content (products, motorization, FAQ) since this page doesn't carry that detail itself.

## Brand reference

Colors, logo, and typography match the official SlickBlinds brand reference sheet (verified 03 Sep 2026):

**Colors** (exact hex from brand sheet)

| Token | Hex | Use |
|---|---|---|
| Logo orange | `#F18605` | Logo border, accent tags |
| Digital orange | `#F08605` | Announcement bar gradient end |
| Orange dark | `#DF6C07` | Announcement bar gradient start, hovers |
| Ink | `#202428` | Headings, primary CTA fill |
| Body slate | `#6D767E` | Body copy |
| On-dark | `#F9FAFB` | Text on dark/CTA fills |
| Warm surface | `#FFF7E0` | Product tag chips |
| Border | `#CED4DA` | Hairlines, input borders |

**Typography**

- Headings: **Neue Regrade** (ExtraBold 800) — this is a paid/commercial font not available via Google Fonts, so **Manrope** (ExtraBold 800, geometric, tight tracking) is used as the closest freely-licensed fallback. Swap in Neue Regrade via `@font-face` if you have a license.
- Body / navigation / buttons: **Montserrat** — matches the real brand exactly, loaded from Google Fonts.

**Logo** — recreated in CSS/HTML (not an image asset) per spec: `#F18605` border, `#212529` wordmark ("SLICK" regular + "BLINDS" ExtraBold), 10px radius. A dark variant (`.logo-dark`, wordmark `#DEE2E6` on `#202428`) is used in the footer.

**Primary CTA button** — exact spec: fill `#202428`, text `#F9FAFB`, 10px radius, 10×22px padding, shadow `0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1)`.

**Imagery treatment** — real site uses premium interior photography with a black 70%→0% fade behind white hero copy. The hero (`.hero-bg` in `index.html`) is a looping background video at `assets/hero-video.mp4` (H.264/AAC), autoplay/muted/loop/playsinline so it plays automatically across desktop and mobile browsers. Swap in a different video or licensed photo the same way when available.

## Structure

```
index.html               Page markup (Katy & Cinco Ranch, full-length)
short.html                Condensed 3-section paid-ads landing page
css/style.css            Stylesheet (design tokens, layout, responsive)
js/script.js             Mobile nav, scroll reveal, FAQ accordion, 2-step form, cookie notice
assets/hero-video.mp4    Hero background video (looping)
assets/journey-video.mp4 Final-CTA background video (looping)
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

- If you have a Neue Regrade license, add it via `@font-face` and update `--font-head` in `css/style.css`.
- The lead form is client-side only (shows a success state on submit); wire it up to a real backend, CRM, or form service (e.g. Formspree, a serverless function) before launch.
- Pull exact hex values from DevTools against the live site if you want to double-check any of the estimates noted above.
