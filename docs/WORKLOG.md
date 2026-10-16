# Work log

Newest at the top. One entry per working session, by any person or AI tool.
Format: `YYYY-MM-DD · tool · branch` then what changed and what's left.

## 2026-10-16 · Claude · fix/launch-scan
- Launch scan: tested every button and form at 360–1440px (no errors, no sideways scroll).
- Fixed: missing favicon, added share image (`app/opengraph-image.tsx`), video cards no longer show a play button that did nothing, social icons hidden until real links are added, security headers, `npm run lint` (broken) replaced by `npm run typecheck`.
- **Left to do before launch:** real WhatsApp number, FSSAI, address, prices, reviews, lab data (all PLACEHOLDER in `lib/`). Netlify + DNS.

## 2026-10-16 · Claude · main
- Built the full one-page site (hero, plan calculator, products, purity promise, journey, batch tracer, reviews, FAQ, footer).
- Renamed brand to Punjab Da Milk, batch prefix PDM. Domain punjabdamilk.com set in `lib/brand.ts`, plus sitemap/robots.
- Added AGENTS.md / CLAUDE.md / GEMINI.md, CI build check, PR template.
- **Left to do:** replace every PLACEHOLDER (see README "Replace before launch"), set up Netlify + DNS, set up mailbox for hello@punjabdamilk.com.

## 2026-10-16 · Claude · docs/netlify-live
- First Netlify production deploy of `main` succeeded (Sourav's Netlify account, free plan). Every merge to `main` now auto-deploys.
- **Left to do:** connect punjabdamilk.com in Netlify Domain management + registrar DNS, replace PLACEHOLDERs (WhatsApp, FSSAI first).

## 2026-10-16 · Claude · feat/redesign
- Premium redesign on Sourav's brief: grass-green / butter-yellow palette (tokens in tailwind.config.ts), photo hero with new Hinglish headline, announcement bar "First Trial Pack FREE on 1st Monthly Subscription", trust counter cards (`TrustStats.tsx`), interactive 04:00–07:00 AM farm timeline, family-size slider in the plan calculator, product photos + quick-view subscribe popup (native `<dialog>`), lassi product, avatar review cards, new FAQ on delivery time, floating WhatsApp (desktop) and call button in the mobile bar.
- Photos are Unsplash URLs in `lib/data.ts`; `Photo.tsx` falls back to the SVG art if one fails to load.
- **Left to do:** real photos, WhatsApp/FSSAI/address/prices, real reviews (all still PLACEHOLDER).
