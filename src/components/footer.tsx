import { compliments, couple, motto, when } from "@/data/wedding";
import { Ornament } from "@/components/ornament";

export function SiteFooter() {
  return (
    <footer className="section text-center">
      <Ornament />
      <p className="mt-6 font-serif text-lg text-ink">With love and blessings,</p>
      <p className="name text-ink">{couple.bride}</p>
      <p className="font-serif text-sm font-medium tracking-widest text-ink-soft uppercase">with</p>
      <p className="name text-ink">{couple.groom}</p>
      <p className="mt-2 font-serif text-xl text-ink">
        {when.day}, {when.date}
      </p>
      <p className="font-serif text-base text-ink-soft">{when.time}</p>
      <p className="mt-4 font-serif text-base italic text-ink-soft">{motto}</p>
      <div className="mt-8 space-y-1 font-serif text-sm font-medium tracking-widest text-ink-soft uppercase">
        {compliments.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <p className="mt-8 font-serif text-sm text-ink-soft">
        Made with <span aria-hidden="true">♥</span>
        <span className="sr-only">love</span> by rithul
      </p>
    </footer>
  );
}
