import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Navbar({ activeSection, setActiveSection }) {
  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-gray-800/90 backdrop-blur-md z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <motion.button
              key={link.id}
              className={`relative px-1 py-2 ${
                activeSection === link.id
                  ? 'text-pink-400 font-medium'
                  : 'text-gray-300 hover:text-pink-300'
              }`}
              onClick={() => {
                setActiveSection(link.id);
                const contactSection = document.getElementById(link.id);
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-500"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <div className="flex space-x-4">
          <motion.a
            href="https://github.com/Souvik606"
            target="_blank"
            whileHover={{ y: -3, color: "#EC4899" }}
            className="text-gray-300 hover:text-pink-400"
          >
            <FiGithub size={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/souvik-mukherjee-893402253/"
            target="_blank"
            whileHover={{ y: -3, color: "#EC4899" }}
            className="text-gray-300 hover:text-pink-400"
          >
            <FiLinkedin size={20} />
          </motion.a>
          <motion.a
            href="mailto:mukherjeesouvik606@gmail.com"
            whileHover={{ y: -3, color: "#EC4899" }}
            className="text-gray-300 hover:text-pink-400"
          >
            <FiMail size={20} />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}
