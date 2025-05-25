import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function GlobalKeyListener() {
  const [_, setTyped] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const location = useLocation();

  const START_KEY = import.meta.env.VITE_START_KEY;
  const STOP_KEY = "stop";

  const audioSrc = `${import.meta.env.VITE_R2_BASE_URL}/music/lastname.aac`;

  const isAudioPlaying = useRef(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (location.pathname !== "/" && location.pathname !== "/idk") return;

      setTyped((prev) => {
        try {
          const updated = (prev + e.key.toLowerCase()).slice(
            -Math.max(START_KEY.length, STOP_KEY.length)
          );

          if (
            updated.endsWith(START_KEY) &&
            audioRef.current &&
            !isAudioPlaying.current
          ) {
            console.log("brohhhh");
            audioRef.current
              ?.play()
              ?.then(() => {
                audioRef.current!.loop = true;
              })
              ?.catch(console.warn);
            isAudioPlaying.current = true;
          }

          if (
            (updated.endsWith(STOP_KEY) || e.key === "Escape") &&
            audioRef.current &&
            isAudioPlaying.current
          ) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            isAudioPlaying.current = false;
          }

          return updated;
        } catch (error) {
          console.error("fumbled keydown :(", error);
          return prev;
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [location.pathname]);

  return <audio ref={audioRef} src={audioSrc} preload="auto" />;
}
