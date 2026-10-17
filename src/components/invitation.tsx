import { brideFamily, closingLines, compliments, couple, groomFamily, invitationLines } from "@/data/wedding";
import { Ornament } from "@/components/ornament";
import { Florals } from "@/components/florals";
import { ZoomPhoto } from "@/components/zoom-photo";

export function Invitation() {
  return (
    <section id="invitation" className="letter" aria-labelledby="invitation-title">
      <article className="pair">
        <img
          src="/photos/close.jpg"
          alt="Nithya leaning on Sreejith, her hand on his shoulder"
          width={1066}
          height={1600}
        />
        <div className="pair-copy">
          <Florals />
          <p className="invite-parents">{brideFamily.parents}</p>
          <p className="invite-place">
            {brideFamily.house}
            <span aria-hidden="true"> · </span>
            {brideFamily.address}
          </p>
          <h2 id="invitation-title" className="invite-request">
            {invitationLines.join(" ")}
          </h2>
        </div>
      </article>

      <article className="pair">
        <ZoomPhoto
          src="/photos/embrace.jpg"
          alt="Nithya smiling with her arm around Sreejith"
          width={1066}
          height={1600}
          className="pair-img-alt"
        />
        <div className="pair-copy keep-floral">
          <Florals />
          <p className="name text-ink">{couple.bride}</p>
          <p className="font-serif text-sm font-medium tracking-widest text-ink-soft uppercase">with</p>
          <p className="name text-ink">{couple.groom}</p>
          <p className="mt-5 font-serif text-xl leading-relaxed text-ink">
            {groomFamily.line}
            <br />
            {groomFamily.place}
          </p>
        </div>
      </article>

      <article className="pair">
        <div className="rings-frame">
          <img
            src="/photos/rings.jpg"
            alt="Nithya and Sreejith holding their rings, her hand decorated with henna"
            width={1066}
            height={1600}
            className="pair-img-rings"
          />
        </div>
        <div className="pair-copy">
          <Florals />
          <div className="space-y-1 font-serif text-lg text-ink">
            {closingLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <Ornament className="mt-5" />
          <div className="mt-5 space-y-1 font-serif text-sm font-medium tracking-widest text-ink-soft uppercase">
            {compliments.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
