import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork, Clock } from "lucide-react";
import { projectsData } from "../data/project";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-white dark:bg-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-linear-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world projects built, maintained, and version-controlled on GitHub
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <div
                className="relative h-full bg-linear-to-r from-white to-gray-50
                dark:from-gray-900 dark:to-black rounded-2xl overflow-hidden
                border border-gray-200 dark:border-white/10
                hover:border-indigo-500/50 transition-all duration-300 shadow-lg"
              >
                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-linear-to-r ${project.gradient}
                  opacity-0 hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-linear-to-br ${project.gradient}
                      flex items-center justify-center`}
                    >
                      {project.icon && (
                        <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {project.title}
                      </h3>

                      {project.type && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {project.type}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* GitHub Meta */}
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4">
                    {project.stars !== undefined && (
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" /> {project.stars}
                      </span>
                    )}
                    {project.forks !== undefined && (
                      <span className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" /> {project.forks}
                      </span>
                    )}
                    {project.updated && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {project.updated}
                      </span>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-medium
                        text-gray-900 dark:text-gray-200
                        bg-white/80 dark:bg-black/50
                        border border-gray-200 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
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
                      px-4 py-3 rounded-xl bg-linear-to-r ${project.gradient}
                      text-white shadow-lg`}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm">Live</span>
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