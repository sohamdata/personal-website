import { CURRENT_PAGE_KEY, Page } from "@/utils/Data";
import store from "store";

interface IntroProps {
  setCurrentPage: (page: Page) => void;
}

export default function Intro({ setCurrentPage }: IntroProps) {
  return (
    <div className="p-6 text-frozen-glow text-lg leading-relaxed">
      <p>Hey there, 👋. Thanks for visiting.</p>
      <p className="mt-4">
        I am a{" "}
        <span className="text-golden-ray font-semibold">
          Software Engineer at Swipe (YC S21) 🚀
        </span>{" "}
        and a{" "}
        <span className="text-electric-blue font-semibold">
          Computer Engineering student
        </span>{" "}
        from <span className="text-golden-ray font-semibold">India</span>,
        currently in my final year at university.
      </p>
      <p className="mt-4">
        My primary interest lies in{" "}
        <span className="text-electric-blue font-semibold">
          Product development
        </span>
        , and I'm dedicated to expanding my knowledge across various domains
        within technology and product development.
      </p>
      <p className="mt-4">
        <span className="font-semibold">Focus:</span>{" "}
        <span className="text-electric-blue font-semibold">
          Full-Stack development (React.js, Flask, SQL/NoSQL databases,{" "}
          <span
            className="text-electric-blue font-semibold cursor-crosshair"
            onClick={() => setCurrentPage("Fun")}
          >
            Go
          </span>
          , Django, WebSockets, AWS)
        </span>
        . I'm always open to exploring and incorporating new technologies into
        my work.
      </p>
      <p className="mt-4">
        Feel free to look around, or reach out through the{" "}
        <span
          className="text-electric-blue font-semibold cursor-pointer"
          onClick={() => setCurrentPage("Contact")}
        >
          Contact
        </span>{" "}
        tab.
      </p>
    </div>
  );
}
