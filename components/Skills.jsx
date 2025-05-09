import { motion } from 'framer-motion';
import skills from '../constants/constants.jsx';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg font-semibold text-gray-400 max-w-3xl mx-auto">
            Technologies I've worked with and mastered throughout my journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, levels], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-pink-500/30 transition-colors duration-300 backdrop-blur-sm flex flex-col items-center justify-center"
            >
              <h3 className="text-xl font-bold text-gray-100 mb-6 pb-2 border-b border-gray-700 text-center">
                {category}
              </h3>

              {Object.entries(levels).map(([level, skillsList]) => (
                <div key={level} className="mb-6 last:mb-0">
                  <h4 className="text-md font-medium text-pink-400 mb-4 text-center">
                    {level}
                  </h4>
                  <div className="flex flex-wrap gap-5 justify-center">
                    {skillsList.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ y: -3 }}
                        className="flex flex-col items-center justify-center p-3 bg-gray-700/30 rounded-lg border border-gray-600 hover:border-pink-400/50 transition-colors w-32 h-32"
                      >
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-16 h-16 mb-2 object-contain"
                        />
                        <span className="text-sm text-gray-300 text-center break-words">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-xl font-bold mb-6 max-w-2xl mx-auto">
            Continuously learning and expanding my skill set to stay at the forefront of technology
          </p>
        </motion.div>
      </div>
    </section>
  );
}
