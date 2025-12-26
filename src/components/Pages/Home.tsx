// import Profile from "./Profile/Profile"

import About from "./About/About"
// import Logoexpe from "./LogoExpe/Logoexpe"
import Profile from "./Profile/Profile"
import Project from "./projet/Project"

function Home() {
  return (
    <div>
      <Profile />
      {/* <Logoexpe /> */}
      <About />
      <Project />
    </div>
  )
}

export default Home
