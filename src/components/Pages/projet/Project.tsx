"use client"

import Container from "../../common/Container"
import Title from "../../common/Title"
import { projets } from "../../../constant/index"
import ProjectItem from "./ProjectItem"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react" // For navigation arrows

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
    <div className="bg-[#F4EDEA]">
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

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10 hidden lg:block"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} className="text-gray-700 bg-amber-600" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10 hidden lg:block"
            aria-label="Next project"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          {/* Pagination Dots */}
        </div>
      </Container>
    </div>
  )
}

export default Project
