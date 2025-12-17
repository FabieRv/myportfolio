import Contact from "./Contact/Contact"
import About from "./Education/About"
import Apropos from "./Education/Apropos"
import Experience from "./Experiences/Experience"
import Project from "./projet/Project"

function Home() {
  return (
    <div>
      <About />
      <Experience />
      <Apropos />
      <Project />
      <Contact />
    </div>
  )
}

export default Home
