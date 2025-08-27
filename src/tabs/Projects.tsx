import Image from "next/image";
import { ProjectData } from "../utils/Data";

export default function Projects() {
  return (
    <div>
      <p className="font-sans text-lg text-soft-titanium">
        Here are some things I made.
      </p>
      {ProjectData.map((item) => (
        <div
          key={item.title}
          className="p-4 bg-urban-steel rounded-lg mt-6 flex flex-col md:flex-row items-center"
        >
          <div className="w-full md:w-2/5 p-2">
            <Image
              src={item.image}
              alt={item.title}
              // className="w-full h-auto rounded-md"
              width={400}
              height={300}
            />
          </div>
          <div className="flex flex-col items-center w-full md:w-3/5 p-2 md:text-left">
            <h2 className="text-xl font-bold text-frozen-glow my-2">
              {item.title}
            </h2>
            <p className="text-creme-white text-sm">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-3 justify-center">
              {item.stats.map((stat: string) => (
                <span
                  key={stat}
                  className="bg-steel-shadow text-creme-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  {stat}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center md:justify-start mt-5">
              {item.action.map((action: string, i: number) => (
                <a
                  key={i}
                  href={item.url[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-horizon text-frozen-glow px-4 py-2 m-2 rounded-full text-sm font-semibold transition-transform transform hover:scale-105"
                >
                  {action}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
