"use client";

import { useState, type FormEvent } from "react";
import { BadgeCheck, FlaskConical, ScanLine, SearchX, Thermometer } from "lucide-react";
import { brand } from "@/lib/brand";
import { adulterantTests, batches, type Batch } from "@/lib/data";
import { PseudoQR } from "./Illustrations";

const samples = Object.keys(batches);

export function BatchTrace() {
  const [input, setInput] = useState(samples[0]);
  const [code, setCode] = useState(samples[0]);
  const batch = batches[code];

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setCode(input.trim().toUpperCase());
  };

  return (
    <section id="trace" className="relative overflow-hidden bg-forest-50 py-20 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow">Trace your batch</p>
          <h2 className="h2 mt-3">Scan the cap. See the lab report.</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-earth/75">
            Every bottle cap carries a batch code and QR. Enter it here to see exactly when your milk was milked, how cold
            it travelled, and what our lab found in it.
          </p>

          <form onSubmit={submit} className="mt-8 max-w-md">
            <label htmlFor="batch-code" className="text-sm font-semibold text-forest">
              Batch number
            </label>
            <div className="mt-2 flex gap-2 rounded-full border border-forest/15 bg-white p-1.5 shadow-soft focus-within:border-forest/40">
              <ScanLine className="ml-3 h-5 w-5 shrink-0 self-center text-forest-600" aria-hidden />
              <input
                id="batch-code"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`e.g. ${samples[0]}`}
                autoComplete="off"
                className="min-w-0 flex-1 bg-transparent font-mono text-base uppercase tracking-wider text-earth outline-none placeholder:normal-case placeholder:tracking-normal"
              />
              <button type="submit" className="btn-primary !px-5 !py-2.5 text-sm">
                Show report
              </button>
            </div>
          </form>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
            <span className="text-earth/60">Try a sample:</span>
            {samples.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setInput(s);
                  setCode(s);
                }}
                className={`rounded-full border px-3 py-1 font-mono text-xs transition ${
                  code === s ? "border-forest bg-forest text-cream" : "border-forest/20 text-forest hover:border-forest/50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div aria-live="polite">{batch ? <Report code={code} b={batch} /> : <NotFound code={code} />}</div>
      </div>
    </section>
  );
}

function Meter({ label, value, range }: { label: string; value: number; range: [number, number] }) {
  const [min, max] = range;
  const pct = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  return (
    <div className="rounded-2xl bg-cream-200 p-4">
      <div className="flex items-baseline justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-earth/60">{label}</span>
        <span className="num font-display text-3xl text-forest">{value.toFixed(1)}%</span>
      </div>
      <div className="relative mt-3 h-2 rounded-full bg-forest/10">
        <div className="absolute inset-y-0 left-0 rounded-full bg-forest-600" style={{ width: `${pct}%` }} />
        <div
          className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-forest shadow"
          style={{ left: `${pct}%` }}
        />
      </div>
      <div className="num mt-1.5 flex justify-between text-[11px] text-earth/50">
        <span>{min}%</span>
        <span>Healthy range</span>
        <span>{max}%</span>
      </div>
    </div>
  );
}

function Report({ code, b }: { code: string; b: Batch }) {
  return (
    <article className="rounded-[1.75rem] border border-forest/10 bg-white p-5 shadow-lift sm:p-7">
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-dashed border-forest/15 pb-5">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-earth/60">
            <FlaskConical className="h-4 w-4" aria-hidden /> Digital lab report
          </p>
          <h3 className="mt-1 font-display text-2xl text-forest">{b.product}</h3>
          <p className="mt-1 font-mono text-sm text-earth/70">Batch {code}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-forest px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-cream">
          <BadgeCheck className="h-4 w-4 text-ghee-light" /> Passed · Safe
        </span>
      </header>

      <dl className="num grid grid-cols-2 gap-x-4 gap-y-3 py-5 text-sm sm:grid-cols-3">
        <div>
          <dt className="text-earth/55">Milked</dt>
          <dd className="font-semibold text-earth">{b.milkedAt}</dd>
        </div>
        <div>
          <dt className="text-earth/55">Chilled to 4°C</dt>
          <dd className="font-semibold text-earth">{b.chilledAt}</dd>
        </div>
        <div>
          <dt className="text-earth/55">Dispatch temperature</dt>
          <dd className="flex items-center gap-1 font-semibold text-earth">
            <Thermometer className="h-4 w-4 text-forest-600" aria-hidden />
            {b.dispatchTemp}°C
          </dd>
        </div>
      </dl>

      <div className="grid gap-3 sm:grid-cols-2">
        <Meter label="FAT" value={b.fat} range={b.fatRange} />
        <Meter label="SNF" value={b.snf} range={b.snfRange} />
      </div>

      <ul className="mt-5 grid gap-x-6 sm:grid-cols-2">
        {adulterantTests.map((t) => (
          <li key={t} className="flex items-center justify-between border-b border-forest/5 py-2.5 text-sm">
            <span className="text-earth">{t}</span>
            <span className="num rounded-full bg-forest/[0.07] px-2.5 py-0.5 text-xs font-semibold text-forest-600">
              0% · Not detected
            </span>
          </li>
        ))}
      </ul>

      <footer className="mt-5 flex items-center gap-4">
        <PseudoQR seed={code} className="h-16 w-16 shrink-0 rounded-md" />
        <p className="text-xs leading-relaxed text-earth/60">
          Tested at the {b.lab}. 8 of 26 checks shown. Sample report for preview: real values will come from the {brand.name}{" "}
          lab system.
        </p>
      </footer>
    </article>
  );
}

function NotFound({ code }: { code: string }) {
  return (
    <div className="grid h-full min-h-[22rem] place-items-center rounded-[1.75rem] border-2 border-dashed border-forest/15 bg-white/60 p-8 text-center">
      <div>
        <SearchX className="mx-auto h-10 w-10 text-forest-600" aria-hidden />
        <h3 className="mt-4 font-display text-2xl text-forest">No batch called {code || "that"}</h3>
        <p className="mx-auto mt-2 max-w-xs text-earth/70">
          Batch codes look like {samples[0]} and are printed on the bottle cap. Check the code, or try one of the samples.
        </p>
      </div>
    </div>
  );
}
