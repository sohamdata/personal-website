"use client";

import { useEffect, useRef, useState } from "react";
import { songs } from "../assets";
import Background from "../components/Background";
import { BinaryString, Hash, Sort } from "../components/FunItems";

export default function Fun() {
  let randomIndex = localStorage.getItem("audioIndex");
  const [selectedSong, setSelectedSong] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (randomIndex === null) {
      randomIndex = Math.floor(Math.random() * songs.length).toString();
      localStorage.setItem("audioIndex", randomIndex);
    } else {
      randomIndex = ((parseInt(randomIndex) + 1) % songs.length).toString();
      localStorage.setItem("audioIndex", randomIndex);
    }
    setSelectedSong(songs[parseInt(randomIndex)]);
  }, []);

  useEffect(() => {
    if (selectedSong) {
      audioRef.current = new Audio(selectedSong);
      const playing = audioRef.current.play();
      if (playing !== undefined) {
        playing
          .then(() => {
            audioRef.current!.loop = true;
            audioRef.current!.volume = 0.3;
          })
          .catch((error) => console.log(error));
      }
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [selectedSong]);

  return (
    <div className="w-full overflow-hidden flex flex-col items-center">
      <Background />
      <div className="max-w-screen-md w-full">
        <Hash />
        <Sort />
        <BinaryString />
      </div>
    </div>
  );
}
