import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

/* ------------------ Typing Effect ------------------ */
const roles = [
  "Frontend Developer",
  "UI-Focused Engineer",
  "React Developer",
  "Web Animation Enthusiast",
];

const useTypingEffect = (words, speed = 120, pause = 1500) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pause);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, speed, pause]);

  return text;
};
/* -------------------------------------------------- */

const Hero = () => {
  const typedText = useTypingEffect(roles);

  const scrollToProjects = useCallback(() => {
    const element = document.getElementById("projects");
    if (!element) return;

    const offset = 80;
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden
      bg-linear-to-br from-gray-50 via-gray-100 to-gray-200
      dark:from-black dark:via-gray-900 dark:to-black"
    >
      {/* Background Glows */}
      <motion.div
        className="absolute top-24 left-16 w-80 h-80 bg-indigo-500/30 blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-24 right-16 w-96 h-96 bg-purple-500/30 blur-3xl"
        animate={{ scale: [1, 1.35, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* MAIN CONTENT */}
      <div
        className="relative z-10 max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8 min-h-screen
        grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT */}
        <div className="text-center lg:text-left lg:pr-8">
          <motion.div className="mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full
              border border-gray-300 dark:border-gray-700"
            >
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Frontend Developer • UI Focused
              </span>
            </motion.div>
          </motion.div>

          <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Sagnik
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl font-semibold
            text-gray-700 dark:text-gray-300 mb-4"
          >
            Bachelor of Technology Student •{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              {typedText}
            </span>
            <span className="ml-1 animate-pulse">|</span>
          </motion.h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
            I build modern, responsive, and animated web experiences with a strong
            focus on clean UI, performance, and scalable code.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full
              bg-linear-to-br from-indigo-600 to-purple-600
              text-white font-semibold shadow-xl"
            >
              View Projects
            </motion.button>

            {/* RESUME — PURE FILE LINK (LIKE IMAGE) */}
            <motion.a
              href="/Resume.pdf"
              download="/Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full
              border border-gray-300 dark:border-gray-700
              text-gray-700 dark:text-gray-300
              font-semibold flex items-center gap-2 justify-center"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-start lg:pl-10">
          <div className="absolute w-80 h-80 bg-indigo-500/30 blur-3xl"></div>

          <div
            className="relative w-56 h-72 overflow-hidden shadow-2xl
            rounded-[2.5rem_1.5rem_3.5rem_1.5rem]
            border border-indigo-500/30"
          >
            <img
              src="/purulia.jpeg"
              alt="Sagnik Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
