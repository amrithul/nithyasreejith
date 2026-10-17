import { useEffect, useState } from "react";
import { couple, motto, when } from "@/data/wedding";

type Phase = "cover" | "open" | "leaving" | "gone";

export function CardOpen() {
  const [phase, setPhase] = useState<Phase>("cover");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("gone");
      return;
    }
    const id = window.setTimeout(() => setPhase((p) => (p === "cover" ? "open" : p)), 1800);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (phase !== "open") return;
    const id = window.setTimeout(() => setPhase("leaving"), 1500);
    return () => window.clearTimeout(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "leaving") return;
    const id = window.setTimeout(() => setPhase("gone"), 560);
    return () => window.clearTimeout(id);
  }, [phase]);

  useEffect(() => {
    if (phase === "gone") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPhase("gone");
      if (event.key === "Enter" || event.key === " ") setPhase((p) => (p === "cover" ? "open" : p));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      className={`card-stage ${phase === "open" || phase === "leaving" ? "is-open" : ""} ${phase === "leaving" ? "is-leaving" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Wedding card"
    >
      <div className="card-3d">
        <div className="card-inside" aria-hidden="true">
          <p className="font-serif text-sm font-medium tracking-wide text-ink-soft uppercase">
            {motto}
          </p>
          <p className="name mt-4 text-ink">{couple.bride}</p>
          <p className="font-serif text-sm font-medium tracking-widest text-ink-soft uppercase">with</p>
          <p className="name text-ink">{couple.groom}</p>
          <p className="mt-5 font-serif text-lg font-medium text-ink">
            {when.day}, {when.date}
          </p>
          <p className="font-serif text-base text-ink-soft">{when.time}</p>
        </div>
        <button
          type="button"
          className="card-cover"
          onClick={() => setPhase((p) => (p === "cover" ? "open" : p))}
          aria-label="Open the wedding card"
        >
          <img
            src="/photos/stand.jpg"
            alt=""
            width={1066}
            height={1600}
            className="card-cover-photo"
          />
          <span className="card-cover-shade" />
          <span className="card-cover-copy">
            <span className="font-serif text-xs font-medium tracking-widest uppercase">{motto}</span>
            <span className="card-cover-names">
              {couple.bride}
              <span className="card-cover-with">with</span>
              {couple.groom}
            </span>
            <span className="font-serif text-base">
              {when.day}, {when.date}
            </span>
            <span className="card-open-hint">Tap to open</span>
          </span>
        </button>
      </div>
    </div>
  );
}
