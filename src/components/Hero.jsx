import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { useCallback } from "react";

const Hero = () => {
  const handleDownloadResume = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // must exist in public folder
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const scrollToProjects = useCallback(() => {
    const element = document.getElementById("projects");
    if (!element) return;

    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden
      bg-linear-to-br from-gray-50 via-gray-100 to-gray-200
      dark:from-black dark:via-gray-900 dark:to-black"
    >
      {/* Gradient blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Welcome to my portfolio
              </span>
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Your Name
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              B.Tech Student | Frontend Developer
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate about creating beautiful, responsive web applications with modern technologies
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-linear-to-br from-indigo-600 to-purple-600
              text-white font-semibold shadow-lg shadow-indigo-500/50"
            >
              View Projects
            </motion.button>

            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white/10 dark:bg-white/5
              backdrop-blur-lg border border-white/20 text-gray-700 dark:text-gray-300
              font-semibold flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={scrollToProjects}
              className="inline-flex flex-col items-center gap-2 cursor-pointer"
            >
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Scroll to explore
              </span>
              <ArrowDown className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
