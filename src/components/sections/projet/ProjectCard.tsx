import React from "react";
import { useTranslation } from "react-i18next";
import type { Project } from "../../../types/project";

import CurrentColor from "../../icons/CurrentColor";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {

  const { t } = useTranslation();
  return (
    <div
      onClick={() => {
        if (window.innerWidth < 768) {
          window.open(project.demoLink, "_blank", "noopener,noreferrer");
        }
      }}
      className="h-full flex flex-col border border-blue-300 rounded-2xl p-4 hover:border-blue-600 transition-all duration-300 group"
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
        <h3 className="text-lg font-bold text-[#334155] mb-2">
          {project.name}
        </h3>
      </div>

      {/* Titre */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-0.5 bg-blue-400 rounded-full"></span>

        <h4 className="text-sm font-header text-blue-500 uppercase tracking-wider">
        {t(project.titleKey ?? "")}
        </h4>
      </div>

      {/* Description */}
      <div>
        <p className="text-gray-500 text-sm h-18 line-clamp-3 leading-relaxed">
          {project.descriptionKey ? t(project.descriptionKey) : project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2  pt-4 mt-auto">
        {project.technologies?.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-[#EBF9FF] text-slate-600 text-xs font-medium rounded-full border border-[#5DA9E9]/25"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;