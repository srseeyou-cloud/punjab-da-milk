"use client";

import { useState, type FormEvent } from "react";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, ShieldCheck, Youtube } from "lucide-react";
import { brand, waLink } from "@/lib/brand";
import { pincodes } from "@/lib/data";
import { Logo } from "./Illustrations";

const socials = [
  { href: brand.social.instagram, icon: Instagram, label: "Instagram" },
  { href: brand.social.facebook, icon: Facebook, label: "Facebook" },
  { href: brand.social.youtube, icon: Youtube, label: "YouTube" },
].filter((s) => s.href);

export function Footer() {
  const [pin, setPin] = useState("");
  const [result, setResult] = useState<null | { ok: boolean; text: string }>(null);

  const check = (e: FormEvent) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(pin)) return setResult({ ok: false, text: "Enter a 6-digit pin code." });
    const city = pincodes[pin];
    setResult(
      city
        ? { ok: true, text: `Yes! We deliver to ${pin} (${city}) every morning before ${brand.deliveryCutoff}.` }
        : { ok: false, text: `We're not in ${pin} yet. Message us and we'll tell you when we arrive.` },
    );
  };

  return (
    <footer className="bg-forest pb-28 text-cream lg:pb-0">
      <div className="wrap border-b border-cream/10 py-16 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Your first three bottles are <span className="italic text-ghee-light">₹{brand.trialPrice}</span>.
          </h2>
          <a href="#plan" className="btn-gold shrink-0 text-base">
            Try 3-Day Trial Pack
          </a>
        </div>
      </div>

      <div className="wrap grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr]">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <Logo className="h-10 w-10 rounded-full ring-1 ring-cream/30" />
            <span className="font-display text-2xl">{brand.name}</span>
          </a>
          <p className="mt-4 max-w-xs font-display text-lg italic text-cream/80">{brand.tagline}</p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-cream/20 bg-cream/5 px-4 py-3">
            <ShieldCheck className="h-7 w-7 text-ghee-light" aria-hidden />
            <span className="text-sm leading-tight">
              <span className="block text-xs uppercase tracking-wider text-cream/60">FSSAI Lic. No.</span>
              <span className="num font-mono font-semibold">{brand.fssai}</span>
            </span>
          </div>
        </div>

        <div className="space-y-5 text-sm">
          <p className="eyebrow !text-ghee-light">Visit &amp; contact</p>
          <p className="flex gap-3 text-cream/80">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-ghee-light" aria-hidden />
            <span>{brand.farmAddress}</span>
          </p>
          <p className="flex gap-3 text-cream/80">
            <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-ghee-light" aria-hidden />
            <span>
              WhatsApp helpline
              <a
                href={waLink(`Hi ${brand.name}!`)}
                target="_blank"
                rel="noreferrer"
                className="num block font-semibold text-cream hover:text-ghee-light"
              >
                {brand.phoneDisplay}
              </a>
              <span className="text-cream/55">6 AM to 9 PM, all days</span>
            </span>
          </p>
          <p className="flex gap-3 text-cream/80">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-ghee-light" aria-hidden />
            <span className="select-all">{brand.email}</span>
          </p>
        </div>

        <div className="md:col-span-2 lg:col-span-1">
          <p className="eyebrow !text-ghee-light">Do we deliver to you?</p>
          <form onSubmit={check} className="mt-4 flex gap-2 rounded-full bg-cream p-1.5">
            <label htmlFor="pincode" className="sr-only">
              Pin code
            </label>
            <input
              id="pincode"
              inputMode="numeric"
              maxLength={6}
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
              placeholder="Enter pin code, e.g. 141001"
              className="num min-w-0 flex-1 bg-transparent px-4 text-earth outline-none placeholder:text-earth/45"
            />
            <button type="submit" className="rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream hover:bg-forest-600">
              Check
            </button>
          </form>
          {result && (
            <p role="status" className={`mt-3 text-sm ${result.ok ? "text-ghee-light" : "text-cream/80"}`}>
              {result.text}
            </p>
          )}

          {socials.length > 0 && (
            <>
          <p className="eyebrow mt-10 !text-ghee-light">Follow the farm</p>
          <ul className="mt-4 flex gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 transition hover:-translate-y-0.5 hover:border-ghee-light hover:text-ghee-light"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
            </>
          )}
        </div>
      </div>

      <div className="wrap flex flex-col justify-between gap-2 border-t border-cream/10 py-6 text-xs text-cream/50 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {brand.name}. Raw milk: please boil before drinking.
        </p>
        <p>Made with care in Punjab.</p>
      </div>
    </footer>
  );
}

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-forest/10 bg-cream/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-xl gap-2">
        <a href="#plan" className="btn-primary flex-1 !py-3 text-sm">
          Try 3 days @ ₹{brand.trialPrice}
        </a>
        <a
          href={waLink(`Hi ${brand.name}, I'd like to order fresh milk.`)}
          target="_blank"
          rel="noreferrer"
          aria-label="Order via WhatsApp"
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#25D366] text-white"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

export function Marquee() {
  const words = ["100% Pure", "Untouched", "Lab-Tested", brand.shortTagline, "A2 Sahiwal", "Glass bottles", "Before 7 AM"];
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-forest/10 bg-cream py-4" aria-hidden>
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-display text-xl italic text-forest/80 sm:text-2xl">
        {[...row, ...row].map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            {w}
            <span className="h-2 w-2 rounded-full bg-ghee" />
          </span>
        ))}
      </div>
    </div>
  );
}
