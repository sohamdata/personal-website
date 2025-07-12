import { AnimatePresence, motion } from "framer-motion";
import { images } from "../assets";

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

  const backgroundVariants = {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "100%" },
  };

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

      <div className="relative flex h-[45px] w-full rounded-lg font-sans font-semibold p-1 cursor-pointer overflow-hidden">
        <AnimatePresence mode="wait">
          {currentPage === "Fun" ? (
            <motion.div
              key="fun-bg"
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${images.gt})` }}
              variants={backgroundVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            />
          ) : (
            <motion.div
              key="default-bg"
              className="absolute inset-0 bg-obsidian-navy"
              variants={backgroundVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

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
