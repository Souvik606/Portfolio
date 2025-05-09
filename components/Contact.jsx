import { motion } from 'framer-motion'
import { FiSend, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import contactBg from '/contactbg.png'

export default function Contact({ setActiveSection }) {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl px-6 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>

        {/* Contact Information and Form Section */}
        <div className="grid max-w-7xl mx-auto md:grid-cols-[1fr_1.5fr] gap-8 items-stretch">
          {/* Contact Information Card */}
          <div className="h-full bg-gradient-to-br from-pink-500 to-pink-600 p-8 rounded-2xl shadow-2xl shadow-pink-900/30 flex flex-col">
            <div className="flex-1 flex flex-col items-center text-center">
              <img
                src={contactBg}
                alt="Contact background"
                className="w-full max-w-[280px] mb-6 rounded-lg"
              />
              <div className="space-y-6 w-full">
                <h3 className="text-3xl font-bold text-white">Contact Information</h3>
                <p className="text-pink-100">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>
              </div>

              <div className="w-full space-y-4 mt-6">
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <div className="p-3 rounded-full bg-white text-pink-600 shadow-md">
                    <FiMapPin size={20} />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-medium text-white">Location</h4>
                    <p className="text-pink-100">Kolkata, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <div className="p-3 rounded-full bg-white text-pink-600 shadow-md">
                    <FiPhone size={20} />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-medium text-white">Phone</h4>
                    <p className="text-pink-100">+91 861 731 9150</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <div className="p-3 rounded-full bg-white text-pink-600 shadow-md">
                    <FiMail size={20} />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <p className="text-pink-100">mukherjeesouvik606@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="h-full bg-gray-800/70 p-8 rounded-2xl border border-gray-700/50 shadow-2xl shadow-pink-900/10 backdrop-blur-sm flex flex-col">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              Send Me a Message
            </h3>

            <form className="flex-1 flex flex-col space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-gray-300 font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/80 border border-gray-600/50 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 text-gray-100 placeholder-gray-400 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-gray-300 font-medium">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/80 border border-gray-600/50 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 text-gray-100 placeholder-gray-400 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-gray-300 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl bg-gray-700/80 border border-gray-600/50 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 text-gray-100 placeholder-gray-400 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2 flex-1">
                <label htmlFor="message" className="block text-gray-300 font-medium">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="resize-none w-full h-full min-h-[150px] px-4 py-3 rounded-xl bg-gray-700/80 border border-gray-600/50 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 text-gray-100 placeholder-gray-400 transition-all"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full mt-8 py-3 px-6 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium shadow-lg shadow-pink-900/30 flex items-center justify-center gap-2 mt-4"
              >
                <FiSend className="text-lg" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
