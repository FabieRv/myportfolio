import React from "react"
import type { Project } from "../../../types/project"
import CurrentColor from "../../icons/currentColor"

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-[#F3F4F6] border border-blue-400 rounded-2xl p-4 hover:border-purple-500 transition-all duration-300 group">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={project.image1}
          alt={project.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <a
          href={project.demoLink}
          className="absolute top-3 right-3 bg-[#5DA9E9] p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <CurrentColor className="w-6 h-6 text-white" />
        </a>
      </div>

      <h3 className="text-xl font-bold text-[#334155] mb-1">{project.name}</h3>
      <p className="text-gray-400 text-sm h-16 line-clamp-2  mb-2">
        {project.description}
      </p>

      {/* Tags / Technos (Optionnel, inspiré de ton image) */}
      <div className="flex flex-wrap gap-2 ]">
        {project.technologies?.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-2  bg-[#5DA9E9] text-white/90 text-[12px] font-medium rounded-md border border-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
