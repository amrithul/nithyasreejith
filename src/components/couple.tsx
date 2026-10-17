import { brideFamily, couple, groomFamily } from "@/data/wedding";

export function Couple() {
  return (
    <section id="couple" className="couple-split" aria-labelledby="couple-title">
      <h2 id="couple-title" className="sr-only">
        {couple.bride} and {couple.groom}
      </h2>
      <article className="couple-panel">
        <img
          src="/photos/bride.jpg"
          alt="Portrait of Nithya in a maroon lehenga with gold jewellery"
          width={1066}
          height={1600}
        />
        <div className="couple-caption">
          <h3 className="name">{couple.bride}</h3>
          <p className="font-serif text-lg">Daughter of {brideFamily.parents}</p>
          <p className="font-serif text-base italic text-cream/80">{brideFamily.house}</p>
          <p className="font-serif text-base text-cream/80">{brideFamily.address}</p>
        </div>
      </article>
      <article className="couple-panel">
        <img
          src="/photos/groom.jpg"
          alt="Portrait of Sreejith in a lavender kurta"
          width={1066}
          height={1600}
        />
        <div className="couple-caption">
          <h3 className="name">{couple.groom}</h3>
          <p className="font-serif text-lg">{groomFamily.line}</p>
          <p className="font-serif text-base text-cream/80">{groomFamily.place}</p>
        </div>
      </article>
    </section>
  );
}
