"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, ShieldCheck, Snowflake, Sprout, Truck, X } from "lucide-react";
import { brand } from "@/lib/brand";
import { images, journey } from "@/lib/data";
import { Photo } from "./Photo";

const icons = { sprout: Sprout, shield: ShieldCheck, snow: Snowflake, truck: Truck };

export function PurityJourney() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  // Walk through the morning on its own until the visitor picks a step.
  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % journey.length), 3800);
    return () => clearInterval(t);
  }, [auto]);

  const pick = (i: number) => {
    setAuto(false);
    setActive(i);
  };
  const step = journey[active];
  const StepIcon = icons[step.icon];

  return (
    <section id="story" className="bg-cream-200 py-20 sm:py-28">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">From farm to doorstep</p>
            <h2 className="h2 mt-3">From our shed to your chai in three hours.</h2>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-earth/75 lg:justify-self-end">
            We are a family farm in Punjab that got tired of not knowing what was in our own children&apos;s milk. So we
            kept our own Sahiwal and Murrah herd, built our own lab, and now deliver the same milk to you.
          </p>
        </div>

        <div className="mt-12 rounded-[2rem] border border-forest/10 bg-white p-4 shadow-soft sm:p-6">
          <div role="tablist" aria-label="Morning timeline" className="grid grid-cols-4 gap-2">
            {journey.map((s, i) => {
              const Icon = icons[s.icon];
              const on = i === active;
              return (
                <button
                  key={s.time}
                  type="button"
                  role="tab"
                  id={`step-${i}`}
                  aria-selected={on}
                  aria-controls="step-panel"
                  onClick={() => pick(i)}
                  className={`group relative flex flex-col items-center gap-2 rounded-2xl px-1 py-3 text-center transition sm:flex-row sm:gap-3 sm:px-4 sm:text-left ${
                    on ? "bg-forest text-cream shadow-lift" : "text-forest hover:bg-forest/5"
                  }`}
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition sm:h-12 sm:w-12 ${
                      on ? "bg-ghee text-forest" : "bg-forest/[0.07]"
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="num block text-xs font-bold sm:text-sm">{s.time}</span>
                    <span className={`hidden text-sm sm:block ${on ? "text-cream/80" : "text-earth/70"}`}>{s.title}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mx-2 mt-4 h-1 overflow-hidden rounded-full bg-forest/10" aria-hidden>
            <div
              className="h-full rounded-full bg-ghee transition-all duration-700"
              style={{ width: `${((active + 1) / journey.length) * 100}%` }}
            />
          </div>

          <div
            id="step-panel"
            role="tabpanel"
            aria-labelledby={`step-${active}`}
            key={active}
            className="grid animate-rise gap-6 p-2 pt-8 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8 sm:p-6"
          >
            <span className="grid h-20 w-20 place-items-center rounded-[1.5rem] bg-ghee-light/40 text-forest">
              <StepIcon className="h-9 w-9" aria-hidden />
            </span>
            <div>
              <p className="num text-sm font-semibold text-ghee-dark">
                Step {active + 1} of {journey.length} · {step.time}
              </p>
              <h3 className="mt-1 font-display text-3xl font-semibold text-forest">{step.title}</h3>
              <p className="mt-2 max-w-2xl text-lg leading-relaxed text-earth/75">{step.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const compare = [
  { k: "Time from milking to you", pouch: "1 to 3 days", ours: "Under 3 hours" },
  { k: "Source", pouch: "Pooled from many villages", ours: "Our own herd, one farm" },
  { k: "Packaging", pouch: "Single-use plastic", ours: "Sterilised glass, reused" },
  { k: "Milk powder or added fat", pouch: "Often standardised", ours: "Never" },
  { k: "Lab report you can see", pouch: "No", ours: "Every batch, by QR" },
];

export function PurityPromise() {
  return (
    <section id="purity" className="bg-cream py-20 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <p className="eyebrow">Milk purity guarantee</p>
          <h2 className="h2 mt-3">Zero is the only number we accept.</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-earth/75">
            Every morning&apos;s milk goes through 26 tests in our on-farm lab before a single bottle is filled. If any
            test fails, that batch never leaves the farm.
          </p>
          <div className="relative mt-8 h-56 overflow-hidden rounded-[1.75rem] bg-forest-50 sm:h-64">
            <Photo
              src={images.farm.src}
              alt={images.farm.alt}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest backdrop-blur">
              Steel tanks · closed milking lines · cold chain
            </span>
          </div>
          <ul className="mt-5 grid grid-cols-3 gap-3">
            {["Detergent", "Urea", "Starch"].map((t) => (
              <li key={t} className="rounded-2xl border border-forest/10 bg-white p-4 text-center">
                <span className="num block font-display text-4xl text-forest sm:text-5xl">0%</span>
                <span className="mt-1 block text-sm font-medium text-earth/70">{t}</span>
              </li>
            ))}
          </ul>
          <a href="#trace" className="btn-primary mt-8">
            Check today&apos;s lab report <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="self-start overflow-x-auto rounded-[1.75rem] border border-forest/10 bg-white">
          <table className="w-full min-w-[30rem] text-left text-sm">
            <caption className="sr-only">Pouch milk compared with {brand.name}</caption>
            <thead>
              <tr className="border-b border-forest/10">
                <th scope="col" className="p-5 font-medium text-earth/60" />
                <th scope="col" className="p-5 font-semibold text-earth/70">Packet milk</th>
                <th scope="col" className="bg-forest p-5 font-display text-base font-medium text-cream">{brand.name}</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((r) => (
                <tr key={r.k} className="border-b border-forest/5 last:border-0">
                  <th scope="row" className="p-5 font-semibold text-earth">{r.k}</th>
                  <td className="p-5 text-earth/60">
                    <span className="flex items-start gap-2">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-red-700/60" aria-hidden /> {r.pouch}
                    </span>
                  </td>
                  <td className="bg-forest/[0.04] p-5 font-medium text-forest">
                    <span className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest-600" aria-hidden /> {r.ours}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
