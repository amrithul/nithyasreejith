import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const wanted = useRef(true);
  const [on, setOn] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.32;

    const mark = () => setOn(!audio.paused);

    const tryPlay = () => {
      if (!wanted.current) return;
      audio.play().then(mark).catch(() => setOn(false));
    };

    const onGesture = (event: Event) => {
      const target = event.target;
      if (target instanceof Element && target.closest("[data-music-toggle]")) return;
      tryPlay();
      if (!audio.paused) {
        window.removeEventListener("pointerdown", onGesture);
        window.removeEventListener("keydown", onGesture);
      }
    };

    tryPlay();
    window.addEventListener("pointerdown", onGesture);
    window.addEventListener("keydown", onGesture);
    audio.addEventListener("play", mark);
    return () => {
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
      audio.removeEventListener("play", mark);
    };
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (on) {
      wanted.current = false;
      audio.pause();
      setOn(false);
      return;
    }
    wanted.current = true;
    audio
      .play()
      .then(() => setOn(true))
      .catch(() => setOn(false));
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/o-sahebaa.mp3" preload="auto" autoPlay loop />
      <button
        type="button"
        data-music-toggle
        onClick={toggle}
        aria-pressed={on}
        aria-label={on ? "Turn music off" : "Turn music on"}
        className={visible ? "sound-toggle is-visible" : "sound-toggle"}
        tabIndex={visible ? 0 : -1}
      >
        {on ? (
          <Volume2 className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
        ) : (
          <VolumeX className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
        )}
      </button>
    </>
  );
}
