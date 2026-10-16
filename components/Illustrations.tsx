"use client";

import { useId } from "react";

const uid = (s: string) => s.replace(/[^a-zA-Z0-9]/g, "");

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#1B4332" />
      <path d="M20 7.5C20 7.5 11 18 11 24.2a9 9 0 0 0 18 0C29 18 20 7.5 20 7.5Z" fill="#FDFCF7" />
      <path d="M20.2 31.2c-.6-5.4 2.4-9.6 7.6-10.4-.2 5.2-3.2 9-7.6 10.4Z" fill="#2D6A4F" />
      <path d="M20.6 30.4c1.6-2.8 3.6-5 6-6.6" stroke="#E9C46A" strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  );
}

const BOTTLE =
  "M44 30H76V68C76 86 102 96 102 124V252Q102 268 86 268H34Q18 268 18 252V124C18 96 44 86 44 68Z";

export function MilkBottle({
  milk = "#FFFDF6",
  cap = "#D4A373",
  label = "A2",
  sub = "COW MILK",
  level = 108,
  slow = false,
  className = "",
}: {
  milk?: string;
  cap?: string;
  label?: string;
  sub?: string;
  level?: number;
  slow?: boolean;
  className?: string;
}) {
  const id = uid(useId());
  return (
    <svg viewBox="0 0 120 280" className={className} role="img" aria-label={`${label} ${sub.toLowerCase()} in a glass bottle`}>
      <defs>
        <clipPath id={`c${id}`}>
          <path d={BOTTLE} />
        </clipPath>
        <linearGradient id={`g${id}`} x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".55" />
          <stop offset=".35" stopColor="#fff" stopOpacity="0" />
          <stop offset=".8" stopColor="#1B4332" stopOpacity=".08" />
          <stop offset="1" stopColor="#fff" stopOpacity=".35" />
        </linearGradient>
      </defs>
      <g clipPath={`url(#c${id})`}>
        <rect width="120" height="280" fill="#E6EFEA" opacity=".55" />
        <g className={slow ? "animate-wave-slow" : "animate-wave"}>
          <path d={`M0 ${level}q15 -7 30 0t30 0t30 0t30 0t30 0t30 0V280H0Z`} fill={milk} />
        </g>
        <rect width="120" height="280" fill={`url(#g${id})`} />
      </g>
      <path d={BOTTLE} fill="none" stroke="#1B4332" strokeOpacity=".22" strokeWidth="2" />
      <path d="M28 132V238" stroke="#fff" strokeOpacity=".8" strokeWidth="5" strokeLinecap="round" />
      <rect x="39" y="8" width="42" height="26" rx="6" fill={cap} />
      <rect x="39" y="26" width="42" height="6" fill="#1B4332" opacity=".18" />
      <rect x="30" y="166" width="60" height="62" rx="8" fill="#1B4332" />
      <text x="60" y="198" textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontSize="22" fontWeight="600" fill="#E9C46A">
        {label}
      </text>
      <text x="60" y="216" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="7.5" fontWeight="700" letterSpacing="1.2" fill="#FDFCF7">
        {sub}
      </text>
    </svg>
  );
}

export function GheePot({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 150" className={className} role="img" aria-label="Bilona ghee in a clay pot">
      <ellipse cx="80" cy="140" rx="52" ry="7" fill="#1B4332" opacity=".12" />
      <path d="M42 40C18 58 16 110 50 132Q80 146 110 132C144 110 142 58 118 40Z" fill="#B66A3A" />
      <path d="M42 40C18 58 16 110 50 132Q80 146 110 132C126 121 133 104 134 88C116 104 64 110 26 92C28 110 36 124 50 132" fill="#9A5430" opacity=".55" />
      <path d="M30 78Q80 98 130 78" stroke="#F2EADA" strokeOpacity=".7" strokeWidth="3" fill="none" />
      <path d="M33 92Q80 112 127 92" stroke="#F2EADA" strokeOpacity=".4" strokeWidth="2" strokeDasharray="2 6" fill="none" strokeLinecap="round" />
      <ellipse cx="80" cy="40" rx="42" ry="11" fill="#8E4B29" />
      <ellipse cx="80" cy="40" rx="34" ry="7.5" fill="#E9C46A" />
      <ellipse cx="72" cy="38" rx="12" ry="2.5" fill="#fff" opacity=".45" />
      <path d="M52 60c4 18 2 40-4 56" stroke="#fff" strokeOpacity=".25" strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function Cube({ x, y, s }: { x: number; y: number; s: number }) {
  const h = s * 0.42;
  return (
    <g>
      <path d={`M${x} ${y}l${s / 2} ${-h / 2}l${s / 2} ${h / 2}l${-s / 2} ${h / 2}Z`} fill="#FFFDF4" />
      <path d={`M${x} ${y}v${s * 0.62}l${s / 2} ${h / 2}v${-s * 0.62}Z`} fill="#F4EBD3" />
      <path d={`M${x + s} ${y}v${s * 0.62}l${-s / 2} ${h / 2}v${-s * 0.62}Z`} fill="#E8DCBC" />
    </g>
  );
}

export function Paneer({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 150" className={className} role="img" aria-label="Fresh malai paneer on a banana leaf">
      <ellipse cx="80" cy="136" rx="58" ry="7" fill="#1B4332" opacity=".12" />
      <path d="M12 112C40 72 120 66 150 100C118 132 44 138 12 112Z" fill="#2D6A4F" />
      <path d="M14 112C60 100 110 98 148 100" stroke="#1B4332" strokeWidth="2" fill="none" />
      <Cube x={34} y={78} s={44} />
      <Cube x={80} y={74} s={44} />
      <Cube x={57} y={52} s={44} />
    </svg>
  );
}

export function Dahi({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 150" className={className} role="img" aria-label="Farm curd set in a clay kulhad">
      <ellipse cx="80" cy="140" rx="44" ry="6" fill="#1B4332" opacity=".12" />
      <path d="M34 42H126L112 130Q80 142 48 130Z" fill="#B66A3A" />
      <path d="M112 130Q80 142 48 130L44 104Q80 116 116 104Z" fill="#9A5430" opacity=".6" />
      <ellipse cx="80" cy="42" rx="46" ry="11" fill="#8E4B29" />
      <ellipse cx="80" cy="42" rx="39" ry="8" fill="#FFFDF6" />
      <path d="M58 41q8-4 16 0t16 0" stroke="#EDE3CC" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M50 58l6 62" stroke="#fff" strokeOpacity=".25" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function ProductVisual({ visual, className = "" }: { visual: string; className?: string }) {
  switch (visual) {
    case "cow":
      return <MilkBottle className={className} />;
    case "buffalo":
      return <MilkBottle className={className} milk="#FFF7E2" cap="#2D6A4F" label="A+" sub="BUFFALO" level={100} slow />;
    case "ghee":
      return <GheePot className={className} />;
    case "paneer":
      return <Paneer className={className} />;
    default:
      return <Dahi className={className} />;
  }
}

/** Decorative grid that stands in for the QR code printed on each bottle cap. */
export function PseudoQR({ seed, className = "" }: { seed: string; className?: string }) {
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const cells: [number, number][] = [];
  for (let y = 0; y < 17; y++)
    for (let x = 0; x < 17; x++) {
      const inFinder = (x < 5 && y < 5) || (x > 11 && y < 5) || (x < 5 && y > 11);
      if (inFinder) continue;
      h = (h * 1103515245 + 12345) >>> 0;
      if ((h >>> 16) % 2) cells.push([x, y]);
    }
  const finder = (x: number, y: number) => (
    <g key={`${x}${y}`}>
      <rect x={x} y={y} width="5" height="5" fill="#1B4332" />
      <rect x={x + 1} y={y + 1} width="3" height="3" fill="#fff" />
      <rect x={x + 1.75} y={y + 1.75} width="1.5" height="1.5" fill="#1B4332" />
    </g>
  );
  return (
    <svg viewBox="-1 -1 19 19" className={className} role="img" aria-label="Batch QR code">
      <rect x="-1" y="-1" width="19" height="19" fill="#fff" />
      {finder(0, 0)}
      {finder(12, 0)}
      {finder(0, 12)}
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#1B4332" />
      ))}
    </svg>
  );
}
