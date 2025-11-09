"use client";

import { useEffect, useRef } from "react";

export function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;
    const play = async () => {
      try {
        await audio.play();
      } catch (error) {
        // Autoplay có thể bị chặn; khi người dùng tương tác sẽ phát.
      }
    };
    play();
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/Download.mp3"
      autoPlay
      loop
      preload="auto"
      className="hidden"
    />
  );
}
