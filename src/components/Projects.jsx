import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projectsData } from "../data/project";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-full bg-gradient-to-br from-white to-gray-50
              dark:from-gray-900 dark:to-black rounded-2xl overflow-hidden
              border border-gray-200 dark:border-white/10
              hover:border-indigo-500/50 transition-all duration-300 shadow-lg">

                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}
                  opacity-0 hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} mb-4`}
                    />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-medium
                        bg-white/80 dark:bg-black/50
                        border border-gray-200 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2
                      px-4 py-3 rounded-xl bg-white/80 dark:bg-white/10
                      border border-gray-200 dark:border-white/10"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">Code</span>
                    </motion.a>

                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 flex items-center justify-center gap-2
                      px-4 py-3 rounded-xl bg-gradient-to-r ${project.gradient}
                      text-white shadow-lg`}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm">Demo</span>
                    </motion.a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
