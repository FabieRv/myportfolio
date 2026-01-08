// import Profile from "./Profile/Profile"

import About from "./About/About"
import ExperienceTimeline from "./Experiences/Experience"
import Logoexpe from "./LogoExpe/Logoexpe"
import Profile from "./Profile/Profile"
import Skils from "./Skils/Skils"
import Project from "./projet/Project"
import { experiences } from "../../constant/index"

function Home() {
  return (
    <div>
      <Profile />
      <About />
      <Logoexpe />
      <Skils />
      <Project />
      <ExperienceTimeline experiences={experiences} />
    </div>
  )
}

export default Home
