import { motion } from "framer-motion";
import { Code, Laptop, Zap, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
    },
    {
      icon: Laptop,
      title: "Responsive Design",
      description: "Creating seamless cross-platform experiences",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimizing for speed and efficiency",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively in teams",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-linear-to-r from-white to-gray-50 dark:from-gray-900 dark:to-black
            rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-200 dark:border-white/10 mb-12"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am an <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              intermediate web developer</span> with strong skills in both front-end and
              back-end technologies. I enjoy building modern, responsive, and user-friendly
              web applications that focus on clean UI and real-world usability.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am proficient in{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                HTML, CSS, JavaScript, and React.js
              </span>, with hands-on experience in{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Node.js and database management
              </span>. I focus on writing clean, maintainable code while ensuring performance
              and scalability.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am passionate about continuously improving my technical expertise, learning
              new tools and frameworks, and applying best practices in development. I enjoy
              solving problems, experimenting with new ideas, and working on projects that
              enhance my skills as a developer.
            </p>
          </motion.div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="bg-white/50 dark:bg-white/5 backdrop-blur-lg
                rounded-2xl p-6 border border-gray-200 dark:border-white/10 text-center"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full
                  bg-linear-to-r from-indigo-500 to-purple-600 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <highlight.icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
