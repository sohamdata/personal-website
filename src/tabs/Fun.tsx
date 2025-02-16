import { useEffect } from "react";
import { Music } from "../utils/Data";
import Background from "../components/Background";
import { BinaryString, Hash, Sort } from "../components/FunItems";

export default function Fun() {
  let randomIndex = localStorage.getItem("audioIndex");

  if (randomIndex === null) {
    randomIndex = Math.floor(Math.random() * Music.length).toString();
    localStorage.setItem("audioIndex", randomIndex);
  } else {
    randomIndex = ((parseInt(randomIndex) + 1) % Music.length).toString();
    localStorage.setItem("audioIndex", randomIndex);
  }

  const selectedSong = Music[parseInt(randomIndex)];
  const audio = new Audio(`/music/${selectedSong}`);

  useEffect(() => {
    const playing = audio.play();
    if (playing !== undefined) {
      playing
        .then(() => {
          audio.loop = true;
          audio.volume = 0.3;
        })
        .catch((error) => console.log(error));
    }

    return () => audio.pause();
  }, []);

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
