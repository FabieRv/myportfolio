"use client"

import Container from "../../../common/Container"
import Title from "../../../common/Title"
import { projets } from "../../../constant/index"
import ProjectItem from "./ProjectItem"
import { useState } from "react"

function Project() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const totalProjects = projets.length

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % totalProjects)
  }

  const handlePrev = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects
    )
  }

  const currentProject = projets[currentProjectIndex]

  return (
    <div className="">
      <Container>
        <div className="flex flex-col items-center ">
          <Title label="My Projects"></Title>
        </div>

        <div className="relative">
          {/* Project Item */}
          <ProjectItem
            project={currentProject}
            isReversed={currentProjectIndex % 2 !== 0}
          />

          {/* Pagination Dots */}
        </div>
      </Container>
    </div>
  )
}

export default Project
