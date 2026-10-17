import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { couple, nav } from "@/data/wedding";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-none items-center justify-center px-4 md:justify-between md:px-8 md:pr-16">
        <a
          href="#home"
          className="text-center font-serif text-lg font-medium tracking-wide text-ink sm:text-xl md:text-left"
        >
          {couple.bride} & {couple.groom}
        </a>
        <nav aria-label="Sections" className="hidden items-center justify-end gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-serif text-base font-medium text-ink hover:text-ink-soft"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-4 bottom-6 z-40 flex size-11 items-center justify-center border border-line bg-cream text-ink shadow-sm"
    >
      <ChevronUp className="size-5" aria-hidden="true" />
    </button>
  );
}
