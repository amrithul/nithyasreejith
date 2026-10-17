/** Facts printed on the invitation. Do not add events or details that are not here. */

export const couple = {
  bride: "Nithya",
  groom: "Sreejith",
} as const;

export const mantra = "Om Namo Bhagavathe Vasudevaya";

export const motto = "Two Souls One Journey";

export const invitationLines = [
  "With immense joy,",
  "we seek your gracious presence and blessings",
  "on the auspicious occasion of",
  "the wedding of our daughter",
] as const;

export const closingLines = [
  "Your gracious presence and blessings",
  "will make the occasion truly special",
] as const;

export const compliments = ["With best compliments", "Relatives and friends"] as const;

export const brideFamily = {
  parents: "Mr. Sreenivasan & Mrs. Bindu",
  house: "'Thiruvathira'",
  address: "West Yakkara, Palakkad - 678 001",
  phones: [
    { number: "9446290265", name: "Sreeni" },
    { number: "9447620676", name: "Bindu" },
  ] as const,
};

export const groomFamily = {
  line: "Son of Mrs. Shylaja & the late Mr. Sudheesh,",
  place: "Pirayiri, Palakkad",
};

export const when = {
  day: "Sunday",
  date: "6th December 2026",
  malayalam: "Vrischikam 20, 1202",
  time: "Between 9.30 AM & 10.30 AM",
  /** Ceremony window begins. Asia/Kolkata, as printed. */
  startIso: "2026-12-06T09:30:00+05:30",
  endIso: "2026-12-06T10:30:00+05:30",
} as const;

export const venue = {
  name: "Hitech Auditorium",
  place: "Pirayiri, Palakkad",
  /** Printed address only — nothing added. */
  address: "Hitech Auditorium, Pirayiri, Palakkad",
  /** The hall named on the card, resolved for directions. */
  mapsQuery: "Hi Tech Auditorium, Pirayiri, Palakkad",
  /** Public listing pin for that same hall. */
  lat: 10.7700045,
  lng: 76.6181127,
} as const;

export function mapsDirectionsUrl() {
  const destination = encodeURIComponent(venue.mapsQuery);
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}

export function googleCalendarUrl() {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Wedding of Nithya & Sreejith",
    dates: "20261206T040000Z/20261206T050000Z",
    location: venue.address,
    details:
      "With immense joy, we seek your gracious presence and blessings on the wedding of Nithya with Sreejith. Sunday, 6th December 2026, between 9.30 AM and 10.30 AM. Hitech Auditorium, Pirayiri, Palakkad.",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function calendarIcs() {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Nithya and Sreejith//Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:nithya-sreejith-wedding-20261206@invitation",
    "DTSTAMP:20261016T000000Z",
    "DTSTART:20261206T040000Z",
    "DTEND:20261206T050000Z",
    "SUMMARY:Wedding of Nithya & Sreejith",
    `LOCATION:${venue.address}`,
    "DESCRIPTION:With immense joy, we seek your gracious presence and blessings on the auspicious occasion of the wedding of Nithya with Sreejith. Sunday, 6th December 2026, between 9.30 AM and 10.30 AM. Hitech Auditorium, Pirayiri, Palakkad.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function whatsAppShareText(pageUrl: string) {
  return [
    "With immense joy, we seek your gracious presence and blessings on the wedding of Nithya & Sreejith.",
    "",
    "Sunday, 6th December 2026",
    "Between 9.30 AM & 10.30 AM",
    "Hitech Auditorium, Pirayiri, Palakkad",
    "",
    pageUrl,
  ].join("\n");
}

export function waMe(phone: string) {
  return `https://wa.me/91${phone}`;
}

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#wedding", label: "Wedding" },
  { href: "#venue", label: "Venue" },
  { href: "#gallery", label: "Photos" },
] as const;

export type Photo = {
  src: string;
  thumb: string;
  alt: string;
  width: number;
  height: number;
  wide?: boolean;
};

export const gallery: Photo[] = [
  {
    src: "/photos/stand.jpg",
    thumb: "/photos/stand-sm.jpg",
    width: 1066,
    height: 1600,
    alt: "Nithya and Sreejith standing together in front of a floral wedding arch",
  },
  {
    src: "/photos/gaze.jpg",
    thumb: "/photos/gaze-sm.jpg",
    width: 1600,
    height: 1066,
    wide: true,
    alt: "Nithya and Sreejith seated, smiling at each other",
  },
  {
    src: "/photos/bride.jpg",
    thumb: "/photos/bride-sm.jpg",
    width: 1066,
    height: 1600,
    alt: "Portrait of Nithya in a maroon lehenga with gold jewellery",
  },
  {
    src: "/photos/groom.jpg",
    thumb: "/photos/groom-sm.jpg",
    width: 1066,
    height: 1600,
    alt: "Portrait of Sreejith in a lavender kurta",
  },
  {
    src: "/photos/close.jpg",
    thumb: "/photos/close-sm.jpg",
    width: 1066,
    height: 1600,
    alt: "Close portrait of Nithya leaning on Sreejith, her hennaed hand on his shoulder",
  },
  {
    src: "/photos/embrace.jpg",
    thumb: "/photos/embrace-sm.jpg",
    width: 1066,
    height: 1600,
    alt: "Nithya smiling with her arm around Sreejith",
  },
  {
    src: "/photos/rings.jpg",
    thumb: "/photos/rings-sm.jpg",
    width: 1066,
    height: 1600,
    alt: "Nithya and Sreejith holding their rings, her hand decorated with henna",
  },
  {
    src: "/photos/lights.jpg",
    thumb: "/photos/lights-sm.jpg",
    width: 1066,
    height: 1600,
    alt: "Nithya and Sreejith standing close beside a floral arrangement and warm lights",
  },
  {
    src: "/photos/shoulder.jpg",
    thumb: "/photos/shoulder-sm.jpg",
    width: 1200,
    height: 1600,
    alt: "Nithya standing behind seated Sreejith, her hand on his shoulder",
  },
  {
    src: "/photos/sofa.jpg",
    thumb: "/photos/sofa-sm.jpg",
    width: 1066,
    height: 1600,
    alt: "Nithya and Sreejith seated together on a sofa before the floral arch",
  },
  {
    src: "/photos/bubbles.jpg",
    thumb: "/photos/bubbles-sm.jpg",
    width: 1200,
    height: 1600,
    alt: "Nithya and Sreejith smiling at each other as bubbles float past",
  },
  {
    src: "/photos/arch.jpg",
    thumb: "/photos/arch-sm.jpg",
    width: 1066,
    height: 1600,
    alt: "Nithya standing beside seated Sreejith in front of the floral arch",
  },
  {
    src: "/photos/hands.jpg",
    thumb: "/photos/hands-sm.jpg",
    width: 1066,
    height: 1600,
    alt: "Nithya and Sreejith holding hands and smiling on the lawn",
  },
  {
    src: "/photos/lawn-walk.jpg",
    thumb: "/photos/lawn-walk-sm.jpg",
    width: 1066,
    height: 1600,
    alt: "Nithya and Sreejith walking together across a lawn, palm trees behind them",
  },
];
