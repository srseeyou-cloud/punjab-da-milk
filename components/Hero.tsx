"use client";

import { useId } from "react";
import { ArrowRight, BadgeCheck, Calculator, Clock, FlaskConical, Leaf, Milk } from "lucide-react";
import { brand, waLink } from "@/lib/brand";
import { images } from "@/lib/data";
import { GheePot, MilkBottle } from "./Illustrations";
import { Photo } from "./Photo";

const badges = [
  { icon: Leaf, text: "No Hormones, No Oxytocin" },
  { icon: Milk, text: "Glass Bottles Only" },
  { icon: FlaskConical, text: "26+ Daily Purity Tests" },
  { icon: Clock, text: "Cold-Chain at 4°C" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-forest text-cream">
      <Photo
        src={images.hero.src}
        alt=""
        eager
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-forest/40" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-forest/70 to-transparent" />
      {/* soft floating milk splashes */}
      <div aria-hidden className="pointer-events-none absolute -left-16 top-24 h-56 w-56 animate-splash rounded-full bg-cream/10 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-20 right-1/3 h-40 w-40 animate-splash-late rounded-full bg-ghee-light/20 blur-2xl" />

      <div className="wrap relative grid items-center gap-12 pb-24 pt-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-32 lg:pt-16">
        <div className="animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-3.5 py-1.5 text-xs font-semibold text-cream backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ghee-light/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ghee-light" />
            </span>
            Milked at 4 AM. At your door before {brand.deliveryCutoff}.
          </p>

          <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            100% Shuddh, Farm-Fresh Milk.{" "}
            <em className="font-medium italic text-ghee-light">Seedhe Punjab ke kheton se aapke ghar.</em>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
            Zero adulteration, zero chemicals, cold-chain delivered within hours of milking. From our own A2 Sahiwal cows
            &amp; Murrah buffaloes, in sterilised glass bottles.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={waLink(`Hi ${brand.name}! I'd like to start the 3-Day Trial Pack @ ₹${brand.trialPrice}.`)}
              target="_blank"
              rel="noreferrer"
              className="btn-gold group animate-pulse-ring text-base"
            >
              Start 3-Day Trial
              <span className="rounded-full bg-forest px-2 py-0.5 text-sm font-bold text-cream">₹{brand.trialPrice}</span>
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#plan"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-6 py-3.5 text-base font-semibold text-cream backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-cream/15"
            >
              <Calculator className="h-5 w-5" /> Calculate Your Daily Milk Plan
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {badges.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-cream/90">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cream/10 text-ghee-light">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="relative h-[420px] overflow-hidden rounded-[2.5rem] shadow-lift ring-1 ring-cream/20 sm:h-[520px]">
            <Photo
              src={images.milkPour.src}
              alt={images.milkPour.alt}
              eager
              className="h-full w-full object-cover"
              fallback={<HeroVisual />}
            />
          </div>
          {/* live batch chip */}
          <div className="absolute -bottom-6 left-4 w-56 animate-float rounded-2xl border border-white/50 bg-white/85 p-3.5 text-earth shadow-lift backdrop-blur-md sm:-left-8">
            <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-forest-600">
              <span>Today&apos;s batch</span>
              <span className="rounded-full bg-forest/10 px-2 py-0.5 font-mono normal-case tracking-normal">{brand.batchPrefix}-0824</span>
            </div>
            <div className="num mt-2 flex items-baseline gap-4 text-sm">
              <span>
                <b className="font-display text-xl text-forest">4.2%</b> FAT
              </span>
              <span>
                <b className="font-display text-xl text-forest">8.7%</b> SNF
              </span>
            </div>
            <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-forest-600">
              <BadgeCheck className="h-3.5 w-3.5" /> 0 adulterants detected
            </p>
          </div>
          <div className="absolute -top-4 right-4 hidden animate-float-late items-center gap-2 rounded-full bg-ghee px-4 py-2 text-sm font-bold text-forest shadow-lift sm:flex">
            <Clock className="h-4 w-4" aria-hidden /> Before {brand.deliveryCutoff}
          </div>
        </div>
      </div>

      <svg
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-12 w-[200%] animate-[marquee_22s_linear_infinite] text-cream sm:h-16"
        viewBox="0 0 2400 64"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0 32C200 0 400 0 600 32S1000 64 1200 32 1600 0 1800 32 2200 64 2400 32V64H0Z"
        />
      </svg>
    </section>
  );
}

function HeroVisual() {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  return (
    <div className="relative h-full w-full overflow-hidden bg-forest-600">
      {/* sun */}
      <div aria-hidden className="absolute left-[40%] top-[14%] h-24 w-24 rounded-full bg-ghee-light/90 blur-[2px] sm:h-32 sm:w-32" />
      <div aria-hidden className="absolute left-[34%] top-[8%] h-40 w-40 rounded-full bg-ghee-light/20 blur-2xl sm:h-52 sm:w-52" />

      {/* fields of Punjab: wheat, sarson and green fodder */}
      <svg aria-hidden className="absolute inset-x-0 bottom-0 w-full" viewBox="0 0 560 260" preserveAspectRatio="none">
        <path d="M0 70C140 30 300 40 560 90V260H0Z" fill="#2E7D32" />
        <path d="M0 120C160 80 360 96 560 140V260H0Z" fill="#FFD54F" opacity=".9" />
        <path d="M0 165C180 128 380 140 560 185V260H0Z" fill="#43A047" />
        <path d="M0 210C200 182 380 190 560 225V260H0Z" fill="#1B5E20" />
        {Array.from({ length: 14 }).map((_, i) => (
          <path
            key={i}
            d={`M${i * 44 - 20} 260 Q ${i * 44 + 30} 200 ${i * 44 + 90} 172`}
            stroke="#1B5E20"
            strokeOpacity=".18"
            strokeWidth="2"
            fill="none"
          />
        ))}
      </svg>

      {/* rotating stamp */}
      <svg aria-hidden className="absolute left-5 top-5 h-28 w-28 animate-spin-slow sm:h-32 sm:w-32" viewBox="0 0 120 120">
        <defs>
          <path id={`r${id}`} d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" />
        </defs>
        <circle cx="60" cy="60" r="58" fill="none" stroke="#FFD54F" strokeOpacity=".5" strokeDasharray="2 4" />
        <text fontSize="10" fontWeight="700" letterSpacing="2.2" fill="#FDFCF7" fontFamily="Plus Jakarta Sans, sans-serif">
          <textPath href={`#r${id}`}>LAB TESTED DAILY · 26 POINTS ·</textPath>
        </text>
        <path d="M60 44c0 0-10 12-10 18a10 10 0 0 0 20 0c0-6-10-18-10-18Z" fill="#FFD54F" />
      </svg>

      <MilkBottle className="absolute bottom-[15%] left-[10%] w-[30%] animate-float drop-shadow-2xl" />
      <MilkBottle
        className="absolute bottom-[19%] right-[12%] w-[24%] animate-float-late drop-shadow-2xl"
        milk="#FFF7E2"
        cap="#2E7D32"
        label="A+"
        sub="BUFFALO"
        level={100}
        slow
      />
      <GheePot className="absolute bottom-[6%] left-[36%] w-[30%] drop-shadow-xl" />

    </div>
  );
}
