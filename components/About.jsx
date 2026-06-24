import { motion } from 'framer-motion'
import { FiSmartphone, FiServer, FiCpu, FiCode } from 'react-icons/fi'
import { FaRobot, FaLaptop } from "react-icons/fa";
import { BsWebcamFill } from "react-icons/bs";
import Educationbg1 from '/educationbg1.png';
import Educationbg2 from '/educationbg2.png';
import Educationbg3 from '/educationbg3.png';
import Educationbg4 from '/educationbg4.png';

export default function About() {
  const interests = [
    { name: "Distributed Systems", icon: <FiServer className="text-pink-400" size={75} /> },
    { name: "Concurrency & Databases", icon: <FiCpu className="text-pink-400" size={75} /> },
    { name: "Systems Programming", icon: <FaLaptop className="text-pink-400" size={75} /> },
    { name: "Compilers & PL Theory", icon: <FiCode className="text-pink-400" size={75} /> },
    { name: "Competitive Programming", icon: <FaRobot className="text-pink-400" size={75} /> }
  ];

  const education = [
    {
      year: "2026 - 2028 (Incoming)",
      grade: "M.Tech CSE",
      degree: "Master of Technology",
      field: "Computer Science",
      institution: "IIT Madras",
      description: "Focusing on distributed systems, concurrency, systems programming, and theory.",
      image: Educationbg4,
    },
    {
      year: "2022 - 2026",
      grade: "9.61 CGPA",
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Calcutta University",
      description: "Focused on software design, algorithms, computer infrastructure, and systems.",
      image: Educationbg3,
    },
    {
      year: "2020 - 2022",
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
  ];

  const achievements = [
    "Cracked GATE CS with AIR 48 in 2026 (top 0.02% of 211,000 aspirants) and AIR 199 in 2025 out of 170,000 aspirants.",
    "Attained the title of Expert (peak rating 1729) on Codeforces under handle v1kCoder; Knight badge on LeetCode (peak rating 1885).",
    "Secured global rank 412 in Codeforces Round 1043 (Div.3) and 756 in Round 1049 (Div.2).",
    "Co-organized Code Combat, a multi-tier competitive programming tournament at Reflexons 2026 (CU Technology Campus), designing problem distribution metrics and managing contest logistics.",
    "Secured 1st place in the Inter-College Treasure Hunt at Reflexons 2026."
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* About Me Section */}
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
              I'm Souvik Mukherjee, a Computer Science engineer specializing in distributed systems, concurrency, and systems programming in Go and C++. I love building production-grade infrastructure from first principles — TCP servers, compilers, and version-control systems — with strong foundations in data structures, algorithms, and software design.
            </p>
            <p className="text-lg font-semibold">
              I recently graduated with a B.Tech in Computer Science and Engineering from Calcutta University (9.61 CGPA) and will be pursuing my M.Tech in Computer Science at IIT Madras. I am passionate about writing clean, concurrency-safe, and highly optimized code to solve complex engineering challenges.
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
            My <span
            className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Interests</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-20 max-w-6xl mx-auto">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: index * 0.2}}
                whileHover={{scale: 1.05}}
                className="flex flex-col items-center"
              >
                <div>{interest.icon}</div>
                <p className="text-gray-300 text-2xl mt-4 text-center">{interest.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <div className="mt-12">
          <motion.h3
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-3xl font-bold text-center mb-12"
          >
            My <span
            className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Education</span>
          </motion.h3>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 md:left-6 h-full w-0.5 bg-gray-600"></div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, x: index % 2 === 0 ? -50 : 50}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: index * 0.2}}
                className={`mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
              >
                {/* Timeline dot */}
                <div
                  className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/20 border-2 border-pink-500 z-10">
                  <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                </div>

                {/* Timeline content */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} bg-gray-700/50 p-6 rounded-xl border border-gray-600 backdrop-blur-sm`}>
                  <div className="flex">
                    <img className="w-44 h-auto object-contain mr-4" src={edu.image} alt={edu.grade}/>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row justify-between gap-4 mb-2">
                        <span className="text-pink-400 font-medium">{edu.year}</span>
                        <span className="text-gray-300 bg-gray-600 px-3 py-1 rounded-full text-sm w-fit">{edu.grade}</span>
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
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{staggerChildren: 0.3}}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-8">
            My <span
            className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Achievements</span>
          </h3>
          {achievements.map((achievement, index) => (
            <motion.p
              key={index}
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: index * 0.3}}
              className="text-lg font-semibold text-gray-300 mb-6 max-w-4xl mx-auto"
            >
              • {achievement}
            </motion.p>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

