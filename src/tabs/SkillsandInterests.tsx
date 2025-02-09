import LinkButton from "../components/LinkButton";
import { SkillsInterests } from "../utils/Data";
import { FaGithub, FaFileAlt } from "react-icons/fa";

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
          className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
        >
          <h2 className="text-2xl font-bold text-white">{item.name}</h2>
          <div className="mt-4 flex flex-wrap gap-3 justify-center">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium"
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
