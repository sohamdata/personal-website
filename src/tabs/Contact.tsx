import { FaGithub, FaFileAlt, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import LinkButton from "../components/LinkButton";

export default function Contact() {
  return (
    <div className="flex flex-col items-center space-y-10 p-6 text-gray-200">
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
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 h-32 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="flex space-x-6 text-2xl">
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
          onClick={() => window.open("https://tally.so/r/3yMX9x", "_blank")}
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
