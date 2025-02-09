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
    var playing = audio.play();

    if (playing !== undefined) {
      playing
        .then((_) => {
          audio.loop = true;
          audio.volume = 0.3;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return () => audio.pause();
  }, []);

  return (
    <div>
      <Background />
      <Hash />
      <Sort />
      <BinaryString />
    </div>
  );
}
