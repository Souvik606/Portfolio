import { motion } from 'framer-motion';

const education = [
  {
    degree: "Master's in Computer Science",
    institution: "Tech University",
    year: "2020-2022"
  },
  {
    degree: "Bachelor's in Software Engineering",
    institution: "State College",
    year: "2016-2020"
  }
];

export default function Education() {
  return (
    <section className="py-20 px-6 bg-gray-800" id="education">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-gray-700 shadow-md"
            >
              <div className="flex items-start">
                <div className="p-3 rounded-full mr-4 bg-blue-900">
                  <span className="text-xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-blue-300 font-medium">{edu.institution}</p>
                  <p className="mt-2 text-gray-300">{edu.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}