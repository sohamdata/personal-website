import {
  Segment,
  Intro,
  SkillsandInterests,
  Projects,
  Fun,
  Contact,
} from "./tabs/index";
import Footer from "./components/Footer";
import useLocalStorage from "./utils/useLocalStorage";
import Gradient from "./utils/Gradient";

type Page = "Hi" | "SkillsandInterests" | "Projects" | "Fun" | "Contact";

const pages: Record<Page, React.ReactNode> = {
  Hi: <Intro />,
  SkillsandInterests: <SkillsandInterests />,
  Projects: <Projects />,
  Fun: <Fun />,
  Contact: <Contact />,
};

export default function App() {
  const [currentPage, setCurrentPage] = useLocalStorage("currentPage", "Hi");

  return (
    <div className="mb-2 flex flex-col items-center min-h-screen mx-auto w-full max-w-[800px]">
      <div className="text-center p-3 flex-grow w-full">
        <header className="font-sans font-bold text-[30px] text-[#0F216B] sm:text-[60px]">
          <Gradient dir="left-to-right" from="#614385" to="#516395">
            Soham{" "}
          </Gradient>
          <Gradient dir="left-to-right" from="#516395" to="#34E89E">
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
