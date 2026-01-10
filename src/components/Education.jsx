import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { educationData } from "../data/education";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-linear-to-br from-gray-50 via-gray-100 to-gray-200
      dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-br from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="relative bg-white/50 dark:bg-white/5 backdrop-blur-lg
                rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/10
                hover:border-indigo-500/50 transition-all duration-300 shadow-lg"
              >

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-linear-to-br
                      from-indigo-500 to-purple-600 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap className="w-7 h-7 text-white" />
                    </motion.div>

                    <div>
                      {/* ✅ ONLY CHANGE HERE */}
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {edu.degree === "B.Tech"
                          ? "Bachelor of Technology"
                          : edu.degree}
                      </h3>

                      <p className="text-indigo-600 dark:text-indigo-300 font-semibold">
                        {edu.field}
                      </p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-full
                    bg-white/80 dark:bg-black/50 border border-gray-200 dark:border-white/10"
                  >
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {edu.duration}
                    </span>
                  </div>
                </div>

                {/* Institute + CGPA */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="font-medium">{edu.institution}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-indigo-400" />
                    <span className="font-semibold text-gray-900 dark:text-gray-100 tracking-wide">
                      {edu.cgpa || edu.percentage}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {edu.description}
                </p>

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-start gap-2 text-sm
                          text-gray-600 dark:text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 mt-2 rounded-full bg-linear-to-br from-indigo-600 to-purple-600"></span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
