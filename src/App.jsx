import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Skills from "./components/skillsection/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"

const App = () => {
  return (
    <>
      <div className="bg-black mx-auto px-6 sm:px-12">
    <Navbar />
    <Hero />
    </div>

    <Skills />
   <Experience />
    <Projects />
    
    <div className="bg-black mx-auto px-6 sm:px-12">
    <Footer />
    </div>
    </>
  )
}

export default App