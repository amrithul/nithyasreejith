import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

export function ZoomPhoto({
  className,
  wrapClassName,
  origin = "center 18%",
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & { wrapClassName?: string; origin?: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const image = ref.current;
      if (!image) return;
      const rect = image.getBoundingClientRect();
      const start = window.innerHeight * 0.92;
      const end = window.innerHeight * 0.2;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setScale(1 + progress * 0.14);
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={wrapClassName ? `zoom-frame ${wrapClassName}` : "zoom-frame"}>
      <img
        ref={ref}
        {...props}
        className={className}
        style={{ transform: `scale(${scale})`, transformOrigin: origin }}
      />
    </div>
  );
}
