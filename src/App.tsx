import AboutMe from "./components/sections/About"
import Experiences from "./components/sections/Experiences"
import Logoexpe from "./components/sections/Logoexpe"
import Profile from "./components/sections/Profile"
import SkillsSection from "./components/sections/Skils"
import Header from "./Layout/Header"
import Footer from "./Layout/Footer"
import { AnimatedTestimonialsDemo } from "./components/sections/Works/Demo"

const App = () => {
  return (
    <div>
      <Header />
      <Profile />
      <AboutMe />
      <Logoexpe />
      <SkillsSection />
      {/* <Project /> */}
      <AnimatedTestimonialsDemo />
      <Experiences />
      <Footer />
    </div>
  )
}

export default App
