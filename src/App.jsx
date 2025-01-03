import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Skills from "./components/skillsection/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"

const App = () => {
  return (
    <>
      <div className="bg-black">
    <Navbar /> 
    <Hero />
   <Skills />
   <Experience />
    <Projects />
    <Footer />
    </div>
    </>
  )
}

export default App