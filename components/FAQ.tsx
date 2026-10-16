import { MessageCircle, Plus } from "lucide-react";
import { brand, waLink } from "@/lib/brand";
import { faqs } from "@/lib/data";

export function FAQ() {
  return (
    <section id="faq" className="bg-cream-200 py-20 sm:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow">Questions</p>
          <h2 className="h2 mt-3">Things families ask before switching.</h2>
          <div className="mt-8 rounded-2xl bg-forest p-6 text-cream">
            <p className="font-display text-xl">Still wondering about something?</p>
            <p className="mt-2 text-sm text-cream/75">
              Message us on WhatsApp. A real person from the farm replies, usually within the hour.
            </p>
            <a
              href={waLink(`Hi ${brand.name}, I have a question.`)}
              target="_blank"
              rel="noreferrer"
              className="btn-gold mt-5 !py-3 text-sm"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="divide-y divide-forest/10 rounded-[1.75rem] border border-forest/10 bg-white px-5 sm:px-7">
          {faqs.map((f, i) => (
            <details key={f.q} className="group py-1" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-forest [&::-webkit-details-marker]:hidden">
                <span className="text-lg">{f.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest/[0.06] transition duration-300 group-open:rotate-45 group-open:bg-ghee-light">
                  <Plus className="h-4 w-4" aria-hidden />
                </span>
              </summary>
              <p className="max-w-prose pb-5 pr-10 leading-relaxed text-earth/75">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
