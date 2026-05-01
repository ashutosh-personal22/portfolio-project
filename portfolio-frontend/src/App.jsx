import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsApp'

export default function App() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <main>
        <Hero />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Education />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
