import { Phone } from "lucide-react";
import { brideFamily, waMe } from "@/data/wedding";
import { Eyebrow, Ornament } from "@/components/ornament";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Florals } from "@/components/florals";

export function Contact() {
  return (
    <section id="contact" className="section sprig bg-cream-deep" aria-labelledby="contact-title">
      <Florals />
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Contact</Eyebrow>
        <h2 id="contact-title" className="mt-3 font-serif text-4xl font-medium text-balance text-ink sm:text-5xl">
          {brideFamily.parents}
        </h2>
        <Ornament className="mt-6" />
        <div className="contact-body mt-8">
          <img
            src="/photos/family.jpg"
            alt="Nithya and Sreejith standing with family before a floral arch"
            width={1600}
            height={1067}
            loading="lazy"
            className="family-photo photo-frame"
          />
          <div>
            <p className="mt-8 font-serif text-lg font-bold text-ink lg:mt-0">Contact us on</p>
            <ul className="mx-auto mt-8 max-w-xl space-y-4 text-left">
              {brideFamily.phones.map((phone) => (
                <li key={phone.number} className="border border-gold/40 bg-cream p-4">
                  <p className="text-center font-serif text-2xl font-medium tracking-wide text-ink tabular-nums">
                    {phone.number}
                    <span className="ml-2 font-serif text-lg font-medium tracking-normal text-ink-soft">
                      - {phone.name}
                    </span>
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <a
                      href={`tel:+91${phone.number}`}
                      className="inline-flex min-h-12 items-center justify-center gap-2 bg-ink font-serif text-base font-medium text-cream"
                    >
                      <Phone className="size-4" aria-hidden="true" />
                      Call
                    </a>
                    <a
                      href={waMe(phone.number)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center gap-2 border border-ink/25 font-serif text-base font-medium text-ink"
                    >
                      <WhatsAppIcon className="size-4" />
                      WhatsApp
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
