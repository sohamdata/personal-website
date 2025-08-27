import { Page, PAGES } from "@/utils/Data";
import { AnimatePresence, motion } from "framer-motion";
import { images } from "../assets";
import Image from "next/image";

interface Props {
  currentPage: string;
  setCurrentPage: (page: Page) => void;
}

export default function Segment({ currentPage, setCurrentPage }: Props) {
  const pages: { label: string; value: Page }[] = Object.entries(PAGES).map(
    ([key, value]) => ({ label: value, value: key as Page })
  );

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
              variants={backgroundVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Image
                src={images.gt}
                alt="Fun Section Background"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="bg-no-repeat"
                quality={75}
              />
            </motion.div>
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
