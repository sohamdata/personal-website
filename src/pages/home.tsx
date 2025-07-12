import { AnimatePresence, motion } from "framer-motion";
import Footer from "../components/Footer";
import {
  Contact,
  Fun,
  Intro,
  Projects,
  Segment,
  SkillsandInterests,
} from "../tabs/index";
import Gradient from "../utils/Gradient";
import { pallete } from "../utils/pallete";
import useLocalStorage from "../utils/useLocalStorage";

type Page = "Hi" | "SkillsandInterests" | "Projects" | "Fun" | "Contact";

export default function Home() {
  const [currentPage, setCurrentPage] = useLocalStorage("currentPage", "Hi");

  const pages: Record<Page, React.ReactNode> = {
    Hi: <Intro changeTab={setCurrentPage} />,
    SkillsandInterests: <SkillsandInterests />,
    Projects: <Projects />,
    Fun: <Fun />,
    Contact: <Contact />,
  };

  const headerVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="flex flex-col items-center min-h-screen mx-auto w-full max-w-[800px]">
      <div className="text-center p-3 flex-grow w-full">
        <header className="font-bold text-[30px] sm:text-[60px]">
          <AnimatePresence mode="wait">
            {currentPage !== "Fun" ? (
              <motion.div
                key="soham-datta"
                variants={headerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <Gradient
                  dir="left-to-right"
                  from={pallete.royal_blush}
                  to={pallete.copper_red}
                >
                  Soham{" "}
                </Gradient>
                <Gradient
                  dir="left-to-right"
                  from={pallete.copper_red}
                  to={pallete.golden_ray}
                >
                  Datta
                </Gradient>
              </motion.div>
            ) : (
              <motion.div
                key="infinity"
                variants={headerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <Gradient
                  dir="left-to-right"
                  from={pallete.royal_blush}
                  to={pallete.copper_red}
                >
                  {`\u221E`}
                </Gradient>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
        <Segment currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className="flex flex-col items-center w-full">
          {pages[currentPage as Page]}
        </div>
      </div>
      <Footer />
    </div>
  );
}
