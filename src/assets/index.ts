"use client";

const R2_BASE_URL = process.env.NEXT_PUBLIC_R2_BASE_URL || "";
const MUSIC_FILES_LIST = process.env.NEXT_PUBLIC_MUSIC_FILES || "";
const BETTER_MUSIC_FILES_LIST =
  process.env.NEXT_PUBLIC_RANDOM_MUSIC_FILES || "";

export const images: Record<string, string> = {
  elitecode: `${R2_BASE_URL}/images/EliteCode.png`,
  livesyntax: `${R2_BASE_URL}/images/livesyntax.png`,
  reach: `${R2_BASE_URL}/images/reach.gif`,
  perlinnoise: `${R2_BASE_URL}/images/perlinnoise.gif`,
  notesapp: `${R2_BASE_URL}/images/notesapp.png`,
  facerecog: `${R2_BASE_URL}/images/facerecog.png`,
  golang: `${R2_BASE_URL}/images/toSpotify.png`,
  wordle: `${R2_BASE_URL}/images/wordle.png`,
  cochef: `${R2_BASE_URL}/images/cochef.png`,
  tictactoe: `${R2_BASE_URL}/images/tictactoe.png`,
  sohamdatta: `${R2_BASE_URL}/images/sohamdatta.png`,
  butterflyEffect: `${R2_BASE_URL}/images/butterflyEffect.png`,
  logindash: `${R2_BASE_URL}/images/logindash.gif`,
  criticai: `${R2_BASE_URL}/images/criticai.png`,
  peace: `${R2_BASE_URL}/images/peace.jpg`,
  mtn: `${R2_BASE_URL}/images/mtn.jpg`,
  gt: `${R2_BASE_URL}/images/gt.jpg`,
};

export const songs: string[] = MUSIC_FILES_LIST.split(",").map(
  (file: string) => `${R2_BASE_URL}/music/${file}`
);

export const songs_better: string[] = BETTER_MUSIC_FILES_LIST.split(",").map(
  (file: string) => `${R2_BASE_URL}/music/${file}`
);
