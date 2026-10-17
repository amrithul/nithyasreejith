import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/contact";
import { Countdown } from "@/components/countdown";
import { WeddingDetails } from "@/components/details";
import { SiteFooter } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Invitation } from "@/components/invitation";
import { BackgroundMusic } from "@/components/music";
import { ScrollTop, SiteHeader } from "@/components/site-chrome";
import { Venue } from "@/components/venue";
import { venue, when } from "@/data/wedding";

const eventJson = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Wedding of Nithya and Sreejith",
  startDate: when.startIso,
  endDate: when.endIso,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: venue.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pirayiri",
      addressRegion: "Palakkad",
      addressCountry: "IN",
    },
  },
  description:
    "Wedding of Nithya, daughter of Mr. Sreenivasan and Mrs. Bindu, with Sreejith, son of Mrs. Shylaja and the late Mr. Sudheesh. Sunday, 6th December 2026, between 9.30 AM and 10.30 AM, Hitech Auditorium, Pirayiri, Palakkad.",
  organizer: {
    "@type": "Person",
    name: "Mr. Sreenivasan & Mrs. Bindu",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(eventJson),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <a
        href="#invitation"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-cream focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to invitation
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <Invitation />
        <Countdown />
        <div className="desk-spread">
          <WeddingDetails />
          <Venue />
        </div>
        <Gallery />
        <Contact />
      </main>
      <SiteFooter />
      <BackgroundMusic />
      <ScrollTop />
    </>
  );
}
