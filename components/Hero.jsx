import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import heroBg from '../public/herobg.png'

export default function Hero({ setActiveSection }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-900/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-pink-800/15 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-12 relative z-10 py-16">
        {/* Text content - centered */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg font-medium text-pink-400"
            >
              <span className="text-white">Hello, I'm </span> Souvik Mukherjee <span className="text-white">from Kolkata, India</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Building <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Digital Experiences</span> That Matter
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-400"
            >
              I craft immersive web applications with cutting-edge technologies and pixel-perfect designs that convert visitors into customers.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
          >
            <motion.a
              href="/Resume.pdf"
              download="Resume.pdf"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium flex items-center gap-2 shadow-lg shadow-pink-900/30"
            >
              Download CV <FiArrowDown/>
            </motion.a>
            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-3 rounded-lg bg-gray-800 text-pink-400 font-medium border border-pink-500/30 flex items-center gap-2 shadow-lg shadow-pink-900/10 hover:border-pink-500/50"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0"
        >
          <div className="relative max-w-md">
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-pink-900/30 blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-pink-800/30 blur-xl"></div>
            <img
              src={heroBg}
              alt="Souvik Mukherjee"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}