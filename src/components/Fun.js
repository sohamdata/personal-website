import React, { useEffect, useMemo } from 'react';
import { Hash, Sort } from './_fun';
import Background from './Background';
import closer2 from '../assets/closer2.aac';

export default function Fun() {
  const audio = useMemo(() => new Audio(closer2), []);
  // useMemo is used to prevent the audio from being reloaded on every render

  useEffect(() => {
    // Play audio when Fun page is mounted
    audio.volume = 0.2;
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
