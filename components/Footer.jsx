import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="bg-gray-800/90 backdrop-blur-md border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Connect with Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-100 mb-4">
            Connect with Us
          </h3>
          <div className="flex justify-center space-x-6 flex-wrap gap-y-4">
            {[
              { icon: <FiGithub size={30} />, url: "https://github.com/Souvik606" },
              { icon: <FiLinkedin size={30} />, url: "https://www.linkedin.com/in/souvik-mukherjee-893402253/" },
              { icon: <SiCodeforces size={30} />, url: "https://codeforces.com/profile/v1kCoder" },
              { icon: <SiLeetcode size={30} />, url: "https://leetcode.com/u/SouvikMukherjee6/" },
              { icon: <FaWhatsapp size={30} />, url: "https://wa.me/9474684762" },
              { icon: <FiMail size={30} />, url: "mailto:mukherjeesouvik606@gmail.com" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                whileHover={{ y: -3, color: "#EC4899" }}
                className="text-gray-400 hover:text-pink-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* About Souvik Mukherjee Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 animate-fade-in"
        >
          <p className="text-xl text-gray-300 mb-4">
            Built and designed by <span className="font-bold text-pink-400">Souvik Mukherjee</span>.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Souvik Mukherjee is a systems and distributed backend engineer specializing in Go and C++. He loves building production-grade infrastructure, TCP servers, and compilers from first principles.
          </p>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Souvik Mukherjee. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

