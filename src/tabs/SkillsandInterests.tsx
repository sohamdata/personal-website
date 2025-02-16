import { FaFileAlt, FaGithub } from "react-icons/fa";
import { peace } from "../assets/images";
import LinkButton from "../components/LinkButton";
import { SkillsInterests } from "../utils/Data";

export default function SkillsandInterests() {
  return (
    <div className="space-y-6">
      <div className="flex justify-center space-x-4">
        <LinkButton
          onClick={() => window.open("https://github.com/sohamdata", "_blank")}
          icon={<FaGithub className="text-xl" />}
          text="GitHub"
        />
        <LinkButton
          onClick={() => window.open("https://tally.so/r/3yMX9x", "_blank")}
          icon={<FaFileAlt className="text-xl" />}
          text="Resume"
        />
      </div>

      {SkillsInterests.map((item) => (
        <div
          key={item.name}
          className={`p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 ${
            item.name === "Peace"
              ? "bg-cover bg-center bg-no-repeat"
              : "bg-urban-steel"
          }`}
          style={
            item.name === "Peace" ? { backgroundImage: `url(${peace})` } : {}
          }
        >
          <h2
            className={`text-2xl font-bold ${
              item.name === "Peace"
                ? "text-olive-gem drop-shadow-lg"
                : "text-frozen-glow"
            }`}
          >
            {item.name}
          </h2>

          <div className="mt-4 flex flex-wrap gap-3 justify-center">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  item.name === "Peace"
                    ? "bg-black/30 text-white backdrop-blur-sm"
                    : "bg-steel-shadow text-creme-white"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
