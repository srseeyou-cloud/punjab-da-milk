# Punjab Da Milk website

Working with an AI tool (Claude, Codex, Antigravity)? Start with [AGENTS.md](AGENTS.md) and [docs/WORKLOG.md](docs/WORKLOG.md).

Next.js 15 + Tailwind CSS 3 + Lucide icons. One page, fully responsive, built mobile-first.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run preview    # rebuilds preview/index.html (single-file preview)
```

## Where things live

| What | File |
| --- | --- |
| Brand name, phone, FSSAI, address, rating, socials | `lib/brand.ts` |
| Prices, products, lab batches, testimonials, FAQs, pin codes | `lib/data.ts` |
| Colours and fonts | `tailwind.config.ts`, `app/layout.tsx` |
| Sections | `components/` (order is set in `components/Site.tsx`) |

To rename the brand, change `name` and `batchPrefix` in `lib/brand.ts`. Nothing else needs editing.

## Replace before launch (all placeholders)

**lib/brand.ts**
- `whatsapp` and `phoneDisplay`: real WhatsApp business number
- `email` (hello@punjabdamilk.com is set, but needs a mailbox: Zoho Mail free plan or Google Workspace)
- `fssai`: 14-digit FSSAI licence number
- `farmAddress`
- `rating` and `families` ("4.9/5 by 15,000+ families"): only show real numbers
- `social` links (empty ones are hidden in the footer)

**lib/data.ts**
- All prices (milk ₹110/₹90 per L, ghee, paneer, dahi), bottle deposits, fat %
- `batches`: demo lab reports. Connect to the real lab system or remove the sample codes
- `testimonials`: invented names and quotes. Replace with real customers (with permission). The nutritionist quote must come from a real professional
- `pincodes`: real serviceable areas
- `journey` and FAQ answers: check timings (4:00 AM milking, 4:20 AM chilling) and claims match how the farm really works

**Claims to confirm with a food-law adviser**
- "26-point lab tested", "hormone-free", "A2", "zero-touch milking"
- Selling raw (unpasteurised) milk: the site tells customers to boil it; check FSSAI rules for your licence category

**Not built yet**
- Video testimonials (the cards show a play button but no video)
- Checkout / payments: all CTAs open WhatsApp with a pre-filled message
