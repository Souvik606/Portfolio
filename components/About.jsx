import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiSmartphone, FiServer } from 'react-icons/fi'
import Educationbg1 from '/educationbg1.png';
import Educationbg2 from '/educationbg2.png';
import Educationbg3 from '/educationbg3.png';

export default function About({ setActiveSection }) {
  const interests = [
    { name: "Frontend Development", icon: <FiCpu className="text-pink-400" size={75} /> },
    { name: "Backend Development", icon: <FiServer className="text-pink-400" size={75} /> },
    { name: "Mobile App Development", icon: <FiSmartphone className="text-pink-400" size={75} /> },
    { name: "Computer Vision", icon: <FiCode className="text-pink-400" size={75} /> }
  ]

  const education = [
    {
      year: "2022 - 2026",
      grade: "9.67 CGPA (Till 4th Sem)",
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Calcutta University",
      description: "Currently pursuing my degree with focus on software development, algorithms, and computer systems.",
      image: Educationbg3,
    },
    {
      year: "2020- 2022",
      grade: "95.33%",
      degree: "Higher Secondary",
      field: "Science (PCM)",
      institution: "Green Point Academy",
      description: "Completed with distinction in Physics, Chemistry, Mathematics, and Computer Science.",
      image: Educationbg2,
    },
    {
      year: "2009 - 2020",
      grade: "97.4%",
      degree: "Secondary Education",
      field: "General Studies",
      institution: "Green Point Academy",
      description: "Completed with outstanding academic performance and extracurricular achievements.",
      image: Educationbg1,
    }
  ]

  return (
    <section id="about" className="py-20 px-6 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto mb-6"></div>
          <div className="space-y-4 text-gray-400">
            <p className="text-lg font-semibold">
              I'm Souvik Mukherjee, a student currently pursuing my BTech in Computer Science and Engineering from
              Calcutta University.
              Alongside my studies, I'm a passionate web developer who designs and builds modern websites, and
              occasionally crafts
              mobile applications using React Native.
            </p>
            <p className="text-lg font-semibold">
              My journey in development began when I created my first website in college, and since then I've been
              hooked on turning ideas
              into functional, beautiful digital experiences. I believe in writing clean, efficient code that delivers
              exceptional user experiences.
            </p>
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            My <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Interests</span>
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-20 max-w-6xl mx-auto">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: index * 0.2}}
                whileHover={{scale: 1.05}}
                className=""
              >
                <div>
                  {interest.icon}
                <p className="text-gray-300 text-2xl mt-4">{interest.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Timeline Section */}
        <div className="mt-12">
          <motion.h3
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-3xl font-bold text-center mb-12"
          >
            My <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Education</span>
          </motion.h3>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 md:left-6 h-full w-0.5 bg-gray-600"></div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/20 border-2 border-pink-500 z-10">
                  <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                </div>

                {/* Timeline content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} bg-gray-700/50 p-6 rounded-xl border border-gray-600 backdrop-blur-sm`}>
                  <div className="flex">
                    <img className="w-44" src={edu.image} alt={edu.grade}/>
                    <div>
                      <div className="flex flex-col md:flex-row justify-between gap-4 mb-2">
                        <span className="text-pink-400 font-medium">{edu.year}</span>
                        <span className="text-gray-300 bg-gray-600 px-3 py-1 rounded-full text-sm">{edu.grade}</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-100">{edu.degree} in {edu.field}</h4>
                      <p className="text-pink-400 font-medium mb-2">{edu.institution}</p>
                      <p className="text-gray-400">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.98}}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({behavior: "smooth" });
              }
            }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium shadow-lg shadow-pink-900/30"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}