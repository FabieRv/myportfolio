import AboutMe from "./components/sections/About"
import Experiences from "./components/sections/Experiences"
import Logoexpe from "./components/sections/Logoexpe"
import Profile from "./components/sections/Profile"
import Header from "./Layout/Header"
import Footer from "./Layout/Footer"
import Projects from "./components/sections/Project"

const App = () => {
  return (
    <div>
      <Header />
      <Profile />
      <AboutMe />
      <Logoexpe />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
