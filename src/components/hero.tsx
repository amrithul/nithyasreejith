import { useEffect, useRef, useState } from "react";
import { mantra, motto, when } from "@/data/wedding";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      const section = sectionRef.current;
      if (!section || media.matches) {
        setProgress(1);
        return;
      }
      const sticky = section.querySelector(".reveal-sticky");
      if (!sticky) return;
      const distance = section.offsetHeight - sticky.clientHeight;
      const travelled = window.scrollY - section.offsetTop;
      const next = distance <= 0 ? 1 : Math.min(1, Math.max(0, travelled / distance));
      setProgress(next);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    media.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      media.removeEventListener("change", update);
    };
  }, []);

  const dim = Math.min(1, progress / 0.7);
  const pageOpacity = progress <= 0.48 ? 0 : Math.min(1, (progress - 0.48) / 0.34);
  const hintOpacity = Math.max(0, 1 - progress * 3.2);
  const scale = 1.18 - dim * 0.18;

  return (
    <section id="home" ref={sectionRef} className="reveal">
      <div className="reveal-sticky hero-sheet">
        <img
          src="/photos/stand.jpg"
          alt=""
          width={1066}
          height={1600}
          className="hero-photo"
          style={{
            filter: `brightness(${1 - dim * 0.38})`,
            transform: `scale(${scale})`,
          }}
        />
        <div className="hero-shade" style={{ opacity: dim }} />
        <p className="scroll-hint" style={{ opacity: hintOpacity }} aria-hidden="true">
          <span />
        </p>
        <div
          className="hero-copy reveal-page"
          style={{ opacity: pageOpacity, pointerEvents: pageOpacity > 0.85 ? "auto" : "none" }}
        >
          <p className="font-serif text-sm font-medium tracking-widest text-cream/80 uppercase">
            {mantra}
          </p>
          <h1 className="mt-4 text-cream">
            <span className="name block">Nithya</span>
            <span className="my-1 block font-serif text-sm font-medium tracking-widest uppercase">with</span>
            <span className="name block">Sreejith</span>
          </h1>
          <p className="mt-5 font-serif text-xl text-cream">
            {when.day}, {when.date}
          </p>
          <p className="font-serif text-lg text-cream/80">{when.time}</p>
          <p className="font-serif text-base italic text-cream/75">{when.malayalam}</p>
          <p className="mx-auto mt-4 max-w-xs font-serif text-base italic text-cream/80">{motto}</p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <a
              href="#wedding"
              className="inline-flex min-h-12 items-center justify-center bg-cream px-6 font-serif text-base font-medium text-ink sm:w-auto"
            >
              Wedding details
            </a>
            <a
              href="#venue"
              className="inline-flex min-h-12 items-center justify-center border border-cream/70 px-6 font-serif text-base font-medium text-cream sm:w-auto"
            >
              Venue
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
