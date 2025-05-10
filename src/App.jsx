import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="overflow-x-hidden bg-gray-900 text-gray-100 font-sans">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}