# AGENTS.md — rules for every AI coding tool (Claude Code, Codex, Antigravity, Cursor, …)

This is the website for **Punjab Da Milk**, a farm-to-home dairy brand (A2 cow milk, buffalo milk,
bilona ghee, paneer, dahi) delivering in Punjab and NCR. Live domain: **punjabdamilk.com**.
The owner (Sourav) writes in Hinglish; site copy is English with Hinglish touches.

Several different AI tools work on this repo, one after another. Read this file and
`docs/WORKLOG.md` before you start, and leave the repo so the next tool can continue.

## Commands

```bash
npm install          # Node 22 (see .nvmrc)
npm run dev          # http://localhost:3000
npm run build        # MUST pass before every commit (also type-checks)
npm run preview      # optional: single-file preview at preview/index.html
```

## Stack and layout

- Next.js 15 (App Router) + React 19 + TypeScript (strict) + Tailwind CSS 3 + lucide-react
- One page. `app/page.tsx` → `components/Site.tsx`, which sets the section order.
- `lib/brand.ts` — brand name, domain, phone, WhatsApp, FSSAI, address, rating, socials. **Only place these live.**
- `lib/data.ts` — prices, products, lab batches, testimonials, FAQs, pin codes.
- `components/*.tsx` — one file per section. `Illustrations.tsx` holds all SVG art (bottles, ghee pot, logo).
- `tailwind.config.ts` — colour tokens: `forest` (#1B4332 / #2D6A4F), `cream` (#FDFCF7 / #FAF6ED),
  `ghee` (#D4A373 / #E9C46A), `ink`, `earth`. Fonts: Fraunces (`font-display`), Plus Jakarta Sans (`font-sans`).

## Rules

1. **Never hardcode** the brand name, phone, email, domain or prices in components. Import from `lib/brand.ts` / `lib/data.ts`.
2. Use the existing Tailwind tokens and the `.btn-primary`, `.btn-ghost`, `.btn-gold`, `.wrap`, `.eyebrow`, `.h2` classes in `app/globals.css`. No new colour hex values in components.
3. Mobile first: most orders come from phones. Check every change at 390px width; no horizontal scroll.
4. Keep it accessible: real `<button>`/`<a>`, labels on inputs, `aria-*` where state changes, respect `prefers-reduced-motion`.
5. Values marked `PLACEHOLDER` are not real. Don't invent new "facts" (ratings, certifications, lab numbers, testimonials); mark anything unverified as `PLACEHOLDER`.
6. Don't add dependencies unless clearly needed; say why in the PR.
7. Never commit secrets, `.env` files or API keys.
8. Small, focused changes. Don't reformat or rewrite files you aren't changing.

## Git workflow

- `main` is what goes live (Vercel deploys it). Never push straight to `main`.
- Branch per change: `feat/…`, `fix/…`, `content/…`. Open a pull request; CI (`.github/workflows/ci.yml`) must be green before merge.
- Commit messages: short imperative English, e.g. `Add Hindi FAQ section`.
- Before you stop (or if you're about to run out of limit), commit your work-in-progress to your branch,
  push it, and add a line to `docs/WORKLOG.md` saying what's done and what's left. The next tool picks up from there.
