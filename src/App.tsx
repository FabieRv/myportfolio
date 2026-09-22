import Footer from "./Layout/Footer"
import Header from "./Layout/Header"
import AboutMe from "./components/sections/About"
import ContactSection from "./components/sections/Contact"
import Education from "./components/sections/Education"
import Experiences from "./components/sections/Experiences"
import Logoexpe from "./components/sections/Logoexpe"
import Profile from "./components/sections/Profile"
import SkillsSection from "./components/sections/Skills"
import ProjectSection from "./components/sections/projet/ProjectSection"



const App = () => {
  return (
    <div>
      <Header />
      <Profile />
      <AboutMe />
      <Logoexpe />
      <Education />
      <SkillsSection/>
      <ProjectSection />
      <Experiences />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App