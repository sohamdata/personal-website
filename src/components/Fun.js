import React, { useEffect, useMemo } from 'react';
import { Hash, Sort } from './_fun';
import Background from './Background';

const musicContext = require.context('../assets/music/', false, /\.(aac)$/);
const musicFiles = musicContext.keys().map(musicContext);

export default function Fun() {
  const randomSongIndex = Math.floor(Math.random() * musicFiles.length);
  const audio = useMemo(() => new Audio(musicFiles[randomSongIndex]), [randomSongIndex]);

  useEffect(() => {
    // Play audio when Fun page is mounted
    audio.volume = 0.3;
    audio.play();

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