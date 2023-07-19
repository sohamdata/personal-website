import React, { useEffect, useMemo } from 'react';
import { Hash, Sort } from './FunItems';
import Background from './Background';

const musicContext = require.context('../assets/music/', false, /\.(aac)$/);
const musicFiles = musicContext.keys().map(musicContext);

export default function Fun() {
  const randomSongIndex = Math.floor(Math.random() * musicFiles.length);
  const audio = useMemo(() => new Audio(musicFiles[randomSongIndex]), [randomSongIndex]);
  audio.loop = true;

  useEffect(() => {
    audio.volume = 0.3;
    let playing = audio.play();
    if (playing !== undefined) {
      playing
        .then(_ => {
        })
        .catch(error => {
          console.log(error);
        });
    }
    // Pause audio when Fun page is unmounted
    return () => audio.pause();
  }, [audio]);

  return (
    <div>
      <Background />
      <Hash />
      <Sort />
    </div>
  );
}
