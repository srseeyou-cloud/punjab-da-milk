"use client";

import { useEffect, useRef, useState } from "react";
import { FlaskConical, HeartHandshake, Recycle, ShieldCheck } from "lucide-react";
import { brand } from "@/lib/brand";

/** Splits "10,000+" into 10000 and "+" so the number can count up. */
const parse = (v: string) => {
  const m = v.match(/^([\d,]+)(.*)$/);
  return m ? { n: Number(m[1].replace(/,/g, "")), suffix: m[2] } : { n: 0, suffix: v };
};

const stats = [
  { icon: ShieldCheck, value: "0%", label: "Preservatives & hormones", sub: "No oxytocin, no antibiotics in milk" },
  { icon: FlaskConical, value: "26+", label: "Daily quality tests", sub: "Fat, SNF and adulteration, every batch" },
  // PLACEHOLDER: family count comes from lib/brand.ts and must be real before you promote the site
  { icon: HeartHandshake, value: brand.families, label: "Happy families", sub: "Across Punjab and NCR" },
  { icon: Recycle, value: "100%", label: "Glass bottle delivery", sub: "Sterilised, collected and reused" },
];

function Counter({ value }: { value: string }) {
  const { n, suffix } = parse(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(n);

  useEffect(() => {
    const el = ref.current;
    if (!el || n === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    // Show the real number until the card scrolls into view, then count up from zero.
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / 1400);
          setShown(Math.round(n * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [n]);

  return (
    <span ref={ref} className="num">
      {n === 0 ? value : shown.toLocaleString("en-IN") + suffix}
    </span>
  );
}

export function TrustStats() {
  return (
    <section aria-label="Our purity promise in numbers" className="bg-cream py-16 sm:py-20">
      <ul className="wrap grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
        {stats.map(({ icon: Icon, value, label, sub }) => (
          <li
            key={label}
            className="group rounded-[1.75rem] border border-forest/10 bg-white p-5 shadow-soft transition duration-500 hover:-translate-y-1.5 hover:shadow-lift sm:p-6"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ghee-light/30 text-forest transition group-hover:bg-ghee">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <p className="mt-4 font-display text-4xl font-semibold text-forest sm:text-5xl">
              <Counter value={value} />
            </p>
            <p className="mt-1 font-semibold text-earth">{label}</p>
            <p className="mt-1 text-sm text-earth/65">{sub}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
