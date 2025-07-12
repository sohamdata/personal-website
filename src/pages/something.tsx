import { useEffect, useRef, useState } from "react";
import { GiPistolGun } from "react-icons/gi";
import { songs_better } from "../assets";
import StemLoader from "../components/loader";

type Props = {};

export default function Something({}: Props) {
  const size = 180;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSong, setSelectedSong] = useState<string | null>(null);

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let randomIndex = localStorage.getItem("audioIndex2");
    if (randomIndex === null || randomIndex === undefined) {
      randomIndex = Math.floor(Math.random() * songs_better.length).toString();
      localStorage.setItem("audioIndex2", randomIndex);
    } else {
      // select next song
      randomIndex = (
        (parseInt(randomIndex) + 1) %
        songs_better.length
      ).toString();
      localStorage.setItem("audioIndex2", randomIndex);
    }
    setSelectedSong(songs_better[parseInt(randomIndex)]);
  }, []);

  const playAudio = () => {
    if (selectedSong) {
      console.log("Playing song:", selectedSong);
      audioRef.current = new Audio(selectedSong);
      const playPromise = audioRef.current.play();
      console.log("playPromise:", playPromise);
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            audioRef.current!.loop = true;
          })
          .catch((error) => {
            console.error("Playback error:", error);
          });
      }
    }
  };

  const pauseAudio = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const shuffleSong = () => {
    // Stop current audio if playing
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      // audioRef.current = null;
    }
    setIsPlaying(false);

    // Select new random song
    const newIndex = (
      (parseInt(localStorage.getItem("audioIndex2") || "0") + 1) %
      songs_better.length
    ).toString();
    localStorage.setItem("audioIndex2", newIndex);
    const newSong = songs_better[parseInt(newIndex)];
    setSelectedSong(newSong);

    console.log("Shuffling to song:", newSong);

    setTimeout(() => {
      playAudio();
    }, 2000);
  };

  return (
    <>
      <StemLoader size={size} />

      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center transition-all duration-200 z-[100] group ${
          isPlaying ? "hover:bg-gray-800/50 hover:rounded-full hover:pr-3" : ""
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src="/disc.ico"
          alt="pp"
          className={`w-5 h-5 cursor-pointer transition-transform duration-200 ${
            isPlaying ? "animate-spin" : "hover:scale-150"
          }`}
          onClick={() => {
            if (isPlaying) {
              pauseAudio();
            } else {
              playAudio();
            }
          }}
        />
        {isPlaying && hovered && (
          <GiPistolGun
            onClick={shuffleSong}
            className="w-5 h-5 ml-2 cursor-pointer text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        )}
      </div>
    </>
  );
}
