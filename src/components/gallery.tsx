import { useCallback, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/data/wedding";
import { Eyebrow } from "@/components/ornament";
import { Florals } from "@/components/florals";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const photo = index !== null ? gallery[index] : null;

  const go = useCallback((dir: -1 | 1) => {
    setIndex((current) => {
      if (current === null) return current;
      return (current + dir + gallery.length) % gallery.length;
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  return (
    <section id="gallery" className="section sprig" aria-labelledby="gallery-title">
      <Florals />
      <div className="mx-auto max-w-5xl text-center">
        <Eyebrow>Photographs</Eyebrow>
        <h2 id="gallery-title" className="mt-2 font-serif text-4xl font-medium text-ink sm:text-5xl">
          Nithya & Sreejith
        </h2>
      </div>

      <ul className="photo-rail" aria-label="Photographs, swipe sideways">
        {gallery.map((item, i) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="block w-full overflow-hidden focus-visible:outline-2"
              aria-label={`Open photo: ${item.alt}`}
            >
              <img
                src={item.thumb}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                className={`${item.wide ? "frame-wide" : "frame-portrait"} w-full object-cover object-[center_30%]`}
              />
            </button>
          </li>
        ))}
      </ul>

      <Dialog.Root open={open} onOpenChange={(next) => !next && setIndex(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/88" />
          <Dialog.Content
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 outline-none"
            aria-describedby={undefined}
          >
            <Dialog.Title className="sr-only">{photo?.alt ?? "Photograph"}</Dialog.Title>
            {photo ? (
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="max-h-[78vh] w-auto max-w-full object-contain"
              />
            ) : null}
            <p className="mt-3 max-w-lg text-center font-serif text-sm text-cream">{photo?.alt}</p>
            <p className="mt-1 font-serif text-sm text-cream/80">
              {index !== null ? `${index + 1} of ${gallery.length}` : ""}
            </p>

            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute top-1/2 left-2 flex size-11 -translate-y-1/2 items-center justify-center bg-cream text-ink sm:left-4"
              aria-label="Previous photo"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute top-1/2 right-2 flex size-11 -translate-y-1/2 items-center justify-center bg-cream text-ink sm:right-4"
              aria-label="Next photo"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
            <Dialog.Close
              className="absolute top-4 right-4 flex size-11 items-center justify-center bg-cream text-ink"
              aria-label="Close gallery"
            >
              <X className="size-5" aria-hidden="true" />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
