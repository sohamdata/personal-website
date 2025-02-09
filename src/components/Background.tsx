import { Backgrounds } from "../utils/Data";

export default function Background() {
  const randomBackground =
    Backgrounds[Math.floor(Math.random() * Backgrounds.length)];

  return (
    <iframe
      title="background"
      src={randomBackground}
      className="fixed top-0 left-0 w-full h-full z-[-1] border-none overflow-hidden"
    />
  );
}
