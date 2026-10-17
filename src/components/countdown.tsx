import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { when } from "@/data/wedding";
import { Florals } from "@/components/florals";

const start = new Date(when.startIso).getTime();

type Remaining = {
  done: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function remaining(now: number): Remaining {
  const diff = start - now;
  if (diff <= 0) return { done: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  const total = Math.floor(diff / 1000);
  return {
    done: false,
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

const units = ["Days", "Hours", "Minutes", "Seconds"] as const;

export function Countdown() {
  const [tick, setTick] = useState<Remaining | null>(null);

  useEffect(() => {
    const update = () => setTick(remaining(Date.now()));
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="section sprig bg-ink text-cream" aria-labelledby="countdown-title">
      <Florals />
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-serif text-sm font-medium tracking-widest text-cream/70 uppercase">
          {when.day}, {when.date}
        </p>
        <h2 id="countdown-title" className="mt-3 font-serif text-4xl font-medium text-balance sm:text-5xl">
          {tick?.done ? "The wedding day has arrived" : "Until the wedding"}
        </h2>

        {tick?.done ? (
          <p className="mt-8 inline-flex items-center justify-center gap-2 font-serif text-xl">
            <Heart className="size-5 text-rose" fill="currentColor" aria-hidden="true" />
            The wedding day has arrived
          </p>
        ) : (
          <div
            className="mt-8 grid grid-cols-4"
            role="timer"
            aria-live="polite"
            aria-atomic="true"
            aria-label={
              tick
                ? `${tick.days} days, ${tick.hours} hours, ${tick.minutes} minutes, ${tick.seconds} seconds until the wedding`
                : "Counting down to the wedding"
            }
          >
            {units.map((label, i) => {
              const value = tick
                ? [tick.days, tick.hours, tick.minutes, tick.seconds][i]
                : null;
              return (
                <div key={label} className="px-1">
                  <p className="font-serif text-3xl font-medium tabular-nums sm:text-5xl">
                    {value === null ? "–" : String(value).padStart(2, "0")}
                  </p>
                  <p className="mt-1 font-serif text-xs font-medium tracking-widest text-cream/70 uppercase sm:text-sm">
                    {label}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        <p className="mt-6 font-serif text-base text-cream/75">{when.time}</p>
      </div>
    </section>
  );
}
