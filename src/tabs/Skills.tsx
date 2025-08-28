"use client";

import { FaFileAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { images } from "../assets";
import LinkButton from "../components/LinkButton";
import { SkillsInterests } from "../utils/Data";

export default function Skills() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <div className="flex justify-center space-x-4">
        <LinkButton
          onClick={() => window.open("https://github.com/sohamdata", "_blank")}
          icon={<FaGithub className="text-xl" />}
          text="GitHub"
        />
        <LinkButton
          onClick={() => router.push("/resume")}
          icon={<FaFileAlt className="text-xl" />}
          text="Resume"
        />
      </div>
      {SkillsInterests.map((item) => (
        <div
          key={item.name}
          className={`p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 relative overflow-hidden ${
            item.name === "Peace" ? "" : "bg-urban-steel"
          }`}
        >
          {item.name === "Peace" && (
            <Image
              src={images.peace}
              alt={`${item.name} Background`}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="bg-no-repeat z-[-1]"
              quality={75}
            />
          )}
          <h2
            className={`text-2xl font-bold ${
              item.name === "Peace"
                ? "text-olive-gem drop-shadow-lg"
                : "text-frozen-glow"
            } relative z-10`}
          >
            {item.name}
          </h2>
          <div className="mt-4 flex flex-wrap gap-3 justify-center relative z-10">
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
