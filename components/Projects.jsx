import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: "Cravyn - A Food Ordering Platform",
    description: "A modern, user-friendly food delivery platform where restaurants can register themselves and customers can order and many more.",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
    image: "🍔",
    github: "https://github.com/rahulc0dy/cravyn-web-frontend",
    live: "https://cravyn-web-frontend.vercel.app/",
    type: "Group project"
  },
  {
    title: "ByteMe - A Storage Management Solution",
    description: "A robust and scalable storage management solution for efficient data organization and retrieval. It offers seamless integration with cloud services for optimized performance.",
    tags: ["Next.js", "Appwrite", "Tailwind CSS"],
    image: "💾",
    github: "https://github.com/Souvik606/ByteMe",
    live: "https://byte-me-ten.vercel.app/",
    type: "Self Project"
  },
  {
    title: "Synergin - A Professional Networking Interface",
    description: "A LinkedIn-like platform for professionals to connect, share experiences, and discover career opportunities. It supports messaging, networking, and job posting functionalities.",
    tags: ["MERN", "Tailwind CSS"],
    image: "💼",
    github: "https://github.com/Souvik606/SynergIn",
    live: "https://synergin.onrender.com/",
    type: "Self Project"
  },
  {
    title: "TastopiaAI - AI Powered Recipe Creator App",
    description: "An AI-powered app that generates personalized recipes based on user preferences and dietary restrictions. It also provides step-by-step cooking instructions and nutritional information.",
    tags: ["React Native", "PostgreSQL", "Expo", "Clerk"],
    image: "🍳",
    github: "https://github.com/Souvik606/AI_Recipe_App",
    live: "",
    type: "Self Project"
  },
  {
    title: "Discord Clone",
    description: "A real-time communication platform for text, voice, and video chat. The clone mimics core features of Discord such as servers, channels, and live communication for communities.",
    tags: ["Next.js", "PostgreSQL", "Clerk", "Tailwind CSS", "Zustand", "Socket.io", "LiveKit"],
    image: "🎮",
    github: "https://github.com/Souvik606/Discord-clone",
    live: "",
    type: "Self Project"
  },
  {
    title: "SARDS - A Toy Programming Language (Ongoing)",
    description: "An interpreted programming language with a web-based editor, allowing users to write, test, and execute code within the browser. Aiming to simplify learning programming concepts.",
    tags: ["Python", "Next.js", "Tailwind CSS"],
    image: "📝",
    github: "https://github.com/Souvik606/SARDS",
    live: "",
    type: "Group project"
  }
];

export default function Projects({ setActiveSection }) {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted to solve specific problems and deliver exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-pink-500/50 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-8xl">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
                <p className="text-pink-400 text-sm mb-4">{project.type}</p>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-gray-700 text-pink-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-pink-400 transition-colors"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
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
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium shadow-lg shadow-pink-900/30"
          >
            Want a Similar Project? Let's Talk
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
