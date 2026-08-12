import React, { useState, useRef } from "react"

import ProjectCard from "./ProjectCard"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ImageProject } from "../../../constant"

const ProjectSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null) // Référence pour GSAP
  const projectsPerPage = 3

  const totalPages = Math.ceil(ImageProject.length / projectsPerPage)
  const startIndex = currentPage * projectsPerPage
  const currentProjects = ImageProject.slice(
    startIndex,
    startIndex + projectsPerPage
  )

  // Animation GSAP qui se déclenche quand currentPage change
  useGSAP(
    () => {
      gsap.fromTo(
        ".project-card-anim",
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1, // Délai entre chaque carte
          ease: "power2.out",
        }
      )
    },
    { dependencies: [currentPage], scope: containerRef }
  )

  return (
    <section className="bg-[#F3F4F6] py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        {/* Titre */}
        <div className="mb-12 text-center ">
          <h2 className="text-3xl font-bold text-gray-900">Mes Projets</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-110">
          {currentProjects.map((project, index) => (
            <div
              key={`${project.name}-${currentPage}-${index}`}
              className="project-card-anim"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-4 md:mt-0">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? "w-8 bg-blue-600"
                  : "w-3 bg-gray-400 hover:bg-blue-300"
              }`}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
