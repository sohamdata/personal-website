import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import LinkButton from "../components/LinkButton";

export default function Contact() {
  return (
    <div className="flex flex-col items-center space-y-10 p-6 text-frozen-glow w-full overflow-hidden">
      <div className="w-full max-w-lg text-center">
        <h2 className="text-2xl font-bold mb-4">yo</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-urban-steel border border-steel-shadow focus:outline-none focus:ring-2 focus:ring-blue-horizon"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-urban-steel border border-steel-shadow focus:outline-none focus:ring-2 focus:ring-blue-horizon"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 h-32 rounded-md bg-urban-steel border border-steel-shadow focus:outline-none focus:ring-2 focus:ring-blue-horizon"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 rounded-md bg-blue-horizon hover:bg-dark-teal text-frozen-glow font-semibold transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-4 text-2xl w-full">
        <LinkButton
          onClick={() =>
            window.open("https://linkedin.com/in/sohamdata", "_blank")
          }
          icon={<FaLinkedin className="text-xl" />}
          text="LinkedIn"
        />
        <LinkButton
          onClick={() => window.open("https://github.com/sohamdata", "_blank")}
          icon={<FaGithub className="text-xl" />}
          text="GitHub"
        />
        <LinkButton
          onClick={() => window.open("/resume", "_self")}
          icon={<FaFileAlt className="text-xl" />}
          text="Resume"
        />
        <LinkButton
          onClick={() => window.open("https://leetcode.com/ssohamm/", "_blank")}
          icon={<SiLeetcode className="text-xl" />}
          text="LeetCode"
        />
      </div>
    </div>
  );
}
