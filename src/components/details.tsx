import { MapPin, Share2 } from "lucide-react";
import { venue, whatsAppShareText, when } from "@/data/wedding";
import { Eyebrow, QuietButton, QuietLink } from "@/components/ornament";

function shareWhatsApp() {
  const text = whatsAppShareText(window.location.href);
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
}

const facts = [
  {
    label: "Time",
    title: "Between 9.30 AM & 10.30 AM",
    line: "",
  },
  {
    label: "Venue",
    title: venue.name,
    line: venue.place,
  },
] as const;

export function WeddingDetails() {
  return (
    <section id="wedding" className="section" aria-labelledby="wedding-title">
      <div className="mx-auto max-w-xl">
        <Eyebrow>The wedding</Eyebrow>
        <h2 id="wedding-title" className="mt-3 text-center font-serif text-4xl font-medium text-balance text-ink sm:text-5xl">
          {when.day}, {when.date}
        </h2>
        <p className="mt-2 text-center font-serif text-lg italic text-ink-soft">{when.malayalam}</p>

        <ul className="mt-10 border-t border-gold/40">
          {facts.map((fact) => (
            <li key={fact.label} className="border-b border-gold/40 py-5 text-center">
              <p className="font-serif text-sm font-medium tracking-widest text-ink-soft uppercase">
                {fact.label}
              </p>
              <p className="mt-1 font-serif text-2xl font-medium text-ink">{fact.title}</p>
              {fact.line ? (
                <p className="font-serif text-lg italic text-ink-soft">{fact.line}</p>
              ) : null}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
          <QuietButton onClick={shareWhatsApp}>
            <Share2 className="size-4" aria-hidden="true" />
            Share on WhatsApp
          </QuietButton>
          <QuietLink href="#venue">
            <MapPin className="size-4" aria-hidden="true" />
            Get directions
          </QuietLink>
        </div>
      </div>
    </section>
  );
}
