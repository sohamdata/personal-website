import React, { useEffect, useMemo } from 'react';
import { Hash, Sort, BinaryString } from './FunItems';
import Background from './Background';
import { Music } from '../utils/Data';

export default function Fun() {
  const randomSongIndex = Math.floor(Math.random() * Music.length);
  const audio = useMemo(() => new Audio(`/music/${Music[randomSongIndex]}`), [randomSongIndex]);

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
