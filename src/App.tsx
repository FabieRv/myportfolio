import AboutMe from "./components/sections/About"
import Experiences from "./components/sections/Experiences"
import Logoexpe from "./components/sections/Logoexpe"
import Profile from "./components/sections/Profile"
import Header from "./Layout/Header"
import Footer from "./Layout/Footer"
// import Projects from "./components/sections/Project"
import SkillsSlider from "./components/sections/skils"
import ProjectSection from "./components/sections/projet/ProjectSection"
import Education from "./components/sections/Education"
import ContactSection from "./components/sections/Contact"

const App = () => {
  return (
    <div>
      <Header />
      <Profile />
      <AboutMe />

      <Logoexpe />
      <Education />
      {/* <Philosophy /> */}
      <SkillsSlider />
      <ProjectSection />

      <Experiences />
      <ContactSection />
      {/* <Projects /> */}
      <Footer />
    </div>
  )
}

export default App
