"use client";

import { useState } from "react";
import { CalendarDays, Check, Gift, MessageCircle, Minus, PauseCircle, Plus, RefreshCcw, Sparkles, Users } from "lucide-react";
import { brand, inr, waLink } from "@/lib/brand";
import { milkPrices, type MilkType } from "@/lib/data";
import { MilkBottle } from "./Illustrations";

type Freq = "daily" | "alternate" | "custom";
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const FREQS: { id: Freq; label: string; hint: string }[] = [
  { id: "daily", label: "Daily", hint: "30 deliveries" },
  { id: "alternate", label: "Alternate days", hint: "15 deliveries" },
  { id: "custom", label: "Custom days", hint: "Pick weekdays" },
];
const MONTHLY_DISCOUNT = 0.15;
/** Rough guide: about 250 ml a day per family member, rounded to the nearest half litre. */
const suggestLitres = (members: number) => Math.max(0.5, Math.round(members * 0.25 * 2) / 2);

export function PlanBuilder() {
  const [type, setType] = useState<MilkType>("cow");
  const [members, setMembers] = useState(4);
  const [qty, setQty] = useState(suggestLitres(4));
  const [freq, setFreq] = useState<Freq>("daily");
  const [days, setDays] = useState<number[]>([0, 2, 4, 6]);
  const [monthly, setMonthly] = useState(true);

  const perLitre = milkPrices[type].perLitre;
  const deliveries = freq === "daily" ? 30 : freq === "alternate" ? 15 : Math.round((days.length * 30) / 7);
  const perDelivery = perLitre * qty;
  const gross = perDelivery * deliveries;
  const saving = monthly ? Math.round(gross * MONTHLY_DISCOUNT) : 0;
  const total = gross - saving;
  const trialSaving = monthly ? brand.trialPrice : 0;
  const changeMembers = (m: number) => {
    setMembers(m);
    setQty(suggestLitres(m));
  };

  const toggleDay = (d: number) =>
    setDays((cur) => (cur.includes(d) ? (cur.length > 1 ? cur.filter((x) => x !== d) : cur) : [...cur, d].sort()));

  const schedule =
    freq === "custom" ? days.map((d) => WEEKDAYS[d]).join(", ") : FREQS.find((f) => f.id === freq)!.label;
  const message = `Hi ${brand.name}! I'd like to start a subscription:\n• ${milkPrices[type].name}, ${qty} L\n• ${schedule} (${deliveries} deliveries/month)\n• Family of ${members}\n• ${monthly ? "Monthly prepaid (15% off) + free trial pack" : "Pay per delivery"}\n• Estimated ${inr(total)}/month`;

  return (
    <section id="plan" className="relative overflow-hidden bg-forest py-20 text-cream sm:py-28">
      <div aria-hidden className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-forest-600 blur-3xl" />
      <div className="wrap relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:pt-6">
          <p className="eyebrow !text-ghee-light">Subscriptions</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.08] sm:text-5xl">Build your daily milk plan.</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-cream/75">
            Choose your milk, how much and how often. The price updates as you go, and you can change any of it later from
            WhatsApp.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              { icon: PauseCircle, t: "Pause anytime", d: "Going to Shimla? Skip days before 9 PM, no charge." },
              { icon: RefreshCcw, t: "Bottle swap every morning", d: "Leave yesterday's empties out. We collect them." },
              { icon: CalendarDays, t: "No lock-in", d: "Monthly plans renew only when you say so." },
            ].map(({ icon: Icon, t, d }) => (
              <li key={t} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream/10 text-ghee-light">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold">{t}</span>
                  <span className="text-sm text-cream/70">{d}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex items-center gap-4 rounded-2xl border border-ghee-light/30 bg-cream/5 p-5">
            <Sparkles className="h-6 w-6 shrink-0 text-ghee-light" aria-hidden />
            <p className="text-sm text-cream/85">
              Not sure yet? Start with the <b className="text-cream">3-Day Trial Pack for ₹{brand.trialPrice}</b>: three
              mornings of 1 L A2 milk, bottle deposit waived.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-cream p-5 text-ink shadow-lift sm:p-8">
          <fieldset>
            <legend className="text-sm font-semibold text-forest">1. Select milk type</legend>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {(Object.keys(milkPrices) as MilkType[]).map((m) => {
                const active = type === m;
                return (
                  <button
                    key={m}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setType(m)}
                    className={`flex items-center gap-3 rounded-2xl border-2 p-3 text-left transition sm:p-4 ${
                      active ? "border-forest bg-forest/[0.04]" : "border-forest/10 hover:border-forest/30"
                    }`}
                  >
                    <MilkBottle
                      className="h-16 w-7 shrink-0"
                      {...(m === "buffalo" ? { milk: "#FFF7E2", cap: "#2E7D32", label: "A+", sub: "BUFFALO", level: 100 } : {})}
                    />
                    <span className="min-w-0">
                      <span className="block font-semibold leading-tight text-forest">
                        {m === "cow" ? "A2 Cow Milk" : "Pure Buffalo Milk"}
                      </span>
                      <span className="num text-sm text-earth/70">{inr(milkPrices[m].perLitre)} / L</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6">
            <div className="flex items-center justify-between gap-3">
              <label htmlFor="members" className="text-sm font-semibold text-forest">
                2. Family members
              </label>
              <span className="num inline-flex items-center gap-1.5 rounded-full bg-forest/[0.06] px-3 py-1 text-sm font-semibold text-forest">
                <Users className="h-4 w-4" aria-hidden /> {members} {members === 1 ? "person" : "people"}
              </span>
            </div>
            <input
              id="members"
              type="range"
              min={1}
              max={10}
              value={members}
              onChange={(e) => changeMembers(Number(e.target.value))}
              aria-valuetext={`${members} family members`}
              className="mt-3 w-full cursor-pointer accent-forest"
            />
            <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border-2 border-forest/10 p-3">
              <span className="text-sm text-earth/70">
                Daily milk <span className="block text-xs text-earth/50">Suggested ~250 ml per person</span>
              </span>
              <span className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(0.5, q - 0.5))}
                  aria-label="Less milk"
                  className="grid h-9 w-9 place-items-center rounded-full border border-forest/15 text-forest hover:bg-forest/5"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="num w-16 text-center font-display text-2xl text-forest" aria-live="polite">
                  {qty} L
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(6, q + 0.5))}
                  aria-label="More milk"
                  className="grid h-9 w-9 place-items-center rounded-full border border-forest/15 text-forest hover:bg-forest/5"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </span>
            </div>
          </div>

          <fieldset className="mt-6">
            <legend className="text-sm font-semibold text-forest">3. Select frequency</legend>
            <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
              {FREQS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={freq === f.id}
                  onClick={() => setFreq(f.id)}
                  className={`rounded-xl border-2 px-2 py-2.5 text-center transition ${
                    freq === f.id ? "border-forest bg-forest/[0.04]" : "border-forest/10 hover:border-forest/30"
                  }`}
                >
                  <span className="block text-sm font-semibold text-forest">{f.label}</span>
                  <span className="block text-xs text-earth/60">{f.hint}</span>
                </button>
              ))}
            </div>
            {freq === "custom" && (
              <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Delivery days">
                {WEEKDAYS.map((d, i) => (
                  <button
                    key={d}
                    type="button"
                    aria-pressed={days.includes(i)}
                    onClick={() => toggleDay(i)}
                    className={`h-10 min-w-[3rem] rounded-full border px-3 text-sm font-semibold transition ${
                      days.includes(i)
                        ? "border-ghee bg-ghee-light text-forest"
                        : "border-forest/15 text-earth/70 hover:border-forest/40"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            )}
          </fieldset>

          <button
            type="button"
            role="switch"
            aria-checked={monthly}
            onClick={() => setMonthly((v) => !v)}
            className="mt-6 flex w-full items-center justify-between gap-4 rounded-2xl bg-ghee-light/25 px-4 py-3.5 text-left"
          >
            <span>
              <span className="block font-semibold text-forest">Save 15% + get the Trial Pack FREE</span>
              <span className="text-sm text-earth/70">Prepay for the month, pause days are credited back</span>
            </span>
            <span
              className={`relative h-7 w-12 shrink-0 rounded-full transition ${monthly ? "bg-forest" : "bg-earth/25"}`}
              aria-hidden
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-cream shadow transition-all ${monthly ? "left-6" : "left-1"}`}
              />
            </span>
          </button>

          <div className="mt-6 rounded-2xl border border-forest/10 bg-white p-5" aria-live="polite">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm text-earth/70">Your monthly estimate</p>
                <p className="num font-display text-5xl font-medium text-forest">
                  {inr(total)}
                  <span className="ml-1 font-sans text-base font-normal text-earth/60">/month</span>
                </p>
              </div>
              {saving > 0 && (
                <span className="num inline-flex items-center gap-1.5 rounded-full bg-forest/10 px-3 py-1 text-sm font-semibold text-forest">
                  <Check className="h-4 w-4" /> You save {inr(saving + trialSaving)}
                </span>
              )}
            </div>
            {trialSaving > 0 && (
              <p className="num mt-3 flex items-center gap-2 rounded-xl bg-ghee-light/30 px-3 py-2 text-sm font-medium text-earth">
                <Gift className="h-4 w-4 shrink-0 text-ghee-dark" aria-hidden />
                Free 3-Day Trial Pack included, worth {inr(trialSaving)}
              </p>
            )}
            <dl className="num mt-4 grid grid-cols-3 gap-3 border-t border-forest/10 pt-4 text-sm">
              <div>
                <dt className="text-earth/60">Per delivery</dt>
                <dd className="font-semibold text-earth">{inr(perDelivery)}</dd>
              </div>
              <div>
                <dt className="text-earth/60">Deliveries</dt>
                <dd className="font-semibold text-earth">{deliveries} / month</dd>
              </div>
              <div>
                <dt className="text-earth/60">Milk</dt>
                <dd className="font-semibold text-earth">{qty * deliveries} L</dd>
              </div>
            </dl>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a href={waLink(message)} target="_blank" rel="noreferrer" className="btn-primary">
              Start Daily Subscription
            </a>
            <a
              href={waLink(`Hi ${brand.name}! I'd like the 3-Day Trial Pack @ ₹${brand.trialPrice}.`)}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <MessageCircle className="h-4 w-4" /> Try 3 days @ ₹{brand.trialPrice}
            </a>
          </div>
          <p className="mt-3 text-center text-xs text-earth/55">
            One-time refundable deposit of ₹50 per bottle. Prices include delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
