import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60 z-[60]"></div>
      <Navbar />
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Certificates /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </div>
  )
}

export default App
