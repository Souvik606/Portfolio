import { motion, AnimatePresence } from 'framer-motion'
import { FiSend, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import contactBg from '/contactbg.png'
import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

function Toast({ message, type }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className={`
        fixed bottom-8 right-8 z-50
        ${type === 'success' ? 'bg-pink-600' : 'bg-black'}
        text-white py-3 px-6 rounded-xl shadow-lg shadow-black/50 flex items-center gap-4
      `}
    >
      <span>{message}</span>
    </motion.div>
  )
}

export default function Contact() {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)

  // auto-dismiss toast after 5 seconds
  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(null), 5000)
    return () => clearTimeout(timer)
  }, [toast])

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        'service_19njbij',
        'template_nrh4mob',
        formRef.current,
        'GV0bcYLdHQSWPS34C'
      )
      .then(() => {
        setLoading(false)
        setToast({ message: 'Message sent successfully!', type: 'success' })
        formRef.current.reset()
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
        setToast({ message: 'Failed to send. Please try again.', type: 'error' })
      })
  }

  return (
    <section id="contact" className="py-20 px-2 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In{' '}
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>

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
                {[
                  { icon: <FiMapPin size={20} />, label: 'Location', value: 'Kolkata, India' },
                  { icon: <FiPhone size={20} />, label: 'Phone', value: '+91 861 731 9150' },
                  { icon: <FiMail size={20} />, label: 'Email', value: 'mukherjeesouvik606@gmail.com' }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm"
                  >
                    <div className="p-3 rounded-full bg-white text-pink-600 shadow-md">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-medium text-white">{item.label}</h4>
                      <p className="text-pink-100">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="h-full bg-gray-800/70 p-8 rounded-2xl border border-gray-700/50 shadow-2xl shadow-pink-900/10 backdrop-blur-sm flex flex-col">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              Send Me a Message
            </h3>
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex-1 flex flex-col space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-gray-300 font-medium">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/80 border border-gray-600/50 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 text-gray-100 placeholder-gray-400 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-300 font-medium">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/80 border border-gray-600/50 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 text-gray-100 placeholder-gray-400 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-300 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-700/80 border border-gray-600/50 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 text-gray-100 placeholder-gray-400 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2 flex-1">
                <label className="block text-gray-300 font-medium">Your Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="resize-none w-full h-full min-h-[150px] px-4 py-3 rounded-xl bg-gray-700/80 border border-gray-600/50 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 text-gray-100 placeholder-gray-400 transition-all"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={loading ? {} : { scale: 1.02, boxShadow: '0 10px 25px -5px rgba(236,72,153,0.4)' }}
                whileTap={loading ? {} : { scale: 0.98 }}
                className={`
                  w-full mt-8 py-3 px-6 rounded-xl
                  ${loading ? 'bg-pink-700 cursor-not-allowed' : 'bg-gradient-to-r from-pink-500 to-pink-600'}
                  text-white font-medium shadow-lg shadow-pink-900/30 flex items-center justify-center gap-2
                `}
              >
                {loading && (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                )}
                <FiSend className="text-lg" />
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Toasts */}
      <AnimatePresence>
        {toast && <Toast key={toast.message} message={toast.message} type={toast.type} />}
      </AnimatePresence>
    </section>
  )
}
