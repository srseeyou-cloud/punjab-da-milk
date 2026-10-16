import { Play, Quote, Star } from "lucide-react";
import { brand } from "@/lib/brand";
import { testimonials } from "@/lib/data";

const initials = (n: string) =>
  n
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export function Testimonials() {
  const videos = testimonials.filter((t) => t.kind === "video");
  const quotes = testimonials.filter((t) => t.kind === "text");
  return (
    <section id="reviews" className="bg-cream py-20 sm:py-28">
      <div className="wrap">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Saade parivaar · Families who switched</p>
            <h2 className="h2 mt-3">&ldquo;Bilkul ghar ka doodh.&rdquo; Their words, not ours.</h2>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-forest/10 bg-white px-5 py-4 shadow-soft">
            <span className="num font-display text-5xl text-forest">{brand.rating}</span>
            <span>
              <span className="flex text-ghee" role="img" aria-label={`${brand.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </span>
              <span className="num mt-1 block text-sm text-earth/70">
                /5 rated by <b className="text-earth">{brand.families} families</b>
              </span>
            </span>
          </div>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {videos.map((t) => (
            <li
              key={t.name}
              className={`group relative flex min-h-[26rem] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${t.tone} p-6 text-cream`}
            >
              <div aria-hidden className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cream/10 transition duration-700 group-hover:scale-125" />
              {/* Video reviews are not recorded yet: show a static badge instead of a play button that does nothing. */}
              <span className="relative inline-flex items-center gap-2 self-start rounded-full bg-cream/95 py-1.5 pl-1.5 pr-3.5 text-xs font-semibold text-forest shadow-lift">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-forest text-cream" aria-hidden>
                  <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                </span>
                Video review coming soon
              </span>
              <div className="relative">
                <Quote className="h-7 w-7 text-ghee-light" aria-hidden />
                <p className="mt-3 font-display text-xl leading-snug sm:text-2xl">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-cream/15 text-sm font-semibold">
                    {initials(t.name) || "CN"}
                  </span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className="text-sm text-cream/70">{t.role}</span>
                  </span>
                </div>
              </div>
            </li>
          ))}
          {quotes.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-[1.75rem] border border-forest/10 bg-cream-200 p-6 transition duration-500 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <span className="flex text-ghee" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </span>
              <p className="mt-3 flex-1 leading-relaxed text-earth">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest font-semibold text-ghee-light"
                  aria-hidden
                >
                  {initials(t.name) || "CN"}
                </span>
                <span className="text-sm">
                  <b className="block text-forest">{t.name}</b>
                  <span className="text-earth/60">{t.role}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
