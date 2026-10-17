import { MapPin, Navigation } from "lucide-react";
import { mapsDirectionsUrl, venue } from "@/data/wedding";
import { Eyebrow, PrimaryLink } from "@/components/ornament";

export function Venue() {
  return (
    <section id="venue" className="section" aria-labelledby="venue-title">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>The venue</Eyebrow>
        <h2 id="venue-title" className="mt-3 font-serif text-4xl font-medium text-balance text-ink sm:text-5xl">
          {venue.name}
        </h2>
        <p className="mt-2 font-serif text-xl italic text-ink-soft">{venue.place}</p>

        <a
          href={mapsDirectionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block overflow-hidden border border-gold/40"
        >
          <img
            src="/card/map.jpg"
            alt="Map around Hitech Auditorium, Pirayiri, Palakkad. Opens directions in Google Maps."
            width={598}
            height={619}
            loading="lazy"
            className="w-full"
          />
        </a>

        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
          <PrimaryLink href={mapsDirectionsUrl()} external>
            <Navigation className="size-4" aria-hidden="true" />
            Get directions
          </PrimaryLink>
        </div>

        <p className="mt-4 inline-flex items-center justify-center gap-2 font-serif text-base text-ink-soft">
          <MapPin className="size-4 text-gold" aria-hidden="true" />
          Opens Hitech Auditorium, Pirayiri, Palakkad in Google Maps
        </p>
      </div>
    </section>
  );
}
