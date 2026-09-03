# SlickBlinds — Lead Page (Short Format)

A self-contained, static lead-generation landing page for **SlickBlinds**, built as plain HTML/CSS/JS (no build step) so it can be deployed anywhere — GitHub Pages, Netlify, Vercel, or any static host.

## Content

Page copy matches the client-approved "Lead Page (Short Format)" brief exactly — no additional sections, claims, stats, or testimonials beyond what's specified there:

1. **Hero** — "Custom Blinds & Shades in Houston, TX" / "Window Treatments Made for Your Home" + intro copy + "Get Your Free Consultation" CTA
2. **Everything You Need for Your Windows** — the 8 listed product types (custom blinds, Roller Shades, Dual View Zebra Shades, Thermacell Cellular Shades, Roman Shades, Drapes & Sheers, Estate Shutters, Motorized Window Treatments)
3. **One Simple Journey** — the 3-step process (Free Consultation → Precise Measurement → Expert Installation)
4. **Final CTA** — "Ready to Find the Right Window Treatments?" + "Start Your Window Treatment Journey"

The lead-capture form behind both CTAs (2-step: product type + zip → contact info) is a functional/UX element, not page copy — it fulfills what "Get Your Free Consultation" promises.

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
index.html            Page markup
css/style.css         Full stylesheet (design tokens, layout, responsive)
js/script.js          Mobile nav, scroll reveal, 2-step form, cookie notice
assets/hero-video.mp4 Hero background video (looping)
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
