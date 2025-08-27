"use client";

import { useState, useRef } from "react";
import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import LinkButton from "../components/LinkButton";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null); // Add ref for form
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string | null, // Allow null
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send email");
      }

      setStatus("success");
      // e.currentTarget.reset(); // Reset form after success
      formRef.current?.reset(); // Use ref to reset form
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong, try again!");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-12 p-8 w-full overflow-hidden bg-gradient-to-b from-urban-steel/10 to-dark-teal/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <h2 className="text-3xl font-extrabold text-frozen-glow mb-6 text-center tracking-tight">
          yo
        </h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 bg-urban-steel/20 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-steel-shadow/50"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label
              htmlFor="name"
              className="block text-left text-sm font-medium text-frozen-glow mb-1"
            >
              Name
            </label>
            <motion.input
              name="name"
              type="text"
              id="name"
              placeholder="2006 Person of the Year"
              required
              className="w-full p-3 rounded-lg bg-urban-steel/50 border border-steel-shadow text-frozen-glow placeholder-frozen-glow/50 focus:outline-none focus:ring-2 focus:ring-blue-horizon transition-all duration-300"
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-left text-sm font-medium text-frozen-glow mb-1"
            >
              Email (Optional)
            </label>
            <motion.input
              name="email"
              type="email"
              id="email"
              placeholder="active@email.com"
              className="w-full p-3 rounded-lg bg-urban-steel/50 border border-steel-shadow text-frozen-glow placeholder-frozen-glow/50 focus:outline-none focus:ring-2 focus:ring-blue-horizon transition-all duration-300"
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-left text-sm font-medium text-frozen-glow mb-1"
            >
              Message
            </label>
            <motion.textarea
              name="message"
              id="message"
              placeholder="what's up?"
              required
              className="w-full p-3 h-36 rounded-lg bg-urban-steel/50 border border-steel-shadow text-frozen-glow placeholder-frozen-glow/50 focus:outline-none focus:ring-2 focus:ring-blue-horizon transition-all duration-300"
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <motion.button
            type="submit"
            disabled={status === "loading"}
            className="w-full p-3 rounded-lg bg-blue-horizon hover:bg-dark-teal text-frozen-glow font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {status === "loading" ? "Sending..." : "Send"}
          </motion.button>
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 font-medium text-center"
            >
              Message sent! you have officially entered my inbox.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 font-medium text-center"
            >
              {errorMessage}
            </motion.p>
          )}
        </form>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-4 w-full">
        <LinkButton
          link="https://linkedin.com/in/sohamdata"
          icon={<FaLinkedin className="text-xl" />}
          text="LinkedIn"
        />
        <LinkButton
          link="https://github.com/sohamdata"
          icon={<FaGithub className="text-xl" />}
          text="GitHub"
        />
        <LinkButton
          link="https://leetcode.com/ssohamm/"
          icon={<SiLeetcode className="text-xl" />}
          text="LeetCode"
        />
        <LinkButton
          link="/resume"
          icon={<FaFileAlt className="text-xl" />}
          text="Resume"
        />
      </div>
    </div>
  );
}
