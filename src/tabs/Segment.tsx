import { motion } from "framer-motion";
import { gt } from "../assets/images";

interface Props {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}

export default function Segment({ setCurrentPage, currentPage }: Props) {
  const pages: { label: string; value: string }[] = [
    { label: "Hi", value: "Hi" },
    { label: "Skills", value: "SkillsandInterests" },
    { label: "Projects", value: "Projects" },
    { label: "Fun", value: "Fun" },
    { label: "Contact", value: "Contact" },
  ];

  return (
    <div className="relative my-10 flex h-[55px] items-center">
      <motion.div
        className="absolute left-0 w-[20%] h-full bg-charcoal-black rounded-md z-10"
        initial={{
          left: `${pages.findIndex((p) => p.value === currentPage) * 20}%`,
        }}
        animate={{
          left: `${pages.findIndex((p) => p.value === currentPage) * 20}%`,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 17 }}
      />

      <div
        className={`relative flex h-[45px] w-full rounded-lg font-sans font-semibold p-1 cursor-pointer overflow-hidden
        ${
          currentPage === "Fun"
            ? "bg-cover bg-center bg-no-repeat"
            : "bg-obsidian-navy"
        }
        `}
        style={currentPage === "Fun" ? { backgroundImage: `url(${gt})` } : {}}
      >
        {pages.map(({ label, value }) => (
          <motion.div
            key={value}
            onClick={() => setCurrentPage(value)}
            className={`flex-1 flex justify-center items-center relative z-10 transition-colors ${
              currentPage === value ? "text-electric-blue" : "text-creme-white"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            {label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
