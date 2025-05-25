import { useRef, useState } from "react";
import { images } from "../assets";

export default function Footer() {
  const [expanded, setExpanded] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  const showWebsite = () => {
    setExpanded(!expanded);
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 500);
  };

  return (
    <>
      <footer
        className={`my-2 md:mt-12 ${
          expanded && "mb-5"
        } mb-0 rounded-sm flex flex-col w-full justify-center items-center 
          bg-cover bg-center bg-no-repeat font-semibold transition-all duration-500 
          ${expanded ? "h-[50vh]" : "h-[11vh]"}`}
        style={{ backgroundImage: `url(${images.mtn})` }}
      >
        <span
          className={`ml-1 rounded-2xl cursor-pointer ${
            expanded ? "text-urban-steel" : "text-frozen-glow"
          }`}
          onClick={showWebsite}
        >
          &copy; 2025 Soham Datta
        </span>

        {expanded && (
          <div
            className="w-[90%] md:w-[70%] h-[80%] mt-4 bg-urban-steel rounded-lg p-4 shadow-lg"
            ref={footerRef}
          >
            <iframe
              src="https://sohamdata.github.io/website/"
              className="w-full h-full rounded-md"
              title="Shader Website"
              onClick={() =>
                window.open("https://sohamdata.github.io/website/", "_blank")
              }
            />
          </div>
        )}
      </footer>
    </>
  );
}
