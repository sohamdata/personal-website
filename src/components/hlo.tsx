"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function GlobalKeyListener() {
  const [_, setTyped] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();
  const [audioSrc, setAudioSrc] = useState<string | null>(null);

  const START_KEY = process.env.NEXT_PUBLIC_START_KEY || "start";
  const STOP_KEY = "stop";
  const AUDIO_URL = process.env.NEXT_PUBLIC_FIND_THIS || "";

  const isAudioPlaying = useRef(false);
  const isLoading = useRef(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (pathname !== "/") return;
      setTyped((prev) => {
        try {
          if (!START_KEY || !STOP_KEY || !AUDIO_URL) {
            console.error("Missing required variables: ", {
              START_KEY,
              STOP_KEY,
              AUDIO_URL,
            });
            return prev;
          }

          const updated = (prev + e.key.toLowerCase()).slice(
            -Math.max(START_KEY.length, STOP_KEY.length)
          );

          if (
            updated.endsWith(START_KEY) &&
            audioRef.current &&
            !isAudioPlaying.current &&
            !isLoading.current
          ) {
            console.log("brohhhh");
            toast(
              <Image src="/icons/disc.ico" alt="ye" width={28} height={28} />,
              {
                description: "'stop' or press esc to pause the genius",
                duration: 5000,
              }
            );
            isLoading.current = true;
            setAudioSrc(AUDIO_URL);

            // Wait for the audio to be ready before playing
            const playAudio = () => {
              audioRef.current
                ?.play()
                ?.then(() => {
                  audioRef.current!.loop = true;
                  isAudioPlaying.current = true;
                  isLoading.current = false;
                })
                ?.catch((error) => {
                  console.warn("fumbled keydown :<", error);
                  setAudioSrc(null);
                  isAudioPlaying.current = false;
                  isLoading.current = false;
                });
            };

            // Check if audio is ready to play
            if (audioRef.current.readyState >= 2) {
              // HAVE_CURRENT_DATA or higher
              playAudio();
            } else {
              audioRef.current.addEventListener("canplay", playAudio, {
                once: true,
              });
            }
          }

          if (
            (updated.endsWith(STOP_KEY) || e.key === "Escape") &&
            audioRef.current &&
            isAudioPlaying.current
          ) {
            console.log("stopping audio");
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            isAudioPlaying.current = false;
            isLoading.current = false;
            setAudioSrc(null);
            toast(
              <div className="flex gap-2">
                <img src="/icons/disc.ico" className="h-7 w-7" />
                <p>🕵️🔦</p>
              </div>
            );
            // Remove any pending canplay listeners to prevent memory leaks
            audioRef.current.removeEventListener("canplay", () => {});
          }

          return updated;
        } catch (error) {
          console.error("fumbled keydown :(", error);
          isLoading.current = false;
          return prev;
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pathname]);

  return <audio ref={audioRef} src={audioSrc || undefined} />;
}
