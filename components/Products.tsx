"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Eye, Minus, Plus, Recycle, X } from "lucide-react";
import { brand, inr, waLink } from "@/lib/brand";
import { products } from "@/lib/data";
import { useBasket } from "./BasketContext";
import { ProductVisual } from "./Illustrations";
import { Photo } from "./Photo";

type Product = (typeof products)[number];
type Plan = "once" | "daily" | "alternate";
const PLANS: { id: Plan; label: string }[] = [
  { id: "once", label: "One time" },
  { id: "daily", label: "Daily" },
  { id: "alternate", label: "Alternate days" },
];

function Visual({ p, className }: { p: Product; className: string }) {
  const art = (
    <div className="grid h-full w-full place-items-center bg-cream-200">
      <ProductVisual visual={p.visual} className="h-3/4" />
    </div>
  );
  return p.image ? <Photo src={p.image.src} alt={p.image.alt} className={className} fallback={art} /> : art;
}

export function Products() {
  const { toggle, has } = useBasket();
  const [open, setOpen] = useState<Product | null>(null);

  return (
    <section id="products" className="bg-cream py-20 sm:py-28">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">The daily basket</p>
            <h2 className="h2 mt-3">Fresh from our farm, made the old Punjabi way.</h2>
          </div>
          <p className="max-w-sm text-earth/70">
            Everything is made from the same morning&apos;s milk. Add what you like and it rides along with your daily
            bottle.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const added = has(p.id);
            return (
              <li
                key={p.id}
                className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white transition duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <button
                  type="button"
                  onClick={() => setOpen(p)}
                  className="relative block h-60 overflow-hidden text-left"
                  aria-label={`Quick view: ${p.name}`}
                >
                  <Visual p={p} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  {p.tag && (
                    <span className="absolute left-3 top-3 rounded-full bg-ghee px-3 py-1 text-xs font-bold text-forest shadow-soft">
                      {p.tag}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-forest opacity-0 shadow-soft backdrop-blur transition group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Eye className="h-3.5 w-3.5" aria-hidden /> Quick view
                  </span>
                </button>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-semibold leading-snug text-forest sm:text-2xl">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-earth/70">{p.note}</p>
                  <dl className="mt-4 flex flex-wrap gap-2 text-xs">
                    <div className="rounded-full bg-ghee-light/30 px-3 py-1">
                      <dt className="inline font-semibold text-earth">Fat </dt>
                      <dd className="num inline text-earth">{p.fat}</dd>
                    </div>
                    <div className="rounded-full bg-forest/[0.06] px-3 py-1 text-earth">
                      <dt className="sr-only">Pack</dt>
                      <dd>{p.pack}</dd>
                    </div>
                  </dl>
                  <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                    <p className="num">
                      <span className="font-display text-3xl font-semibold text-forest">{inr(p.price)}</span>
                      <span className="ml-1 text-sm text-earth/60">{p.unit}</span>
                    </p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => toggle(p.id)}
                        aria-pressed={added}
                        aria-label={added ? `Remove ${p.name} from basket` : `Add ${p.name} to basket`}
                        className={`grid h-11 w-11 place-items-center rounded-full border transition ${
                          added ? "border-ghee bg-ghee-light text-forest" : "border-forest/20 text-forest hover:bg-forest/5"
                        }`}
                      >
                        {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </button>
                      <button
                        type="button"
                        onClick={() => setOpen(p)}
                        className="rounded-full bg-forest px-4 py-2.5 text-sm font-semibold text-cream transition hover:bg-forest-600"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <QuickView product={open} onClose={() => setOpen(null)} />
    </section>
  );
}

function QuickView({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const { toggle, has } = useBasket();
  const [qty, setQty] = useState(1);
  const [plan, setPlan] = useState<Plan>("daily");

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (product) {
      setQty(1);
      setPlan("daily");
      if (!d.open) d.showModal();
    } else if (d.open) d.close();
  }, [product]);

  if (!product) return <dialog ref={ref} onClose={onClose} />;
  const p = product;
  const planLabel = PLANS.find((x) => x.id === plan)!.label;
  const msg = `Hi ${brand.name}! I'd like to order:\n• ${p.name} (${p.pack}) × ${qty}\n• ${planLabel}\n• ${inr(p.price * qty)} ${plan === "once" ? "total" : "per delivery"}`;

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="qv-title"
      className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-[2rem] bg-white p-0 text-ink shadow-lift backdrop:bg-forest/60 backdrop:backdrop-blur-sm"
    >
      <div className="grid sm:grid-cols-2">
        <div className="relative h-56 sm:h-full sm:min-h-[26rem]">
          <Visual p={p} className="h-full w-full object-cover" />
          {p.tag && (
            <span className="absolute left-4 top-4 rounded-full bg-ghee px-3 py-1 text-xs font-bold text-forest">{p.tag}</span>
          )}
        </div>
        <div className="flex flex-col p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 id="qv-title" className="font-display text-2xl font-semibold leading-tight text-forest">
              {p.name}
            </h3>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest/[0.06] text-forest hover:bg-forest/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-earth/75">{p.note}</p>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-earth/60">
            <Recycle className="h-3.5 w-3.5 shrink-0" aria-hidden /> {p.deposit}
          </p>

          <fieldset className="mt-5">
            <legend className="text-sm font-semibold text-forest">How often?</legend>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {PLANS.map((x) => (
                <button
                  key={x.id}
                  type="button"
                  aria-pressed={plan === x.id}
                  onClick={() => setPlan(x.id)}
                  className={`rounded-xl border-2 px-2 py-2 text-sm font-semibold transition ${
                    plan === x.id ? "border-forest bg-forest/[0.05] text-forest" : "border-forest/10 text-earth/70 hover:border-forest/30"
                  }`}
                >
                  {x.label}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-sm font-semibold text-forest">Quantity</span>
            <span className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="grid h-9 w-9 place-items-center rounded-full border border-forest/15 text-forest hover:bg-forest/5"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="num w-8 text-center font-display text-xl text-forest" aria-live="polite">
                {qty}
              </span>
              <button
                type="button"
                onClick={() => setQty((q) => Math.min(10, q + 1))}
                aria-label="Increase quantity"
                className="grid h-9 w-9 place-items-center rounded-full border border-forest/15 text-forest hover:bg-forest/5"
              >
                <Plus className="h-4 w-4" />
              </button>
            </span>
          </div>

          <p className="num mt-5 border-t border-forest/10 pt-4">
            <span className="font-display text-3xl font-semibold text-forest">{inr(p.price * qty)}</span>
            <span className="ml-1 text-sm text-earth/60">{plan === "once" ? "total" : "per delivery"}</span>
          </p>

          <div className="mt-5 grid gap-2">
            <a href={waLink(msg)} target="_blank" rel="noreferrer" className="btn-primary">
              {plan === "once" ? "Order on WhatsApp" : "Subscribe on WhatsApp"}
            </a>
            <button
              type="button"
              onClick={() => {
                if (!has(p.id)) toggle(p.id);
                onClose();
              }}
              className="btn-ghost"
            >
              {has(p.id) ? "Already in your basket" : "Add to daily basket"}
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
