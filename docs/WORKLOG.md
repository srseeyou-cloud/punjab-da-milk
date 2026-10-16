# Work log

Newest at the top. One entry per working session, by any person or AI tool.
Format: `YYYY-MM-DD · tool · branch` then what changed and what's left.

## 2026-10-16 · Claude · fix/launch-scan
- Launch scan: tested every button and form at 360–1440px (no errors, no sideways scroll).
- Fixed: missing favicon, added share image (`app/opengraph-image.tsx`), video cards no longer show a play button that did nothing, social icons hidden until real links are added, security headers, `npm run lint` (broken) replaced by `npm run typecheck`.
- **Left to do before launch:** real WhatsApp number, FSSAI, address, prices, reviews, lab data (all PLACEHOLDER in `lib/`). Vercel + DNS.

## 2026-10-16 · Claude · main
- Built the full one-page site (hero, plan calculator, products, purity promise, journey, batch tracer, reviews, FAQ, footer).
- Renamed brand to Punjab Da Milk, batch prefix PDM. Domain punjabdamilk.com set in `lib/brand.ts`, plus sitemap/robots.
- Added AGENTS.md / CLAUDE.md / GEMINI.md, CI build check, PR template.
- **Left to do:** replace every PLACEHOLDER (see README "Replace before launch"), set up Vercel + DNS, set up mailbox for hello@punjabdamilk.com.
