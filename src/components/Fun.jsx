import React, { useEffect, useMemo } from 'react';
import { Hash, Sort, BinaryString } from './FunItems';
import Background from './Background';

const songs = [
  'closer2.aac',
  'peaked.aac',
];

export default function Fun() {
  const randomSongIndex = Math.floor(Math.random() * songs.length);
  const audio = useMemo(() => new Audio(`../../src/assets/music/${songs[randomSongIndex]}`), [randomSongIndex]);

  useEffect(() => {
    let playing = audio.play();

    if (playing !== undefined) {
      playing.then(_ => {
        audio.loop = true;
        audio.volume = 0.3;
      })
        .catch(error => {
          console.log(error);
        });
    }

    return () => audio.pause();
  }, [audio]);

  return (
    <div>
      <Background />
      <Hash />
      <Sort />
      <BinaryString />
    </div>
  );
}
