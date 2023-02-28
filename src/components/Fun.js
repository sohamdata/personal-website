import React, { useEffect } from 'react';
import { Hash, Sort } from './_fun';
import Background from './Background';
import closer2 from '../assets/closer2.aac';

export default function Fun() {
  const audio = new Audio(closer2);
  audio.volume = 0.2;

  useEffect(() => {
    // Play audio when Fun page is mounted
    audio.play();

    // Pause audio when Fun page is unmounted
    return () => {
      audio.pause();
    }
  }, [audio]);

  return (
    <div>
      <Background />
      <Hash />
      <Sort />
    </div>
  );
}
