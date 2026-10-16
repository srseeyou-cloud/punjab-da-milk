"use client";

import { useEffect, useState } from "react";
import { Menu, MessageCircle, ShoppingBasket, Truck, X } from "lucide-react";
import { brand, waLink } from "@/lib/brand";
import { Logo } from "./Illustrations";
import { useBasket } from "./BasketContext";

const links = [
  { href: "#story", label: "Our Farm Story" },
  { href: "#purity", label: "Milk Purity Guarantee" },
  { href: "#products", label: "Products" },
  { href: "#plan", label: "Subscriptions" },
  { href: "#trace", label: "Trace Your Batch" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { items } = useBasket();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-forest text-cream">
        <p className="wrap flex items-center justify-center gap-2 py-2 text-center text-[13px] font-medium">
          <Truck className="h-4 w-4 shrink-0 text-ghee-light" aria-hidden />
          <span>
            <span className="hidden sm:inline">Delivering fresh</span>
            <span className="sm:hidden">Fresh</span> before {brand.deliveryCutoff}
            <span className="mx-2 text-cream/40">|</span>
            <a href="#plan" className="underline decoration-ghee-light/60 underline-offset-4 hover:text-ghee-light">
              <span className="hidden sm:inline">Get a </span>3-Day Trial<span className="hidden sm:inline"> Pack</span> @ ₹{brand.trialPrice}
            </a>
          </span>
        </p>
      </div>

      <div
        className={`border-b backdrop-blur-md transition-colors duration-300 ${
          scrolled ? "border-forest/10 bg-cream/80 shadow-soft" : "border-transparent bg-cream/60"
        }`}
      >
        <nav className="wrap flex h-16 items-center gap-4 lg:h-[72px]" aria-label="Main">
          <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label={`${brand.name} home`}>
            <Logo className="h-9 w-9" />
            <span className="font-display text-xl font-semibold tracking-tight text-forest">{brand.name}</span>
          </a>

          <ul className="ml-4 hidden items-center gap-5 whitespace-nowrap xl:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-medium text-earth/80 transition hover:text-forest">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-2">
            <a
              href="#products"
              className="relative grid h-10 w-10 place-items-center rounded-full text-forest transition hover:bg-forest/5"
              aria-label={`Daily basket, ${items.length} items`}
            >
              <ShoppingBasket className="h-5 w-5" />
              {items.length > 0 && (
                <span className="num absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-ghee-light px-1 text-[11px] font-bold text-forest">
                  {items.length}
                </span>
              )}
            </a>
            <a
              href={waLink(`Hi ${brand.name}, I'd like to order fresh milk.`)}
              target="_blank"
              rel="noreferrer"
              aria-label="Order via WhatsApp"
              className="hidden h-10 items-center gap-2 whitespace-nowrap rounded-full border border-forest/20 px-3 text-sm font-semibold text-forest transition hover:-translate-y-0.5 hover:border-forest/40 hover:bg-white sm:inline-flex 2xl:px-4"
            >
              <MessageCircle className="h-4 w-4" /> <span className="hidden 2xl:inline">Order via WhatsApp</span>
            </a>
            <a href="#plan" className="btn-primary hidden whitespace-nowrap !px-5 !py-2.5 text-sm md:inline-flex">
              Start Daily Subscription
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full text-forest hover:bg-forest/5 xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div id="mobile-nav" className="border-t border-forest/10 xl:hidden">
            <ul className="wrap flex flex-col py-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 font-medium text-earth hover:bg-forest/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 grid gap-2 px-3 pb-2 sm:grid-cols-2">
                <a href="#plan" onClick={() => setOpen(false)} className="btn-primary">
                  Start Daily Subscription
                </a>
                <a
                  href={waLink(`Hi ${brand.name}, I'd like to order fresh milk.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <MessageCircle className="h-4 w-4" /> Order via WhatsApp
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
