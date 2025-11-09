"use client";

import { useEffect, useRef } from "react";

export function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;
    audio.loop = true;

    const resume = async () => {
      try {
        await audio.play();
      } catch (err) {
        // Autoplay có thể bị chặn; sẽ phát khi người dùng tương tác.
      }
    };

    resume();
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/Download.mp3"
      preload="auto"
      autoPlay
      loop
      className="hidden"
    />
  );
}
