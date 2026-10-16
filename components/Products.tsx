"use client";

import { Check, Plus, Recycle } from "lucide-react";
import { inr } from "@/lib/brand";
import { products } from "@/lib/data";
import { useBasket } from "./BasketContext";
import { ProductVisual } from "./Illustrations";

const span: Record<string, string> = {
  "a2-cow": "lg:col-span-3",
  buffalo: "lg:col-span-3",
  ghee: "lg:col-span-2",
  paneer: "lg:col-span-2",
  dahi: "sm:col-span-2 lg:col-span-2",
};

export function Products() {
  const { toggle, has } = useBasket();
  return (
    <section id="products" className="bg-cream py-20 sm:py-28">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">The daily basket</p>
            <h2 className="h2 mt-3">Five things from our farm, made the old way.</h2>
          </div>
          <p className="max-w-sm text-earth/70">
            Everything is made from the same morning&apos;s milk. Add what you like to your basket and it rides along with
            your daily bottle.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {products.map((p) => {
            const added = has(p.id);
            const big = p.visual === "cow" || p.visual === "buffalo";
            return (
              <li
                key={p.id}
                className={`group flex flex-col rounded-[1.75rem] border border-forest/10 bg-white p-3 transition duration-500 hover:-translate-y-1.5 hover:shadow-lift ${span[p.id]}`}
              >
                <div
                  className={`relative grid place-items-center overflow-hidden rounded-[1.25rem] ${
                    big ? "h-64 bg-forest/[0.06]" : "h-52 bg-cream-200"
                  }`}
                >
                  {p.tag && (
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest">
                      {p.tag}
                    </span>
                  )}
                  <ProductVisual
                    visual={p.visual}
                    className={`transition duration-500 group-hover:-rotate-2 group-hover:scale-105 ${big ? "h-52" : "h-36"}`}
                  />
                </div>
                <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                  <h3 className="font-display text-xl font-medium leading-snug text-forest sm:text-2xl">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-earth/70">{p.note}</p>
                  <dl className="mt-4 flex flex-wrap gap-2 text-xs">
                    <div className="rounded-full bg-ghee-light/25 px-3 py-1">
                      <dt className="inline font-semibold text-earth">Fat </dt>
                      <dd className="num inline text-earth">{p.fat}</dd>
                    </div>
                    <div className="rounded-full bg-forest/[0.06] px-3 py-1 text-earth">
                      <dt className="sr-only">Pack</dt>
                      <dd>{p.pack}</dd>
                    </div>
                  </dl>
                  <p className="mt-3 flex items-center gap-1.5 text-xs text-earth/60">
                    <Recycle className="h-3.5 w-3.5 shrink-0" aria-hidden /> {p.deposit}
                  </p>
                  <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                    <p className="num">
                      <span className="font-display text-3xl text-forest">{inr(p.price)}</span>
                      <span className="ml-1 text-sm text-earth/60">{p.unit}</span>
                    </p>
                    <button
                      type="button"
                      onClick={() => toggle(p.id)}
                      aria-pressed={added}
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition duration-300 ${
                        added
                          ? "bg-ghee-light text-forest"
                          : "bg-forest text-cream hover:bg-forest-600 group-hover:shadow-soft"
                      }`}
                    >
                      {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      {added ? "In your basket" : "Add to Daily Basket"}
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
