import React from "react";
import type { Project } from "../../../types/project";
import CurrentColor from "../../icons/CurrentColor";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div
      onClick={() => {
        if (window.innerWidth < 768) {
          window.open(project.demoLink, "_blank", "noopener,noreferrer");
        }
      }}
      className="h-full flex flex-col bg-[#F3F4F6] border border-blue-300 rounded-2xl p-4 hover:border-blue-600 transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl mb-4">
        <img
          src={project.image1}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="
            hidden md:block
            absolute top-3 right-3
            bg-[#5DA9E9] p-2 rounded-lg
            opacity-100
            md:opacity-0 md:group-hover:opacity-100
            transition-opacity
          "
        >
          <CurrentColor className="w-6 h-6 text-white" />
        </a>
      </div>

      {/* Nom */}
      <div>
        <h3 className="text-xl font-bold text-[#334155] mb-2">
          {project.name}
        </h3>
      </div>

      {/* Titre */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-0.5 bg-blue-500 rounded-full"></span>

        <h4 className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
          {project.title}
        </h4>
      </div>

      {/* Description */}
      <div>
        <p className="text-gray-500 text-sm h-18 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mt-auto pt-3">
        {project.technologies?.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-2 bg-[#5DA9E9] text-white/90 text-[12px] font-medium rounded-md border border-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;