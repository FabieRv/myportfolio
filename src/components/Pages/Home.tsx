// import Profile from "./Profile/Profile"

import About from "./About/About"
import Experiences from "./Experiences/Experiences"
import Logoexpe from "./LogoExpe/Logoexpe"
import Profile from "./Profile/Profile"
import Skils from "./Skils/Skils"
import Project from "./projet/Project"

function Home() {
  return (
    <div>
      <Profile />
      <About />
      <Logoexpe />
      <Skils />
      <Project />
      <Experiences />
    </div>
  )
}

export default Home
