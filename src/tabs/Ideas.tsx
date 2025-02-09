import { IdeasObj } from "../utils/Data";

export default function Ideas() {
  return (
    <div className="p-6">
      <p className="text-lg text-gray-400">Some interesting ideas:</p>
      <div className="space-y-6">
        {IdeasObj.map((item, i) => (
          <div key={i} className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-black">{item.name}</h3>
            <p className="mt-2 text-gray-800">{item.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-black text-white text-sm font-medium px-3 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
