import Footer from "./Layout/Footer"
import Header from "./Layout/Header"
import AboutMe from "./components/sections/About"
import ContactSection from "./components/sections/Contact"
import Education from "./components/sections/Education"
import Experiences from "./components/sections/Experiences"
import Logoexpe from "./components/sections/Logoexpe"
import Philosophy from "./components/sections/Philosophy"
import Profile from "./components/sections/Profile"
import ProjectSection from "./components/sections/projet/ProjectSection"
import SkillsSlider from "./components/sections/skils"


const App = () => {
  return (
    <div>
      <Header />
      <Profile />
      <AboutMe />

      <Logoexpe />
      <Education />
      <Philosophy />
      <SkillsSlider />
      <ProjectSection />

      <Experiences />
      <ContactSection />
      


      <Footer />
    </div>
  )
}

export default App
