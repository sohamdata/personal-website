import Footer from "./components/Footer";
import {
  Contact,
  Fun,
  Intro,
  Projects,
  Segment,
  SkillsandInterests,
} from "./tabs/index";
import Gradient from "./utils/Gradient";
import { pallete } from "./utils/pallete";
import useLocalStorage from "./utils/useLocalStorage";

type Page = "Hi" | "SkillsandInterests" | "Projects" | "Fun" | "Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useLocalStorage("currentPage", "Hi");

  const pages: Record<Page, React.ReactNode> = {
    Hi: <Intro changeTab={setCurrentPage} />,
    SkillsandInterests: <SkillsandInterests />,
    Projects: <Projects />,
    Fun: <Fun />,
    Contact: <Contact />,
  };

  return (
    <div className="flex flex-col items-center min-h-screen mx-auto w-full max-w-[800px]">
      <div className="text-center p-3 flex-grow w-full">
        <header className="font-bold text-[30px] sm:text-[60px]">
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
