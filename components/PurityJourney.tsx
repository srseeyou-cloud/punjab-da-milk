import { ArrowRight, Check, ShieldCheck, Snowflake, Sprout, Truck, X } from "lucide-react";
import { brand } from "@/lib/brand";
import { journey } from "@/lib/data";

const icons = { sprout: Sprout, shield: ShieldCheck, snow: Snowflake, truck: Truck };

export function PurityJourney() {
  return (
    <section id="story" className="bg-cream-200 py-20 sm:py-28">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Our farm story · The purity journey</p>
            <h2 className="h2 mt-3">From our shed to your chai in under three hours.</h2>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-earth/75 lg:justify-self-end">
            We are a family farm in Punjab that got tired of not knowing what was in our own children&apos;s milk. So we
            kept our own Sahiwal and Murrah herd, built our own lab, and now deliver the same milk to you.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <li aria-hidden className="absolute bottom-8 left-[31px] top-8 border-l-2 border-dashed border-forest/20 md:hidden" />
          <li aria-hidden className="absolute left-8 right-8 top-8 hidden border-t-2 border-dashed border-forest/20 lg:block" />
          {journey.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.title} className="relative flex gap-5 lg:block">
                <span className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-full bg-forest text-cream ring-8 ring-cream-200 transition duration-500 hover:scale-110 hover:bg-forest-600">
                  <Icon className="h-7 w-7" aria-hidden />
                  <span className="num absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-ghee-light text-xs font-bold text-forest">
                    {i + 1}
                  </span>
                </span>
                <div className="lg:mt-6">
                  <p className="num text-sm font-semibold text-ghee-dark">{s.time}</p>
                  <h3 className="mt-1 font-display text-2xl text-forest">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-earth/75">{s.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
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
          <ul className="mt-8 grid grid-cols-3 gap-3">
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
