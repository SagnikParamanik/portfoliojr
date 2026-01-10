import { motion } from "framer-motion";
import { skillsData } from "../data/skills";

const Skills = () => {
  if (!skillsData || skillsData.length === 0) {
    return null;
  }

  return (
    <section
      id="skills"
      className="py-20 bg-linear-to-br from-gray-50 via-gray-100 to-gray-200
      dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

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
              Skills & Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies, tools, and frameworks I actively use to build scalable,
            modern, and performance-focused applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div
                className="relative h-full bg-white/50 dark:bg-white/5
                backdrop-blur-lg rounded-2xl p-6 border border-gray-200
                dark:border-white/10 hover:border-indigo-500/50
                transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${
                    skill.color || ""
                  } opacity-0 hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                {skill.icon && (
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16
                    rounded-xl bg-linear-to-br ${skill.color || ""}
                    mb-4 relative z-10`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <skill.icon className="w-8 h-8 text-white" />
                  </motion.div>
                )}

                {/* Category */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 relative z-10">
                  {skill.category}
                </h3>

                {/* Short Description */}
                {skill.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 relative z-10">
                    {skill.description}
                  </p>
                )}

                {/* Meta Info */}
                <div className="flex flex-wrap gap-3 text-xs text-gray-700 dark:text-gray-300 mb-4 relative z-10">
                  {skill.level && (
                    <span className="px-2 py-1 rounded-md border border-gray-300 dark:border-white/10">
                      Level: {skill.level}
                    </span>
                  )}
                  {skill.experience && (
                    <span className="px-2 py-1 rounded-md border border-gray-300 dark:border-white/10">
                      {skill.experience}
                    </span>
                  )}
                  {skill.skills && (
                    <span className="px-2 py-1 rounded-md border border-gray-300 dark:border-white/10">
                      {skill.skills.length}+ Tools
                    </span>
                  )}
                </div>

                {/* Skill Tags (FIXED TEXT VISIBILITY) */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {skill.skills?.map((item, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + idx * 0.05,
                      }}
                      className="px-3 py-1.5 rounded-full text-sm font-medium
                      text-gray-900 dark:text-gray-200
                      bg-white/80 dark:bg-black/50
                      border border-gray-200 dark:border-white/10
                      hover:border-indigo-500/50
                      transition-all duration-300"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
